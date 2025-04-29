'use client';
import { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { PAUSE, SPEED } from '../model/config';
import { SNIPPETS } from '../model/snippets';
import { theme } from '../model/theme';

export function CodeTyping() {
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  const { code, language } = SNIPPETS[snippetIndex];

  useEffect(() => {
    const addChar = () => {
      setDisplayedText((text) => text + code[charIndex]);
      setCharIndex(charIndex + 1);
    };

    const changeSnippet = () => {
      setSnippetIndex((index) => (index + 1) % SNIPPETS.length);
      setDisplayedText('');
      setCharIndex(0);
    };

    const timeout =
      charIndex < code.length
        ? setTimeout(addChar, SPEED)
        : setTimeout(changeSnippet, PAUSE);

    return () => clearTimeout(timeout);
  }, [charIndex, code]);

  return (
    <div className="bg-black-2 flex h-124 flex-col overflow-hidden rounded-3xl text-white">
      <span className="bg-black-3 border-pink border-b-2 px-8 py-4 text-xl font-medium capitalize">
        {language}
      </span>
      <div className="px-8 py-4">
        <SyntaxHighlighter
          style={theme}
          language={language}
          showLineNumbers
          showInlineLineNumbers={false}
          lineNumberStyle={{ paddingRight: 16 }}
        >
          {displayedText}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
