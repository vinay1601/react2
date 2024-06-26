
import styles from './Button.module.css'

const Button = (props) => {
  
  const {isOutline, formBtn , text , icon} = props; ///destructuring in react props

  const buttonClass = formBtn ? styles.submit1 : isOutline ? styles.outline_btn : styles.primary_button;

  return (
    <div>
       
      <button className={buttonClass} >
      {icon}
      {text}
      </button>
    </div>
  )
}

export default Button
