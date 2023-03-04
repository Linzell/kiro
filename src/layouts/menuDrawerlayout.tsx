import AppMenuDrawer from '@/menuDrawer/appMenuDrawer';

export default function DrawerLayout(
  props: {
    drawerWidth: number;
  },
) {
  return (
    <AppMenuDrawer drawerWidth={props.drawerWidth} />
  );
}
