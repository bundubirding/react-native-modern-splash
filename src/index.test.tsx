// src/index.test.tsx
import { NativeModules, PlatformOSType } from "react-native";
import { hide, show } from ".";

// Define platform selection type
type PlatformSelect = {
  [key in PlatformOSType]?: any;
};

// Mock the NativeModules
jest.mock("react-native", () => ({
  NativeModules: {
    ModernSplash: {
      hide: jest.fn(),
      show: jest.fn(),
    },
  },
  Platform: {
    select: jest.fn((obj: PlatformSelect) => obj.ios),
  },
}));

describe("ModernSplash", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should expose hide and show methods", () => {
    expect(typeof hide).toBe("function");
    expect(typeof show).toBe("function");
  });

  it("should call native hide method", () => {
    hide();
    expect(NativeModules.ModernSplash.hide).toHaveBeenCalled();
  });

  it("should call native show method", () => {
    show();
    expect(NativeModules.ModernSplash.show).toHaveBeenCalled();
  });

  it("should handle platform-specific behavior", () => {
    // Test Platform.select behavior
    const Platform = require("react-native").Platform;
    (Platform.select as jest.Mock).mockImplementation(
      (obj: PlatformSelect) => obj.android
    );

    hide();
    expect(NativeModules.ModernSplash.hide).toHaveBeenCalled();
  });

  it("should handle null response from native module", () => {
    const ModernSplash = NativeModules.ModernSplash;
    (ModernSplash.hide as jest.Mock).mockReturnValue(null);

    expect(() => hide()).not.toThrow();
  });

  it("should handle promise rejection from native module", async () => {
    const ModernSplash = NativeModules.ModernSplash;
    (ModernSplash.show as jest.Mock).mockRejectedValue(
      new Error("Native error")
    );

    await expect(show()).rejects.toThrow("Native error");
  });
});
