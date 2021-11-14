/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  clearMocks: true,
  moduleNameMapper: {

  },
  preset: 'ts-jest',
  setupFilesAfterEnv: [
    "./jest.setup.ts"
  ],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    "e2e"
  ]
};