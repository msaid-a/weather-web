import React from 'react'
import noData from '../../static/images/no-data.png'

const index:React.FC = () => {
    return (
        <div className="loading">
            <img className="w-1/4" src={noData} alt=""/>
        </div>
    )
}

export default index
