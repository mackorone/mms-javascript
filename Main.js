const API = require('./API');

function log(text) {
    console.error(text);
}

function main() {
    log("Running...");
    API.setColor(0, 0, 'G');
    API.setText(0, 0, "abc");
    while (true) {
        if (!API.wallLeft()) {
            API.turnLeft();
        }
        while (API.wallFront()) {
            API.turnRight();
        }
        API.moveForward();
    }
}

main();
