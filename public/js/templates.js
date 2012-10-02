/*This file is generated by tplcpl :)*/

;(function(exports){

/*JADE runtime routines*/

var jade = (function(exports){
/*!
 * Jade - runtime
 * Copyright(c) 2010 TJ Holowaychuk <tj@vision-media.ca>
 * MIT Licensed
 */

/**
 * Lame Array.isArray() polyfill for now.
 */

if (!Array.isArray) {
  Array.isArray = function(arr){
    return '[object Array]' == toString.call(arr);
  };
}

/**
 * Lame Object.keys() polyfill for now.
 */

if (!Object.keys) {
  Object.keys = function(obj){
    var arr = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        arr.push(key);
      }
    }
    return arr;
  } 
}

/**
 * Render the given attributes object.
 *
 */

exports.attrs = function attrs(obj){
  var buf = []
    , terse = obj.terse;
  delete obj.terse;
  var keys = Object.keys(obj)
    , len = keys.length;
  if (len) {
    buf.push('');
    for (var i = 0; i < len; ++i) {
      var key = keys[i]
        , val = obj[key];
      if ('boolean' == typeof val || null == val) {
        if (val) {
          terse
            ? buf.push(key)
            : buf.push(key + '="' + key + '"');
        }
      } else if ('class' == key && Array.isArray(val)) {
        buf.push(key + '="' + exports.escape(val.join(' ')) + '"');
      } else {
        buf.push(key + '="' + exports.escape(val) + '"');
      }
    }
  }
  return buf.join(' ');
};

/**
 * Escape the given string of `html`.
 *
 */

exports.escape = function escape(html){
  return String(html)
    .replace(/&(?!\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
};

/**
 * Re-throw the given `err` in context to the
 * `str` of jade, `filename`, and `lineno`.
 *
 */

exports.rethrow = function rethrow(err, str, filename, lineno){
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context); 

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Jade') + ':' + lineno 
    + '\n' + context + '\n\n' + err.message;
  throw err;
};

  return exports;

})({});


var escapeHTML = jade.escape;
/*Compiled templates*/
var TPL = {};

/**
 * @template home.us
 */

TPL['home.us'] = function(obj) {
var __p=[],__e=escapeHTML,print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="projects"></div><div class="music"></div><div class="about"></div><div class="contact"></div>');}return __p.join('');
};
var Templating = ( function (window) {
	var tpl, exports = {};

	tpl = exports.tpl = function (viewName, locals, scope) {
		var view = TPL[viewName];
		if('function' !== typeof (view)) {
			throw 'View not found';
		}
		if(scope!=='undefined') {
			return view.call(scope, locals)
		} else {
			return view(locals);
		}
	}
	
	function tplHelper (viewName, locals) {
		return tpl(viewName, locals, this);
	}

	exports.enable = function (klass) {
		if(klass.prototype) {
			klass.prototype.tpl = tplHelper;
		} else {
			klass.tpl = tplHelper;
		}
	}

	return exports;
} (window) );


exports.Templating = Templating;

}(window));