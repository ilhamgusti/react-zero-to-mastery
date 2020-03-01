import React from 'react'
import './custom-button.styles.scss'

const CustomButton = ({children, google, ...otherProps}) => {
    return (
        <button className={`${google ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton