# 💡 Contribution Examples

This file provides examples of good contributions to help new contributors understand what we're looking for.

## 🧠 Adding New Quotes

### ✅ Good Quote Examples

Here are examples of well-formatted quote additions to `src/quotes/quotes.json`:

```json
{
  "id": "103",
  "author": "Bruce Schneier",
  "en": "Security is a process, not a product."
}
```

```json
{
  "id": "104", 
  "author": "Kevin Mitnick",
  "en": "The weakest link in the security chain is the human element."
}
```

### 📋 Quote Guidelines

**DO:**
- ✅ Use sequential ID numbers
- ✅ Include accurate author attribution
- ✅ Ensure quotes are cybersecurity/privacy/tech related
- ✅ Keep quotes appropriate for all audiences
- ✅ Verify quote accuracy before submitting
- ✅ Use proper JSON formatting

**DON'T:**
- ❌ Skip ID numbers or use duplicates
- ❌ Include offensive or inappropriate content
- ❌ Submit quotes without proper attribution
- ❌ Add quotes unrelated to cybersecurity
- ❌ Use broken JSON syntax

### 🎯 Good Quote Topics

- Cybersecurity principles
- Privacy and data protection
- Technology ethics
- Information security
- Digital safety
- Hacking and penetration testing
- Cryptography
- Network security
- Risk management

## 🎨 Adding New Themes

### Example Theme Structure

```typescript
// In src/renderer/theme/example-theme.ts
export const exampleTheme = {
  background: '#1a1b27',
  border: '#414558',
  text: '#a9b1d6',
  author: '#7aa2f7',
  quote: '#9ece6a'
};
```

### Theme Guidelines

- Use accessible color combinations
- Ensure good contrast ratios
- Test with different quote lengths
- Provide both light and dark variants when possible

## 📚 Documentation Improvements

### ✅ Good Documentation PRs

1. **Add missing examples**
   - Include code snippets
   - Show before/after images
   - Explain parameters clearly

2. **Fix typos and grammar**
   - Proofread carefully
   - Maintain consistent tone
   - Use proper markdown formatting

3. **Improve setup instructions**
   - Test instructions on clean environment
   - Include troubleshooting tips
   - Add prerequisites clearly

## 🐛 Bug Fix Examples

### ✅ Good Bug Fix PRs

1. **Clear problem description**
   ```
   Fix: API returns undefined when quote parameter is empty
   
   - Problem: Empty quote parameter causes undefined response
   - Solution: Add validation to return default quote
   - Testing: Verified with various empty parameter combinations
   ```

2. **Include tests (when applicable)**
   - Add test cases for the bug
   - Ensure existing tests still pass
   - Document test scenarios

## 🚀 Feature Addition Examples

### ✅ Good Feature PRs

1. **New API parameter**
   ```
   feat: Add font-size parameter to customize quote text size
   
   - Adds fontsize query parameter
   - Supports values: small, medium, large
   - Maintains backward compatibility
   - Updated documentation with examples
   ```

2. **New theme**
   ```
   feat: Add cyberpunk theme inspired by neon aesthetics
   
   - New cyberpunk theme with neon colors
   - High contrast for accessibility
   - Tested with various quote lengths
   - Added theme documentation
   ```

## 📝 Commit Message Examples

### ✅ Good Commit Messages

```bash
feat: add new quotes from security experts
fix: resolve API error with special characters
docs: improve installation instructions
style: format code according to prettier rules
refactor: optimize quote selection algorithm
test: add unit tests for theme validation
```

### ❌ Poor Commit Messages

```bash
fix stuff
update
changes
fixed bug
added things
```

## 🔍 Code Review Examples

### ✅ Helpful Review Comments

```
"Great addition! Could you also update the README with an example of this new theme?"

"The quote looks good, but let's verify the attribution. Can you provide a source for this quote?"

"Nice work on the feature! Consider adding error handling for invalid font sizes."
```

### ❌ Unhelpful Review Comments

```
"This is wrong"
"No"
"Bad code"
```

## 🎯 PR Description Template Example

```markdown
## Description
Added 5 new cybersecurity quotes from industry experts to expand our collection.

## Changes
- Added quotes from Bruce Schneier, Eugene Spafford, and others
- All quotes verified for accuracy and attribution
- Maintained sequential ID numbering

## Testing
- Verified JSON syntax is valid
- Tested API response with new quotes
- Confirmed proper rendering in all themes

## Checklist
- [x] Quotes are cybersecurity-related
- [x] Proper attribution included
- [x] JSON formatting is correct
- [x] Sequential IDs maintained
```

## 🏆 Recognition Examples

Contributors who follow these examples often receive:

- Faster PR review and approval
- Positive feedback from maintainers
- Recognition in our contributors hall of fame
- Increased trust for future contributions

## 📞 Getting Help

If you're unsure about any contribution:

1. **Check existing examples** in the codebase
2. **Ask questions** in the PR comments
3. **Join discussions** in GitHub Discussions
4. **Read the guidelines** in CONTRIBUTING.md

Remember: It's better to ask questions than to submit unclear contributions!

---

**Happy Contributing! 🚀**

*These examples are here to help you succeed. When in doubt, look at merged PRs for inspiration!*