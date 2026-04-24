"use client";

import { useEffect, useState } from "react";

export function Clock({ tz = "Asia/Kolkata", label = "Mumbai" }: { tz?: string; label?: string }) {
  const [time, setTime] = useState<string>("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: tz,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [tz]);

  return (
    <span className="num-tick inline-flex items-center gap-2">
      <span className="text-bone/50">{label}</span>
      <span>{time || "--:--:--"}</span>
    </span>
  );
}
