# Contributing to Loci

Thank you for your interest in contributing to Loci! 🎉 We're excited to have you join our community and help make Loci an amazing tool for capturing and organizing ideas.

This guide will help you get started with contributing, whether you're fixing a bug, adding a feature, or improving documentation.

## Getting Started

### Development Setup

Loci uses a Docker-based development environment to ensure consistency across all contributors. Make sure you have Docker and Docker Compose installed on your system.

1. **Clone the repository**
   ```bash
   git clone https://github.com/emiliosheinz/loci.git
   cd loci
   ```

2. **Start the development environment**
   ```bash
   docker compose up -d
   ```

3. **Use the loci helper script**
   
   For convenience, we provide a helper script that runs commands inside the workspace container:
   ```bash
   bin/loci pnpm install
   bin/loci pnpm nx test api
   bin/loci pnpm nx run-many -t check
   ```

   > 💡 **Tip**: Even though you can run commands on your host machine, we highly recommend always using the Docker container to avoid environment discrepancies.

### Learn About Loci

Before contributing, take some time to understand the project:

- **Product Vision**: Visit our [product vision, features and strategy page](https://github.com/emiliosheinz/loci/wiki/Product-vision,-features,-and-strategy) to understand Loci's goals and direction
- **Architecture**: Review the [Architecture Decision Records (ADRs)](./docs/architecture/decisions/) to understand key technical decisions
- **Project Structure**: Check the [README](./README.md) for an overview of the monorepo structure and quick start guide

## How to Contribute

### 🐛 Reporting Issues

Found a bug or have a feature request? We'd love to hear from you!

1. **Search existing issues** first to avoid duplicates
2. **Use issue templates** when available to provide all necessary information
3. **Be descriptive** - include steps to reproduce, expected behavior, and actual behavior
4. **Add labels** to help categorize your issue

### 💡 Proposing Changes

#### Small Changes
For small fixes and improvements:
1. Fork the repository
2. Create a feature branch from `main`
3. Make your changes
4. Submit a pull request

#### Large Changes
For significant features or architectural changes:
1. **Open an issue first** to discuss the proposed change
2. **Consider writing an ADR** if the change affects architecture or has long-term implications
3. **Get feedback** from maintainers before starting implementation
4. Follow the same process as small changes once approved

### 🔧 Development Workflow

#### Making Changes

1. **Create a feature branch**
   ```bash
   git checkout -b feat/your-feature-name
   # or
   git checkout -b fix/issue-description
   ```

2. **Install dependencies**
   ```bash
   bin/loci pnpm install
   ```

3. **Make your changes**
   - Write clean, readable code
   - Add tests for new functionality
   - Update documentation if needed

4. **Run the checks locally**
   ```bash
   # Run linting
   bin/loci pnpm nx affected --target=lint
   
   # Run formatting
   bin/loci pnpm nx affected --target=format
   
   # Run tests
   bin/loci pnpm nx affected --target=test
   
   # Run builds
   bin/loci pnpm nx affected --target=build
   ```

#### Code Style

We use [Biome](https://biomejs.dev/) for linting and formatting to keep our codebase consistent:

- **Automatic formatting** - Biome will format your code automatically
- **Linting rules** - Follow the configured Biome rules
- **Configuration** - See our shared config in [`packages/config`](./packages/config/)

Run formatting and linting:
```bash
bin/loci pnpm nx format
bin/loci pnpm nx lint
```

#### Testing

- **Write tests** for new features and bug fixes
- **Run tests locally** before submitting your PR
- **Maintain test coverage** - aim to keep or improve existing coverage
- We use **Jest** as our test runner

#### Documentation

- **Update relevant documentation** when making changes
- **Add JSDoc comments** for new functions and classes
- **Update README** if your changes affect setup or usage
- **Consider ADRs** for architectural decisions

### 📝 Commit Messages

We use [Conventional Commits](https://www.conventionalcommits.org/) to maintain a clear and consistent commit history. All commits are automatically validated using commitlint.

#### Format
```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

#### Types
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to our CI configuration files and scripts
- `chore`: Other changes that don't modify src or test files
- `revert`: Reverts a previous commit

#### Examples
```bash
feat(api): add user authentication endpoint
fix(api): resolve memory leak in request handling
docs: update contributing guidelines
test(api): add unit tests for user service
```

#### Rules
- Use lowercase for type and description
- Don't end the subject line with a period
- Keep the subject line under 72 characters
- Use the imperative mood ("add" not "adds" or "added")

### 🔄 Pull Request Process

1. **Create a pull request** from your feature branch to `main`
2. **Fill out the PR template** with all requested information
3. **Ensure all checks pass** - our CI will run:
   - Linting and formatting checks
   - All tests
   - Build verification
   - Docker build verification
   - Conventional commit validation
4. **Request review** from maintainers
5. **Address feedback** promptly and professionally
6. **Keep your branch up to date** with `main` if needed

#### PR Requirements
- [ ] All CI checks pass
- [ ] Code has been tested locally
- [ ] Documentation updated if necessary
- [ ] Conventional commit format used
- [ ] Linked to relevant issue (if applicable)

## Available Commands

Here are the most commonly used commands in the project:

```bash
# Install dependencies
bin/loci pnpm install

# Run linting
bin/loci pnpm nx lint
bin/loci pnpm nx affected --target=lint

# Run formatting
bin/loci pnpm nx format
bin/loci pnpm nx affected --target=format

# Run tests
bin/loci pnpm nx test
bin/loci pnpm nx affected --target=test

# Build projects
bin/loci pnpm nx build
bin/loci pnpm nx affected --target=build

# Run all checks
bin/loci pnpm nx run-many -t check

# Start API in development mode
bin/loci pnpm nx start:dev api
```

## Project Structure

Loci is organized as a monorepo using npm workspaces, Nx, and Docker:

- **`apps/`** - Applications (e.g., `api`)
- **`packages/`** - Shared packages (e.g., `config`)
- **`docs/`** - Documentation and ADRs
- **`bin/`** - Helper scripts

For more details, see the [README](./README.md#project-structure).

## Getting Help

- **Documentation**: Start with the [README](./README.md) and [ADRs](./docs/architecture/decisions/)
- **Issues**: Search existing issues or create a new one
- **Discussions**: Use GitHub Discussions for questions and ideas

## Code of Conduct

We're committed to providing a welcoming and inclusive environment for all contributors. Please be respectful and professional in all interactions.

## License

By contributing to Loci, you agree that your contributions will be licensed under the [MIT License](./LICENSE).

---

Thank you for contributing to Loci! Your efforts help make this project better for everyone. 🚀