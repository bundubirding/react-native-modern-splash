module.exports = {
  preset: "react-native",
  modulePathIgnorePatterns: [
    "<rootDir>/example/node_modules",
    "<rootDir>/lib/",
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transformIgnorePatterns: ["node_modules/(?!(react-native|@react-native)/)"],
  setupFiles: ["<rootDir>/jest.setup.js"],
  testEnvironment: "node",
};
