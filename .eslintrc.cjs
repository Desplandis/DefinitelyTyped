module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: true,
        warnOnUnsupportedTypeScriptVersion: false,
    },
    plugins: ['@typescript-eslint', 'jsdoc'],
    rules: {
        'dt-header': 'error',
        'export-just-namespace': 'error',
        'jsdoc/check-tag-names': [
            'error',
            {
                // TODO: Some (but not all) of these tags should likely be removed from this list.
                // Additionally, some may need to be contributed to eslint-plugin-jsdoc.
                definedTags: [
                    'addVersion',
                    'api',
                    'author',
                    'beta',
                    'brief',
                    'category',
                    'cfg',
                    'chainable',
                    'check',
                    'classDescription',
                    'condparamprivilege',
                    'constraint',
                    'credits',
                    'declaration',
                    'defApiFeature',
                    'defaultValue',
                    'detail',
                    'end',
                    'eventproperty',
                    'experimental',
                    'export',
                    'expose',
                    'extendscript',
                    'factory',
                    'field',
                    'final',
                    'fixme',
                    'fluent',
                    'for',
                    'governance',
                    'header',
                    'hidden-property',
                    'hidden',
                    'id',
                    'jsx',
                    'label',
                    'language',
                    'legacy',
                    'link',
                    'listen',
                    'locus',
                    'methodOf',
                    'minVersion',
                    'ngdoc',
                    'nonstandard',
                    'note',
                    'npm',
                    'observable',
                    'option',
                    'optionobject',
                    'options',
                    'packageDocumentation',
                    'param',
                    'parent',
                    'platform',
                    'plugin',
                    'preserve',
                    'privateRemarks',
                    'privilegeLevel',
                    'privilegeName',
                    'proposed',
                    'range',
                    'readOnly',
                    'related',
                    'remark',
                    'remarks',
                    'required',
                    'requires',
                    'restriction',
                    'returnType',
                    'section',
                    'see',
                    'since',
                    'const',
                    'singleton',
                    'source',
                    'struct',
                    'suppress',
                    'targetfolder',
                    'enum',
                    'title',
                    'record',
                    'title',
                    'TODO',
                    'trigger',
                    'triggers',
                    'typeparam',
                    'typeParam',
                    'unsupported',
                    'url',
                    'usage',
                    'warn',
                    'warning',
                    'version',
                ],
                typed: true,
            },
        ],
        'no-any-union': 'error',
        'no-bad-reference': 'error',
        'no-const-enum': 'error',
        'no-dead-reference': 'error',
        'no-declare-current-package': 'error',
        'no-import-default-of-export-equals': 'error',
        'no-outside-dependencies': 'error',
        'no-self-import': 'error',
        'no-single-element-tuple-type': 'error',
        'no-unnecessary-generics': 'error',
        'no-useless-files': 'error',
        'prefer-declare-function': 'error',
        'redundant-undefined': 'error',
        'trim-file': 'error',
    },
    settings: {
        jsdoc: {
            tagNamePreference: {
                argument: 'argument',
                exception: 'exception',
                function: 'function',
                method: 'method',
                param: 'param',
                return: 'return',
                returns: 'returns',
            },
        },
    },
};
