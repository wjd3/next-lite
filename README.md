# Full-Stack Next.js Starter Template

## with TypeScript, form handling, back-end + auth integration, versioning, and more

[![MIT License][https://img.shields.io/github/license/othneildrew/best-readme-template.svg?style=for-the-badge]][https://github.com/othneildrew/best-readme-template/blob/master/license.txt]
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%dayvista%2Fnext.js-template)

---

## Includes

- [Next.js](https://nextjs.org/) 😉
- [TypeScript](https://nextjs.org/docs/basic-features/typescript)

### Data Management / Auth

- [Supabase (Postgres Database w/ Built-in Auth, Realtime Sync, and More!)](https://supabase.io)
- [Next Iron Session (Encrypted Server-Side Cookies for Auth/Data Management)](https://github.com/vvo/next-iron-session)
- [Axios (Simplified Approach to Fetching Data)](https://github.com/axios/axios)
- [Jotai (Lightweight Client-Side State Management)](https://github.com/pmndrs/jotai)
- [SWR (Server-Side State Management w/ Caching)](https://swr.vercel.app/)

### Design / UI / UX

- [Chakra UI (Wonderful Component / Design Library)](https://chakra-ui.com)
- [Framer Motion (Equally Wonderful Animation Library)](https://www.framer.com/api/motion/)

### Forms

- [React Hook Form (Simple and Performant Form Library)](https://react-hook-form.com/)
- [Vest (Validation for Forms, Integrates w/ React Hook Form)](https://ealush.com/vest/#/)

### Versioning

#### Initial Versioning Setup

1. ```js
   npm install -g commitizen
   ```

2. ```js
   commitizen init cz-conventional-changelog --save-dev --save-exact
   ```

#### General Commits / Versioning

- To create commits (instead of `git add .` + `git commit -m "your message"`):

```js
npm run commit
```

- To bump versions:

```js
npm run release

```

- Bumping first major version:

```js
npm run release -- --release-as 1.0.0
```

---

## TODO

- Add testing library (such as [Cypress](https://www.cypress.io/)) with instructions on initialization/usage

## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/SomeCoolFeature`)
3. Commit your Changes (`git commit -m 'Add some SomeCoolFeature'`)
4. Push to the Branch (`git push origin feature/SomeCoolFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

## Acknowledgements

- [Best README Template](https://github.com/othneildrew/Best-README-Template)
- [Medium Article by Christian Ing Sunardi: Automate JavaScript project versioning with commitizen and standard-version](https://medium.com/tunaiku-tech/automate-javascript-project-versioning-with-commitizen-and-standard-version-6a967afae7)
