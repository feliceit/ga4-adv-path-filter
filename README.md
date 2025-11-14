# GA4 Advanced Path Filter

> A lightweight Chrome extension that adds real-time filtering to Google Analytics 4 Conversion Paths tables.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-1.0.0-orange.svg)](https://github.com/yourusername/ga4-adv-path-filter/releases)

## 🎯 Overview

**GA4 Advanced Path Filter** enhances your Google Analytics 4 workflow by adding a powerful, real-time search filter to Conversion Paths (Key Event Paths) tables. Find the data you need instantly without scrolling through pages of results.

Perfect for marketing analysts, data professionals, and anyone who works with GA4 conversion data regularly.

## ✨ Features

- 🔍 **Real-time search** - Filter rows as you type
- 📊 **Dynamic counter** - See matching results instantly  
- ❌ **Quick clear** - One-click button to reset filter
- ⌨️ **Keyboard shortcuts** - Press ESC to clear
- 🎨 **Material Design** - Seamlessly integrated with GA4's interface
- 🚀 **Lightweight** - No dependencies, instant loading
- 🔒 **Privacy-first** - No data collection, works entirely offline

## 📸 Screenshots

### Filter in Action
```
┌─────────────────────────────────────────────────┐
│ Filter rows: [google__] [×]  3 of 10 rows      │
└─────────────────────────────────────────────────┘
```

The filter seamlessly integrates into GA4's table controls:
- Matches the native Material Design
- Appears automatically on Conversion Paths pages
- Works with GA4's existing pagination

## 🚀 Installation

### Option 1: Chrome Web Store (Recommended - Coming Soon)
*Extension is pending review on Chrome Web Store*

### Option 2: Manual Installation

1. **Download** the [latest release](https://github.com/feliceit/ga4-adv-path-filter/releases)
2. **Extract** the ZIP file to a folder
3. **Open Chrome** and navigate to `chrome://extensions/`
4. **Enable** "Developer mode" (toggle in top-right corner)
5. Click **"Load unpacked"**
6. **Select** the extracted folder
7. Done! 🎉

## 📖 Usage

1. Navigate to **Google Analytics 4**
2. Go to **Advertising** → **Key Event Paths** (or **Conversion Paths**)
3. The filter will appear automatically in the table controls
4. Type to search - results update in real-time
5. Click **×** to clear or press **ESC**

### Tips
- Search works across all visible columns
- Case-insensitive matching
- Filters current page only (use GA4 pagination for more rows)
- Results counter shows `X of Y` format

## 🛠️ For Developers

### Project Structure
```
ga4-adv-path-filter/
├── manifest.json          # Extension configuration
├── content.js            # Main script
├── popup.html            # Extension popup
├── icons/                # Extension icons
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── README.md
```

### Local Development

```bash
# Clone the repository
git clone https://github.com/feliceit/ga4-adv-path-filter.git
cd ga4-adv-path-filter

# Load in Chrome
# 1. Open chrome://extensions/
# 2. Enable Developer Mode
# 3. Click "Load unpacked"
# 4. Select the project directory
```

### Technology Stack
- **Manifest V3** - Latest Chrome extension standard
- **Vanilla JavaScript** - No dependencies
- **Material Design** - Google's design system
- **DOM Manipulation** - Efficient table filtering

## 🤝 Contributing

Contributions are welcome! Please check out our [Contributing Guidelines](CONTRIBUTING.md).

### Ways to Contribute
- 🐛 Report bugs
- 💡 Suggest features
- 📖 Improve documentation
- 🔧 Submit pull requests

## 🐛 Troubleshooting

### Filter doesn't appear
- Verify you're on the **Key Event Paths** page
- Check the URL contains `key-event-paths` or `conversion-paths`
- Reload the page
- Ensure extension is enabled at `chrome://extensions/`

### Filter not working properly
- Open DevTools Console (F12)
- Look for `[GA4 Filter]` messages
- Check for JavaScript errors
- Try disabling other extensions

### Extension doesn't activate
- Confirm you're on `analytics.google.com`
- Check that you have access to the Conversion Paths report
- Verify the extension has permissions for `analytics.google.com`

## 🔒 Privacy & Security

This extension:
- ✅ Only runs on `analytics.google.com`
- ✅ No data collection or transmission
- ✅ No external connections
- ✅ Works entirely within your browser
- ✅ Open source - fully transparent
- ✅ Minimal permissions required

## 📊 Browser Support

- ✅ Chrome 88+
- ✅ Edge 88+ (Chromium-based)
- ⚠️ Other Chromium browsers (untested but should work)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Google Analytics team for GA4
- Chrome Extensions team for excellent documentation
- Material Design for the design system
- The open-source community

## 📧 Support

- 🐛 [Report bugs](https://github.com/feliceit/ga4-adv-path-filter/issues)
- 💬 [Ask questions](https://github.com/feliceit/ga4-adv-path-filter/discussions)
- ⭐ [Star the repo](https://github.com/feliceit/ga4-adv-path-filter) to show support!

## 🗺️ Roadmap

Future enhancements being considered:
- [ ] Filter history/favorites
- [ ] Advanced regex support
- [ ] Export filtered results
- [ ] Custom column filtering
- [ ] Keyboard navigation

Vote for features or suggest new ones in [Discussions](https://github.com/feliceit/ga4-adv-path-filter/discussions)!

---

<div align="center">

**[⬆ back to top](#ga4-advanced-path-filter)**

Made with ❤️ for the GA4 community

</div>
