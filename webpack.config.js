const fs = require("fs")
const path = require("path")

if(!fs.existsSync(path.resolve(__dirname, "dist"))){
	fs.mkdirSync(path.resolve(__dirname, "dist"))
}

module.exports = {
	entry: "./index.js",
	output: {
		filename: "browser.js",
		path: path.resolve(__dirname, "dist")
	}
}