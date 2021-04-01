# Full-Stack Next.js Starter Template

## TypeScript, form handling, back-end + auth integration, versioning, and more, using entirely open-source dependencies

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fdayvista%2Fnext.js-template)
[![MIT License](https://img.shields.io/github/license/othneildrew/best-readme-template.svg?style=for-the-badge)](https://github.com/dayvista/next.js-template/blob/master/LICENSE.txt)

## Includes

- [Next.js](https://nextjs.org/) 😉
- [TypeScript](https://nextjs.org/docs/basic-features/typescript)

### Data Management / Auth

- [Supabase](https://supabase.io) (Postgres Database w/ Built-in Auth & Rest API, Realtime Websocket Sync, and More!)
- [Next Iron Session](https://github.com/vvo/next-iron-session) (Encrypted Server-Side Cookies for Auth/Data Management)
- [Axios](https://github.com/axios/axios) (Simplified Approach to Fetching Data)
- [Jotai](https://github.com/pmndrs/jotai) (Lightweight Local State Management)
- [SWR](https://swr.vercel.app/) (Server-Side State Management w/ Caching)

### Design / UI / UX

- [Chakra UI](https://chakra-ui.com) (Wonderful Component / Design Library)
- [Framer Motion](https://www.framer.com/api/motion/) (Equally Wonderful Animation Library)

### Forms

- [React Hook Form](https://react-hook-form.com/) (Simple and Performant Form Library)
- [Vest](https://ealush.com/vest/#/) (Validation for Forms, Integrates w/ React Hook Form)

### Versioning

#### Initial Versioning Setup

1. ```js
   npm install -g commitizen
   ```

2. ```js
   commitizen init cz-conventional-changelog --save-dev --save-exact
   ```

#### General Commits / Versioning

##### Creating Commits (instead of using `git add .` + `git commit -m "your message"`)

```js
npm run commit
```

##### Bumping Versions

```js
npm run release

```

##### Bumping First Major Version

```js
npm run release -- --release-as 1.0.0
```

## TODO

- Explain general usage / deployment
- Create How-To section (similar to the `Versioning` section)
- Add [Ackee analytics](https://docs.ackee.electerious.com/#/)
- Add [Next-SEO](https://github.com/garmeeh/next-seo)
- Add testing library (such as [Cypress](https://www.cypress.io/))
- Consider moving to an entirely free/non-hosted back-end solution and leave database hosting up to the user (Next-Auth (Auth), Postgraphile (GraphQL adapter for Postgres DBs), Knex (SQL migrations w/ JavaScript-syntax), etc.)

## Contributing

1. Fork the Project
2. Create your feature branch (`git checkout -b feature/SomeCoolFeature`)
3. Commit your changes (`git commit -m 'Add some SomeCoolFeature'`)
4. Push to the branch (`git push origin feature/SomeCoolFeature`)
5. Open a PR (pull request)

## License

Distributed under the MIT License. See [`LICENSE.txt`](https://github.com/dayvista/next.js-template/blob/master/LICENSE.txt) for more information.

## Acknowledgements

- [Best README Template](https://github.com/othneildrew/Best-README-Template)
- [Automate JavaScript project versioning with commitizen and standard-version](https://medium.com/tunaiku-tech/automate-javascript-project-versioning-with-commitizen-and-standard-version-6a967afae7) by [Christian Ing Sunardi](https://medium.com/@christianingsunardi)
