import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    
  
    return (
    <div>
        {
        robots.map((user, n) => {
            return  (<Card 
                key={robots[n].id} 
                id = {robots[n].id} 
                name = {robots[n].name} 
                email = {robots[n].email}/> 
        );
    })
    }
    </div>

    );
}

export default CardList;