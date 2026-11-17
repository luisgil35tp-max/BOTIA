import type { Config } from 'jest';
const config: Config = { preset: 'jest-preset-angular', testEnvironment: 'jsdom', setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'], moduleFileExtensions: ['ts', 'html', 'js', 'json'] };
export default config;
