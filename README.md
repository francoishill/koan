*AuKoNoMS* Stack is a boilerplate that provides a nice starting point for full stack JavaScript Web development with [Koa](http://koajs.com/), [Aurelia](http://aurelia.io/), and [Node.js](http://www.nodejs.org/) along with [MongoDB](https://www.mongodb.org/) and [WebSockets](https://developer.mozilla.org/en/docs/WebSockets). A summary of tech stack:

* **Client**: Aurelia and Twitter Bootstrap with pure html partials (no server side rendering so it's fully static and CDN ready). Bower packages are located at `client\bower_packages`.

* **Server**: Koa for RESTful API on top of Node.js v1.0+

* WebSockets along with JSON-RPC is used for real-time client-server communication and browser sync.

* OAuth 2 is used for social authentications. Instead of auth cookies, we use JWT along with HTML5 *local storage*.

* Grunt tasks are used to facilitate development and testing.
TODO: Change to JSPM and Gulp!

* MongoDB for persistence.

## Live Example
TODO

## TODO
Change to Aurelia Stack defaults:
- Gulp and JSPM
- Aurelia bindings
- Aurelia app.js
- Stulys or SCSS for styles (css)
- ES6 + ES7 syntax
- Aurelia Views + ViewModels
- Use Channels such as [CSP](https://github.com/ubolonton/js-csp)
- Remove jQuery and Lodash!!

Allow RethinkDB via Sockets using [aurelia-rethink-bindtable](https://github.com/kristianmandrup/aurelia-rethink-bindtable)

## Getting Started
Make sure that you have Node.js (v1.0 or above) and MongoDB v3.x (running on the default port 27017) installed on your computer. To get started with AuKoNoMS stack:

```bash
git clone ...
cd koan
npm install
npm start
```

Your application should run on the 3000 port so in your browser just go to [http://localhost:3000](http://localhost:3000). If you want to run tests, simply type:

```bash
npm test
```

## Configuration
All configuration is specified in the [server/config](server/config/) folder, particularly the [config.js](server/config/config.js) file. Here you can hook up any social app keys if you want integration with Twitter, Facebook, or Google.

## Heroku Deployment
Before you start make sure you have <a href="https://toolbelt.heroku.com/">heroku toolbelt</a> installed.

```bash
git init
git add .
git commit -m "initial version"
heroku apps:create
heroku addons:add mongohq
heroku config:add NODE_ENV=production
git push heroku master
heroku open
```

Optionally, you can pass credentials to KOAN via environment variables as it might not be secure to store them in your repo. Note that if you do this, you'll need to adjust other configuration options accordingly (i.e. FB/Google client IDs, etc.).

```bash
heroku config:add SECRET=jwt_secret PASS=login_pass FACEBOOK_SECRET=facebook_oauth_secret GOOGLE_SECRET=google_oauth_secret
```

## Testing
You can run all the tests with `npm test`. Tests are run with:
* Client (unit): Jasmine + Karma
* Client (e2e): Jasmine + Protractor
* Server: Mocha/SuperTest/Should (Koa default)

Server tests utilize [co](https://github.com/tj/co) so you can use `*`/`yield` expressions while writing tests. See [/test/server/users.js](test/server/users.js) as an example.

## Credits
Client side is entirely based on the official: [Aurelia Skeleton](https://github.com/aurelia/skeleton-app). 

Server side simply utilizes generally accepted Koa middleware and Node.js best practices.

## License
MIT
