// Saves options to chrome.storage
function save_options() {
  var pathUrl = document.getElementById('pathUrl').value;
  var autoClose = document.getElementById('autoClose').checked;
  chrome.storage.sync.set({
    pathUrl: pathUrl,
    autoClose: autoClose
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value
  chrome.storage.sync.get({
    pathUrl: '',
    autoClose: true
  }, function(items) {
    document.getElementById('pathUrl').value = items.pathUrl;
    document.getElementById('autoClose').checked = items.autoClose;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
