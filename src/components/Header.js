import React from 'react'
import Button from './Button'
import Tasks from './Tasks'

const Header = ({title}) => {
    const onClick = () => {
        console.log('click')
    }
    return (
        <div className='container'>
            <header>
                <h1 style={{color: 'red', backgroundColor:'black'}}>{title}</h1>
                <h2 style={headingStyle}>Tracking your lifestyle!</h2>
            </header>
            <Button color='green' text='Add Weight' onClick={onClick}></Button>
        </div>
    
            
    )
}

const headingStyle = {
    color:'blue'
}

const buttonClr = {
    color:'green'
}
export default Header