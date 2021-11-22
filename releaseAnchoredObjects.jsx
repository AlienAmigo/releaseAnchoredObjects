
const SCRIPT_NAME = "TestScript";
const SCRIPT_VERSION = 0.1;

// ============== MAIN
function main() {
  if (!app.documents.length) {
    exit();
    };

  var myDoc = app.activeDocument;
  var anchoredOjbects = myDoc.anchoredOjbects.length;
  alert(anchoredOjbects.length);
}
//=============== END OF MAIN
}

app.doScript(main, ScriptLanguage.JAVASCRIPT, undefined, UndoModes.entireScript, SCRIPT_NAME);
