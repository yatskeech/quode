import type { editor } from 'monaco-editor';

const prismBasedMonaco: editor.IStandaloneThemeData = {
  base: 'vs-dark',
  inherit: false,
  colors: {
    'editor.background': '#222228',
    'editor.foreground': '#f5f5f5',
    'editorLineNumber.foreground': '#9e9e9e',
    'editorLineNumber.activeForeground': '#f5f5f5',
    'editorCursor.foreground': '#f5f5f5',
    'editor.selectionBackground': '#44444B',
    'editor.inactiveSelectionBackground': '#33333A',

    'editorBracketMatch.background': '#9e9e9e33',
    'editorBracketMatch.border': '#9e9e9e',
    'editorBracketHighlight.foreground1': '#ff5555',
    'editorBracketHighlight.foreground2': '#50fa7b',
    'editorBracketHighlight.foreground3': '#bd93f9',
    'editorBracketHighlight.foreground4': '#ffb86c',
    'editorBracketHighlight.foreground5': '#8be9fd',
    'editorBracketHighlight.foreground6': '#f1fa8c',
    'editorBracketHighlight.unexpectedBracket.foreground': '#ff5555',

    'editorError.foreground': '#ff9898',
    'editorWarning.foreground': '#ffc198',
    'editorInfo.foreground': '#00aaff',

    'diffEditor.insertedTextBackground': '#50fa7b33',
    'diffEditor.removedTextBackground': '#ff555533',
  },
  rules: [
    { token: 'comment', foreground: '#9e9e9e', fontStyle: 'italic' },
    { token: 'punctuation', foreground: '#f5f5f5' },
    { token: 'keyword', foreground: '#ff9898', fontStyle: 'bold' },
    { token: 'constant', foreground: '#ff9898' },
    { token: 'variable', foreground: '#9a98ff' },
    { token: 'property', foreground: '#ff9898' },
    { token: 'operator', foreground: '#9a98ff' },
    { token: 'number', foreground: '#ffc198' },
    { token: 'string', foreground: '#ffc198' },
    { token: 'regex', foreground: '#9a98ff' },
    { token: 'entity', foreground: '#9a98ff' },
    { token: 'symbol', foreground: '#ffc198' },
    { token: 'selector', foreground: '#9a98ff' },
    { token: 'attr-name', foreground: '#9a98ff' },
    { token: 'attr-value', foreground: '#ff9898' },
    { token: 'tag', foreground: '#ff9898' },
    { token: 'builtin', foreground: '#ff9898' },
    { token: 'annotation', foreground: '#ff9898' },
    { token: 'namespace', foreground: '#f5f5f5' },
    { token: 'url', foreground: '#9a98ff', fontStyle: 'underline' },
    { token: 'constant.numeric', foreground: '#ffc198' },
    { token: 'constant.language', foreground: '#ff9898' },

    { token: 'keyword.js', foreground: '#ff9898', fontStyle: 'bold' },
    { token: 'identifier.js', foreground: '#9a98ff' },
    { token: 'variable.js', foreground: '#9a98ff' },
    { token: 'property.js', foreground: '#ff9898' },
    { token: 'string.js', foreground: '#ffc198' },
    { token: 'number.js', foreground: '#ffc198' },
    { token: 'regexp.js', foreground: '#9a98ff' },
    { token: 'delimiter.js', foreground: '#f5f5f5' },
    { token: 'type.identifier.js', foreground: '#50fa7b' },
    { token: 'keyword.operator.js', foreground: '#9a98ff' },

    { token: 'keyword.python', foreground: '#ff9898', fontStyle: 'bold' },
    { token: 'constant.language.python', foreground: '#ff9898' },
    { token: 'variable.language.python', foreground: '#9a98ff' },
    { token: 'entity.name.function.python', foreground: '#50fa7b' },
    { token: 'variable.parameter.python', foreground: '#9a98ff' },
    { token: 'comment.python', foreground: '#9e9e9e', fontStyle: 'italic' },
    { token: 'string.python', foreground: '#ffc198' },
    { token: 'string.doc.python', foreground: '#9e9e9e', fontStyle: 'italic' },
    { token: 'constant.numeric.python', foreground: '#ffc198' },
    { token: 'keyword.operator.python', foreground: '#9a98ff' },
    {
      token: 'punctuation.definition.string.begin.python',
      foreground: '#ffc198',
    },
    {
      token: 'punctuation.definition.string.end.python',
      foreground: '#ffc198',
    },
    { token: 'storage.type.python', foreground: '#ff9898' },

    { token: 'bold', fontStyle: 'bold' },
    { token: 'italic', fontStyle: 'italic' },
  ],
};

export default prismBasedMonaco;
