"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";
import Error from "next/error";

export default function GlobalError({ error }) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        <Error statusCode={500} />
        <h1>Something went wrong!</h1>
        <p>We're working on fixing this issue.</p>
      </body>
    </html>
  );
}
