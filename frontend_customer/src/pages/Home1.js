import React from 'react'
import image from '../images/A.png'

export default function Home1() {
  return (
    <div>
        <div style={
                  {marginLeft: 200,
                    marginTop:100,
                    align:'center'}
                  }>
            <img src={image} style={{height:400, width:800}}alt="....." />
        </div>

    </div>
  )
}
