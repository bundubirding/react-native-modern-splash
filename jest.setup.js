jest.mock("react-native", () => ({
  NativeModules: {
    ModernSplash: {
      hide: jest.fn(),
      show: jest.fn(),
    },
  },
  Platform: {
    select: jest.fn((obj) => obj.ios),
  },
}));
