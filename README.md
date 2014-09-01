Latest Release
==============

Simple wrapper arround the [Github API](https://developer.github.com/v3/repos/releases/) to determine the latest release of a project.

The primary use case for this is generating a link pointing directly to the zip or tar download of your project, using the `zipball_url` or `tarball_url` property.

## Installation

```bash
$ npm i --save latest-release
```

## Usage

```javascript
var latest = require('latest-release');

// call with user/organisation and project
// for this specific project that would be:
latest('jbnicolai', 'latest-release', function (release, err) {

  console.log('Latest released version is: ' + release.name);
  console.log('This can be downloaded directly at: ' + release.zipball_url);

});
```

## API

## function (<github-user>, <github-project, cb(<release-json>, <err>))

The package is called with a Github username and the name of a project, and is provided a callback.
Said callback will be invoked with the JSON data returned from the Github API, or an error object if anything failed.
