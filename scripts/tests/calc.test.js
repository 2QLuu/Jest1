/**
 * @jest-environment jsdom
 */

const { TestScheduler } = require("jest");
const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20,22)).toBe(42);
        });
        test("should return 60 for 20 + 40", () => {
            expect(addition(20,40)).toBe(60);
        });
        

    });
    describe("Subtraction function", () => {

    });
    describe("Multiply function", () => {

    });
    describe("Division function", () => {

    });
})