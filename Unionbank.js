import React from 'react'
import Andhrabank from './Andhrabank'
import Corporationbank from './Corporationbank'

export default function Unionbank() {
    let data={
        firstName: 'Pavan',
        lastName: 'Digamarthi'
    }
    return (
        <div>
            
            <Corporationbank location={data}/>
            <Andhrabank location={data}/>

        </div>
    )
}
