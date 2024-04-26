"use strict";
//Task:NO 3
var personName = "Malik Anees";
console.log("lowercase:", personName.toLowerCase());
console.log("uppercase:", personName.toUpperCase());
console.log("titlecase:", personName.replace(/\b\#/g, function (c) { return c.toLocaleLowerCase(); }));
