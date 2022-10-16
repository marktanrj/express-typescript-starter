# Express.js and Typescript

An Express.js project implemented using Typescript

# Installation

Node version
```
nvm use
```

Install
```
pnpm install 
```

For development:
```
pnpm dev
```

To start:
```
pnpm start
```

To debug in visual studio code:
```
pnpm debug
```

Then run the `launch.json` configuration inside visual studio code `f5`.  You should now be able to set breakpoints in your typescript.

Test
```
yarn run test
```

Test Watch
```
yarn run test:watch
```

Build to `./dist`
```
yarn run build
```

Browse to http://localhost:4000


# Folder structure

```
├── docker-compose.yaml
├── Dockerfile
├── nodemon.json
├── package.json
├── package-lock.json
├── README.md
├── spec
│   ├── index.spec.ts
│   └── model.spec.ts
├── src
│   ├── controllers
│   │   └── index.server.controller.ts
│   ├── database
│   │   └── index.ts
│   ├── helpers
│   │   └── index.ts
│   ├── index.ts
│   ├── models
│   │   └── example.model.ts
│   ├── public
│   │   ├── favicon.ico
│   │   └── stylesheets
│   ├── routes
│   │   └── index.server.route.ts
│   ├── server
│   │   └── index.ts
│   ├── socket
│   │   └── index.ts
│   ├── tsconfig.json
│   ├── var
│   │   └── config.ts
│   └── views
│       ├── error.pug
│       ├── index.pug
│       └── layout.pug
├── tsconfig.json
└── tslint.json
```

# Docker

Run the image `docker-compose up`

Open `http://localhost:3000`