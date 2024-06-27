import React from 'react'
import cat from '../images/Maine Coon Ohio.png'
const About = () => {
  return (
    <div className="container">
    <div className="image col-6">
      <img src={cat} alt="Maine Coon Cat" />
    </div>
    <div className="col-6">
      <h1>Maine Coon Cats</h1>
      <p>Known for their impressive size, elegant appearance, and friendly personalities, Maine Coons thrive on human
        interaction. Their thick, water-resistant fur comes in various colors and patterns, making them a visual
        delight. As they solve puzzles and chase after feather toys, their intelligence shines through. Whether you
        live in a cozy apartment or a spacious house, these adaptable cats fit right in. Maine Coons are more than
        pets—they're loyal, majestic friends who leave paw prints on your heart.</p>
    </div>
  </div>
  )
}

export default About