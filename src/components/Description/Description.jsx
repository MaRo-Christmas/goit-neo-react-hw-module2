import css from './Description.module.css';

const Description = ({ name, title }) => {
  return (
    <div className={css.descWrap}>
      <h1 className={css.heading}>{name}</h1>
      <p className={css.descP}>{title}</p>
    </div>
  );
};

export default Description;
