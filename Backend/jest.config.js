export default {
    testEnvironment: 'node',
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',  // Add JSX and TS/TSX files here
    },
    extensionsToTreatAsEsm: ['.js', '.jsx', '.ts', '.tsx'],  // Handle JSX and TS extensions
    moduleNameMapper: {
      '^.+\\.css$': 'identity-obj-proxy',
    },
  };
  