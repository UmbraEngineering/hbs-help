# hbs-help

A collection of handlebars helpers

## Install

```bash
$ npm install [--save] hbs-help
```

## Usage

```javascript
var hbsHelp = require('hbs-help');

// Load a single helper
hbsHelp.use('env');

// Load multiple helpers
hbsHelp.use('env', 'cond');

// Load multiple helpers with an array
hbsHelp.use([ 'env', 'cond' ])
```

After calling the `use` method for a given helper, that helper will automatically be made available to your templates.

## Extending

Have your own helpers and want to extend hbs-help? You can add more helpers to the list by using `hbsHelp.extend`.

```javascript
var hbsHelp = require('hbs-help');

// Extend hbs-help with a new (somewhat useless) helper
hbsHelp.extend('always', function(opts) {
    return opts.fn(this);
});

// Use that helper the same way as any other
hbsHelp.use('always');
```

## Helpers

Now for a list of all of the included helpers and how to use them.

#### env

The `env` helper provides access to the current environment (the `NODE_ENV` variable). It can be used in two ways. First, as a simple helper that just outputs the environment.

```handlebars
<p>
    The current environment is {{env}}.
</p>
```

The second way is as a block helper, in which case it checks if the given value matches the current environment.

```handlebars
{{#env "production"}}
<p>The current environment is production.</p>
{{else}}
<p>The current environment is development.</p>
{{/env}}
```

#### cond

Allows if/else blocks with logical conditionals. This helper takes three arguments, and looks like this:

```handlebars
{{#cond foo "==" bar}}
    Foo equals bar
{{else}}
    Foo does not equal bar
{{/cond}}
```

It supports all the standard logical operators, plus an extra: `==`, `===`, `!=`, `!==`, `&&`, `||`, `^^` (that's a logical xor :D), `<`, `<=`, `>`, and `>=`.


