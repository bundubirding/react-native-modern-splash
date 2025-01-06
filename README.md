# react-native-modern-splash

A modern, lightweight splash screen implementation for React Native.

## Installation

```bash
npm install react-native-modern-splash
# or
yarn add react-native-modern-splash
```

## Features

🚀 Native implementation
📱 iOS & Android support
🎨 Customizable
🔄 TypeScript support
📦 Lightweight
🛠 Easy to integrate

## Usage

```javascript
import { show, hide } from 'react-native-modern-splash';

// Show splash screen
show();

// Hide splash screen
hide();
```

## Platform Setup

### iOS

Run pod install:
```bash
cd ios && pod install
```

### Android

No additional setup required for Android. The package automatically links with React Native's auto-linking.


## Example

```javascript
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { hide } from 'react-native-modern-splash';

function App() {
  useEffect(() => {
    // Hide splash screen after initialization
    hide();
  }, []);

  return (
    <View>
      <Text>Your App Content</Text>
    </View>
  );
}
```

Check the /example folder for a complete implementation.


## API Reference

### show()
Shows the native splash screen.
Returns: Promise<void>

### hide()
Hides the native splash screen.
Returns: Promise<void>


## Contributing
We welcome contributions! Please see our Contributing Guide for details.

### Development Setup

#### Clone the repository
Install dependencies: npm install
Run tests: npm test
Start example app: npm run example

## License
MIT

## Author
Robert Elliott

## Support
Create an Issue
Follow updates on GitHub
