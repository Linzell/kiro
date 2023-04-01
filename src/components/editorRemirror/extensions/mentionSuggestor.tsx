import React from 'react';
import { cx } from '@remirror/core';
import {
  FloatingWrapper,
  useMentionAtom,
  MentionAtomNodeAttributes,
} from '@remirror/react';

// TODO: use real data
const ALL_USERS = [
  { id: 'joe', label: 'Joe' },
  { id: 'sue', label: 'Sue' },
  { id: 'pat', label: 'Pat' },
  { id: 'tom', label: 'Tom' },
  { id: 'jim', label: 'Jim' },
];

// TODO: use real data
const ALL_TAGS = [
  { id: 'cel', label: 'Celebrity' },
  { id: 'ed', label: 'Education' },
  { id: 'tech', label: 'Tech' },
];

export default function MentionSuggestor() {
  const [options, setOptions] = React.useState<MentionAtomNodeAttributes[]>([]);
  const {
    state,
    getMenuProps,
    getItemProps,
    indexIsHovered,
    indexIsSelected,
  } = useMentionAtom({
    items: options,
  });

  React.useEffect(() => {
    if (!state) {
      return;
    }

    const searchTerm = state.query.full.toLowerCase();
    let filteredOptions: MentionAtomNodeAttributes[] = [];

    if (state.name === 'tag') {
      filteredOptions = ALL_TAGS.filter((tag) => tag.label.toLowerCase().includes(searchTerm));
    } else if (state.name === 'at') {
      filteredOptions = ALL_USERS.filter((user) => user.label.toLowerCase().includes(searchTerm));
    }

    filteredOptions = filteredOptions.sort().slice(0, 5);
    setOptions(filteredOptions);
  }, [state]);

  const enabled = Boolean(state);

  return (
    <FloatingWrapper positioner='cursor' enabled={enabled} placement='bottom-start'>
      <div {...getMenuProps()} className='suggestions'>
        {enabled && options.map((user: { id: string, label: string }, index: number) => {
          const isHighlighted = indexIsSelected(index);
          const isHovered = indexIsHovered(index);

          return (
            <div
              key={user.id}
              className={cx('suggestion', isHighlighted && 'highlighted', isHovered && 'hovered')}
              {...getItemProps({
                item: user,
                index,
              })}
            >
              {user.label}
            </div>
          );
        })}
      </div>
    </FloatingWrapper>
  );
}
