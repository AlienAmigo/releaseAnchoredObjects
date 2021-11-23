// TODO: []
// TODO: ui
//
//
#target indesign

const SCRIPT_NAME = "releaseAnchoredObjects";
const SCRIPT_VERSION = 0.1;

// ============== MAIN
function main() {
  if (!app.documents.length) {
    exit();
  }

  const Options = {
    leaveTextFramesOnly: true,
  };

  function releaseObj(obj) {
    var parentPage = obj.parentPage;
    var parentSpread = parentPage.parent;
    var doubleObj = obj.duplicate(parentSpread, [0, 0]);
    doubleObj.fit(FitOptions.FRAME_TO_CONTENT);
    doubleObj.select();
    obj.remove();
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
          for (var tf = 0; tf < selectedItem.textFrames.length; tf++) {
            releaseObj(selectedItem.textFrames[tf]);
          }

          for (var rc = 0; rc < selectedItem.rectangles.length; rc++) {
            if (!Options.leaveTextFramesOnly) {
              releaseObj(selectedItem.rectangles[rc])
            }
            else {
              selectedItem.rectangles[rc].remove();
            }
          }
        }
      }
    }
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
