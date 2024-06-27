import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Pet() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/pets');
        setPets(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="Pet">
   
      <div className="container d-flex flex-wrap">
        {pets.map((pet) => (
          <div className="items" key={pet.id}>
            <div className="img img1">
              <img src={pet.imageURL} alt={pet.title} />
            </div>
            <div className="name">{pet.title}</div>
            <div className="price">{pet.price}</div>
            <div className="info">{pet.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pet;
