# SEAP Core files for ESA, PIP and C-App

## Webpack and npm

* `npm install`
* `npm start` spins up a dev server to track any changes live
* `npm run build` creates a production dir called `capp_portal` containing c-app.org.uk site elements, minified
* `npm test` runs basic tests on capp_portal

## What everything is

* The files used in deployment are in `src`.
  * c-app.org.uk is built from: `index.html`, `privacy.html`, `css` dir and `images` dir.
  * esa-assessment.support and pip-assessment.support utilise `css`, `helpers`, `images`, and `js` dir in their builds. Please see Readme at `neontribe/seap-esa` and `neontribe/SEAP-PIP` for further information.

## Adding secure env vars to deploy.sh

* `deploy.sh` makes use of some encrypted vars used in deployment. To replace them, first delete the existing ones. To add new ones into `.travis.yml` use travis encrypt on command line. (e.g. `travis encrypt GIT_USER=mickeymouse --add`)

## Deploy procedure for c-app.org.uk portal site

__Staging__
* We are using Travis (.travis.yml) and grunt to build test (Gruntfile.js) and deploy (deploy.sh)
* On EVERY push, pull request or merge Travis uses Grunt test task to run all _test.coffee and _test.js files in /tests
* If the tests pass, Travis commits the new build to gh-pages branch (our staging
server) http://neontribe.github.io/seap_core

__Live__
* When release is tagged and pushed
`git tag -a v0.0.0-beta -m "description of release updates"`
`git push origin --tags`
* Use Travis to carry out procedure as for Staging
* If tests pass, and build is successful, detect release tag and push the new
build to the live site - overwriting whatever is there.
* A release.txt will be added at site root with tag name and datetime

## Deploy procedure for esa-assessment.support and pip-assessment.support

* Both sites will pull resources from the master branch in this repo as part of
build process. More information can be found at:
https://github.com/neontribe/seap_esa and https://github.com/neontribe/SEAP_PIP
