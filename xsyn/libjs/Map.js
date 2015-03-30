/**
 */

var Map = function() {
	this.entries = [];
}

Map.prototype.put = function(key,value) {
	var index = this._keyIndex(key);
	if (index < 0) {
		this.entries.push({ key : key, value : value });
	} else {
		this.entries[index].value = value; 
	}
	return value;
};

Map.prototype._keyIndex = function(key) {
	for(var i = 0; i < this.entries.length; i++) {
		var entry = this.entries[i];
		if (entry.key === key) {
			return i;
		}
	}
	return -1;
}

Map.prototype.get = function(key) {
	var index = this._keyIndex(key);
	if (index < 0) {
		return undefined;
	}
	return this.entries[index].value;
};

Map.prototype.containsKey = function(key) {
	return this._keyIndex(key) >= 0;
};

Map.prototype.__defineGetter__('keys',function() {
	return this.entries.map(function(entry) { return entry.key; });
});

Map.prototype.__defineGetter__('values',function() {
	return this.entries.map(function(entry) { return entry.value; });
});

Map.prototype.remove = function(key) {
	var index = this._keyIndex(key);
	if (index < 0) {
		return undefined;
	}
	var value = this.entries[index].value;
	this.entries.splice(index,1);
	return value;
};

Map.prototype.__defineGetter__('length',function() {
	return this.entries.length;
});

Map.prototype.size = function() {
	return this.length;
};

module.exports = Map;