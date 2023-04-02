import {
  CommandButtonGroup,
  CommandMenuItem,
  DropdownButton,
  useActive,
  useCommands,
} from '@remirror/react';
import FONT_FAMILIES from '@/editorRemirror/data/fontFamiliesData';

export default function FontFamilyButtons() {
  const { setFontFamily } = useCommands();
  const active = useActive();
  return (
    <CommandButtonGroup>
      <DropdownButton aria-label='Font family' icon='text'>
        {FONT_FAMILIES.map(([fontFamily, label]) => (
          <CommandMenuItem
            key={fontFamily}
            commandName='setFontFamily'
            onSelect={() => setFontFamily(fontFamily as string)}
            enabled={setFontFamily.enabled(fontFamily as string)}
            active={active.fontFamily({ fontFamily })}
            label={<span style={{ fontFamily }}>{label}</span>}
          />
        ))}
      </DropdownButton>
    </CommandButtonGroup>
  );
}
