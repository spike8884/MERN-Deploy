import React from 'react'

const Home = () => {
  return (
    <div><h1>Click the burger menu to see the magic.</h1>
<input type="checkbox" id="burger-toggle" />
    <label for="burger-toggle" class="burger-menu">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </label>
    <div class="menu">
      <div class="menu-inner">
        <ul class="menu-nav">
          <li class="menu-nav-item"><a class="menu-nav-link" href="#"><span>
                <div>Home</div>
              </span></a></li>
          <li class="menu-nav-item"><a class="menu-nav-link" href="#"><span>
                <div>About</div>
              </span></a></li>
          <li class="menu-nav-item"><a class="menu-nav-link" href="#"><span>
                <div>Service</div>
              </span></a></li>
          <li class="menu-nav-item"><a class="menu-nav-link" href="#"><span>
                <div>Team</div>
              </span></a></li>
        </ul>
        <div class="gallery">
          <div class="title">
            <p>Sora Gallery</p>
          </div>
          <div class="images">
            <a class="image-link" href="#">
<div className="image" data-label="Star"><img src="./home pics/55a2875e658883d7f9a21e79a8519f85.jpg" alt="" /></div>
            </a>
            <a class="image-link" href="#">
<div className="image" data-label="Sun"><img src="./home pics/download.jpg" alt="" /></div>
            </a>
            <a class="image-link" href="#">
<div className="image" data-label="Tree"><img src="./home pics/cdbef7d0499eac872483b4afe3dcda1f.jpg" alt="" /></div>
            </a>
            <a class="image-link" href="#">
<div className="image" data-label="Sky"><img src="./home pics/mdmgphxghi881.jpg" alt="" /></div>
            </a>
          </div>
        </div>
      </div>
    </div>
    
    
    
    
    
    
    </div>
  )
}

export default Home