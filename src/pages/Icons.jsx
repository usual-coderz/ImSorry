import { useEffect, useState } from "react";
import SideNav from "../components/SideNav.jsx";
import ParticleBackground from "../components/ParticleBackground.jsx";
import "../styles/full-letter.css";

const SETS = [
{ id: "lucide", label: "Lucide Icons", path: "/icons/lucide" },
{ id: "heroicons", label: "Heroicons", path: "/icons/heroicons-24/outline" },
{ id: "feather", label: "Feather Icons", path: "/icons/feather" },
];

export default function Icons() {
const [active, setActive] = useState("lucide");
const [icons, setIcons] = useState([]);
const [q, setQ] = useState("");

useEffect(() => {
const sample = {
lucide: ["heart", "home", "mail", "bell", "message-circle", "calendar", "clock", "cake", "paperclip", "activity", "history", "settings", "star", "zap", "shield", "crown"],
heroicons: ["academic-cap", "heart", "home", "envelope", "bell", "chat-bubble-oval-left", "calendar", "clock"],
feather: ["heart", "home", "mail", "bell", "message-circle", "calendar", "clock", "gift"],
};

setIcons(sample[active] || []);

}, [active]);

const filtered = icons.filter((name) =>
name.toLowerCase().includes(q.toLowerCase())
);

return (
<div className="full-letter-shell">
<ParticleBackground subtle />
<SideNav />

  <article className="full-letter-inner" style={{ maxWidth: 900 }}>
    <p className="letter-kicker">IVAN'S COLLECTION</p>

    <h1 className="letter-title">Icon Studio</h1>

    <p className="letter-muted">
      A curated collection of beautiful SVG icons, crafted for modern
      interfaces. Explore Lucide, Heroicons and Feather.
    </p>

    <div
      style={{
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        margin: "16px 0",
      }}
    >
      {SETS.map((set) => (
        <button
          key={set.id}
          type="button"
          className={`letter-back ${active === set.id ? "is-active" : ""}`}
          onClick={() => setActive(set.id)}
          style={{
            background:
              active === set.id ? "#fff" : "rgba(255,255,255,0.06)",
            color: active === set.id ? "#000" : "#fff",
          }}
        >
          {set.label}
        </button>
      ))}
    </div>

    <input
      className="chat-input"
      placeholder="Search icons..."
      value={q}
      onChange={(e) => setQ(e.target.value)}
      style={{ marginBottom: 16 }}
    />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))",
        gap: 10,
      }}
    >
      {filtered.map((name) => (
        <div
          key={name}
          className="newmsg-post"
          style={{
            padding: 14,
            display: "grid",
            placeItems: "center",
            gap: 8,
          }}
        >
          <img
            src={`/icons/${
              active === "lucide"
                ? "lucide"
                : active === "heroicons"
                  ? "heroicons-24/outline"
                  : "feather"
            }/${name}.svg`}
            alt={name}
            width="28"
            height="28"
            style={{ filter: "invert(1) brightness(1.2)" }}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />

          <span
            style={{
              fontSize: 11,
              color: "rgba(255,255,255,0.62)",
              wordBreak: "break-all",
              textAlign: "center",
            }}
          >
            {name}
          </span>
        </div>
      ))}
    </div>

    <footer
      style={{
        marginTop: 36,
        padding: "20px 0",
        borderTop: "1px solid rgba(255,255,255,0.12)",
        textAlign: "center",
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: 13,
          color: "rgba(255,255,255,0.55)",
        }}
      >
        Designed with care
      </p>

      <p
        style={{
          margin: "8px 0 0",
          fontSize: 15,
          fontWeight: 700,
          letterSpacing: 1,
          color: "#fff",
        }}
      >
        MADE BY IVAN ✦
      </p>
    </footer>
  </article>
</div>

);
}