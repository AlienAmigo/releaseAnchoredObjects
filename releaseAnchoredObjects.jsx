const SCRIPT_NAME = "releaseAnchoredObjects";
const SCRIPT_VERSION = 0.1;

// ============== MAIN
function main() {
  if (!app.documents.length) {
    exit();
  }

  if (app.selection.length) {
    for (var s = 0; s < app.selection.length; s++) {
      var selectedItem = app.selection[s];
      if (
        selectedItem.constructor.name == "Word" ||
        selectedItem.constructor.name == "Text"
      ) {
        if (
          selectedItem.textFrames.length ||
          selectedItem.rectangles.length
        ) {
          alert(selectedItem.textFrames.length + "\n" + selectedItem.rectangles.length);
          for (tf in selectedItem.textFrames) {

          }
        }
      }
    }

    // for (s in app.selection) {
    // }
  } else {
  }
  // var myDoc = app.activeDocument;
  // var myStories = myDoc.stories;
  // var myParents = [];
  //   myParents.push(myStories[8].parent.constructor.name);
  //=============== END OF MAIN
}

app.doScript(
  main,
  ScriptLanguage.JAVASCRIPT,
  undefined,
  UndoModes.entireScript,
  SCRIPT_NAME
);
