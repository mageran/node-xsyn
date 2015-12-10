/**
 *
 */

var fs = require('fs');
var util = require('util');

var inspect = function(obj) { return util.inspect(obj,{depth:null}); }


Array.prototype.remove = function(elem) {
	//if (elem instanceof ItemSet) console.log('remove called on ItemSet');
	var defaultEqualsFun = function(a,b) { return a === b; };
	var equalsFun = (typeof(elem.equals) === 'function')
		? function(obj0,obj1) {
		return obj0.equals(obj1);
	} : defaultEqualsFun;
	/*
	if (elem instanceof RuleItemSet) {
		console.log('remove called on RuleItemSet:\n' + this.toString());
		console.log('   elem:\n' + elem.toString());
	}
	*/
	var rcnt = 0;
	var i = 0;
	var removedElement = null;
	while(i < this.length) {
		if (equalsFun(this[i],elem)) {
			removedElement = this.splice(i,1);
			/*if (elem instanceof RuleItemSet) {
				console.log("--> removed index " + (i + rcnt));
			}*/
			rcnt++;
			i = 0;
		} else {
			i++;
		}
	}
	/*
	if (elem instanceof RuleItemSet) {
		if (rcnt > 0 && this.length === 0) {
			//console.log('--> all elements removed!');
		}
		//console.log("\n");
	}
	*/
	//if (elem instanceof ItemSet) console.log('remove called on ItemSet, removed: ' + rcnt);
	return removedElement;
};

Array.prototype.removeAll = function(otherlist) {
	if (otherlist instanceof Array) {
		for(var i = 0; i < otherlist.length; i++) {
			var elem = otherlist[i];
			this.remove(elem);
		}
	}
	return this;
}

Array.prototype.add = Array.prototype.push;

Array.prototype.uniq = function() {
	var sorted = this.sort();
	var uniq = [];
	var elem = null;
	for(var i = 0; i < sorted.length; i++) {
		var thisElem = sorted[i];
		if (elem === null || elem !== thisElem) {
			elem = thisElem;
			uniq.push(thisElem);
		}
	}
	return uniq;
}

Array.prototype.addToSet = function(elem) {
	//if (elem instanceof ItemSet) console.log('addToSet called on ItemSet');
	//if (elem instanceof RuleItemSet) console.log('addToSet called on RuleItemSet');
	//try {
	//console.log('addToSet: [' + this.map(function(x){return x.name + '(' + x.tid + ')';}).join(',') + '], elem: ' + elem.name+ '(' + elem.tid + ')');
	//} catch (e) {console.error(e);}
	if (this.indexOf(elem) >= 0) {
		return false;
	}
	this.push(elem);
	return true;
}

Array.prototype.contains = function(elem) {
	//if (elem instanceof ItemSet) console.log('contains called on ItemSet');
	//if (elem instanceof RuleItemSet) console.log('contains called on RuleItemSet');
	return this.indexOf(elem) >= 0;
}

Array.prototype.addAll = function(otherlist) {
	if (otherlist instanceof Array) {
		for(var i = 0; i < otherlist.length; i++) {
			this.push(otherlist[i]);
		}
	}
	return this;
};

Array.prototype.addAllToSet = function(otherlist) {
	if (otherlist instanceof Array) {
		for(var i = 0; i < otherlist.length; i++) {
			this.addToSet(otherlist[i]);
		}
	}
	return this;
};

Array.prototype.size = function() {
	return this.length;
};

Object.prototype.inspectShow = function(depth) {
	var d = 999;
	if (typeof(depth) === 'number') {
		d = depth;
	}
	var s = require('util').inspect(this,{depth:d});
	console.log(s);
}

module.exports = {
		merge : function(obj0,obj1) {
			if (!obj0 && typeof(obj1) === 'object') {
				obj0 = {};
			} else {
				if (!obj0 || !obj1) return obj0;
				if (typeof(obj1) !== 'object') return obj0;
			}
			for(var prop in obj1) {
				var val = obj1[prop];
				if (typeof(val) === 'function') continue;
				obj0[prop] = val;
			}
			return obj0;
		},
		compilationIsNeeded : function(sourceFile,compiledFile) {
			var sourceStat = fs.statSync(sourceFile);
			var sourceMtime = sourceStat.mtime;
			try {
				var compiledStat = fs.statSync(compiledFile);
				var compiledMtime = compiledStat.mtime;
				return sourceMtime > compiledMtime;
			} catch (e) {
				return true;
			}
		}
};

module.exports.preprocessInput = function(text) {
	var processLine = function(line) {
		var m = line.match(/^\s*!INCLUDE\s+"(.*)"\s*$/);
		if (m) {
			var fname = m[1];
			try {
				return fs.readFileSync(fname,'utf-8');
			} catch (err) {
				console.error(err);
				return '';
			}
		}
		return line;
	}
	if (!text) return text;
	var newtext = "";
	var startIndex = 0;
	var nlindex;
	for(;;) {
		//console.log(startIndex + " : " + inspect(text));
		nlindex = text.indexOf('\n',startIndex);
		if (nlindex < 0) {
			var line = text.substr(startIndex);
			newtext += processLine(line);
			break;
		}
		var line = text.substring(startIndex,nlindex);
		//console.log(line);
		newtext += processLine(line) + '\n';
		startIndex = nlindex + 1;
	}
	return newtext;
}