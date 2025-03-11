import * as Sentry from "@sentry/nextjs";

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN, // Use environment variable instead of hardcoding

    tracesSampleRate: 1.0, // Keep 100% trace sampling for debugging; lower in production if needed

    debug: process.env.NODE_ENV === "development", // Enable debug logs only in development
  });
} else {
  console.warn("Sentry DSN is not set. Edge error tracking is disabled.");
}
