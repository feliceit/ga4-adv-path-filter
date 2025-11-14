# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-11-14

### 🎉 Initial Release

The first public release of GA4 Advanced Path Filter brings essential filtering capabilities to Google Analytics 4 Conversion Paths.

### ✨ Features
- **Real-time search filtering** - Filter table rows as you type
- **Dynamic results counter** - Shows "X of Y rows" with color indicators
- **Clear button** - Quick reset with SVG icon
- **Keyboard shortcuts** - ESC key to clear filter
- **Material Design UI** - Seamlessly integrated with GA4 interface
- **Auto-detection** - Activates automatically on Conversion Paths pages
- **SPA support** - Handles Google Analytics URL changes

### 🎨 User Interface
- Clean input field matching GA4 design
- Professional typography (Google Sans, Roboto)
- Smooth focus states with shadows
- Color-coded counter (blue for results, red for no matches)
- Hover effects on clear button

### 🔧 Technical Features
- Manifest V3 compliance
- Vanilla JavaScript (no dependencies)
- Efficient DOM manipulation
- MutationObserver for SPA navigation
- Smart initialization with retry logic

### 🔒 Privacy & Security
- No data collection
- No external connections
- Minimal permissions (analytics.google.com only)
- Open source transparency

### 📚 Documentation
- Comprehensive README
- Installation instructions
- Usage guide
- Troubleshooting section
- Contributing guidelines
- MIT License

### 🎯 Browser Support
- Chrome 88+
- Edge 88+ (Chromium)
- Other Chromium browsers (untested)

---

## Future Releases

See the [Roadmap](README.md#-roadmap) section for planned features.

[1.0.0]: https://github.com/yourusername/ga4-adv-path-filter/releases/tag/v1.0.0
