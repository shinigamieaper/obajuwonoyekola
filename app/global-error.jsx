"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export default function GlobalError({ error }) {
  useEffect(() => {
    if (Sentry && typeof Sentry.captureException === "function") {
      Sentry.captureException(error);
    } else {
      console.error("Sentry is not available", error);
    }
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-100 text-red-800">
      <h1 className="text-2xl font-bold">Something went wrong!</h1>
      <p className="text-lg">{error?.message || "An unexpected error occurred."}</p>
    </div>
  );
}
