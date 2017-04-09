module.exports = {
	"extends": "google",
	"parserOptions": {
		"ecmaVersion": 6,
		"sourceType": "module",
	},
	"env": {
		"browser": true,
		"node": true,
		"es6": true
	},
	"rules": {
		"eqeqeq": "off",
		"max-len": [2, 80, 2], // specify the maximum length of a line in your program (off by default)
	},
};
