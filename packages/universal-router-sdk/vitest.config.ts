import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    testTimeout: 100_000,
    globals: true,
  },
})
