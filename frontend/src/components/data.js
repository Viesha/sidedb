import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
const Data = props => {



        const [items, setItems] = useState([])
      
      
        const fetchData = () => {
      
          fetch("http://127.0.0.1:8000/data/")
      
            .then(response => {
              return response.json()
      
            })
      
            .then(data => {
      
                setItems(data)
      
            })
      
        }
      
      
        useEffect(() => {
      
          fetchData()
      
        }, [])


    
  
       
             

        return (

            <div>
        
              {items.length > 0 && (
        
                <ul>
        
                  {items.map(item => (
        
                    <li key={item.val}> 

                        <p><strong> Data point ID</strong> {item.dp} <strong> Value</strong> {item.val}  <strong>Date</strong> {item.ts}</p>
                    </li>
        
                  ))}
        
                </ul>
        
              )}
        
            </div>
        
          )
}

export default Data;
