# Medical AI Platform

A role-based medical platform with AI-powered features for hospitals, doctors, and patients.

## Features

- 🏥 Hospital Dashboard
  - Supplier Management
  - Job Applications
  - Patient Referrals

- 👨‍⚕️ Doctor Dashboard
  - Appointment Schedule
  - Patient Chat
  - Analytics

- 🧑‍⚕️ Patient Dashboard
  - AI Symptom Checker
  - Medical Image Analysis
  - Medication Information
  - Health Tracker

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Run on specific platform:
```bash
# For Android
npm run android

# For iOS
npm run ios
```

## Publishing

### Android
1. Build the app:
```bash
expo build:android
```

2. Publish to Google Play Store:
- Create a keystore
- Update app.json with keystore details
- Submit to Google Play Console

### iOS
1. Build the app:
```bash
expo build:ios
```

2. Publish to App Store:
- Create App Store Connect account
- Generate certificates and provisioning profiles
- Submit to App Store Connect

## Environment Setup

Create a `.env` file with:
```
OPENAI_API_KEY=your_api_key
FIREBASE_API_KEY=your_firebase_key
```

## Security & Compliance

- HIPAA compliant data handling
- Secure patient data storage
- Encrypted communications
- Regular security audits

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 