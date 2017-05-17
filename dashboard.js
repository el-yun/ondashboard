/*
 * Gabia Dashboard
 * http://www.gabia.com
 *
 * Inspired by John Resig's JavaScript Micro-Templating:
 * http://ejohn.org/blog/javascript-micro-templating/
 */


var children = [
	{num: 1, name: '테스트', comment: '처음'},
	{num: 2, name: '테스트2', comment: '두번째'}
];

var children2 =  [
	{num: 3, name: '테스트3', comment: '세번째'},
	{num: 4, name: '테스트4', comment: '네번째'}
];

var data = {
    "title": "JavaScript Templates",
    "license": {
        "name": "MIT license",
        "url": "https://opensource.org/licenses/MIT"
    },
    "features": [
        "lightweight & fast",
        "powerful",
        "zero dependencies"
    ]
};

/*
	Dashboard lib
*/
(function(){

	// Table
	var Table = function(_table){
		this._object = _table;
	}

	Table.prototype.addObject = function(c){
		for( var i = 0; i < c.length; i++ ) {
		  var child = c[i];
		  var row = this._object.insertRow();
		  Object.keys(child).forEach(function(k) {
			console.log(k);
			var cell = row.insertCell();
			cell.appendChild(document.createTextNode(child[k]));
		  })
		}
		return this;
	}

	Table.prototype.addHeaders = function(keys) {
	  var row = this._object.insertRow();
	  for( var i = 0; i < keys.length; i++ ) {
		var cell = row.insertCell();
		cell.appendChild(document.createTextNode(keys[i]));
	  }
	}

	Table.prototype.render = function(target){
		document.getElementById(target).innerHTML = "";
		document.getElementById(target).append(this._object);
	}

	var cache = {};
	// Base
	var Dashboard = {
			// Extend tmpl
		 tmpl: function(str, data){
		    var fn = !/\W/.test(str) ?
		      cache[str] = cache[str] ||
		        tmpl(document.getElementById(str).innerHTML) :
		      new Function("obj",
		        "var p=[],print=function(){p.push.apply(p,arguments);};" +
		        "with(obj){p.push('" +
		        str
		          .replace(/[\r\t\n]/g, " ")
		          .split("<%").join("\t")
		          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
		          .replace(/\t=(.*?)%>/g, "',$1,'")
		          .split("\t").join("');")
		          .split("%>").join("p.push('")
		          .split("\r").join("\\'")
		      + "');}return p.join('');");

		    return data ? fn( data ) : fn;
			}
	}
	// Export
	window.Dashboard = Dashboard;

})();
