display = function(target) {
	//	iframe
	//	======
		var 
			_iframeElement = document.createElement('iframe'),
			_iframeHTML = ''
			+	'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"'
			+		' "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">'
			+	'<html id="html" xmlns="http://www.w3.org/1999/xhtml">'
			+	'<head>'
			+		'<link rel="stylesheet" href="http://pretty.ap01.aws.af.cm/css/reset.css" type="text/css" />'
+'<style>'
+'body{background:#f5f5f5;color:#09334f;}'
+'article{padding:100px 0;width:500px;margin:0 auto;font-family:"Hiragino Sans GB W3","STHeiti","Open sans","微软雅黑","Microsoft Yahei",Arial, Helvetica, sans-serif;}'
+'article:lang(zh){font-family:"Hiragino Sans GB W3","STHeiti","Open sans","微软雅黑","Microsoft Yahei";}'
+'article:lang(en){font-family:Georgia, "Times New Roman", Times, serif;}'
+'h1{font-size:3em;margin-bottom:0.2em;}'
+'time{color:#999;}'
+'p{margin-bottom:1em;}'
+'hr{background:none;color:none;border:none;border-bottom:1px solid #aaa;margin-bottom:1em;}'
+'#clippsis-over-toolbox{box-shadow:inset 3px 0 5px #000;position:fixed;right:0;background:#4c4c4c;width:52px;}'
+'#clippsis-over-toolbox .branding{padding:5px;font-size:13px;color:#fff;border-bottom:1px solid #000;background:#000;}'
+'#clippsis-over-toolbox ul li a{display:block;height:52px;width:52px;border-top:1px solid #777;border-bottom:1px solid #333;}'
+'#clippsis-over-toolbox ul li a img{position:relative;top:15px;left:15px;}'
+'#clippsis-over-toolbox ul li a:hover{box-shadow:inset -3px 0 10px #000;border-top:1px solid #333;background:#333;}'
+'#clippsis-over-toolbox ul li:first-child{margin-bottom:100px;}'
+'#clippsis-over-toolbox ul li:first-child a{border-top:none;}'
+'</style>'
			+		'<script src="/jquery-1.7.min.js" ></script>'
			+	'</head>'
			+	'<body id="body">'
			+		'<div id="bodyContent"></div>'
			+	'</body>'
			+	'</html>'
		;
		_iframeElement.setAttribute('id', 'readable_iframe');
		_iframeElement.setAttribute('frameBorder', '0');
		_iframeElement.setAttribute('allowTransparency', 'true');
		_iframeElement.setAttribute('scrolling', 'auto');
    _iframeElement.target = target;
	

	//	css
	//	===
		var 
			_cssElement = document.createElement('style'),
			_cssText = ''
			+	'#readable_iframe { '
			+		'margin: 0; padding: 0; border: none; '
			+		'position: absolute; '
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
    var body_content = _doc.getElementById('bodyContent');
    bodyContent.innerHTML = target.html();
}
