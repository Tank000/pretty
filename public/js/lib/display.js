display = function(target) {
	//	iframe
	//	======
		var _iframeElement = document.createElement('iframe');
		_iframeElement.setAttribute('id', 'readable_iframe');
		_iframeElement.setAttribute('frameBorder', '0');
		_iframeElement.setAttribute('allowTransparency', 'true');
		_iframeElement.setAttribute('scrolling', 'auto');
		_iframeElement.setAttribute('src', 'http://pretty.ap01.aws.af.cm/js/lib/layout.html');
	

	//	css
	//	===
		var 
			_cssElement = document.createElement('style'),
			_cssText = ''
			+	'#readable_iframe { '
			+		'margin: 0; padding: 0; border: none; '
			+		'position: fixed; '
			+		'width: 100%; height: 100%; '
			+		'top: 0; left: 0; '
			+		'z-index: 2147483647 !important; '
			+	'} '
		;
		_cssElement.setAttribute('id', 'readableCSS1');
		_cssElement.setAttribute('type', 'text/css');
		if (_cssElement.styleSheet) { _cssElement.styleSheet.cssText = _cssText; }
			else { _cssElement.appendChild(document.createTextNode(_cssText)); }

		
	//	write
	//	=====

		var _body = document.getElementsByTagName('body')[0];
			_body.appendChild(_cssElement);
			_body.appendChild(_iframeElement);
		
		var _iframe = document.getElementById('readable_iframe');
		var _doc = (_iframe.contentDocument || _iframe.contentWindow.document);
			_doc.open();
			_doc.write(_iframeHTML);
			_doc.close();
    var body_content = _doc.getElementById('mypretty');
    body_content.innerHTML = target.html();
}
