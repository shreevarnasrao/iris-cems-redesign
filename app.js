const TODAY = "2026-10-27";
const SEP = " \u00b7 ";

const VENUES = ["LHC-A", "LHC-B", "LHC-C", "Main Building Seminar Hall", "SAC Amphitheatre", "SAC Hall", "Robotics Lab", "Main Ground", "NITK Beach", "Online"];
const CATS = [["workshop", "Workshop"], ["talk", "Talk"], ["competition", "Competition"], ["cultural", "Cultural"], ["sports", "Sports"], ["meetup", "Meetup"]];
const CLUBS = [
  { id: "webclub", name: "WebClub NITK", area: "Technical", followers: 1240 },
  { id: "acm", name: "ACM NITK", area: "Technical", followers: 2010 },
  { id: "ieee", name: "IEEE NITK", area: "Technical", followers: 1830 },
  { id: "astro", name: "Amateur Astronomy Club", area: "Science", followers: 960 },
  { id: "music", name: "Music Club", area: "Cultural", followers: 1570 },
  { id: "photo", name: "Photography Club", area: "Cultural", followers: 880 },
  { id: "ecell", name: "E-Cell NITK", area: "Entrepreneurship", followers: 1120 },
  { id: "robotics", name: "Robotics Club", area: "Technical", followers: 1340 },
  { id: "ldc", name: "Literary and Debating Club", area: "Literary", followers: 740 },
  { id: "dance", name: "Dance Club", area: "Cultural", followers: 1190 },
  { id: "sports", name: "Sports Council", area: "Sports", followers: 2300 }
];

let EVENTS = [
  { id: 1, club: "ecell", title: "Startup pitch clinic", cat: "workshop", date: "2026-10-27", start: "18:00", end: "20:00", venue: "LHC-A", going: 45, cap: 60, status: "approved", desc: "Pitch in three minutes. The E-Cell core gives feedback. Bring the idea, even if it is rough." },
  { id: 2, club: "robotics", title: "Line follower build sprint", cat: "workshop", date: "2026-10-28", start: "17:00", end: "21:00", venue: "Robotics Lab", going: 52, cap: 60, status: "approved", desc: "Teams of three. Kits are provided. Bring a laptop with the Arduino IDE." },
  { id: 3, club: "ldc", title: "Parliamentary debate: freshers round", cat: "competition", date: "2026-10-29", start: "18:30", end: "21:00", venue: "LHC-B", going: 40, cap: null, status: "approved", desc: "British Parliamentary. Register as a team of two at the venue. Motions come out 15 minutes before each round." },
  { id: 4, club: "sports", title: "Inter-hostel football semi-finals", cat: "sports", date: "2026-10-30", start: "16:30", end: "18:30", venue: "Main Ground", going: 320, cap: null, status: "approved", desc: "Two semi-finals, back to back. Come and support your hostel." },
  { id: 5, club: "dance", title: "Hip-hop basics workshop", cat: "workshop", date: "2026-10-31", start: "18:00", end: "19:30", venue: "SAC Hall", going: 95, cap: 100, status: "approved", desc: "Grooves, footwork, and a short routine. Wear shoes you can move in." },
  { id: 6, club: "ieee", title: "Careers in VLSI: alumni talk", cat: "talk", date: "2026-11-01", start: "17:30", end: "19:00", venue: "Main Building Seminar Hall", going: 72, cap: 150, status: "approved", desc: "Three alumni from chip design teams. Roles, interviews, and the first two years. Q&A after." },
  { id: 7, club: "webclub", title: "IRIS x WebClub hack night", cat: "competition", date: "2026-11-02", start: "20:00", end: "02:00", venue: "LHC-C", going: 130, cap: null, status: "approved", desc: "Build something useful for NITK overnight. Mentors from Team IRIS stay till 2. Food is on us." },
  { id: 8, club: "astro", title: "Stargazing night", cat: "meetup", date: "2026-11-04", start: "22:00", end: "01:00", venue: "NITK Beach", going: 63, cap: null, status: "approved", desc: "Two telescopes and a sky tour. Carry a mat and a jacket." },
  { id: 9, club: "music", title: "Open mic night", cat: "cultural", date: "2026-11-05", start: "19:00", end: "21:30", venue: "SAC Amphitheatre", going: 210, cap: null, status: "approved", desc: "Sing, play, read, or do a set. Slot sign-up opens at 18:30 at the venue." },
  { id: 10, club: "acm", title: "Competitive programming contest, round 2", cat: "competition", date: "2026-11-06", start: "21:00", end: "23:00", venue: "Online", going: 156, cap: null, status: "approved", desc: "Two hours, six problems. Top 10 get ACM NITK goodies. The link goes to everyone who joins." },
  { id: 11, club: "photo", title: "Sunrise photowalk", cat: "meetup", date: "2026-11-07", start: "05:45", end: "07:30", venue: "NITK Beach", going: 38, cap: null, status: "approved", desc: "Phones are fine. Meet at the lighthouse steps. Tea after." },
  { id: 12, club: "webclub", title: "CSS art challenge", cat: "competition", date: "2026-11-02", start: "19:00", end: "21:00", venue: "LHC-C", going: 0, cap: null, status: "pending", desc: "Recreate a picture with HTML and CSS only. Best three win." },
  { id: 13, club: "ecell", title: "Founders AMA", cat: "talk", date: "2026-11-01", start: "18:00", end: "19:30", venue: "Main Building Seminar Hall", going: 0, cap: null, status: "pending", desc: "Two alumni founders. Questions from the room." },
  { id: 14, club: "music", title: "Band auditions", cat: "cultural", date: "2026-11-03", start: "17:00", end: "20:00", venue: "SAC Hall", going: 0, cap: null, status: "pending", desc: "Vocals, guitar, keys, and drums for the Incident band." },
  { id: 15, club: "webclub", title: "Git and GitHub crash course", cat: "workshop", date: "2026-11-04", start: "18:00", end: "19:30", venue: "LHC-B", going: 0, cap: 80, status: "draft", desc: "Commits, branches, and pull requests in 90 minutes." },
  { id: 16, club: "webclub", title: "Design systems talk", cat: "talk", date: "2026-11-05", start: "17:00", end: "18:30", venue: "LHC-C", going: 0, cap: null, status: "changes", note: "LHC-C is reserved for an institute lecture until 18:30 that day. Move to 19:00 or pick LHC-B.", desc: "How a product team keeps a few hundred screens consistent." }
];
let nextId = 17;

const S = {
  role: "student",
  view: "discover",
  day: null,
  cat: "all",
  q: "",
  mode: "agenda",
  month: "2026-10",
  following: new Set(["webclub", "astro"]),
  going: new Set([1]),
  myClub: "webclub",
  draft: null,
  reasonOpen: null
};

