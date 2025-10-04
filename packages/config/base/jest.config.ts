import type { Config } from "jest";

const config: Config = {
  rootDir: "./",
  preset: "ts-jest",
  testEnvironment: "node",
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  coverageProvider: "v8",
  testRegex: ".*\\.spec\\.(t|j)sx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/", "/coverage/"],
  collectCoverageFrom: ["**/*.{t,j}s?(x)"],
  coverageDirectory: "coverage",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest",
  },
};
export default config;
