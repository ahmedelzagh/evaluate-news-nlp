import "babel-polyfill"

import { handleSubmit } from '../src/client/js/formHandler'

// The describe() function takes two arguments - a string description, and a test suite as a callback function.
// A test suite may contain one or more related tests
describe("Testing the submit functionality", () => {
    test("Testing the handleSubmit() function", () => {
            expect(handleSubmit).toBeDefined();
})})
