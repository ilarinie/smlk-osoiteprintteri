chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    'outerBounds': {
      'width': 700,
      'height': 700
    },
    'resizable': false,
    
  });
});