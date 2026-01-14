import { WebTracerProvider } from '@opentelemetry/sdk-trace-web';
import { BatchSpanProcessor } from '@opentelemetry/sdk-trace-web';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { ZoneContextManager } from '@opentelemetry/context-zone';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { FetchInstrumentation } from '@opentelemetry/instrumentation-fetch';
import { DocumentLoadInstrumentation } from '@opentelemetry/instrumentation-document-load';
import { Resource } from '@opentelemetry/resources';
import { ATTR_SERVICE_NAME, ATTR_SERVICE_VERSION } from '@opentelemetry/semantic-conventions';

const serviceVersion = import.meta.env.VITE_APP_VERSION || '0.0.0';

const resource = new Resource({
  [ATTR_SERVICE_NAME]: 'percon-solutions',
  [ATTR_SERVICE_VERSION]: serviceVersion,
});

const provider = new WebTracerProvider({ resource });

// Configure OTLP exporter - defaults to http://localhost:4318/v1/traces
const exporter = new OTLPTraceExporter({
  url: import.meta.env.VITE_OTLP_ENDPOINT || 'http://localhost:4318/v1/traces',
});

provider.addSpanProcessor(new BatchSpanProcessor(exporter));

provider.register({
  contextManager: new ZoneContextManager(),
});

const propagateTraceHeaderCorsUrls =
  typeof window !== 'undefined' ? [window.location.origin] : [];

// Register auto-instrumentations
registerInstrumentations({
  instrumentations: [
    new FetchInstrumentation({
      propagateTraceHeaderCorsUrls,
      clearTimingResources: true,
    }),
    new DocumentLoadInstrumentation(),
  ],
});

export { provider };
