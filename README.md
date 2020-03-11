# README #

ReactJS League of Leagends Fantasy application

## Installation

```
npm install
```

## Build and Run

Builds the site, starts a webserver and kicks off a watch task to look for changes.

```
gulp start
```

### I need a test or production build

`gulp test:build` or `gulp prod:build`


## How to deploy

Ensure you have built the relevant assets and do the following (delete as appropriate):

**IMPORTANT:** Production deployments currently immediately override production assets. Please ensure you are happy with what is being deployed before starting the process.

```
gulp deploy:{dev|test|prod}
```
