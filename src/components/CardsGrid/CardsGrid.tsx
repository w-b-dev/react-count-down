import React from 'react';
import './CardsGrid.css';
import { CardsGridProps } from '../interfaces'
import Card from '../Card'

const CardsGrid = ({ cards, handleClick }: CardsGridProps) => {
  // console.log('CardsGrid', cards)
  return <main className="CardsGrid">
    {cards.map(e => <Card key={e.id} {...e} handleClick={handleClick} />)}
  </main>;
};
export default CardsGrid;
