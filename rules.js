module.exports = {
    rules: {
        'for-direction': 'error',
        'no-cond-assign': 'error',
        'no-console': 'warn',
        'no-constant-condition': ['warn', { 'checkLoops': false }],
        'no-debugger': 'warn',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty': ['warn', { 'allowEmptyCatch': true }],
        'no-empty-character-class': 'warn',
        
        'no-ex-assign': 'warn',
        'no-extra-boolean-cast': 'warn',
        'no-extra-parens': ['warn', 'functions'],
        
        'no-func-assign': 'error',
        'no-inner-declarations': ['warn', 'functions'],
        'no-irregular-whitespace': 'warn',
        
        'no-unexpected-multiline': 'warn',
        
        'no-unreachable': 'warn',
        'use-isnan': 'warn',
        'valid-typeof': ['warn', { 'requireStringLiterals': true }],
        'curly': ['error', 'multi-line'],
        'dot-location': ['error', 'property'],
        'eqeqeq': ['error', 'always', { 'null': 'ignore' }],
        
        'no-alert': 'warn',
        'no-empty-function': 'error',
        'no-eval': 'error',
        'no-floating-decimal': 'warn',
        'no-implied-eval': 'error',
        
        'no-loop-func': 'error',
        
        'no-new-wrappers': 'warn',
        
        'no-redeclare': 'error',
        
        'no-return-assign': ['warn', 'except-parens'],
        'no-self-compare': 'warn',
        'no-delete-var': 'warn',
        
        'no-shadow': 'error',
        'no-shadow-restricted-names': 'error',
        
        'no-undef-init': 'error',
        'no-use-before-define': ['warn', { 'functions': false, 'classes': false, 'variables': false }],
        
        'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
        'comma-dangle': ['warn', {
            'arrays': 'never',
            'objects': 'never',
            'imports': 'never',
            'exports': 'never',
            'functions': 'never'
        }],
        'no-multiple-empty-lines': ['warn', { 'max': 1, 'maxEOF': 0 }],
        
        'no-class-assign': 'warn',
        'no-const-assign': 'error',
        'semi': ['error', 'always']
    }
}