const $ = (s) => document.querySelector(s);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const WD = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const WDL = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONL = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const parts = (iso) => iso.split("-").map(Number);
const addDays = (iso, n) => { const [y, m, d] = parts(iso); return new Date(Date.UTC(y, m - 1, d + n)).toISOString().slice(0, 10); };
const dow = (iso) => { const [y, m, d] = parts(iso); return new Date(Date.UTC(y, m - 1, d)).getUTCDay(); };
const fmtDay = (iso) => { const [, m, d] = parts(iso); return `${WD[dow(iso)]} ${d} ${MON[m - 1]}`; };
const fmtDayLong = (iso) => { const [, m, d] = parts(iso); return `${WDL[dow(iso)]}, ${d} ${MONL[m - 1]}`; };
const mins = (t) => { const [h, m] = t.split(":").map(Number); return h * 60 + m; };
const span = (e) => { const s = mins(e.start); let en = mins(e.end); if (en <= s) en += 1440; return [s, en]; };
const hhmm = (m) => `${String(Math.floor(m / 60) % 24).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;
const club = (id) => CLUBS.find((c) => c.id === id);
const ev = (id) => EVENTS.find((e) => e.id === Number(id));
const initials = (name) => name.split(/\s+/).filter((w) => w && w !== "and").slice(0, 2).map((w) => w[0]).join("").toUpperCase();
const catLabel = (id) => (CATS.find((c) => c[0] === id) || [, ""])[1];
const fol = (c) => c.followers + (S.following.has(c.id) ? 1 : 0);
const goingCount = (e) => e.going + (S.going.has(e.id) ? 1 : 0);
const isFull = (e) => e.cap && goingCount(e) >= e.cap && !S.going.has(e.id);
const num = (n) => n.toLocaleString("en-IN");

const ICONS = {
  plus: '<path d="M12 5v14M5 12h14"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  pin: '<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  cal: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  users: '<circle cx="9" cy="8" r="3"/><path d="M3 19a6 6 0 0 1 12 0"/>',
  alert: '<path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9 2 18a2 2 0 0 0 1.7 3h16.6a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>',
  bookmark: '<path d="M6 3h12v18l-6-4-6 4z"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  studio: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 4v16"/>',
  shield: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/>',
  left: '<path d="m15 18-6-6 6-6"/>',
  right: '<path d="m9 18 6-6-6-6"/>',
  download: '<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  edit: '<path d="M4 20h4L19 9l-4-4L4 16z"/>',
  doc: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5"/>'
};
const icon = (n) => `<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${ICONS[n]}</svg>`;

const toastTimers = new Set();
function clearToasts() {
  toastTimers.forEach((id) => clearTimeout(id));
  toastTimers.clear();
  const box = $("#toasts");
  if (box) box.replaceChildren();
}
function toast(msg, opts = {}) {
  const box = $("#toasts");
  const t = document.createElement("div");
  t.className = "toast" + (opts.error ? " err" : "");
  t.innerHTML = `<span class="msg">${esc(msg)}</span>${opts.action ? `<button type="button">${esc(opts.action)}</button>` : ""}`;
  let timer = 0;
  const remove = () => { clearTimeout(timer); toastTimers.delete(timer); t.remove(); };
  if (opts.action) t.querySelector("button").addEventListener("click", () => { if (opts.onAction) opts.onAction(); remove(); });
  box.appendChild(t);
  while (box.children.length > 3) box.firstElementChild.remove();
  timer = setTimeout(remove, opts.ms || 2800);
  toastTimers.add(timer);
}

function clashes(c, excludeId) {
  if (!c.date || !c.start || !c.end) return { hard: [], soft: [], same: [] };
  const [s, e] = span(c);
  const same = EVENTS.filter((x) => x.id !== excludeId && x.date === c.date && (x.status === "approved" || x.status === "pending"));
  const over = same.filter((x) => { const [a, b] = span(x); return a < e && s < b; });
  const hard = over.filter((x) => x.venue === c.venue && c.venue !== "Online");
  const soft = over.filter((x) => !hard.includes(x));
  return { hard, soft, same };
}

function freeSlots(c, excludeId) {
  const [s, e] = span(c);
  const dur = e - s;
  const busy = EVENTS.filter((x) => x.id !== excludeId && x.date === c.date && x.venue === c.venue && (x.status === "approved" || x.status === "pending")).map(span);
  const out = [];
  for (let t = 8 * 60; t + dur <= 23 * 60; t += 30) {
    if (t === s) continue;
    if (busy.every(([a, b]) => t + dur <= a || t >= b)) out.push(t);
  }
  return out.sort((a, b) => Math.abs(a - s) - Math.abs(b - s)).slice(0, 3).sort((a, b) => a - b).map((t) => [hhmm(t), hhmm(t + dur)]);
}

function renderSide() {
  const pending = EVENTS.filter((e) => e.status === "pending").length;
  const item = (view, ic, label, badge) => `<button type="button" class="nav-i" data-act="nav" data-view="${view}" ${S.view === view || (view === "studio" && S.view === "compose") ? 'aria-current="page"' : ""}>${icon(ic)}${label}${badge ? `<span class="badge">${badge}</span>` : ""}</button>`;
  let h = `<h6>CEMS menu</h6>${item("discover", "compass", "Discover")}${item("mine", "bookmark", "My events", S.going.size || "")}${item("clubs", "grid", "Clubs")}`;
  if (S.role === "club") h += `<h6>${esc(club(S.myClub).name)}</h6>${item("studio", "studio", "Club studio")}`;
  if (S.role === "council") h += `<h6>Student Council</h6>${item("approvals", "shield", "Approvals", pending || "")}`;
  const roleLine = S.role === "club" ? club(S.myClub).name : S.role === "council" ? "Student Council" : "Student";
  h += `<h6>Your role</h6><p class="role-block">${esc(roleLine)}</p>`;
  h += `<button type="button" class="nav-i" data-act="nav" data-view="process" ${S.view === "process" ? 'aria-current="page"' : ""}>${icon("doc")}Design process</button>`;
  h += `<p class="side-foot">Help: officers@iris.nitk.ac.in</p>`;
  $("#side").innerHTML = h;
}

function upcoming() {
  return EVENTS.filter((e) => e.status === "approved" && e.date >= TODAY).sort((a, b) => (a.date + a.start).localeCompare(b.date + b.start));
}
function filtered(ignoreDay) {
  const q = S.q.trim().toLowerCase();
  return upcoming().filter((e) =>
    (ignoreDay || S.mode === "month" || !S.day || e.date === S.day) &&
    (S.cat === "all" || (S.cat === "following" ? S.following.has(e.club) : e.cat === S.cat)) &&
    (!q || (e.title + " " + club(e.club).name + " " + e.venue).toLowerCase().includes(q)));
}
function goingBtn(e) {
  if (isFull(e)) return `<button type="button" class="btn btn-sm" disabled>Full</button>`;
  const on = S.going.has(e.id);
  return `<button type="button" class="btn btn-sm going ${on ? "on" : ""}" data-act="going" data-id="${e.id}" aria-pressed="${on}">${on ? icon("check") + "Going" : "Join"}</button>`;
}
function evRow(e) {
  return `<div class="ev" data-act="open" data-id="${e.id}" role="button" tabindex="0" aria-label="${esc(e.title)}, ${fmtDay(e.date)} ${e.start}">
    <div class="ev-time mono"><span>${e.start}</span><span class="muted">${e.end}</span></div>
    <div style="min-width:0"><div class="ev-title">${esc(e.title)}</div>
      <div class="ev-meta"><span class="dot c-${e.cat}"></span><span class="clip">${esc(club(e.club).name)}${SEP}${esc(e.venue)}</span></div></div>
    <div class="ev-side"><span class="count mono">${goingCount(e)}${e.cap ? "/" + e.cap : ""} going</span>${goingBtn(e)}</div>
  </div>`;
}

function viewDiscover() {
  const [, m, d] = parts(TODAY);
  return `<div class="page-head">
    <div><p class="eyebrow">${WD[dow(TODAY)]} ${d} ${MON[m - 1]} 2026</p><h1>What's on</h1></div>
    <div class="tools">
      <div class="seg" role="group" aria-label="View">
        <button type="button" data-act="mode" data-mode="agenda" aria-pressed="${S.mode === "agenda"}">Agenda</button>
        <button type="button" data-act="mode" data-mode="month" aria-pressed="${S.mode === "month"}">Month</button>
      </div>
    </div>
  </div>
  <div id="results">${discoverResults()}</div>`;
}
function discoverResults() {
  const pool = filtered(true);
  let ribbon = "";
  for (let i = 0; i < 14; i++) {
    const day = addDays(TODAY, i);
    const n = pool.filter((e) => e.date === day).length;
    ribbon += `<button type="button" class="day ${i === 0 ? "today" : ""}" data-act="day" data-day="${day}" aria-pressed="${S.day === day}" aria-label="${fmtDayLong(day)}, ${n} events">
      <span class="wd">${i === 0 ? "Today" : WD[dow(day)]}</span><span class="dn">${parts(day)[2]}</span><span class="dots">${"<i></i>".repeat(Math.min(n, 3))}</span></button>`;
  }
  const chip = (id, label, dot) => `<button type="button" class="chip" data-act="cat" data-cat="${id}" aria-pressed="${S.cat === id}">${dot ? `<span class="dot c-${id}"></span>` : ""}${label}</button>`;
  const chips = chip("all", "All") + chip("following", "Clubs you follow") + CATS.map(([id, l]) => chip(id, l, true)).join("");
  const list = filtered(false);
  let body;
  if (S.mode === "month") body = monthView(filtered(true));
  else if (!list.length) body = `<div class="empty"><p>No events match.</p><button type="button" class="btn" data-act="clear">Clear filters</button></div>`;
  else {
    const days = [...new Set(list.map((e) => e.date))];
    body = `<div class="card list">${days.map((day) => `<div class="day-h"><b>${day === TODAY ? "Today" : day === addDays(TODAY, 1) ? "Tomorrow" : WDL[dow(day)]}</b><span>${fmtDay(day)}</span></div>` + list.filter((e) => e.date === day).map(evRow).join("")).join("")}</div>`;
  }
  return `${S.mode === "agenda" ? `<div class="ribbon" role="group" aria-label="Next 14 days">${ribbon}</div>` : ""}<div class="chips" role="group" aria-label="Filter">${chips}</div>
  <div class="two"><section aria-label="Events">${body}</section>${rail()}</div>`;
}
function rail() {
  const mine = upcoming().filter((e) => S.going.has(e.id));
  const next = mine[0];
  const suggest = CLUBS.filter((c) => !S.following.has(c.id)).sort((a, b) => b.followers - a.followers).slice(0, 4);
  return `<aside class="rail">
    <div class="card"><h2>Your next event</h2>${next ? `<p class="next-title">${esc(next.title)}</p>
      <div class="facts"><div>${icon("cal")}${fmtDay(next.date)}${SEP}${next.start}</div><div>${icon("pin")}${esc(next.venue)}</div></div>
      <div style="display:flex;gap:6px;margin-top:10px"><button type="button" class="btn btn-sm" data-act="open" data-id="${next.id}">Details</button><button type="button" class="btn btn-sm" data-act="ics" data-id="${next.id}">${icon("download")}Calendar</button></div>`
      : `<p class="muted" style="margin:0;font-size:13px">Join an event and it shows up here.</p>`}</div>
    <div class="card"><h2>Clubs to follow</h2>${suggest.map((c) => `<div class="club-row"><span class="club-av">${initials(c.name)}</span><div><div class="nm">${esc(c.name)}</div><div class="sub">${num(fol(c))} followers</div></div><button type="button" class="btn btn-sm" data-act="follow" data-club="${c.id}">Follow</button></div>`).join("") || '<p class="muted" style="margin:0;font-size:13px">You follow every club.</p>'}</div>
  </aside>`;
}
function monthView(list) {
  const [y, m] = S.month.split("-").map(Number);
  const first = `${S.month}-01`;
  const start = addDays(first, -dow(first));
  let cells = WD.map((w) => `<div class="wdh">${w}</div>`).join("");
  for (let i = 0; i < 42; i++) {
    const day = addDays(start, i);
    const [, dm, dd] = parts(day);
    const evs = list.filter((e) => e.date === day);
    if (i >= 35 && dm !== m) break;
    cells += `<div class="cell ${dm !== m ? "out" : ""} ${day === TODAY ? "today" : ""}"><span class="n">${dd}</span>${evs.slice(0, 3).map((e) => `<button type="button" class="m-ev" data-act="open" data-id="${e.id}"><span class="dot c-${e.cat}"></span><span class="txt">${esc(e.title)}</span></button>`).join("")}${evs.length > 3 ? `<span class="muted" style="font-size:11px;padding:0 4px">+${evs.length - 3} more</span>` : ""}</div>`;
  }
  return `<div class="card month"><div class="month-head"><h2>${MONL[m - 1]} ${y}</h2><div style="display:flex;gap:4px">
    <button type="button" class="icon-btn" data-act="month" data-dir="-1" aria-label="Previous month">${icon("left")}</button>
    <button type="button" class="icon-btn" data-act="month" data-dir="1" aria-label="Next month">${icon("right")}</button>
  </div></div><div class="month-grid">${cells}</div></div>`;
}

function viewMine() {
  const mine = upcoming().filter((e) => S.going.has(e.id));
  const clubs = CLUBS.filter((c) => S.following.has(c.id));
  return `<div class="page-head"><div><p class="eyebrow">${mine.length} upcoming</p><h1>My events</h1></div></div>
  <div class="two"><section>${mine.length ? `<div class="card list">${mine.map(evRow).join("")}</div>` : `<div class="empty"><p>You have not joined anything yet.</p><button type="button" class="btn btn-primary" data-act="nav" data-view="discover">See what's on</button></div>`}</section>
  <aside class="rail"><div class="card"><h2>Clubs you follow</h2>${clubs.length ? clubs.map((c) => `<div class="club-row"><span class="club-av">${initials(c.name)}</span><div><div class="nm">${esc(c.name)}</div><div class="sub">${esc(c.area)}</div></div><button type="button" class="btn btn-sm btn-ghost" data-act="follow" data-club="${c.id}">Following</button></div>`).join("") : '<p class="muted" style="margin:0;font-size:13px">Follow a club to see its events first.</p>'}</div></aside></div>`;
}

function viewClubs() {
  const up = upcoming();
  return `<div class="page-head"><div><p class="eyebrow">${CLUBS.length} clubs</p><h1>Clubs</h1></div></div>
  <div class="club-grid">${CLUBS.map((c) => {
    const n = up.find((e) => e.club === c.id);
    const f = S.following.has(c.id);
    return `<div class="card club-card"><div class="top"><span class="club-av">${initials(c.name)}</span><div><div class="nm">${esc(c.name)}</div><div class="sub">${esc(c.area)}${SEP}${num(fol(c))} followers</div></div></div>
      <div class="next">${n ? `Next: <b>${esc(n.title)}</b><br>${fmtDay(n.date)}${SEP}${n.start}` : "No upcoming events"}</div>
      <button type="button" class="btn btn-sm ${f ? "going on" : ""}" data-act="follow" data-club="${c.id}" aria-pressed="${f}">${f ? icon("check") + "Following" : "Follow"}</button></div>`;
  }).join("")}</div>`;
}

function viewStudio() {
  const c = club(S.myClub);
  const mine = EVENTS.filter((e) => e.club === S.myClub).sort((a, b) => (a.date + a.start).localeCompare(b.date + b.start));
  const live = mine.filter((e) => e.status === "approved" && e.date >= TODAY);
  const label = { approved: "Live", pending: "Waiting for approval", draft: "Draft", changes: "Changes requested" };
  return `<div class="page-head"><div><p class="eyebrow">Club studio</p><h1>${esc(c.name)}</h1></div><button type="button" class="btn btn-primary" data-act="new">${icon("plus")}New event</button></div>
  <div class="stats"><span><b>${live.length}</b>live</span><span><b>${mine.filter((e) => e.status === "pending").length}</b>waiting</span><span><b>${live.reduce((s, e) => s + goingCount(e), 0)}</b>students going</span><span><b>${num(fol(c))}</b>followers</span></div>
  <div class="card" style="overflow:auto"><table class="table"><thead><tr><th>Event</th><th>When</th><th>Status</th><th>Going</th><th></th></tr></thead><tbody>
  ${mine.map((e) => `<tr><td><div class="t">${esc(e.title)}</div><div class="muted" style="font-size:13px">${esc(e.venue)}</div>${e.status === "changes" ? `<div class="note">${icon("alert")}<span>${esc(e.note)}</span></div>` : ""}</td>
    <td class="mono" style="font-size:13px">${fmtDay(e.date)}<br><span class="muted">${e.start}-${e.end}</span></td>
    <td><span class="pill ${e.status}">${label[e.status]}</span></td>
    <td class="mono">${e.status === "approved" ? goingCount(e) + (e.cap ? "/" + e.cap : "") : "-"}</td>
    <td><div class="acts">${e.status === "approved" ? `<button type="button" class="btn btn-sm" data-act="share" data-id="${e.id}">${icon("link")}Copy link</button>` : `<button type="button" class="btn btn-sm" data-act="edit" data-id="${e.id}">${icon("edit")}${e.status === "changes" ? "Fix and resend" : "Edit"}</button>`}</div></td></tr>`).join("")}
  </tbody></table></div>`;
}

function blankDraft() {
  return { id: null, title: "", cat: "workshop", desc: "", date: "2026-11-01", start: "18:00", end: "19:30", venue: "Main Building Seminar Hall", reg: "open", cap: "" };
}
function viewCompose() {
  if (!S.draft) S.draft = blankDraft();
  const d = S.draft;
  const catSeg = CATS.map(([id, l]) => `<button type="button" class="chip" data-act="dcat" data-cat="${id}" aria-pressed="${d.cat === id}"><span class="dot c-${id}"></span>${l}</button>`).join("");
  return `<div class="page-head"><div><p class="eyebrow">${esc(club(S.myClub).name)}</p><h1>${d.id ? "Edit event" : "New event"}</h1></div><button type="button" class="btn btn-ghost" data-act="nav" data-view="studio">Cancel</button></div>
  <div class="compose"><form class="form" id="form" novalidate>
    <div class="field"><label for="f-title">Event name</label><input class="input" id="f-title" name="title" maxlength="80" value="${esc(d.title)}" placeholder="e.g. Git and GitHub crash course"></div>
    <div class="field"><span class="lbl">Type</span><div class="seg-lg" role="group" aria-label="Type">${catSeg}</div></div>
    <div class="row3">
      <div class="field"><label for="f-date">Date</label><input class="input mono" type="date" id="f-date" name="date" min="${TODAY}" value="${d.date}"></div>
      <div class="field"><label for="f-start">Starts</label><input class="input mono" type="time" id="f-start" name="start" step="900" value="${d.start}"></div>
      <div class="field"><label for="f-end">Ends</label><input class="input mono" type="time" id="f-end" name="end" step="900" value="${d.end}"></div>
    </div>
    <div class="field"><label for="f-venue">Venue</label><select class="select" id="f-venue" name="venue">${VENUES.map((v) => `<option ${v === d.venue ? "selected" : ""}>${esc(v)}</option>`).join("")}</select></div>
    <div class="card sched" id="sched">${schedule()}</div>
    <div class="field"><label for="f-desc">What should students know?</label><textarea class="textarea" id="f-desc" name="desc" maxlength="600" placeholder="What happens, who it is for, what to bring">${esc(d.desc)}</textarea></div>
    <div class="row2">
      <div class="field"><label for="f-reg">Registration</label><select class="select" id="f-reg" name="reg"><option value="open" ${d.reg === "open" ? "selected" : ""}>Anyone can join</option><option value="cap" ${d.reg === "cap" ? "selected" : ""}>Limited seats</option></select></div>
      <div class="field" ${d.reg === "cap" ? "" : "hidden"} id="capField"><label for="f-cap">Seats</label><input class="input mono" type="number" min="1" id="f-cap" name="cap" value="${esc(d.cap)}" placeholder="e.g. 80"></div>
    </div>
    <div class="form-actions"><button type="button" class="btn" data-act="submit" data-status="draft">Save draft</button><button type="button" class="btn btn-primary" data-act="submit" data-status="pending">Send for approval</button></div>
  </form>
  <aside class="preview"><span class="label">Students will see</span><div class="card pv" id="pv">${previewCard()}</div>
    <p class="muted" style="font-size:12.5px;margin:0">After approval it shows up in Discover, and your ${num(fol(club(S.myClub)))} followers can join.</p></aside></div>`;
}
function schedule() {
  const d = S.draft;
  if (!d.date || !d.start || !d.end) return `<p class="muted" style="margin:0">Pick a date and time to check the hall.</p>`;
  const { hard, soft, same } = clashes(d, d.id);
  const spans = same.map(span).concat([span(d)]);
  let lo = Math.floor((Math.min(...spans.map((x) => x[0])) - 60) / 60) * 60;
  let hi = Math.ceil((Math.max(...spans.map((x) => x[1])) + 60) / 60) * 60;
  lo = Math.max(lo, 0); hi = Math.min(hi, 1560);
  if (hi - lo < 360) { hi = Math.min(lo + 360, 1560); lo = Math.max(hi - 360, 0); }
  const W = hi - lo;
  const step = W <= 540 ? 60 : W <= 900 ? 120 : 180;
  const pct = (m) => (m - lo) / W * 100;
  const pos = ([s, e]) => { const a = Math.max(s, lo); const b = Math.min(e, hi); return `left:${pct(a)}%;width:${Math.max(pct(b) - pct(a), 1.5)}%`; };
  const laneTrack = (list) => {
    const ends = [];
    const placed = list.map((x) => [x, span(x)]).sort((a, b) => a[1][0] - b[1][0]).map(([x, sp]) => {
      let lane = ends.findIndex((end) => end <= sp[0]);
      if (lane < 0) { lane = ends.length; ends.push(0); }
      ends[lane] = sp[1];
      return [x, sp, lane];
    });
    const blocks = placed.map(([x, sp, lane]) => `<div class="blk ${x.status === "pending" ? "pend" : ""}" style="${pos(sp)};top:${3 + lane * 26}px" title="${esc(x.title)}">${esc(club(x.club).name)} ${x.start}</div>`).join("");
    return `<div class="track" style="height:${Math.max(1, ends.length) * 26 + 4}px">${blocks}</div>`;
  };
  const atVenue = same.filter((x) => x.venue === d.venue && d.venue !== "Online");
  const elsewhere = same.filter((x) => !atVenue.includes(x));
  const state = hard.length ? "bad" : soft.length ? "warn" : "ok";
  let ticks = "";
  for (let m = Math.ceil(lo / step) * step; m <= hi; m += step) ticks += `<span style="left:${pct(m)}%">${hhmm(m)}</span>`;
  let verdict;
  if (hard.length) {
    const x = hard[0];
    const slots = freeSlots(d, d.id);
    verdict = `<div class="verdict bad">${icon("alert")}<div><p><b>${esc(d.venue)} is taken.</b> ${esc(club(x.club).name)} ${x.status === "pending" ? "has requested" : "has"} it ${x.start}-${x.end} for "${esc(x.title)}".</p>
      ${slots.length ? `<div class="slots">${slots.map(([a, b]) => `<button type="button" class="btn btn-sm" data-act="slot" data-start="${a}" data-end="${b}">Use ${a}-${b}</button>`).join("")}</div>` : `<p>No free slot of this length today. Try another venue.</p>`}</div></div>`;
  } else if (soft.length) {
    verdict = `<div class="verdict warn">${icon("alert")}<p><b>The venue is free.</b> ${soft.length === 1 ? "1 other event overlaps" : soft.length + " other events overlap"} (${soft.map((x) => esc(club(x.club).name)).join(", ")}), so some students will have to choose.</p></div>`;
  } else verdict = `<div class="verdict ok">${icon("check")}<p><b>No clashes.</b> ${esc(d.venue)} is free and nothing else is on at this time.</p></div>`;
  return `<div class="sched-head"><h2>${fmtDayLong(d.date)}</h2><span class="muted" style="font-size:12px">Dashed = waiting for approval</span></div>
    <div class="axis"><span></span><div class="ticks">${ticks}</div></div>
    <div class="track-row"><span class="lbl" title="${esc(d.venue)}">${esc(d.venue)}</span>${laneTrack(atVenue)}</div>
    <div class="track-row"><span class="lbl">Rest of campus</span>${laneTrack(elsewhere)}</div>
    <div class="track-row"><span class="lbl" style="color:var(--ink);font-weight:700">Your event</span><div class="track"><div class="blk me ${state === "ok" ? "" : state}" style="${pos(span(d))};top:3px">${d.start}-${d.end}</div></div></div>
    ${verdict}`;
}
function previewCard() {
  const d = S.draft;
  return `<div class="cat"><span class="dot c-${d.cat}"></span>${catLabel(d.cat)}${SEP}${esc(club(S.myClub).name)}</div>
    <h3>${d.title ? esc(d.title) : '<span class="muted">Event name</span>'}</h3>
    <div class="facts"><div>${icon("cal")}${d.date ? fmtDayLong(d.date) : "-"}</div><div>${icon("clock")}<span class="mono">${d.start || "-"}-${d.end || "-"}</span></div><div>${icon("pin")}${esc(d.venue)}</div>${d.reg === "cap" && d.cap ? `<div>${icon("users")}${esc(d.cap)} seats</div>` : ""}</div>
    ${d.desc ? `<p class="desc">${esc(d.desc)}</p>` : ""}
    <button type="button" class="btn btn-primary btn-sm" style="margin-top:12px;width:100%" disabled>Join</button>`;
}

function viewApprovals() {
  const q = EVENTS.filter((e) => e.status === "pending").sort((a, b) => (a.date + a.start).localeCompare(b.date + b.start));
  return `<div class="page-head"><div><p class="eyebrow">Student Council</p><h1>Approvals</h1></div></div>
  ${q.length ? `<div class="q">${q.map((e) => {
    const { hard, soft } = clashes(e, e.id);
    const v = hard.length
      ? `<div class="verdict bad">${icon("alert")}<p><b>Venue clash</b> with ${esc(club(hard[0].club).name)}, "${esc(hard[0].title)}" ${hard[0].start}-${hard[0].end}.</p></div>`
      : soft.length
        ? `<div class="verdict warn">${icon("alert")}<p>Venue free. Overlaps with ${soft.map((x) => esc(club(x.club).name)).join(", ")}.</p></div>`
        : `<div class="verdict ok">${icon("check")}<p>No clashes.</p></div>`;
    return `<div class="card q-item"><div><div class="t">${esc(e.title)}</div><div class="meta"><span><span class="dot c-${e.cat}"></span>${esc(club(e.club).name)}</span><span>${icon("cal")}${fmtDay(e.date)} ${SEP}<span class="mono">${e.start}-${e.end}</span></span><span>${icon("pin")}${esc(e.venue)}</span></div></div>
      <div class="acts"><button type="button" class="btn btn-sm" data-act="reqchg" data-id="${e.id}">Request changes</button><button type="button" class="btn btn-sm btn-primary" data-act="approve" data-id="${e.id}">${icon("check")}Approve</button></div>
      ${v}
      ${S.reasonOpen === e.id ? `<div class="reason"><label class="lbl" for="r-${e.id}" style="font-size:12.5px;font-weight:650">What should the club change?</label><textarea class="textarea" id="r-${e.id}" placeholder="e.g. Seminar Hall is booked till 19:00. Move to 19:30 or use LHC-B."></textarea><div class="row"><button type="button" class="btn btn-sm btn-ghost" data-act="reqchg" data-id="${e.id}">Cancel</button><button type="button" class="btn btn-sm" data-act="sendchg" data-id="${e.id}">Send to club</button></div></div>` : ""}
    </div>`;
  }).join("")}</div>` : `<div class="empty"><p>Nothing waiting. New requests from clubs show up here.</p></div>`}`;
}

function viewProcess() {
  return `<div class="page-head"><div><p class="eyebrow">Task 2 ${SEP} Roll 251ME355</p><h1>Design process</h1></div></div>
  <div class="process">
    <p>CEMS is the calendar and events module on IRIS. The brief asks for a web redesign that clubs will actually use to schedule and announce events. These notes are from the live module on 21 Oct 2026, then the steps that followed.</p>

    <h2 id="proc-evidence">What the live module shows</h2>
    <figure class="shot"><img src="assets/before-1.png?v=3" width="1534" height="650" loading="eager" decoding="sync" alt="Live CEMS in October 2026. One event chip on the 28th, a subscriptions panel, and the IRIS header."><figcaption>21 Oct 2026, iris.nitk.ac.in/cems. October has one event chip, on the 28th. The right panel is "Calendar Subscriptions". Browser chrome and the profile photo are removed.</figcaption></figure>
    <figure class="shot"><img src="assets/before-2.png?v=3" width="1534" height="650" loading="eager" decoding="sync" alt="Live CEMS calendar with the 21st selected and subscriptions paged 5 at a time."><figcaption>Same day. The subscription list says "Showing 1 to 5 of 61 entries", pages through 13. ACM NITK and Amateur Astronomy Club are checkboxes on page 1. The sidebar says "No CEMS or CEMS Club roles present."</figcaption></figure>
    <figure class="shot"><img src="assets/before-4.png?v=3" width="1534" height="708" loading="eager" decoding="sync" alt="Live CEMS month grid for October 2026, mostly empty, with the subscriptions panel."><figcaption>The month grid is the whole screen. The 21st is marked as today. Almost every other cell is empty.</figcaption></figure>
    <figure class="shot"><img src="assets/before-3.png?v=3" width="1534" height="650" loading="eager" decoding="sync" alt="Category colour legend under the live CEMS calendar, about twenty labels."><figcaption>Under the grid, a legend of about twenty colours: Workshops, Expert Lecture, National Conference, Faculty Development Program, GIAN Course, Hackathon, Competitions, Cultural, and more. Names of module designers in the sidebar are covered.</figcaption></figure>
    <ol>
      <li>A student cannot see what is on tonight. The month is a wall of empty cells, and the one event is a small chip on the 28th.</li>
      <li>Following a club means paging a checkbox list, five rows at a time, 61 entries.</li>
      <li>I used a student account with no CEMS roles, so I could not see the club screens. CEMS already has them: club committee members create events, and a Student Council Secretary approves them (<a href="https://blog.iris.nitk.ac.in/cems-module/" target="_blank" rel="noopener">IRIS CEMS guide</a>). The one October event may come from the default subscribed-only view, or from a quiet month.</li>
      <li>Colour only means something after you scroll to the legend, and most of those labels are institute programmes, not a club night.</li>
    </ol>

    <h2 id="proc-wire">Wireframe</h2>
    <p>Greyscale only. The list is the page. The month grid is not on the first screen.</p>
    <div class="paper wf" aria-label="Wireframe">
      <div class="box wf-top">IRIS &nbsp;&nbsp; Institute &nbsp; Academics &nbsp; Campus &nbsp; Alumni &nbsp;&nbsp; Search</div>
      <div class="box wf-sub">CEMS | IRIS &nbsp;&nbsp; Home / CEMS</div>
      <div class="wf-body">
        <div class="wf-side">
          <div class="box on">Discover</div>
          <div class="box">My events</div>
          <div class="box">Clubs</div>
        </div>
        <div class="wf-main">
          <div class="wf-h">What's on</div>
          <div class="wf-days">
            <div class="box on">Tue 27</div><div class="box">28</div><div class="box">29</div><div class="box">30</div><div class="box">31</div><div class="box">1</div><div class="box">2</div>
          </div>
          <div class="wf-row"><div class="box">18:00</div><div class="box">Startup pitch clinic ${SEP} E-Cell ${SEP} LHC-A</div><div class="box">Join</div></div>
          <div class="wf-row"><div class="box">17:00</div><div class="box">Line follower sprint ${SEP} Robotics Lab</div><div class="box">Join</div></div>
          <div class="wf-row"><div class="box">18:30</div><div class="box">Freshers debate ${SEP} LHC-B</div><div class="box">Join</div></div>
        </div>
        <div class="wf-rail">
          <div class="box" style="min-height:72px">Your next event</div>
          <div class="box" style="min-height:72px">Clubs to follow</div>
        </div>
      </div>
    </div>

    <h2 id="proc-iter">Iterations</h2>
    <h3>1. Put the next events in front of the empty month</h3>
    <div class="pair">
      <div class="paper"><p class="tag">Live CEMS</p><div class="mini-grid">${Array.from({ length: 28 }, (_, i) => `<div class="box">${i === 22 ? "28" : ""}</div>`).join("")}</div><p style="margin:8px 0 0;font-size:12px">October. One chip, on the 28th. Legend of about 20 colours underneath.</p></div>
      <div class="paper"><p class="tag">Change</p>
        <div class="wf-row"><div class="box chg">18:00</div><div class="box chg">Pitch clinic ${SEP} LHC-A</div><div class="box">45/60</div></div>
        <div class="wf-row"><div class="box">17:00</div><div class="box">Line follower ${SEP} Robotics Lab</div><div class="box">52/60</div></div>
        <p style="margin:8px 0 0;font-size:12px">Agenda, grouped by day. Six filters: Workshop, Talk, Competition, Cultural, Sports, Meetup. Month stays as a toggle.</p>
      </div>
    </div>
    <p>The 21 Oct shot of October is empty except for one chip. A month grid makes an unused calendar look like nothing is happening, and tonight is buried in blank cells. The first screen is now a list: time in a fixed column, then the name, club, and venue. A 14-day strip jumps to a date. Month is still there for anyone who wants the grid. The twenty-colour legend is gone. Students pick an evening from six types.</p>

    <h3>2. Join on the row, follow instead of page 13</h3>
    <div class="pair">
      <div class="paper"><p class="tag">Live CEMS</p>
        <div class="box">IRIS NITK - Club Calendar</div>
        <div class="box" style="margin-top:4px">Institute Level Events</div>
        <div class="box" style="margin-top:4px">Workshops</div>
        <div class="box" style="margin-top:4px">ACM NITK</div>
        <div class="box" style="margin-top:4px">Amateur Astronomy Club</div>
        <p style="margin:8px 0 0;font-size:12px">Showing 1 to 5 of 61. Previous, 1, 2, 3 ... 13, Next.</p>
      </div>
      <div class="paper"><p class="tag">Change</p>
        <div class="wf-row"><div class="box">18:00</div><div class="box">Hip-hop basics ${SEP} SAC Hall</div><div class="box chg">Join 95/100</div></div>
        <div class="box chg" style="margin-top:6px">Follow WebClub</div>
        <div class="box" style="margin-top:4px">Your next event ${SEP} calendar file</div>
        <p style="margin:8px 0 0;font-size:12px">One click to join. One click to follow. The right rail is the next thing you joined, not page 1 of 13.</p>
      </div>
    </div>
    <p>On the live page an event chip does nothing, and the only club control is that checkbox pager. Join sits on the row, with the seat count when the club set a cap. The hip-hop workshop is 95 of 100, so the number is the reason to decide now. Follow replaces the 61-row list. The right rail is your next event, with a calendar file, and four clubs you do not follow yet.</p>

    <h3>3. A club can book a hall, and can see that it is taken</h3>
    <div class="paper">
      <p class="tag">New event, 1 Nov, seminar hall</p>
      <div class="tl" aria-hidden="true">
        <i style="left:28%;width:22%">IEEE 17:30-19:00</i>
        <i class="bad" style="left:40%;width:24%">Your event 18:00-19:30</i>
      </div>
      <p style="margin:8px 0 0;font-size:12px">The bar turns dark when the hall is already held. Free slots are buttons: move the event instead of finding out after the poster is up. Council sees the same clash on the approval card and can send a reason back.</p>
    </div>
    <p>The sidebar says "No CEMS or CEMS Club roles present." because I used a student account, so I could not see the club screens. CEMS already lets club committee members create events, and a Student Council Secretary approves them (<a href="https://blog.iris.nitk.ac.in/cems-module/" target="_blank" rel="noopener">IRIS CEMS guide</a>). Club studio improves that existing create, approve, and publish flow: draft, waiting for approval, live, changes requested. The form draws that day. On 1 Nov the seminar hall is held by IEEE from 17:30 to 19:00, and E-Cell has also asked for 18:00. The bar flags it and offers the next free slots. A hard clash cannot be sent for approval. Council gets the same flag, and "Request changes" needs a written reason, which the club sees on the row.</p>

    <h2 id="proc-final">Final screens</h2>
    <p>Same IRIS header and sidebar. Three roles. The screens themselves are the rest of this site.</p>
    <div class="final-actions">
      <button type="button" class="btn btn-primary" data-act="jump" data-role="student" data-view="discover">Student, Discover</button>
      <button type="button" class="btn" data-act="jump" data-role="club" data-view="studio">Club studio</button>
      <button type="button" class="btn" data-act="jump" data-role="club" data-view="compose">New event, with the clash</button>
      <button type="button" class="btn" data-act="jump" data-role="council" data-view="approvals">Council approvals</button>
    </div>
  </div>`;
}

let lastFocus = null;
let drawerId = null;
function drawerHTML(e) {
  const c = club(e.club);
  const n = goingCount(e);
  const on = S.going.has(e.id);
  const f = S.following.has(c.id);
  return `<div class="dr-head"><span class="pill ${e.date === TODAY ? "approved" : "draft"}">${e.date === TODAY ? "Today" : fmtDay(e.date)}</span><button type="button" class="icon-btn" data-act="close" aria-label="Close">${icon("x")}</button></div>
  <div class="dr-body"><div class="cat"><span class="dot c-${e.cat}"></span>${catLabel(e.cat)}</div>
    <h2 id="drTitle">${esc(e.title)}</h2>
    <div class="host"><span class="club-av">${initials(c.name)}</span><div><div class="nm">${esc(c.name)}</div><div class="muted" style="font-size:12px">${num(fol(c))} followers</div></div><button type="button" class="btn btn-sm ${f ? "going on" : ""}" data-act="follow" data-club="${c.id}" aria-pressed="${f}">${f ? icon("check") + "Following" : "Follow"}</button></div>
    <div class="dr-facts"><div>${icon("cal")}${fmtDayLong(e.date)}</div><div>${icon("clock")}<span class="mono">${e.start}-${e.end}</span></div><div>${icon("pin")}${esc(e.venue)}</div><div>${icon("users")}${n} going</div></div>
    ${e.cap ? `<div class="cap"><div class="bar"><i style="width:${Math.min(100, n / e.cap * 100)}%"></i></div><div class="lbl"><span>${n} of ${e.cap} seats taken</span><span>${Math.max(0, e.cap - n)} left</span></div></div>` : ""}
    <p class="dr-desc">${esc(e.desc)}</p></div>
  <div class="dr-foot">${isFull(e) ? `<button type="button" class="btn btn-primary" disabled>Full</button>` : `<button type="button" class="btn ${on ? "going on" : "btn-primary"}" data-act="going" data-id="${e.id}" aria-pressed="${on}">${on ? icon("check") + "Going" : "Join"}</button>`}
    <button type="button" class="btn" data-act="ics" data-id="${e.id}">${icon("download")}Calendar</button>
    <button type="button" class="btn" data-act="share" data-id="${e.id}">${icon("link")}Copy link</button></div>`;
}
function openDrawer(id) {
  const e = ev(id);
  if (!e || e.status !== "approved") return;
  drawerId = e.id;
  lastFocus = document.activeElement;
  const d = $("#drawer");
  d.innerHTML = drawerHTML(e);
  d.hidden = false;
  $("#overlay").hidden = false;
  d.setAttribute("aria-hidden", "false");
  const close = d.querySelector("[data-act=close]");
  if (close) close.focus();
}
function closeDrawer() {
  const d = $("#drawer");
  if (d.hidden) return;
  d.hidden = true;
  $("#overlay").hidden = true;
  d.setAttribute("aria-hidden", "true");
  drawerId = null;
  if (lastFocus && document.contains(lastFocus)) lastFocus.focus();
}
function refreshDrawer() {
  if (!drawerId) return;
  const e = ev(drawerId);
  if (!e) { closeDrawer(); return; }
  $("#drawer").innerHTML = drawerHTML(e);
}

const VIEWS = { discover: viewDiscover, mine: viewMine, clubs: viewClubs, studio: viewStudio, compose: viewCompose, approvals: viewApprovals, process: viewProcess };

function render(scroll) {
  renderSide();
  $("#main").innerHTML = VIEWS[S.view]();
  bindView();
  if (scroll) window.scrollTo(0, 0);
}
function renderResults() {
  const box = $("#results");
  if (!box) { render(false); return; }
  box.innerHTML = discoverResults();
}
function writeHash() {
  const p = new URLSearchParams();
  p.set("role", S.role);
  p.set("view", S.view);
  if (S.view === "discover" && S.mode === "month") p.set("mode", "month");
  history.replaceState(null, "", "#" + p.toString());
}
function go(view) {
  S.view = view;
  if (view !== "approvals") S.reasonOpen = null;
  closeDrawer();
  clearToasts();
  render(true);
  writeHash();
}
function setRolePressed() {
  document.querySelectorAll("[data-act=role]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.role === S.role));
}
function bindView() {
  const form = $("#form");
  if (!form) return;
  form.addEventListener("submit", (e) => e.preventDefault());
  form.addEventListener("input", (evn) => {
    const t = evn.target;
    if (!t.name) return;
    S.draft[t.name] = t.value;
    if (t.name === "title") t.removeAttribute("aria-invalid");
    if (t.name === "reg") $("#capField").hidden = t.value !== "cap";
    if (["date", "start", "end", "venue"].includes(t.name)) $("#sched").innerHTML = schedule();
    $("#pv").innerHTML = previewCard();
  });
}

function icsEscape(s) {
  return String(s).replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");
}
function downloadIcs(e) {
  const stamp = (date, time) => date.replace(/-/g, "") + "T" + time.replace(":", "") + "00";
  const endDate = mins(e.end) <= mins(e.start) ? addDays(e.date, 1) : e.date;
  const lines = [
    "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//IRIS CEMS mockup//EN", "BEGIN:VEVENT",
    `UID:cems-${e.id}@iris-cems-mockup`, "DTSTAMP:20261027T000000Z",
    `DTSTART;TZID=Asia/Kolkata:${stamp(e.date, e.start)}`,
    `DTEND;TZID=Asia/Kolkata:${stamp(endDate, e.end)}`,
    `SUMMARY:${icsEscape(e.title)}`,
    `LOCATION:${icsEscape(e.venue + ", NITK Surathkal")}`,
    `DESCRIPTION:${icsEscape(club(e.club).name + ". " + e.desc)}`,
    "BEGIN:VALARM", "TRIGGER:-PT1H", "ACTION:DISPLAY", "DESCRIPTION:Reminder", "END:VALARM",
    "END:VEVENT", "END:VCALENDAR"
  ];
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([lines.join("\r\n")], { type: "text/calendar" }));
  a.download = e.title.replace(/[^\w]+/g, "-").toLowerCase() + ".ics";
  document.body.appendChild(a);
  a.click();
  a.remove();
  toast("Calendar file downloaded. Reminder is 1 hour before.");
}
function eventUrl(e) {
  const url = new URL(location.href);
  url.hash = `role=student&view=discover&open=${e.id}`;
  return url.toString();
}
function copyLink(e) {
  const url = eventUrl(e);
  const done = () => toast("Link copied.");
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(done, () => toast(url, { ms: 7000 }));
  } else toast(url, { ms: 7000 });
}
function afterChange() {
  if (S.view === "discover") { renderSide(); renderResults(); }
  else render(false);
  refreshDrawer();
}
function toggleGoing(id) {
  const e = ev(id);
  if (!e || e.status !== "approved") return;
  if (S.going.has(e.id)) {
    S.going.delete(e.id);
    toast(`Left "${e.title}".`, { action: "Undo", onAction() { S.going.add(e.id); afterChange(); } });
  } else {
    if (isFull(e)) return;
    S.going.add(e.id);
    toast(`You're going. ${fmtDay(e.date)}, ${e.start}.`, { action: "Add to calendar", onAction() { downloadIcs(e); } });
  }
  afterChange();
}
function toggleFollow(id) {
  const c = club(id);
  if (!c) return;
  if (S.following.has(id)) { S.following.delete(id); toast(`Unfollowed ${c.name}.`); }
  else { S.following.add(id); toast(`Following ${c.name}.`); }
  afterChange();
}
function submitDraft(status) {
  const d = S.draft;
  if (!d.title.trim()) {
    const t = $("#f-title");
    t.setAttribute("aria-invalid", "true");
    t.focus();
    toast("Add an event name first.", { error: true });
    return;
  }
  if (!d.date || !d.start || !d.end) { toast("Pick a date, start, and end.", { error: true }); return; }
  if (status === "pending" && clashes(d, d.id).hard.length) {
    const sched = $("#sched");
    if (sched) sched.scrollIntoView({ block: "center" });
    toast(`${d.venue} is taken at that time. Pick a free slot.`, { error: true });
    return;
  }
  const data = {
    club: S.myClub, title: d.title.trim(), cat: d.cat, date: d.date, start: d.start, end: d.end,
    venue: d.venue, desc: d.desc.trim() || "Details coming soon.",
    cap: d.reg === "cap" && Number(d.cap) > 0 ? Number(d.cap) : null, status, note: null
  };
  if (d.id) Object.assign(ev(d.id), data);
  else EVENTS.push({ id: nextId++, going: 0, ...data });
  S.draft = null;
  go("studio");
  toast(status === "pending" ? "Sent for approval." : "Draft saved.");
}

