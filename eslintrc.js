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
        "buildium/func-names": 2,
        "buildium/template-location": 2,
        "buildium/imports-lodash": 2,
        "buildium/imports-jquery": 2
    }
};
