import AppToolbar from '@/toolbar/appToolbar';

export default function ToolbarLayout(
  props: {
    drawerWidth: number;
  },
) {
  return (
    <AppToolbar drawerWidth={props.drawerWidth} />
  );
}
