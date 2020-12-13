window.onload = function () {


  document.getElementById('Select').addEventListener('change', OnSelectMenuChange);
  document.getElementById('Save').addEventListener('click', OnSaveButtonClick);

}

function OnSelectMenuChange() {
}

function OnSaveButtonClick() {
}

chrome.runtime.onMessage.addListener( function(request,sender,sendResponse) {

  var srcCommand = request.command
  var srcValue = request.jstext;
  
  sendResponse( {allvalue: [items]} );
});

  chrome.runtime.sendMessage({command: [command], jstext: [jstext]},
    function (response) {
      var ret = response.allvalue;
      console.log(ret);
  });