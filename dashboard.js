var children = [
	{num: 1, name: '테스트', comment: '처음'}, 
	{num: 2, name: '테스트2', comment: '두번째'}
];

var children2 =  [
	{num: 3, name: '테스트3', comment: '세번째'}, 
	{num: 4, name: '테스트4', comment: '네번째'}
];

/*
	Dashboard lib
*/
(function(window){

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

	// Base
	var Dashboard = {
		__obj : null,
		makeTable : function(id){
			var table = new Table(document.createElement(id));

			for( var i = 0; i < children.length; i++ ) {
			  var child = children[i];
			  if(i === 0 ) {
				table.addHeaders(Object.keys(child));
			  }
			  var row = table._object.insertRow();
			  Object.keys(child).forEach(function(k) {
				var cell = row.insertCell();
				cell.appendChild(document.createTextNode(child[k]));
			  })
			}
			  console.log(table);
			return table;
		}
	}

	// Export
	window.Dashboard = Dashboard;

})(window);


	function ajax(url, method, data, async)
	{
		method = typeof method !== 'undefined' ? method : 'GET';
		async = typeof async !== 'undefined' ? async : false;

		if (window.XMLHttpRequest) {
			var xhReq = new XMLHttpRequest();
		}
		else {
			var xhReq = new ActiveXObject("Microsoft.XMLHTTP");
		}


		if (method == 'POST'){
			xhReq.open(method, url, async);
			xhReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xhReq.setRequestHeader("X-Requested-With", "XMLHttpRequest");
			xhReq.send(data);
		}
		else
		{
			if(typeof data !== 'undefined' && data !== null) {
				url = url+'?'+data;
			}
			xhReq.open(method, url, async);
			xhReq.setRequestHeader("X-Requested-With", "XMLHttpRequest");
			xhReq.send(null);
		}
	}