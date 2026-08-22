/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_POCKETBASE_URL: string
  readonly VITE_POCKETBASE_COLLECTION: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
