const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();
  // const duplicateNotes = notes.filter((n) => n.title === title);
  const duplicateNote = notes.find((n) => n.title === title);
  if (!duplicateNote) {
    const note = {
      title: title,
      body: body,
    };
    notes.push(note);
    saveNote(notes);
    console.log(chalk.green.inverse("Note added successfully!"));
  } else {
    console.log(chalk.red.inverse(`Duplicate Note Found with title ${title}`));
  }
};

const saveNote = (notes) => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const jsonData = dataBuffer.toString();
    return JSON.parse(jsonData);
  } catch (error) {
    return [];
  }
};
removeNote = (title) => {
  const notes = loadNotes();
  const filteredNotes = notes.filter((e) => e.title != title);
  if (filteredNotes.length != notes.length) {
    saveNote(filteredNotes);
    console.log(chalk.green.inverse("Note removed successfully"));
  } else {
    console.log(chalk.red.inverse(`No notes found with title ${title}`));
  }
};
const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Your Notes"));
  notes.forEach((note) => {
    console.log(note.title, ":", note.body);
  });
};
const readNote = (title) => {
  const notes = loadNotes();
  const searchedNote = notes.find((note) => note.title === title);
  if (searchedNote) {
    console.log(chalk.inverse.yellow("Notes Found"));
    console.log("Title:", chalk.green(searchedNote.title));
    console.log("Body:", searchedNote.body);
  } else {
    console.log(chalk.inverse.red("No Notes Found"));
  }
};
module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