document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-act]");
  if (!t) return;
  const a = t.dataset.act;
  const id = t.dataset.id;
  switch (a) {
    case "home":
      S.role = "student"; S.day = null; S.cat = "all"; S.q = ""; S.mode = "agenda";
      { const q = $("#q"); if (q) q.value = ""; }
      setRolePressed();
      go("discover");
      break;
    case "nav": go(t.dataset.view); break;
    case "role":
      S.role = t.dataset.role;
      setRolePressed();
      go({ student: "discover", club: "studio", council: "approvals" }[S.role]);
      break;
    case "jump":
      S.role = t.dataset.role;
      setRolePressed();
      if (t.dataset.view === "compose") S.draft = blankDraft();
      go(t.dataset.view);
      break;
    case "day": S.day = S.day === t.dataset.day ? null : t.dataset.day; renderResults(); break;
    case "cat": S.cat = t.dataset.cat; renderResults(); break;
    case "mode":
      S.mode = t.dataset.mode;
      if (S.mode === "month") S.day = null;
      render(false);
      writeHash();
      break;
    case "month": {
      const [y, m] = S.month.split("-").map(Number);
      const dt = new Date(Date.UTC(y, m - 1 + Number(t.dataset.dir), 1));
      S.month = dt.toISOString().slice(0, 7);
      renderResults();
      break;
    }
    case "clear":
      S.day = null; S.cat = "all"; S.q = "";
      { const q = $("#q"); if (q) q.value = ""; }
      render(false);
      break;
    case "open": openDrawer(id); break;
    case "close": closeDrawer(); break;
    case "going": toggleGoing(id); break;
    case "follow": toggleFollow(t.dataset.club); break;
    case "ics": downloadIcs(ev(id)); break;
    case "share": copyLink(ev(id)); break;
    case "new": S.draft = blankDraft(); go("compose"); break;
    case "edit": {
      const x = ev(id);
      S.draft = { id: x.id, title: x.title, cat: x.cat, desc: x.desc, date: x.date < TODAY ? TODAY : x.date, start: x.start, end: x.end, venue: x.venue, reg: x.cap ? "cap" : "open", cap: x.cap || "" };
      go("compose");
      break;
    }
    case "dcat":
      S.draft.cat = t.dataset.cat;
      document.querySelectorAll("[data-act=dcat]").forEach((b) => b.setAttribute("aria-pressed", b === t));
      $("#pv").innerHTML = previewCard();
      break;
    case "slot":
      S.draft.start = t.dataset.start;
      S.draft.end = t.dataset.end;
      $("#f-start").value = S.draft.start;
      $("#f-end").value = S.draft.end;
      $("#sched").innerHTML = schedule();
      $("#pv").innerHTML = previewCard();
      toast(`Moved to ${S.draft.start}-${S.draft.end}.`);
      break;
    case "submit": submitDraft(t.dataset.status); break;
    case "approve": {
      const x = ev(id);
      x.status = "approved";
      S.reasonOpen = null;
      render(false);
      toast(`Approved. "${x.title}" is now in Discover.`);
      break;
    }
    case "reqchg":
      S.reasonOpen = S.reasonOpen === Number(id) ? null : Number(id);
      render(false);
      if (S.reasonOpen) { const r = $("#r-" + id); if (r) r.focus(); }
      break;
    case "sendchg": {
      const x = ev(id);
      const r = $("#r-" + id);
      const note = r ? r.value.trim() : "";
      if (!note) { if (r) r.focus(); toast("Tell the club what to change.", { error: true }); break; }
      x.status = "changes";
      x.note = note;
      S.reasonOpen = null;
      render(false);
      toast(`Sent to ${club(x.club).name}.`);
      break;
    }
    default: break;
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeDrawer();
  if ((e.key === "Enter" || e.key === " ") && e.target.matches(".ev[data-act=open]")) {
    e.preventDefault();
    openDrawer(e.target.dataset.id);
  }
});

$("#q").addEventListener("input", () => {
  S.q = $("#q").value;
  if (S.view !== "discover") go("discover");
  else renderResults();
});

(function init() {
  const h = new URLSearchParams(location.hash.slice(1));
  if (["student", "club", "council"].includes(h.get("role"))) {
    S.role = h.get("role");
    if (!h.get("view")) S.view = { student: "discover", club: "studio", council: "approvals" }[S.role];
  }
  if (VIEWS[h.get("view")]) S.view = h.get("view");
  if (S.view === "compose") {
    S.draft = blankDraft();
    ["title", "date", "start", "end", "venue", "desc"].forEach((k) => { if (h.get(k)) S.draft[k] = h.get(k); });
  }
  if (h.get("mode") === "month") S.mode = "month";
  setRolePressed();
  render(false);
  if (h.get("open")) openDrawer(h.get("open"));
})();
