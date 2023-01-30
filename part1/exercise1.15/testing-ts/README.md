# testing-ts

## Prerequisites

Install [node](https://nodejs.org/en/download/). 

Example node install instructions for LTS node 16.x:
```
curl -sL https://deb.nodesource.com/setup_16.x | bash
sudo apt install -y nodejs
```

Check your install with `node -v && npm -v`

Install all packages with `npm install`

## Starting in production mode

First you need to build the static files with `npm run build`

This will generate them into `dist` folder.

## Starting in development mode

Run `npm run dev`

This will run the project via `nodemon`

`nodemon` will detect any change you make to the code and will restart the program

## Testing that the program is running

```
curl http://localhost:8080
```

This should return `Hello, world!`