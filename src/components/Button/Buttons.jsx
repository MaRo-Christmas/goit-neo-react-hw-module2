import css from './Buttons.module.css';
import clsx from 'clsx';

const Buttons = ({ onClick, children }) => (
  <button className={clsx(css.btn, css[children])} onClick={onClick}>
    {children.charAt(0).toUpperCase() + children.slice(1)}
  </button>
);
export default Buttons;
