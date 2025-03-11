import * as Sentry from "@sentry/nextjs";

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

    integrations: [
      Sentry.replayIntegration(),
    ],

    tracesSampleRate: 1.0,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,

    debug: process.env.NODE_ENV === "development", // Enable debug logs only in development
  });
} else {
  console.warn("Sentry DSN is not set. Error tracking is disabled.");
}
