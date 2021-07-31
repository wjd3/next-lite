# `next-lite`

## The Minimalist (Yet Opinionated) [Next.js](http://nextjs.org/) Starter Template

### Weighs in at a bundle size of 34kb vs Create-Next-App's 70kb

- Replaces React with [Preact](https://preactjs.com/) at build time
- Pre-configured with:

  - [Tailwind CSS](https://tailwindcss.com) - CSS framework with minimal effect on bundle size
  - [Zustand](https://zustand.surge.sh/) - ~1kb State management/Redux substitute
  - [React Hook Form](https://react-hook-form.com/) - lightweight, performant, and extensible form management library
  - [Typescript](https://www.typescriptlang.org/) - you know
  - [Conventional Changelog](https://github.com/commitizen/cz-conventional-changelog) and [Standard Version](https://github.com/conventional-changelog/standard-version) - project versioning support

**[Use this template with your next project!](https://github.com/dayvista/next-light/generate)**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fdayvista%2Fnext-light)

[![MIT License](https://img.shields.io/github/license/othneildrew/best-readme-template.svg?style=for-the-badge)](https://github.com/dayvista/next-light/blob/master/LICENSE.txt)

## Versioning

### Setup

```js
npx commitizen init cz-conventional-changelog --save-dev --save-exact
```

#### Making Commits (instead of `git commit -m "your message here"`)

```js
npm run commit
```

#### Bumping Versions

```js
npm run release
```

#### Bumping First Major Version

```js
npm run release -- --release-as 1.0.0
```

## Contributing

1. Fork the Project
2. Create your feature branch (`git checkout -b feature/SomeCoolFeature`)
3. Commit your changes (`git commit -m 'Add some SomeCoolFeature'`)
4. Push to the branch (`git push origin feature/SomeCoolFeature`)
5. Open a PR (pull request)

## License

Distributed under the MIT License. See [`LICENSE.txt`](https://github.com/dayvista/next.js-template/blob/master/LICENSE.txt) for more information.

## Acknowledgements

- [Next.js - Replace React with Preact](https://darrenwhite.dev/blog/nextjs-replace-react-with-preact) by [Darren White](https://darrenwhite.dev/), with inspiration from [Lee Robinson](https://leerob.io/)
- [Automate JavaScript project versioning with commitizen and standard-version](https://medium.com/tunaiku-tech/automate-javascript-project-versioning-with-commitizen-and-standard-version-6a967afae7) by [Christian Ing Sunardi](https://medium.com/@christianingsunardi)
- [Best README Template](https://github.com/othneildrew/Best-README-Template)
