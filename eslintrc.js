module.exports = {
    "extends": "airbnb-base",
    "plugins": [
        "buildium"
    ],
    parserOptions: {
        sourceType: 'script' //override airbnb-base
    },
    "rules": {
        //our indentation
        "indent": [2, 4, {"SwitchCase": 1}],
        //don't require dangling comma
        "comma-dangle": 0,
        //use the global strict keyword
        "strict": [2, "global"],
        //allow return in else blocks
        "no-else-return": 0,
        //we can use a custom rule for func names
        "func-names": 0,
        //don't force a space after in a comment
        "spaced-comment": 0,
        "id-length": [2, {"min": 2, "properties": "never", "exceptions": ["$", "_", "i", "j", "k", "x", "y", "z"]}],
        //we don't use one var keyword for all defs
        "one-var": 0,
        //we sometimes throw strings, which is ok
        "no-throw-literal": 0,
        //enforce radix
        "radix": 2,
        //warn when file doesn't end with newline
        "eol-last": 1,
        //we do .constant('blah',     require('blah')) a lot,
        "no-multi-spaces": 0,
        //VS doesn't clean up extra spaces on new lines, so this is annoying
        "no-trailing-spaces": 0,
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
        "buildium/tagged-templates": 2,
        //Overriding airbnb-base, we are not adapting these yet
        "prefer-const": 0,
        "prefer-arrow-callback": 0,
        "linebreak-style": 0,
        "arrow-parens": 0,
        "import/newline-after-import": 0,
        "import/no-extraneous-dependencies": 0,
        //Cannot do this yet
        "object-shorthand": 0,
        "arrow-body-style": 0,
        'no-restricted-properties': ['error', {
          object: 'arguments',
          property: 'callee',
          message: 'arguments.callee is deprecated',
        }, {
          property: '__defineGetter__',
          message: 'Please use Object.defineProperty instead.',
        }, {
          property: '__defineSetter__',
          message: 'Please use Object.defineProperty instead.',
        }],
        // EX. allows var a = 1 + 2 - 3, but not var a = 1 && 2 || 3
        "no-mixed-operators": ['error', {"allowSamePrecedence": true}],
        // allow forloop to use ++ --
        "no-plusplus": ['error', {"allowForLoopAfterthoughts": true}]
    }
};
