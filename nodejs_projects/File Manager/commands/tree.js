const fs = require("fs");
const path = require("path");

function treeFn(dirPath) {
	if (dirPath == undefined) {
		treeHelper(process.cwd(), "");
		return;
	} else {
		let doesExist = fs.existsSync(dirPath);

		if (doesExist) {
			treeHelper(dirPath, "");
		} else {
			console.log("Kindly enter the correct path");
			return;
		}
	}
}

function treeHelper(dirPath, indent) {
	// is file or folder
	let isFile = fs.lstatSync(dirPath).isFile();

	if (isFile) {
		let fileName = path.basename(dirPath);
		console.log(indent + "├──" + fileName);
	} else {
		let dirName = path.basename(dirPath);
		console.log(indent + "└──" + dirName);
		let childrens = fs.readFileSync(dirPath);
		for (let index = 0; index < childrens.length; index++) {
			let childPath = path.join(dirPath, childrens[i]);
			treeHelper(childPath, indent + "\t");
		}
	}
}

module.exports = {
    treeKey: treeFn
}