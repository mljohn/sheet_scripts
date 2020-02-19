function onOpen(e) {
  SpreadsheetApp.getUi()
  .createMenu('Scripts')
  .addItem('Multi-select for this cell...', 'showDialog')
  .addToUi();
}


function showDialog() {  
  var html = HtmlService.createTemplateFromFile('dialog').evaluate();
  SpreadsheetApp.getUi()
  .showSidebar(html);
}


var getDisplayValues = function() {
  var rangeNameInNote = SpreadsheetApp.getCurrentCell().getNote()
  var displayValues = SpreadsheetApp.getActiveSpreadsheet().getRangeByName(rangeNameInNote).getDisplayValues()
  return displayValues
}


function fillCell(entries){
  var checkedValues = [];
  for(var entry in entries){
    if(entry.substr(0, 2) == 'ch') checkedValues.push(entries[entry]);
  }
  var stringToSplit = checkedValues.toString()
  var splitString = stringToSplit.split(',')
  var valuesToSum = []
  for (var index = 1; index < splitString.length; index += 2) {
    valuesToSum.push(splitString[index])
  }
  var sumToDisplay = 0
  for (var index = 0; index < valuesToSum.length; index++) {
    try {
      sumToDisplay += parseInt(valuesToSum[index])
    } catch (e) {
      return null
    }
  }
  SpreadsheetApp.getActiveRange().setValue(sumToDisplay);
}
