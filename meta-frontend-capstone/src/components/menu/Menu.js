import React from 'react';
import './menu.css';

export default function Menu() {
  return (   
    <div className="section" >
  <div className="left-content">
    <div className="week-specials">This week's specials</div>
  </div>
  <div className="right-content">
    <div className="order-button">Online Menu</div>
  </div>
  <div className="card-container">
    <div className="card">
      <img src="/images/greek salad.jpg" className="card-img" alt="card" />
      <div className="card-text">
        <h3 className="card-title">Greek Salad</h3>
        <div className="card-price-container">
          <p className="card-price">$10</p>
        </div>
        <p className="card-description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
        <p className="card-delivery">Last order for delivery: Jan 20</p>
      </div>
    </div>
    <div className="card">
      <img src="/images/bruchetta.svg" className="card-img" alt="card i"/>
      <div className="card-text">
        <h3 className="card-title">Bruchetta</h3>
        <div className="card-price-container">
          <p className="card-price">$15</p>
        </div>
        <p className="card-description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
        <p className="card-delivery">Last order for delivery: Jan 21</p>
      </div>
    </div>
    <div className="card">
      <img src="/images/lemon dessert.jpg" className="card-img" alt="card" />
      <div className="card-text">
        <h3 className="card-title">Lemon Dessert</h3>
        <div className="card-price-container">
          <p className="card-price">$20</p>
        </div>
        <div>
        <p className="card-description">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
        <p className="card-delivery">Last order for delivery: Jan 22</p>
        </div>
      </div>
    </div>
  </div>
  
</div>


  
    
    
  )
}
