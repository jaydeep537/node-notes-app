const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");
yargs.version("1.0.0");
yargs.command({
  command: "add",
  describe: "Add command Added",
  builder: {
    title: {
      describe: "Title Description",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Body Discription",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "remove command",
  builder: {
    title: {
      describe: "Remove Note",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});
yargs.command({
  command: "read",
  describe: "read command",
  builder: {
    title: {
      describe: "Read Title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});
yargs.command({
  command: "list",
  describe: "list command",
  handler() {
    notes.listNotes();
  },
});

yargs.parse();
