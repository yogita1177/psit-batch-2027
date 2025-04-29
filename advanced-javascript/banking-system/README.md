`npm init -y`

`npm install typescript @types/node --save-dev`

`npx tsc --init` -> this will create a `tsconfig.json` file

Changes to be made in `tsconfig.json`
`"outDir": "./dist"`
`"target": "es6"`

Change script property in `package.json`

```json
"scripts": {
    "start": "node dist/index.js",
    "build": "tsc",
    "test": "echo \"Error: no test specified\" && exit 1"
}
```

Build using `npx tsc` or `npm run build`

Run using `npm start`
