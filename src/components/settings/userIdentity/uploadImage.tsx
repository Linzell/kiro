import React from 'react';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import TrashIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useAppDispatch } from '$/hooks';
import { updateCurrentUser } from '$/user';
import ImageButton from '@/settings/styles/userIdentity/imageButton';
import ImageSrc from '@/settings/styles/userIdentity/imageSrc';
import Image from '@/settings/styles/userIdentity/image';
import ImageBackdrop from '@/settings/styles/userIdentity/imageBackdrop';
import User from '#/user';

export default function UploadImage(
  props: {
    user: User,
  },
) {
  const dispatch = useAppDispatch();
  const inputEl = React.useRef(null);
  const [image, _setImage] = React.useState(props.user.imgUrl || null);
  const cleanup = () => {
    if (!image) return;
    URL.revokeObjectURL(image);
    inputEl.current = null;
    props.user.imgUrl = '';
    dispatch(updateCurrentUser(props.user));
  };
  const setImage = (newImage: string | null) => {
    if (props.user.imgUrl) {
      cleanup();
    }
    _setImage(newImage);
    props.user.imgUrl = newImage as string;
    dispatch(updateCurrentUser(props.user));
  };
  const handleClick = (event: any) => {
    if (image) {
      event.preventDefault();
      setImage(null);
    }
  };
  const handleOnChange = (event: any) => {
    const newImage = event.target?.files?.[0];
    if (newImage) {
      setImage(URL.createObjectURL(newImage));
    }
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
          <ImageSrc style={{ backgroundImage: `url(${props.user.imgUrl})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <IconButton
            aria-label="upload picture"
            component="label"
            onClick={handleClick}
          >
            <input
              hidden
              accept="image/*"
              id="imageUpload"
              type="file"
              ref={inputEl}
              onChange={handleOnChange}
            />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color={image ? 'error' : 'primary'}
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
                {image
                  ? (
                    <React.Fragment>
                      <TrashIcon sx={{ width: 24, height: 24 }} />
                      Delete Photo
                    </React.Fragment>
                  )
                  : (
                    <React.Fragment>
                      <PhotoCamera sx={{ width: 24, height: 24 }} />
                      Upload Photo
                    </React.Fragment>
                  )
                }
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
