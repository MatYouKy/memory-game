import React from 'react';
const Icons = ({className, handleClick, index, visibility, active}) => {
    
    return (
        <>
         <div 
            style={visibility? {opacity: "1"}:{opacity:"0", cursor:"default"}}
            className="memory-game__square" 
            onClick={() => handleClick(index)}>
                {
                    !active&&<i className={className}></i>
                }
            
        </div>
        </>
    )
}
export default Icons;