"use strict";
var chai_1 = require("chai");
var greeter_1 = require("../app/entities/greeter");
describe("Greeter Class", function () {
    it("Should set msg when an instance is created", function () {
        var expected = "world!";
        var greater = new greeter_1.default(expected);
        chai_1.expect(greater.greeting).eql(expected);
    });
    it("Should greet", function () {
        var greet = "Whats up!";
        var greater = new greeter_1.default(greet);
        var actual = greater.greet();
        var expected = "Hey, " + greet;
        chai_1.expect(actual).eql(expected);
    });
});

//# sourceMappingURL=greeter.test.js.map
