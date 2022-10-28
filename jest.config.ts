export default {
  testPathIgnorePatterns: ["<rootDir>/.next", "<rootDir>/node_modules"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.tsx?$": "babel-jest",
    // "^.+\\.(js|jsx|ts|tsx)$/": "<rootDir>/node_modules/babel-jest",
    // "/^.+.(css|less|scss|sass)$/": "identity-obj-proxy",
  },

  testEnvironment: "jsdom",
};
