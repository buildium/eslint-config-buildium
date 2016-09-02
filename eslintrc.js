module.exports = {
    "extends": "airbnb/legacy",
    "plugins": [
        "buildium"
    ],
    "rules": {
        "indent": [2, 4, {"SwitchCase": 1}], //our indentation
        "comma-dangle": 0, //don't require dangling comma
        "strict": [2, "global"], //use the global strict keyword
        "no-else-return": 0, //allow return in else blocks
        "func-names": 0, //we can use a custom rule for func names
        "spaced-comment": 0, //don't force a space after in a comment
        "id-length": [2, {"min": 2, "properties": "never", "exceptions": ["$", "_", "i", "j", "k", "x", "y", "z"]}],
        "one-var": 0, //we don't use one var keyword for all defs
        "no-throw-literal": 0, //we sometimes throw strings, which is ok
        "radix": 0, //don't force a radix
        "eol-last": 1, //warn when file doesn't end with newline
        "no-multi-spaces": 0, //we do .constant('blah',     require('blah')) a lot,
        "no-irregular-whitespace": 0, //Some files have a BOM, doesn't seem to cause us problems
        "no-trailing-spaces": 0, //VS doesn't clean up extra spaces on new lines, so this is annoying
        "no-param-reassign": [2, { "props": false }],
        "space-before-function-paren": [2, "never"],
        "import/no-unresolved": 0,
        "no-underscore-dangle": 0,
        "max-len": 0,
        "global-require": 0,
        "one-var-declaration-per-line": 0,
        "object-curly-spacing": 0,
        "quote-props": 0,
        "newline-per-chained-call": 0,
        "space-in-parens": 0,
        "wrap-iife": [2, "any"],
        "buildium/func-names": 2,
        "buildium/template-location": 2,
        "buildium/imports-lodash": 2,
        "buildium/imports-jquery": 2,
        "buildium/imports-angular-bsfy": 2,
        "buildium/arrow-function-callback": 2,
        "buildium/tagged-templates": 2
    }
};
