
import { Languages } from 'lucide-react';

import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface LanguageSelectorProps {
  labelHidden?: boolean;
}

export function LanguageSelector({
  labelHidden = false,
}: LanguageSelectorProps) {


  
  // const [language, setLanguage] = useAtom(languageAtom);

  return (
    <div>
      {labelHidden && <Label className='px-1 mb-3'>Select Language</Label>}
      <Select 
      // defaultValue={language} onValueChange={setLanguage}
      >
        <SelectTrigger className='w-full'>
          <SelectValue placeholder='Select a language' />
          <Languages className='text-primary ml-2' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Languages</SelectLabel>
            <SelectItem value='hi'>Hindi</SelectItem>
            <SelectItem value='en'>English</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
