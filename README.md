<p align="center">
  <a href="https://assetsglobal.s3-us-west-1.amazonaws.com/gifs/hello.gif">
    <img alt="hello" src="https://assetsglobal.s3-us-west-1.amazonaws.com/gifs/hello.gif" width="206" />
  </a>
</p>

# MERN Blog Boilerplate

### Installation

Install the dependencies in each directory and create appropriate config and env files.

**Backend:**
```sh
$ cd backend
$ npm install
$ npm start
```

##### .env
NODE_ENV=development
APP_NAME=
PORT=8000
CLIENT_URL=http://localhost:3000
DATABASE=
JWT_SECRET=
SENDGRID_API_KEY=
EMAIL_TO=
EMAIL_FROM=noreply@seoblog.com
JWT_RESET_PASSWORD=

**Frontend:**
```sh
$ cd frontend
$ npm install
$ npm run dev
```

##### config.js
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
export const API = publicRuntimeConfig.PRODUCTION
    ? publicRuntimeConfig.API_PRODUCTION
    : publicRuntimeConfig.API_DEVELOPMENT;
export const APP_NAME = publicRuntimeConfig.APP_NAME;
export const DOMAIN = publicRuntimeConfig.PRODUCTION
    ? publicRuntimeConfig.DOMAIN_PRODUCTION
    : publicRuntimeConfig.DOMAIN_DEVELOPMENT;
export const DISQUS_SHORTNAME = publicRuntimeConfig.DISQUS_SHORTNAME;

##### next.config.js
const withCSS = require('@zeit/next-css');
module.exports = withCSS({
&nbsp;&nbsp;&nbsp;&nbsp;publicRuntimeConfig: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;APP_NAME: 'SEO Blog',
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;API_DEVELOPMENT: 'http://localhost:8000/api',
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;API_PRODUCTION: 'https://seoblog.com/api',
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PRODUCTION: false,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DOMAIN_DEVELOPMENT: 'http://localhost:3000',
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DOMAIN_PRODUCTION: 'https://seoblog.com',
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DISQUS_SHORTNAME: 'seoblog-15'
&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;devtool: 'source-map'
});


### License

MIT