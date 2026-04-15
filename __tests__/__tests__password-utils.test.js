const {
    generateStrongPassword,
    isStrongPassword,
} = require("../index");

describe("Password Utilities", () => {
    test("isStrongPassword should return false for weak password", () => {
        expect(isStrongPassword("Hello World")).toBe(false);
    });

    test("isStrongPassword should return true for strong password", () => {
        expect(isStrongPassword("pC%mD8TpCKn2")).toBe(true);
    });

    test("generateStrongPassword should return password with requested length", () => {
        const password = generateStrongPassword(12);
        expect(password).toHaveLength(12);
    });
    test("generateStrongPassword should always return a strong password", () => {
        const password = generateStrongPassword(12);
        expect(isStrongPassword(password)).toBe(true);
    });
});