const fs = require('fs');

try {
    var fd = fs.openSync('/dev/stdin', 'rs');
} catch (e) {
    var fd = process.stdin.fd;
}

function readLine() {
    // Taken from https://github.com/JohnEarnest/ok/issues/6
    var line = '';
    while (true) {
        var buffer = new Buffer.alloc(1);
        fs.readSync(fd, buffer, 0, 1);
        var c = String.fromCharCode(buffer[0]);
        if (c === '\n') {
            break;
        }
        line += c;
    }
    return line;
}

function getString(command) {
    console.log(command);
    return readLine();
}

function getInteger(command) {
    response = getString(command);
    return parseInt(response, 10);
}

function getBoolean(command) {
    response = getString(command);
    return response === 'true';
}

function getAck(command) {
    response = getString(command);
    return response === 'ack';
}

function mazeWidth() {
    return getInteger('mazeWidth');
}

function mazeHeight() {
    return getInteger('mazeHeight');
}

function wallFront() {
    return getBoolean('wallFront');
}

function wallRight() {
    return getBoolean('wallRight');
}

function wallLeft() {
    return getBoolean('wallLeft');
}

function moveForward() {
    ack = getAck('moveForward');
    if (!ack) {
        throw new Error('Cannot move forward');
    }
}

function turnRight() {
    getAck('turnRight');
}

function turnLeft() {
    getAck('turnLeft');
}

function setWall(x, y, direction) {
    console.log('setWall ' + x + ' ' + y + ' ' + direction);
}

function clearWall(x, y, direction) {
    console.log('clearWall ' + x + ' ' + y + ' ' + direction);
}

function setColor(x, y, color) {
    console.log('setColor ' + x + ' ' + y + ' ' + color);
}

function clearColor(x, y) {
    console.log('clearColor ' + x + ' ' + y);
}

function clearAllColor() {
    console.log('clearAllColor');
}

function setText(x, y, text) {
    console.log('setText ' + x + ' ' + y + ' ' + text);
}

function clearText(x, y) {
    console.log('clearText ' + x + ' ' + y);
}

function clearAllText() {
    System.out.println('clearAllText');
}

function wasReset() {
    return getBoolean('wasReset');
}

function ackReset() {
    getAck('ackReset');
}

module.exports = {
    mazeWidth: mazeWidth,
    mazeHeight: mazeHeight,
    wallFront: wallFront,
    wallRight: wallRight,
    wallLeft: wallLeft,
    moveForward: moveForward,
    turnRight: turnRight,
    turnLeft: turnLeft,
    setWall: setWall,
    clearWall: clearWall,
    setColor: setColor,
    clearColor: clearColor,
    clearAllColor: clearAllColor,
    setText: setText,
    clearText: clearText,
    clearAllText: clearAllText,
    wasReset: wasReset,
    ackReset: ackReset,
};
