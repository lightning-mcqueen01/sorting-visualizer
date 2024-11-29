import Title from '@/lib/components/title/title';
import classes from './navbar.module.scss';


function Navbar({ title }) {
  return (
    <nav className={classes.navbar}>
      <Title title={title} />
    </nav>
  );
}

export default Navbar;
