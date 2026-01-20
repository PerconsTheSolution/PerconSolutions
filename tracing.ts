import { WebTracerProvider } from '@opentelemetry/sdk-trace-web';
import { BatchSpanProcessor } from '@opentelemetry/sdk-trace-web';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { ZoneContextManager } from '@opentelemetry/context-zone';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { FetchInstrumentation } from '@opentelemetry/instrumentation-fetch';
import { DocumentLoadInstrumentation } from '@opentelemetry/instrumentation-document-load';
import { Resource } from '@opentelemetry/resources';
import { ATTR_SERVICE_NAME, ATTR_SERVICE_VERSION } from '@opentelemetry/semantic-conventions';

// Only enable tracing in development or when OTLP endpoint is explicitly configured
const isTracingEnabled = import.meta.env.DEV || !!import.meta.env.VITE_OTLP_ENDPOINT;

const resource = new Resource({
  [ATTR_SERVICE_NAME]: 'percon-solutions',
  [ATTR_SERVICE_VERSION]: '0.0.0',
});

const provider = new WebTracerProvider({ resource });

if (isTracingEnabled) {
  // Configure OTLP exporter - defaults to http://localhost:4318/v1/traces
  const exporter = new OTLPTraceExporter({
    url: import.meta.env.VITE_OTLP_ENDPOINT || 'http://localhost:4318/v1/traces',
  });

  provider.addSpanProcessor(new BatchSpanProcessor(exporter));
}

provider.register({
  contextManager: new ZoneContextManager(),
});

// Register auto-instrumentations
// Only propagate trace headers to same-origin requests to avoid CORS issues
registerInstrumentations({
  instrumentations: [
    new FetchInstrumentation({
      // Only propagate trace headers to same-origin URLs to avoid CORS issues with external APIs
      propagateTraceHeaderCorsUrls: [],
      clearTimingResources: true,
    }),
    new DocumentLoadInstrumentation(),
  ],
});

export { provider };
