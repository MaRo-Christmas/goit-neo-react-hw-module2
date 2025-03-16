import css from './Feedback.module.css';

const Feedback = ({ options, total, positive }) => (
  <div className={css.wrapper}>
    {Object.keys(options).map(option => (
      <p key={option}>
        {option.charAt(0).toUpperCase() + option.slice(1)}: {options[option]}
      </p>
    ))}
    <p>Total: {total}</p>
    <p>Positive: {positive}%</p>
  </div>
);

export default Feedback;
