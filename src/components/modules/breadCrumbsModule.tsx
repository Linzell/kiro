import React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link, { LinkProps } from '@mui/material/Link';
import {
  Link as RouterLink,
  useLocation,
} from 'react-router-dom';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
}

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

// TODO: Add more routes
const breadcrumbNameMap: { [key: string]: string } = {
  '/settings': 'Settings',
};

function LinkRouter(props: LinkRouterProps) {
  return <Link {...props} component={RouterLink as any} />;
}

export default function BreadCrumbsModule() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs maxItems={2} aria-label="breadcrumb">
        <LinkRouter underline="hover" color="inherit" to="/">
          Home
        </LinkRouter>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return last ? (
            <Typography color="text.primary" key={to}>
              {breadcrumbNameMap[to]}
            </Typography>
          ) : (
            <LinkRouter underline="hover" color="inherit" to={to} key={to}>
              {breadcrumbNameMap[to]}
            </LinkRouter>
          );
        })}
      </Breadcrumbs>
    </div>
  );
}
