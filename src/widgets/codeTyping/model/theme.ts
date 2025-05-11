import { CSSProperties } from 'react';

export const theme: { [key: string]: CSSProperties } = {
  'code[class*="language-"]': {
    color: 'var(--color-white)',
    background: 'none',
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    fontSize: '1em',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.5',
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
  },
  'pre[class*="language-"]': {
    color: 'var(--color-white)',
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    fontSize: '1em',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.5',
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
    overflow: 'auto',
  },
  ':not(pre) > code[class*="language-"]': {
    background: 'var(--color-black-3)',
    whiteSpace: 'normal',
  },
  comment: {
    color: 'var(--color-gray)',
  },
  prolog: {
    color: 'var(--color-gray)',
  },
  doctype: {
    color: 'var(--color-gray)',
  },
  cdata: {
    color: 'var(--color-gray)',
  },
  punctuation: {
    opacity: '.7',
    color: 'var(--color-white)',
  },
  namespace: {
    opacity: '.7',
    color: 'var(--color-white)',
  },
  property: {
    color: 'var(--color-pink)',
  },
  tag: {
    color: 'var(--color-pink)',
  },
  boolean: {
    color: 'var(--color-pink)',
  },
  number: {
    color: 'var(--color-pink)',
  },
  constant: {
    color: 'var(--color-pink)',
  },
  symbol: {
    color: 'var(--color-pink)',
  },
  selector: {
    color: 'var(--color-purple)',
  },
  'attr-name': {
    color: 'var(--color-purple)',
  },
  string: {
    color: 'var(--color-pink)',
  },
  char: {
    color: 'var(--color-pink)',
  },
  builtin: {
    color: 'var(--color-pink)',
  },
  inserted: {
    color: 'var(--color-pink)',
  },
  operator: {
    color: 'var(--color-purple)',
  },
  entity: {
    color: 'var(--color-purple)',
    cursor: 'help',
  },
  url: {
    color: 'var(--color-purple)',
  },
  '.language-css .token.string': {
    color: 'var(--color-purple)',
  },
  '.style .token.string': {
    color: 'var(--color-purple)',
  },
  variable: {
    color: 'var(--color-purple)',
  },
  atrule: {
    color: 'var(--color-pink)',
  },
  'attr-value': {
    color: 'var(--color-pink)',
  },
  keyword: {
    color: 'var(--color-pink)',
  },
  regex: {
    color: 'var(--color-purple)',
  },
  important: {
    color: 'var(--color-purple)',
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
};
