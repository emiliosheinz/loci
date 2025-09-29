import { defineConfig } from "tsup";

export default defineConfig({
  dts: true,
  clean: true,
  format: ["cjs", "esm"],
  treeshake: "recommended",
  entry: ['base/*.{ts,js}'],
  onSuccess: "cp base/*.json dist/"
});
