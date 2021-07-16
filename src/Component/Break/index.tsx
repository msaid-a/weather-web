import React from 'react'

interface props {
    height?: number
}

const Break:React.FC<props> = (props) => {
    const height = props.height ? props.height : 10 
    return (
        <div style={{height}}>
        </div>
    )
}

export default Break
