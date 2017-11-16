module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'jquery': true
    },
    'extends': [
        'yxfe/rules',
        'plugin:vue/base'
    ],
    'rules': {
        'vue/html-end-tags': 'error',
        'vue/no-confusing-v-for-v-if': 'warn',
        'vue/no-duplicate-attributes': 'warn',
        'vue/no-textarea-mustache': 'warn',
        'vue/html-quotes': 'warn',
        'vue/v-bind-style': 'warn',
        'vue/v-on-style': 'warn',
        'vue/no-invalid-template-root': 'error',
        'vue/no-invalid-v-bind': 'warn',
        'vue/no-invalid-v-else-if': 'warn',
        'vue/no-invalid-v-else': 'warn',
        'vue/no-invalid-v-html': 'warn',
        'vue/no-invalid-v-if': 'warn',
        'vue/no-invalid-v-model': 'warn',
        'vue/no-invalid-v-on': 'warn',
        'vue/no-invalid-v-once': 'warn',
        'vue/no-invalid-v-pre': 'warn',
        'vue/no-invalid-v-show': 'warn',
        'vue/no-invalid-v-text': 'warn',
        'vue/no-parsing-error': 'warn'
    }
};