const assert = require("assert");

describe("Simple Math Test", () => {
    it("Should return 2", () => {
        assert.equal(1 + 1, 2);
    });
    it("should return 9", () => {
        assert.equal(3 * 3, 9);
    });
    it("should return 99", () => {
        assert.equal(33 * 3, 99);
    });
})