"use client";

import { useEffect } from "react";

export function PWARegister() {
  useEffect(() => {
    // Dev chunks are not content-hashed, so the cache-first SW would serve stale code locally.
    if (process.env.NODE_ENV !== "production" || !("serviceWorker" in navigator)) return;
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  }, []);

  return null;
}
