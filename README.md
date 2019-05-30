# generator-coderelm-express-mvc 
> This generator creates copy of [Coderelm Express MVC](https://github.com/Arunkumarcs/coderelm-express-mvc) setup from Coderelm team.

> Supercharged Express Generator with below features

* [Express Js](https://expressjs.com/) with MVC code base.
* [Sequalize ORM](http://docs.sequelizejs.com/)
* [Nunjucks template engine](https://mozilla.github.io/nunjucks/) 
* Testing framework [Jest](https://jestjs.io/) and [Puppeteer](https://github.com/GoogleChrome/puppeteer)
* [GraphQl](https://graphql.org/)

## Installation

First, install [Yeoman](http://yeoman.io) and generator-coderelm-express-mvc using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g @arunkumarcoderelm/generator-coderelm-express-mvc
```

Then generate your new project:

```bash
yo @arunkumarcoderelm/coderelm-express-mvc
```

## Getting Started

Changes database connection in `db/config/config.json` this is your sequalize connection config file.

Start the project using below command.

```bash
npm start  or yarn start
```

We have integrated GraphQl as default feature so once the server start you can view the GraphQl plaground in below
url

```bash
http://localhost:3000/api/
```

## License

MIT