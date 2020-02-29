import React from 'react'
import './card-list.style.css'
import { Card } from '../card/card.component'

export const CardList = ({children, monsters}) =>{
    return (
    <div className="card-list">
      { 
        monsters.map((monster,idx) =><Card key={idx} monster={monster}/>)
      }
      </div>
      )
}