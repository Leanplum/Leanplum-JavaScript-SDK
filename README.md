# Leanplum-JavaScript-SDK
This is the JavaScript SDK for Leanplum, allowing developers to access and integrate the functionality of Leanplum with applications and devices through JavaScript and HTML5. Leanplum is an application development platform that provides mobile A/B testing, messaging functionality, personalization, and more features for applications.
## Installation
Add leanplum.js to your project:
```javascript
<script type="text/javascript" src="leanplum.js"></script>
```
## Usage
Initialize Leanplum.

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

### Testing
Run tests: `mocha -r mock-local-storage -r test/specs/helpers/setup.js -r test/specs/helpers/chai.js test/specs/testLeanplum.js`

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request to develop branch.

## Release / Building
- `git flow release start "NEW_VERSION"`
- `yarn install`
- `./bump_version.sh OLD_VERSION NEW_VERSION`
- `grunt build`
- `grunt test`
- `git flow release finish "NEW_VERSION"`

# Test Coverage
Run:
`npm i -g nyc`
`nyc mocha -r mock-local-storage -r test/specs/helpers/setup.js -r test/specs/helpers/chai.js test/specs/testLeanplum.js`

## License
See LICENSE file.
