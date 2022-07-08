const greet = require('./greet');

test('if name is Elizabeth, return "Hello, Elizabeth"', () => {
    expect(greet("Elizabeth")).toBe("Hello, Elizabeth");
})