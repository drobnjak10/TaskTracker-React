import React from 'react'



 const Button = (props) => {
    return (
        <button className="btn" style={{backgroundColor : props.color}}>
            {props.text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
}


export default Button;