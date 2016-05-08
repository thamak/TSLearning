/// <refrence path="../app/entities/interfaces.d.ts" />

import { expect } from "chai";
import Greeter from "../app/entities/greeter";

describe("Greeter Class", () => {

    it("Should set msg when an instance is created", () => {
        let expected = "world!";
        let greater = new Greeter(expected);
        expect(greater.greeting).eql(expected);
    });

    it("Should greet", () => {
        let greet = "Whats up!";
        let greater = new Greeter(greet);
        let actual = greater.greet();
        let expected = `Hey, ${greet}`;
        expect(actual).eql(expected);
    });

});
