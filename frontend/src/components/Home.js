import React from 'react'
import { Link } from 'react-router-dom'

import img1 from '../images/indexpic1.jpg'
import img2 from '../images/indexpic2.jpg'
import img3 from '../images/indexpic3.webp'
import img4 from '../images/indexpic4.jpg'
import img5 from '../images/indexpic5.jpg'
const Home = () => {
  return (
    <section>
    <div class="section">
      <div class="section1">
        <div class="img-slider">
              <img src={img1} alt="" class="img" />
              <img src={img2}
                  alt="" class="img" />
              <img src={img3} alt="" class="img" />
              <img src={img4} alt=""
             class="img" />
              <img src={img5} alt=""
                  class="img" />
          </div>
      </div>
      <div class="section2">
          <div id="market"></div>
      </div>
  </div>
</section>
  )
}

export default Home