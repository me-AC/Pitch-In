import * as Sentry from '@sentry/nextjs';

Sentry.init({
	dsn: 'https://00489d0537eb0c61432593ed7e584852@o4509314994995200.ingest.de.sentry.io/4509314996502608',
	integrations: [
		Sentry.feedbackIntegration({
			// Additional SDK configuration goes in here, for example:
			colorScheme: 'system',
		}),
	],
	tracesSampleRate: 1,
	replaysSessionSampleRate: 0.1,
	replaysOnErrorSampleRate: 1.0,
	debug: false,
});
