import {
  CommandMenuItem,
  DropdownButton,
  useActive,
  useCommands,
} from '@remirror/react';
import FONT_SIZES from '@/editorRemirror/data/fontSizesData';

export default function FontSizeButtons() {
  const { setFontSize } = useCommands();
  const { fontSize } = useActive();
  return (
    <DropdownButton aria-label='Set font size' icon='fontSize'>
      {FONT_SIZES.map((size) => (
        <CommandMenuItem
          key={size}
          commandName='setFontSize'
          onSelect={() => setFontSize(size)}
          enabled={setFontSize.enabled(size)}
          active={fontSize({ size })}
          label={size}
          icon={null}
          displayDescription={false}
        />
      ))}
    </DropdownButton>
  );
}
