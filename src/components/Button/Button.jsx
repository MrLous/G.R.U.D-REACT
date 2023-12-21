import './index.scss';

const Button = ({ text, collor, type }) => {
  return (
    <button className={collor} type={type} >
        {text}
    </button>
  )
}

export default Button