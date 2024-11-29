import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import classes from './title.module.scss';

function Title({ title }) {
  return (
    <h1 className={classes.title} data-testid="title">
      {title}
    </h1>
  );
}

export default Title;
