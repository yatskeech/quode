import { Language } from '@prisma/client';
import { Dispatch, SetStateAction } from 'react';

import { Button, Dropdown } from '@/shared/ui';

import { LanguageMap } from '../model/language';

type LanguageDropdownProps = {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
};

export function LanguageDropdown({
  language,
  setLanguage,
}: LanguageDropdownProps) {
  return (
    <Dropdown>
      <Dropdown.Button>
        <span className="capitalize">{LanguageMap[language]}</span>
      </Dropdown.Button>
      <Dropdown.Content>
        <Dropdown.Item>
          <Button
            variant="none"
            size="none"
            onClick={() => setLanguage(Language.javascript)}
          >
            JavaScript
          </Button>
        </Dropdown.Item>
        <Dropdown.Item>
          <Button
            variant="none"
            size="none"
            onClick={() => setLanguage(Language.python)}
          >
            Python
          </Button>
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  );
}
