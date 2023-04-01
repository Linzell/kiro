import React from 'react';
import Box from '@mui/material/Box';
import { htmlToProsemirrorNode } from 'remirror';
import { TableComponents } from '@remirror/extension-react-tables';
import { AllStyledComponent } from '@remirror/styles/emotion';
import {
  /* FindReplaceComponent, */
  Remirror,
  ThemeProvider,
  useRemirror,
} from '@remirror/react';
import FloatingLinkToolbar from '@/editorRemirror/floatingLinkToolbar';
import MentionSuggestor from '@/editorRemirror/extensions/mentionSuggestor';
import extensions from './extensions';
import Toolbar from './toolbar';

export default function appEditor() {
  const { manager, state, setState } = useRemirror({
    extensions: React.useCallback(extensions, []),
    core: { excludeExtensions: ['history'] },
    selection: 'start',
    content:
      '<p>Start typing to see the <a href="https://remirror.io">magic</a> happen.</p>',
    stringHandler: htmlToProsemirrorNode,
  });
  return (
    <Box sx={{
      backgroundColor: 'background.paper',
      width: '100%',
      height: '100%',
      padding: '5%',
    }}>
      <div className='remirror-theme'>
        <AllStyledComponent>
          <ThemeProvider>
            <Remirror
              manager={manager}
              autoFocus
              onChange={(parameter) => {
                let nextState = parameter.state;
                // Check if the document content for the editor changed.
                if (parameter.tr?.docChanged) {
                  // Insert text into the editor via a new state.
                  nextState = state.applyTransaction(state.tr.insertText(' NO!!!')).state;
                }
                // Update the state to the latest value.
                setState(nextState);
              }}
              initialContent={state}
              autoRender='end'
              placeholder='Enter your text'
            >
              <MentionSuggestor />
              <Toolbar />
              <FloatingLinkToolbar />
              <TableComponents />
              {/* <FindReplaceComponent /> // TODO: Move this is action after text ctrl + F */}
            </Remirror>
          </ThemeProvider>
        </AllStyledComponent>
      </div>
    </Box>
  );
}
