# Version Management Guide

This guide outlines the versioning strategy and release management process for the Medical AI Platform.

## Version Number Format

We follow [Semantic Versioning](https://semver.org/) (MAJOR.MINOR.PATCH):

- **MAJOR**: Incompatible API changes
- **MINOR**: Backwards-compatible functionality additions
- **PATCH**: Backwards-compatible bug fixes

## Version Number Locations

Version numbers must be updated in the following files:

1. `package.json`:
```json
{
  "version": "1.0.0"
}
```

2. `android/app/build.gradle`:
```gradle
android {
    defaultConfig {
        versionCode 1
        versionName "1.0.0"
    }
}
```

3. `ios/MedicalAI/Info.plist`:
```xml
<key>CFBundleShortVersionString</key>
<string>1.0.0</string>
<key>CFBundleVersion</key>
<string>1</string>
```

## Version Code/Build Number Rules

### Android (versionCode)
- Must be a positive integer
- Must increase with each release
- Should be unique for each version
- Recommended format: `MMmmpp` where:
  - MM = Major version
  - mm = Minor version
  - pp = Patch version

### iOS (CFBundleVersion)
- Must be a positive integer
- Must increase with each release
- Should be unique for each version
- Recommended format: Same as Android versionCode

## Release Process

1. **Prepare Release**
   - Update version numbers in all locations
   - Update CHANGELOG.md
   - Create release branch (e.g., `release/v1.0.0`)

2. **Testing**
   - Run all test cases
   - Perform manual testing
   - Verify on both platforms

3. **Build**
   - Build release versions for both platforms
   - Sign the builds
   - Verify the builds

4. **Submit**
   - Submit to app stores
   - Monitor review process
   - Address any issues

5. **Release**
   - Merge release branch to main
   - Create version tag
   - Update documentation

## Hotfix Process

1. **Identify Issue**
   - Document the issue
   - Determine severity
   - Plan the fix

2. **Fix**
   - Create hotfix branch
   - Implement fix
   - Test thoroughly

3. **Release**
   - Increment patch version
   - Update CHANGELOG.md
   - Build and submit
   - Merge to main

## Version History

| Version | Date       | Changes |
|---------|------------|---------|
| 1.0.0   | YYYY-MM-DD | Initial release | 