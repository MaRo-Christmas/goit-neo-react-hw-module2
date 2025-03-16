import css from './Notification.module.css';

const Notification = ({ children }) => {
  return <p className={css.notifP}> {children}</p>;
};

export default Notification;
