'use client';

import { Editor, type Monaco } from '@monaco-editor/react';
import { Language, type Solution } from '@prisma/client';
import { useEffect, useState } from 'react';

import { LanguageDropdown } from '@/entities/language';
import { Button } from '@/shared/ui';

import { getCodeById } from '../api/code';
import { testSolution } from '../api/execution';
import theme from '../model/theme';

interface CodeEditorProps {
  problemId: number;
  selectedSolution?: Solution | null;
  onSolutionSubmit?: (code: string, language: string) => void;
}

export function CodeEditor({
  problemId,
  selectedSolution,
  onSolutionSubmit,
}: CodeEditorProps) {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState<Language>(Language.javascript);

  const handleEditorDidMount = (monaco: Monaco) => {
    monaco.editor.defineTheme('custom', theme);
  };

  useEffect(() => {
    if (selectedSolution) {
      setCode(selectedSolution.code);
    } else {
      getCodeById({ problemId, language }).then(setCode);
    }
  }, [problemId, selectedSolution, language]);

  const handleSubmit = async () => {
    if (onSolutionSubmit) {
      onSolutionSubmit(code, language);
    } else {
      await testSolution(problemId, code, language);
    }
  };

  return (
    <div className="bg-black-3 flex h-full flex-col gap-4 p-4">
      <div className="flex items-center justify-between">
        <LanguageDropdown language={language} setLanguage={setLanguage} />
        <Button variant="gradient" onClick={handleSubmit}>
          Отправить
        </Button>
      </div>
      <Editor
        language={language}
        theme="custom"
        beforeMount={handleEditorDidMount}
        value={code}
        onChange={(e) => e && setCode(e)}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          padding: { bottom: 16, top: 16 },
        }}
      />
    </div>
  );
}
