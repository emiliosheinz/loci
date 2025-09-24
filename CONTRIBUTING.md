# Contributing to Loci

Thank you for your interest in contributing to Loci. This guide outlines how to participate in the development process.

## Before You Start

- Read the [README](./README.md) for development setup and project structure
- Review our [product vision and strategy](https://github.com/emiliosheinz/loci/wiki/Product-vision,-features,-and-strategy)
- Check the [Architecture Decision Records](./docs/architecture/decisions/) for technical context

## How to Contribute

### Reporting Issues
- Search existing issues before creating new ones
- Use issue templates when available
- Include clear reproduction steps and expected behavior

### Making Changes
1. Fork the repository and create a feature branch from `main`
2. Follow the development setup in the [README](./README.md)
3. Make your changes with appropriate tests and documentation
4. Ensure all checks pass locally
5. Submit a pull request

For significant changes, open an issue first to discuss the approach. Consider writing an ADR for architectural decisions.

## Standards

### Commit Messages
We use [Conventional Commits](https://www.conventionalcommits.org/) format. All commits are validated automatically.

```
<type>: <description>
```

Example: `feat: add user authentication`

### Code Quality
- Follow Biome linting and formatting rules (see [packages/config](./packages/config/))
- Write tests for new functionality
- Maintain existing test coverage
- Update documentation for user-facing changes

### Pull Requests
- Fill out the PR template completely
- Ensure all CI checks pass
- Link to related issues
- Respond to feedback promptly

## Getting Help

- Start with the [README](./README.md) and existing documentation
- Search or create GitHub issues for bugs and feature requests
- Use GitHub Discussions for questions and ideas

By contributing, you agree that your contributions will be licensed under the [MIT License](./LICENSE).