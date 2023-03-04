import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import LanguageName from '#/enums/languageEnum';

export default function renderTranslateMenu(
  props: {
    menuTranslateId: string;
    anchorTranslateEl: null | HTMLElement;
    language: LanguageName;
    languages: { name: string; code: LanguageName; icon: string; }[]
    setLanguage: React.Dispatch<React.SetStateAction<LanguageName>>;
    setAnchorTranslateEl: React.Dispatch<React.SetStateAction<null | HTMLElement>>;
  },
) {
  const handleMenuClose = () => {
    props.setAnchorTranslateEl(null);
  };
  const isMenuOpen = Boolean(props.anchorTranslateEl);
  return (
    <Menu
      anchorEl={props.anchorTranslateEl}
      id={props.menuTranslateId}
      open={isMenuOpen}
      onClose={handleMenuClose}
      onClick={handleMenuClose}
      PaperProps={{
        elevation: 1,
        sx: {
          overflow: 'visible',
          width: 200,
          maxHeight: 450,
          overflowY: 'auto',
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      {
        props.languages.map((language, key) => (
          <MenuItem
            key={key}
            onClick={() => props.setLanguage(language.code)}
            sx={{
              ml: 1,
              mr: 1,
              backgroundColor: props.language === language.code ? 'grey.200' : 'background.paper',
              borderRadius: 2,
            }}
          >
            <ListItemIcon>
              { language.icon }
            </ListItemIcon>
            <ListItemText primary={language.name} />
          </MenuItem>
        ))
      }
    </Menu>
  );
}
