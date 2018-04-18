#!/usr/bin/env node
// https://qiita.com/toshihirock/items/e98363a4c99950be5abc
'use strict';
var util = require('./util');

util.sayAdd(1, 2); // 3
util.saySubtract(2, 1); //1
util.say // error. util.say is not a function