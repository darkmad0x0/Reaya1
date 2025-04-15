import '@testing-library/jest-native/extend-expect';

// Mock the navigation container
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: jest.fn(),
    goBack: jest.fn(),
  }),
}));

// Mock vector icons
jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');

// Mock safe area context
jest.mock('react-native-safe-area-context', () => ({
  SafeAreaProvider: ({ children }) => children,
  useSafeAreaInsets: () => ({ top: 0, right: 0, bottom: 0, left: 0 }),
}));

// Mock Paper provider
jest.mock('react-native-paper', () => ({
  Provider: ({ children }) => children,
}));

// Mock analytics
jest.mock('./src/config/analytics', () => ({
  trackEvent: jest.fn(),
}));

// Mock Firebase
jest.mock('@react-native-firebase/analytics', () => ({
  __esModule: true,
  default: () => ({
    logEvent: jest.fn(),
    logScreenView: jest.fn(),
    setUserProperties: jest.fn(),
    resetAnalyticsData: jest.fn(),
  }),
}));

// Mock Sentry
jest.mock('@sentry/react-native', () => ({
  init: jest.fn(),
  captureException: jest.fn(),
}));

// Mock React Native
jest.mock('react-native', () => {
  const rn = jest.requireActual('react-native');
  rn.NativeModules.StatusBarManager = {
    getHeight: jest.fn(() => Promise.resolve({ height: 20 })),
  };
  return rn;
}); 