const { exf } = require('./echo');

// Mock console.log to capture output
global.console = {
    log: jest.fn(),
};

test('exf function should print "echo" 5 times', () => {
    exf("echo", 5);
    expect(console.log).toHaveBeenCalledTimes(5);
    expect(console.log).toHaveBeenCalledWith("echo");
});

test('exf function should print "JS from server" 10 times', () => {
    exf("JS from server", 10);
    expect(console.log).toHaveBeenCalledTimes(10);
    expect(console.log).toHaveBeenCalledWith("JS from server");
});
