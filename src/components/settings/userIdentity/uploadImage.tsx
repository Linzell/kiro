import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import TrashIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useAppDispatch } from '$/hooks';
import { updateCurrentUser } from '$/user';
import ImageButton from '@/settings/styles/userIdentityStyles/imageButton';
import ImageSrc from '@/settings/styles/userIdentityStyles/imageSrc';
import Image from '@/settings/styles/userIdentityStyles/image';
import ImageBackdrop from '@/settings/styles/userIdentityStyles/imageBackdrop';
import User from '#/user';

export default function UploadImage(
  props: {
    user: User,
  },
) {
  const { t } = useTranslation();
  const format = '*.jpeg, *.jpg, *.png, *.gif';
  const size = '3.1 MB';
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
    if (image) {
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
                      {t('settings.deleteImage')}
                    </React.Fragment>
                  )
                  : (
                    <React.Fragment>
                      <PhotoCamera sx={{ width: 24, height: 24 }} />
                      {t('settings.uploadImage')}
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
          <Trans i18nKey="settings.allowed_format" format={format}>
            Allowed {{ format }}
          </Trans> <br />
          <Trans i18nKey="settings.maxSizeOf_size" size={size}>
            max size of {{ size }}
          </Trans>
        </Typography>
      </Card>
    </React.Fragment>
  );
}
