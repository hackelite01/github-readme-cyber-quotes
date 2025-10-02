# Contributing to Github Readme Cyber Quotes

🎃 **Welcome to Hacktoberfest 2025!** 🎃

Thank you for considering contributing to Github Readme Cyber Quotes! We're excited to have you as part of our open-source community. This project participates in Hacktoberfest, and we welcome contributors of all skill levels.

## 🌟 Hacktoberfest Participation

This repository is participating in **Hacktoberfest 2025**! We encourage quality contributions and follow Hacktoberfest's values:

- **Everyone is welcome** - Contributors from all backgrounds and skill levels
- **Quality over quantity** - We prioritize meaningful contributions
- **Long-term impact** - Your contributions help build the future of cybersecurity education

### Hacktoberfest Guidelines
- Look for issues labeled with `hacktoberfest` or `good first issue`
- Ensure your contributions are meaningful and add value
- Be respectful and follow our Code of Conduct
- Help us maintain a spam-free environment

## 🚀 Ways to Contribute

### For Beginners
- Add new cybersecurity quotes to `src/quotes/quotes.json`
- Improve documentation and README
- Fix typos and formatting issues
- Add translations for quotes
- Enhance error handling and user experience

### For Experienced Contributors
- Add new themes and card layouts
- Implement new API features
- Optimize performance and code quality
- Add comprehensive testing
- Improve TypeScript types and interfaces

### Non-Code Contributions
- Write technical documentation
- Create tutorials and guides
- Test the application and report bugs
- Design new themes and layouts
- Write blog posts about the project

## 📋 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- pnpm package manager
- Basic knowledge of TypeScript/JavaScript

### Development Setup
1. **Fork the repository**
   ```bash
   # Click the 'Fork' button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/github-readme-cyber-quotes.git
   cd github-readme-cyber-quotes
   ```

3. **Install dependencies**
   ```bash
   pnpm install
   ```

4. **Start development server**
   ```bash
   npx vercel dev
   ```

5. **Access the application**
   - Open your browser to `http://localhost:3000`
   - Test the API at `http://localhost:3000/api`

## 🐛 Reporting Issues

When reporting issues, please use our issue templates and include:

- **Bug reports**: Steps to reproduce, expected vs actual behavior, environment details
- **Feature requests**: Clear description of the proposed feature and its benefits
- **Documentation issues**: Specific sections that need improvement

[Create an issue](https://github.com/hackelite01/github-readme-cyber-quotes/issues/new/choose)

## 🔄 Submitting Pull Requests

### Step-by-Step Process

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/issue-number
   ```

2. **Make your changes**
   - Follow our coding standards
   - Add appropriate comments
   - Update documentation if needed

3. **Test your changes**
   ```bash
   pnpm run format  # Format code
   # Test manually by running the dev server
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new cybersecurity quote from [author]"
   # Use conventional commit format
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Use our PR template
   - Reference any related issues
   - Provide clear description of changes

### Commit Message Guidelines

We follow [Conventional Commits](https://conventionalcommits.org/):

```
feat: add new theme for dark mode
fix: resolve API response formatting issue
docs: update installation instructions
style: improve code formatting
refactor: optimize quote fetching logic
```

## 📝 Coding Standards

### Code Style
- Use TypeScript for type safety
- Follow existing code formatting (we use Prettier)
- Use meaningful variable and function names
- Add comments for complex logic

### Adding New Quotes
When adding quotes to `src/quotes/quotes.json`:

```json
{
  "id": "next_sequential_number",
  "author": "Author Name",
  "en": "The quote text in English"
}
```

**Guidelines for quotes:**
- Must be related to cybersecurity, privacy, or technology
- Properly attributed to the correct author
- Appropriate for all audiences
- No offensive or inappropriate content
- Verify the quote is accurate

### File Structure
```
src/
├── fetcher/          # API logic
├── quotes/           # Quote data
├── renderer/         # SVG generation
│   ├── theme/        # Theme definitions
│   └── type/         # Card layouts
```

## 🏷️ Labels and Issues

We use these labels to organize contributions:

- `hacktoberfest` - Issues suitable for Hacktoberfest
- `good first issue` - Perfect for newcomers
- `help wanted` - Community assistance needed
- `bug` - Something isn't working
- `enhancement` - New feature or improvement
- `documentation` - Improvements to docs
- `question` - Further information is requested

## 🛡️ Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you agree to uphold this code. Please report unacceptable behavior to hackelite.sup@gmail.com.

## 🏆 Recognition

All contributors will be:
- Added to our contributors list
- Mentioned in release notes for significant contributions
- Eligible for Hacktoberfest rewards (digital badges, swag)

### Hall of Fame
Special thanks to our amazing contributors:
- [hackelite01](https://github.com/hackelite01) - Project creator and maintainer
- [ImgBotApp](https://github.com/ImgBotApp) - Image optimization

[View all contributors](https://github.com/hackelite01/github-readme-cyber-quotes/graphs/contributors)

## 📞 Getting Help

- 💬 **Discussions**: Use GitHub Discussions for questions
- 🐛 **Issues**: Report bugs via GitHub Issues
- 📧 **Email**: Contact maintainer at hackelite.sup@gmail.com
- 🎮 **Discord**: Join the [Hacktoberfest Discord](https://discord.com/invite/digitalocean)

## 📚 Resources

### For Beginners
- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [GitHub Flow Guide](https://guides.github.com/introduction/flow/)
- [Hacktoberfest Participation Guide](https://hacktoberfest.com/participation/)

### For Developers
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [SVG Specification](https://developer.mozilla.org/en-US/docs/Web/SVG)

## 🎯 Project Goals

Our mission is to:
- Make cybersecurity knowledge more accessible
- Provide an easy way to share security wisdom
- Build a community around cybersecurity education
- Support the open-source ecosystem

## ⭐ Show Your Support

If you find this project helpful:
- ⭐ Star the repository
- 🍴 Fork it for your own use
- 📢 Share it with others
- 🤝 Contribute to make it better

---

**Happy Contributing! 🚀**

*Let's build something amazing together during Hacktoberfest 2025!*
