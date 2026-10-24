import { useEffect, useState } from "react";

// Best friends since January 18, 2026
const START = new Date("2026-01-18T00:00:00+05:30");

function getDiff() {
  const now = new Date();
  let diff = now.getTime() - START.getTime();

  if (diff < 0) diff = 0;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor(
    (diff % (1000 * 60 * 60)) / (1000 * 60)
  );
  const secs = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, mins, secs };
}

export default function LoveCounter() {
  const [d, setD] = useState(getDiff);

  useEffect(() => {
    const id = setInterval(() => setD(getDiff()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="love-counter">
      <div className="love-counter-head">
        <span className="love-counter-heart" aria-hidden="true">
          🫂
        </span>
        <span>Best Friends Since January 18, 2026 ❤️</span>
      </div>

      <div className="love-counter-grid">
        <div className="love-counter-cell">
          <strong>{d.days}</strong>
          <span>days</span>
        </div>

        <div className="love-counter-cell">
          <strong>{String(d.hours).padStart(2, "0")}</strong>
          <span>hours</span>
        </div>

        <div className="love-counter-cell">
          <strong>{String(d.mins).padStart(2, "0")}</strong>
          <span>minutes</span>
        </div>

        <div className="love-counter-cell">
          <strong>{String(d.secs).padStart(2, "0")}</strong>
          <span>seconds</span>
        </div>
      </div>
    </div>
  );
}