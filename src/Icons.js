import React from 'react';
const Icons = ({className, handleClick, index,active, visibility,flipCard}) => {
    const returnSelected = () =>{
        return handleClick(index)
    }
    return (
        
        <>
         <div 

            className="memory-game__square" 
            onClick={() => returnSelected()}>
            {visibility && <i className={className}></i>}           
        </div>
        </>
    )
}
export default Icons;