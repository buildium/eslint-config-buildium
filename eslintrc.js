module.exports = {
    extends: 'airbnb-base',
    plugins: [
        'buildium'
    ],
    rules: {
        // we use a custom rule for func names
        'func-names': 'off',
        'buildium/func-names': 'error',
        'buildium/template-location': 'error',
        'buildium/imports-lodash': 'error',
        'buildium/imports-jquery': 'error',
        'buildium/imports-angular-bsfy': 'error',
        'buildium/arrow-function-callback': 'error',
        'buildium/tagged-templates': 'error',

        // our indentation
        indent: ['error', 4, { SwitchCase: 1 }],
        // don't require dangling comma
        'comma-dangle': 'off',
        // use the global strict keyword
        strict: ['warn', 'never'],
        // allow return in else blocks
        'no-else-return': 'off',
        // don't force a space after in a comment
        'spaced-comment': 'off',
        'id-length': ['error', {
            'min': 2,
            'properties': 'never',
            'exceptions': ['$', '_', 'i', 'j', 'k', 'x', 'y', 'z']
        }],
        // we don't use one var keyword for all defs
        'one-var': 'off',
        // we sometimes throw strings, which is ok
        'no-throw-literal': 'off',
        // enforce radix
        'radix': 'error',
        // warn when file doesn't end with newline
        'eol-last': 'warn',
        // we do .constant('blah',     require('blah')) a lot,
        'no-multi-spaces': 'off',
        // VS doesn't clean up extra spaces on new lines, so this is annoying
        'no-trailing-spaces': 'off',
        'no-param-reassign': ['error', {
            'props': false
        }],
        'space-before-function-paren': ['error', 'never'],
        'no-underscore-dangle': 'off',
        'max-len': 'off',
        'global-require': 'off',
        'one-var-declaration-per-line': 'off',
        'object-curly-spacing': 'off',
        'quote-props': 'off',
        'newline-per-chained-call': 'off',
        'space-in-parens': 'off',
        'wrap-iife': ['error', 'any'],
        
        // Overriding airbnb-base, we are not adopting these
        'prefer-arrow-callback': 'off',
        'linebreak-style': 'off',
        'arrow-parens': 'off',
        'import/no-extraneous-dependencies': 'off',
        'arrow-body-style': 'off',
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
        'no-mixed-operators': ['error', {
            allowSamePrecedence: true
        }],
        // allow for-loop to use ++ --
        'no-plusplus': ['error', {
            allowForLoopAfterthoughts: true
        }],
    }
};