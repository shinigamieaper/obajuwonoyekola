import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.SENTRY_DSN || "",

  tracesSampleRate: 1.0, // Adjust in production if needed

  debug: process.env.NODE_ENV === "development", // Enable debug logs in development only
});
