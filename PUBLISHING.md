# Publishing Guide

This guide explains how to publish the Medical AI Platform app to the Google Play Store and Apple App Store.

## Prerequisites

### For Android:
1. Google Play Developer Account
2. Android Keystore file
3. Google Play Service Account JSON key

### For iOS:
1. Apple Developer Account
2. App Store Connect API Key
3. Distribution certificates and provisioning profiles

## Setup

### Android Setup
1. Generate a keystore file:
   ```bash
   keytool -genkey -v -keystore keystore.jks -keyalg RSA -keysize 2048 -validity 10000 -alias medicalai
   ```

2. Add the following secrets to your GitHub repository:
   - `ANDROID_SIGNING_KEY`: Base64 encoded keystore file
   - `ANDROID_KEY_ALIAS`: Key alias (e.g., "medicalai")
   - `ANDROID_KEY_STORE_PASSWORD`: Keystore password
   - `ANDROID_KEY_PASSWORD`: Key password
   - `GOOGLE_PLAY_SERVICE_ACCOUNT`: Google Play Service Account JSON

### iOS Setup
1. Create an App Store Connect API Key
2. Add the following secrets to your GitHub repository:
   - `APPSTORE_ISSUER_ID`: Your App Store Connect Issuer ID
   - `APPSTORE_API_KEY_ID`: Your App Store Connect API Key ID
   - `APPSTORE_API_PRIVATE_KEY`: Your App Store Connect API Private Key

## Publishing Process

### Manual Publishing
1. Update version numbers in:
   - `package.json`
   - `android/app/build.gradle`
   - `ios/MedicalAI/Info.plist`

2. Build release versions:
   ```bash
   # Android
   cd android
   ./gradlew assembleRelease

   # iOS
   cd ios
   xcodebuild -workspace MedicalAI.xcworkspace -scheme MedicalAI -configuration Release -archivePath MedicalAI.xcarchive archive
   xcodebuild -exportArchive -archivePath MedicalAI.xcarchive -exportOptionsPlist exportOptions.plist -exportPath .
   ```

3. Submit to stores:
   - Android: Upload the AAB file to Google Play Console
   - iOS: Upload the IPA file to App Store Connect

### Automated Publishing
1. Create a new release tag:
   ```bash
   git tag -a v1.0.0 -m "Release version 1.0.0"
   git push origin v1.0.0
   ```

2. The GitHub Actions workflow will automatically:
   - Build the apps
   - Sign the release builds
   - Upload to the respective stores
   - Notify the team via Slack

## Post-Publishing

1. Monitor the release status in:
   - Google Play Console
   - App Store Connect

2. Check for any issues in:
   - Crash reports
   - User feedback
   - Performance metrics

## Troubleshooting

### Common Issues
1. Build failures:
   - Check build logs
   - Verify all secrets are correctly set
   - Ensure all dependencies are up to date

2. Store rejections:
   - Address any policy violations
   - Fix any technical issues
   - Update app metadata as needed

### Support
For any issues, contact:
- Technical Support: support@medicalaiplatform.com
- App Store Support: appstore@medicalaiplatform.com
- Play Store Support: playstore@medicalaiplatform.com 