import React from 'react';
import { useHelpers, useRemirrorContext } from '@remirror/react';
import { SocialEditor } from '@remirror/react-editors/social';

const TAGS = ['editor', 'remirror', 'opensource', 'prosemirror'];

const ALL_USERS = [
  { id: 'joe', label: 'Joe' },
  { id: 'sue', label: 'Sue' },
  { id: 'pat', label: 'Pat' },
  { id: 'tom', label: 'Tom' },
  { id: 'jim', label: 'Jim' },
];

const SAMPLE_DOC = {
  type: 'doc',
  content: [
    {
      type: 'paragraph',
      attrs: { dir: null, ignoreBidiAutoUpdate: null },
      content: [{ type: 'text', text: 'Loaded content' }],
    },
  ],
};

function LoadButton() {
  const { setContent } = useRemirrorContext();
  const handleClick = React.useCallback(() => setContent(SAMPLE_DOC), [setContent]);

  return (
    <button onMouseDown={(event) => event.preventDefault()} onClick={handleClick}>
      Load
    </button>
  );
}

function SaveButton() {
  const { getJSON } = useHelpers();
  const handleClick = React.useCallback(() => alert(JSON.stringify(getJSON())), [getJSON]);

  return (
    <button onMouseDown={(event) => event.preventDefault()} onClick={handleClick}>
      Save
    </button>
  );
}

export default function appEditor() {
  return (
    <div>
      <SocialEditor placeholder='Mention @joe or add #remirror' users={ALL_USERS} tags={TAGS}>
        {/* <LoadButton />
      <SaveButton /> */}
      </SocialEditor>
    </div>
  );
}
