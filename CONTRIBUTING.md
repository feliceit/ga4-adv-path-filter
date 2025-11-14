# Contributing to GA4 Advanced Path Filter

First off, thank you for considering contributing to GA4 Advanced Path Filter! It's people like you that make this tool better for everyone.

## 🎯 Code of Conduct

This project and everyone participating in it is governed by our commitment to providing a welcoming and inspiring community for all.

## 🤔 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples**
- **Describe the behavior you observed and what you expected**
- **Include screenshots if relevant**
- **Include browser version and OS**
- **Include the number of rows in your dataset**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Use a clear and descriptive title**
- **Provide a detailed description of the suggested enhancement**
- **Explain why this enhancement would be useful**
- **List any alternative solutions you've considered**

### Pull Requests

- Fill in the required template
- Follow the JavaScript style guide
- Include screenshots for UI changes
- Update the README.md with details of changes
- Update the CHANGELOG.md
- Test your changes thoroughly

## 🛠️ Development Process

### Setting Up Your Development Environment

1. **Fork the repository**
   ```bash
   # Click the 'Fork' button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/ga4-adv-path-filter.git
   cd ga4-adv-path-filter
   ```

3. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

4. **Load the extension in Chrome**
   - Open `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the project directory

### Making Changes

1. **Write your code**
   - Follow existing code style
   - Comment complex logic
   - Use meaningful variable names

2. **Test thoroughly**
   - Test with small datasets (100 rows)
   - Test with medium datasets (500 rows)
   - Test with large datasets (1000+ rows)
   - Test pagination edge cases
   - Test filter with various search terms

3. **Update documentation**
   - Update README.md if needed
   - Add entry to CHANGELOG.md
   - Update code comments

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```

### Commit Message Guidelines

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation only
- `style:` Code style changes (formatting, etc)
- `refactor:` Code refactoring
- `perf:` Performance improvements
- `test:` Adding tests
- `chore:` Maintenance tasks

Examples:
```
feat: add export to CSV functionality
fix: resolve pagination issue with large datasets
docs: update installation instructions
perf: optimize row filtering algorithm
```

### Submitting Pull Request

1. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your branch
   - Fill in the PR template
   - Link any related issues

3. **Code Review**
   - Address reviewer feedback
   - Make requested changes
   - Push updates to your branch

## 📝 Style Guide

### JavaScript Style

- Use ES6+ features
- Use `const` by default, `let` when reassignment needed
- Use arrow functions for callbacks
- Use template literals for string interpolation
- Add JSDoc comments for functions
- Keep functions small and focused
- Use meaningful variable names

Example:
```javascript
/**
 * Filters table rows based on search query
 * @param {string} query - The search query
 * @param {NodeList} rows - The table rows to filter
 * @returns {number} Number of visible rows
 */
function filterRows(query, rows) {
  let visibleCount = 0;
  const searchTerm = query.toLowerCase().trim();
  
  rows.forEach(row => {
    const rowText = row.textContent.toLowerCase();
    const isVisible = rowText.includes(searchTerm);
    
    row.style.display = isVisible ? '' : 'none';
    if (isVisible) visibleCount++;
  });
  
  return visibleCount;
}
```

### CSS Style

- Use meaningful class names
- Follow BEM naming convention when appropriate
- Keep selectors specific but not overly complex
- Use CSS custom properties for theming
- Match Material Design guidelines

### Documentation Style

- Use clear, concise language
- Include code examples
- Add screenshots for visual changes
- Keep README.md up to date
- Document configuration options

## 🧪 Testing

### Manual Testing Checklist

Before submitting a PR, test:

- [ ] Extension loads without errors
- [ ] Detects Conversion Paths page correctly
- [ ] Sets rows per page to 250
- [ ] Loads all pages successfully
- [ ] Filter works with various queries
- [ ] Counter shows correct numbers
- [ ] Clear button works
- [ ] ESC key clears filter
- [ ] Badge shows total rows
- [ ] Pagination is hidden after load
- [ ] Works with different dataset sizes
- [ ] No console errors
- [ ] Performance is acceptable
- [ ] UI matches GA4 design

### Test Datasets

Test with various scenarios:
- Empty results (0 rows)
- Small dataset (10-50 rows)
- Medium dataset (100-500 rows)
- Large dataset (1000+ rows)
- Multiple touchpoints
- Single touchpoint
- Special characters in paths

## 📚 Resources

- [Chrome Extension Documentation](https://developer.chrome.com/docs/extensions/)
- [Manifest V3 Migration Guide](https://developer.chrome.com/docs/extensions/mv3/intro/)
- [Material Design Guidelines](https://material.io/design)
- [JavaScript Style Guide](https://github.com/airbnb/javascript)

## 🆘 Getting Help

- Check [existing issues](https://github.com/yourusername/ga4-adv-path-filter/issues)
- Start a [discussion](https://github.com/yourusername/ga4-adv-path-filter/discussions)
- Read the [README.md](README.md)

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing! 🎉
