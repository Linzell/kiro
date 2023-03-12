import React from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import User from '#/user';

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  width: 200,
  height: 200,
  border: '2px dashed lightGrey',
  borderRadius: '50%',
  margin: '1rem',
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.30,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    /* '& .MuiTypography-root': {
      border: '4px solid currentColor',
    }, */
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  borderRadius: '50%',
  left: 4,
  right: 4,
  top: 4,
  bottom: 4,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  borderRadius: '50%',
  left: 4,
  right: 4,
  top: 4,
  bottom: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  borderRadius: '50%',
  left: 4,
  right: 4,
  top: 4,
  bottom: 4,
  backgroundColor: theme.palette.common.black,
  opacity: 0,
  transition: theme.transitions.create('opacity'),
}));

export default function UploadImage(
  props: {
    user: User,
  },
) {
  const { user } = props;
  const inputEl = React.useRef(null);
  const image = 'https://raw.githubusercontent.com/Linzell/kiro/041122f8c41d1d7e9d51201dbf01de7c2008753f/src/static/dragon-wiggle.gif';
  const uploadImage = () => {
    // @ts-ignore
    inputEl.current.click();
  };
  return (
    <React.Fragment>
      <Card
        sx={{
          width: { xs: '85vw', md: '30vw' },
          height: '40vh',
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ImageButton
        >
          <ImageSrc style={{ backgroundImage: `url(${image})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <IconButton
          aria-label="upload picture"
          component="label"
          onClick={() => uploadImage()}
          >
            <input hidden accept="image/*" ref={inputEl} type="file" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color={image ? 'inherit' : 'primary'}
                sx={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                <PhotoCamera sx={{ width: 24, height: 24 }} />
                Upload Photo
              </Typography>
            </Image>
          </IconButton>
        </ImageButton>
        <Typography
          gutterBottom
          variant="subtitle2"
          component="div"
          textAlign="center"
          color="textSecondary"
        >
          Allowed *.jpeg, *.jpg, *.png, *.gif <br />
          max size of 3.1 MB
        </Typography>
      </Card>
    </React.Fragment>
  );
}
