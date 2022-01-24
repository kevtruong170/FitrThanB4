import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
const handleClick = (e) => {
    console.log("You've pressed a button!", e);
}
const funClick = (x, e) => {
    console.log("Hi, " + x, e.target);
}
    return (
        
        <div classButton = "button">
            <button onClick={handleClick  } style= {{backgroundColor:color}}>
                {text}
            </button>
            <button onClick={(e) => funClick('Kevin', e)}>Fun Button</button>
        </div>
    )
}

Button.defaultProps = {
    color:'steelblue',
}
Button.propTypes = {
    color:PropTypes.string,
    text:PropTypes.string,
    onClick:PropTypes.func,
}

export default Button