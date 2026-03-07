# SENTRY SETUP GUIDE - CyberSecurity-Project

Quick start guide for integrating Sentry into this Vite/React project.

## 1. Project Setup in Sentry
- Go to [Sentry.io](https://sentry.io/) and create a new **React** project.
- Name it: `CyberSecurity-Project`.

## 2. Installation
Run the following command in the project root:
```bash
npm install --save @sentry/react @sentry/vite-plugin
```

## 3. Configuration
### Environment Variables
Add your DSN to `.env`:
```env
VITE_SENTRY_DSN=your_dsn_here
```

### Initialization
Add this to `src/main.tsx` (or your entry point):
```typescript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});
```

## 4. Source Maps (Optional but Recommended)
Update `vite.config.ts` to use the Sentry Vite plugin for uploading source maps during build.

---
*Follow GITHUB ISSUES GUIDE.md for tracking progress.*
