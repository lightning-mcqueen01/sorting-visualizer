import ThemeIcon from '@/lib/components/theme-icon/theme-icon';
import Controller from '@/components/controller/controller';
import Navbar from '@/components/navbar/navbar';
import { menuItems } from '@/config';
import classes from './layout.module.scss';

function MainLayout({ children }) {
  return (
    <div>
      <ThemeIcon bottom={10} right={20} />
      <Navbar title="Sorting Visualizer" menuItems={menuItems} />
      <Controller />
      <main className={classes.main}>{children}</main>
    </div>
  );
}

export default MainLayout;
