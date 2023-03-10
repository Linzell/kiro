import React from 'react';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link, { LinkProps } from '@mui/material/Link';
import {
  Link as RouterLink,
  useLocation,
} from 'react-router-dom';

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

function LinkRouter(props: LinkRouterProps) {
  return <Link {...props} component={RouterLink as any} />;
}

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
}

export default function BreadCrumbsModule() {
  const { t } = useTranslation();
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs maxItems={2} aria-label="breadcrumb">
        <LinkRouter underline="hover" color="inherit" to="/">
          {t('menu.home')}
        </LinkRouter>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          return last ? (
            <Typography color="text.primary" key={to}>
               {t(`menu.${value}`)}
            </Typography>
          ) : (
            <LinkRouter underline="hover" color="inherit" to={to} key={to}>
              {t(`menu.${value}`)}
            </LinkRouter>
          );
        })}
      </Breadcrumbs>
    </div>
  );
}
