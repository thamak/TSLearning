"use strict";
var $ = require("jquery");
var greeter_1 = require("./entities/greeter");
var greeter = new greeter_1.default("Wassup!");
var msg = greeter.greet();
$("body").html("<h1>" + msg + "</h1>");

//# sourceMappingURL=main.js.map
