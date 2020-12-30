

chrome.storage.sync.get(function(response) {
  pathUrl = response.pathUrl;
  autoClose =response.autoClose;
});

chrome.devtools.panels.setOpenResourceHandler(function(resource, line) {
    var bits = resource.url.split(/([?#])/);
    bits[0] += ':' + (line || 1);

    var url = bits.join('');
    var link = document.createElement('a');
    link.setAttribute('href', url);

    fileDetails = link.pathname.split(":");
    fileUrl = fileDetails[0].slice(1);
    fileLine = fileDetails[1];

    openFile = window.open("atom://core/open/file?filename=" + pathUrl + fileUrl + "&line=" + fileLine, "openFile");

    if (autoClose === true) {

      setTimeout(function() {
          openFile.close();
          var link = "";
      }, 1500);
    }

});
