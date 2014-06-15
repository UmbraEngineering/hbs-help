
// 
// Logical conditional helper
// 
// An extension of the built-in #if helper, this provides support for logical operations
// 
require('handlebars').registerHelper('cond', function(val1, op, val2, opts) {
	switch (op) {
		case '==':
			return iff(val1 == val2);
		break;
		case '===':
			return iff(val1 === val2);
		break;
		case '!=':
			return iff(val1 != val2);
		break;
		case '!==':
			return iff(val1 !== val2);
		break;
		case '&&':
			return iff(val1 && val2);
		break;
		case '||':
			return iff(val1 || val2);
		break;
		case '^^':
			return iff((! val1) == (! val2));
		break;
		case '<':
			return iff(val1 < val2);
		break;
		case '<=':
			return iff(val1 <= val2);
		break;
		case '>':
			return iff(val1 > val2);
		break;
		case '>=':
			return iff(val1 >= val2);
		break;
	}

    function iff(value) {
    	return value ? opts.fn(this) : opts.inverse(this);
    }
});
