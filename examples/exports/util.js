#!/usr/bin/env node

'use strict';
const say = (word) => {
	console.log(word);
}

// function say(word) {
// 	console.log(word);
// }

exports.sayAdd = (a, b) => { say(a + b); }
exports.saySubtract = (a, b) => { say(a - b); }