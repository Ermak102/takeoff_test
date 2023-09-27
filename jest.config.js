module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\\.[tj]sx?$": ["ts-jest"],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  coverageDirectory: "../../coverage/libs/study",
  testTimeout: 10000
};
