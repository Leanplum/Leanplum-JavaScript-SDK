![Leanplum - ](Leanplum.svg)

<p align="center">
<a href="https://nodei.co/npm/leanplum-sdk/"><img src="https://nodei.co/npm/leanplum-sdk.png?downloads=true&downloadRank=true&stars=true"/></a>
</p>
<p align="center">
<img src="https://badge.fury.io/js/leanplum-sdk.svg"/>
<a href="https://raw.githubusercontent.com/Leanplum/Leanplum-iOS-SDK/master/LICENSE"><img src="https://img.shields.io/badge/license-apache%202.0-blue.svg?style=flat" alt="License: Apache 2.0" /></a>
</p>


# Leanplum JavaScript SDK

This is the JavaScript SDK for Leanplum, allowing developers to access and integrate the functionality of Leanplum with applications and devices through JavaScript and HTML5.

Leanplum is a marketing cloud platform that provides A/B testing, messaging, and personalization features for applications.

## Installation

### As a static script

Add leanplum.js to your project:

```javascript
<script src="https://unpkg.com/leanplum-sdk@1.3.0/dist/leanplum.min.js"></script>
```

### As a NPM module

1. Install the package with

    ```bash
    npm install leanplum-sdk
    ```

2. Use the package in your project

    ```javascript
    import Leanplum from 'leanplum-sdk';
    ```

## Usage

```javascript
// This value should be set to true only if you're developing on your server.
var isDevelopmentMode = true;

// Sample variables. This can be any JSON object.
var variables = {
  items: {
    color: 'red',
    size: 20,
    showBadges: true
  },
  showAds: true
};

// Insert your API keys here.
if (isDevelopmentMode) {
  Leanplum.setAppIdForDevelopmentMode("APP_ID", "DEVELOPMENT_KEY");
} else {
  Leanplum.setAppIdForProductionMode("APP_ID", "PRODUCTION_KEY");
}

Leanplum.setVariables(variables);
Leanplum.start(function(success) {
  console.log('Success: ', success);
  console.log('Variables: ', Leanplum.getVariables());
});
```

For a complete reference on how to use the Leanplum JavaScript SDK, refer to the [developer documentation](https://docs.leanplum.com/reference#javascript-setup).

## Development

### Setup

Install yarn package manager and run have it install all dependencies.

```bash
npm i -g yarn
yarn install
```

### Tasks

- `yarn start` - Starts the grunt watch daemon for development.
- `yarn run lint` - Lints all files.
- `yarn run build` - Builds a distribution version of the library.
- `yarn run test` - Runs the unit tests.

## Contributing

Before making a contribution, please read through the [contribution guidelines](https://github.com/Leanplum/Leanplum-JavaScript-SDK/blob/master/CONTRIBUTING.md).

Once you have done that:

1. Fork the project
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request to the develop branch

## Release / Building

```bash
git flow release start "NEW_VERSION"
yarn install
./bump_version.sh OLD_VERSION NEW_VERSION
yarn run build
yarn run test
git flow release finish "NEW_VERSION"
```

# Test Coverage

Run:
```bash
yarn run test --coverage
```

## License

See the [LICENSE](https://github.com/Leanplum/Leanplum-JavaScript-SDK/blob/master/LICENSE) file.
