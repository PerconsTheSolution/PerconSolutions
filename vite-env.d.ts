/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_VERSION?: string;
  readonly VITE_OTLP_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
