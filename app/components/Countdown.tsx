"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2026-07-23T20:00:00");

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function getCountdownValues(now: number) {
  const diff = Math.max(0, TARGET.getTime() - now);
  return {
    days: pad(Math.floor(diff / 86400000)),
    hrs: pad(Math.floor((diff % 86400000) / 3600000)),
    min: pad(Math.floor((diff % 3600000) / 60000)),
    sec: pad(Math.floor((diff % 60000) / 1000)),
  };
}

const PLACEHOLDER = { days: "--", hrs: "--", min: "--", sec: "--" };

export default function Countdown() {
  const [values, setValues] = useState(PLACEHOLDER);

  useEffect(() => {
    const tick = () => setValues(getCountdownValues(Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="countdown">
      <div className="countdown__seg">
        <span className="countdown__num">{values.days}</span>
        <span className="countdown__label">DAYS</span>
      </div>
      <div className="countdown__seg">
        <span className="countdown__num">{values.hrs}</span>
        <span className="countdown__label">HRS</span>
      </div>
      <div className="countdown__seg">
        <span className="countdown__num">{values.min}</span>
        <span className="countdown__label">MIN</span>
      </div>
      <div className="countdown__seg">
        <span className="countdown__num">{values.sec}</span>
        <span className="countdown__label">SEC</span>
      </div>
    </div>
  );
}
