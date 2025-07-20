// init.js
let command = require("command");

command.register({
  name: "hi",
  execute: () => {
    console.log("Hi.");
  },
});
