// Copyright (c) 2008, 2009 Andrew Cantino
// Copyright (c) 2008, 2009 Kyle Maxwell
// 中文载入测试  by tank@2012-10-07 

function importJS(src, look_for, onload) {
  var s = document.createElement('script');
  s.setAttribute('type', 'text/javascript');
  s.setAttribute('src', src);
  s.setAttribute('charset', 'utf8');
  if (onload) wait_for_script_load(look_for, onload);
  var head = document.getElementsByTagName('head')[0];
  if (head) {
    head.appendChild(s);
  } else {
    document.body.appendChild(s);
  }
}

function importCSS(href, look_for, onload) {
  var s = document.createElement('link');
  s.setAttribute('rel', 'stylesheet');
  s.setAttribute('type', 'text/css');
  s.setAttribute('media', 'screen');
  s.setAttribute('href', href);
  if (onload) wait_for_script_load(look_for, onload);
  var head = document.getElementsByTagName('head')[0];
  if (head) {
    head.appendChild(s);
  } else {
    document.body.appendChild(s);
  }
}

function wait_for_script_load(look_for, callback) {
  var interval = setInterval(function() {
    if (eval("typeof " + look_for) != 'undefined') {
      clearInterval(interval);
      callback();
    }
  }, 50);
}

(function(){
  var url_prefix = 'https://raw.github.com/Tank000/pretty/master/public/js/'; 
  importCSS(url_prefix+'lib/selectorgadget.css');
  importJS('http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js', 'jQuery', function() { // Load everything else when it is done.
    jQuery.noConflict();
    importJS(url_prefix+'vendor/diff/diff_match_patch.js', 'diff_match_patch', function() {
      importJS(url_prefix+'lib/dom.js', 'DomPredictionHelper', function() {
        importJS(url_prefix+'lib/interface.js');
        importJS(url_prefix+'lib/display.js');
      });
    });
  });
})();
