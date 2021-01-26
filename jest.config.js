module.exports = {
	"moduleFileExtensions": [
		"js",
		"jsx"
	],
	"transformIgnorePatterns": [
		"/node_modules/"
	],
	"transform": {
		'.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
			'jest-transform-stub',
		'^.+\\.(js|jsx)?$': 'babel-jest'
	},
	"moduleNameMapper": {
		'^@/(.*)$': '<rootDir>/src/$1'
	},
	"collectCoverage": true,
	"collectCoverageFrom": [
		"src/**/*.{js,jsx}"
	],
	"coverageThreshold": {
		"global": {
			"branches": 75,
			"functions": 60,
			"lines": 78,
			"statements": 78
		}
	}
}
