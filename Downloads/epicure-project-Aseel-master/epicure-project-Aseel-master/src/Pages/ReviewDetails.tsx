import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Back from '../assets/back.png'
import { ChefsContainer } from "./Admin/ChefsContainer";
import { DishesContainer } from "./Admin/DishesContainer";
import { RestaurantsContainer } from "./Admin/RestaurantsContainer";
export default function PopupGfg(){
  const restaurants = useSelector((state: any) => state.restaurants.value);
  const chefs = useSelector((state: any) => state.chefs.value);
  const navigate = useNavigate();

  return(
  <>
        <img style={{width:'3%'}} src={Back}></img>
        <a style={{color:'blue',fontSize:"70%"}} onClick={() => navigate(-1)}>back</a>
        <div className="tabs">
        <input
          type="radio"
          className="tabs__radio"
          name="tabs-example"
          id="tab1"
          disabled
        />

        <label style={{color:'gray'}} htmlFor="tab1" className="tabs__label">
          Restaurants
        </label>
        <RestaurantsContainer />

        <input
          type="radio"
          className="tabs__radio"
          name="tabs-example"
          id="tab3"
          defaultChecked
        />
        <label htmlFor="tab3" className="tabs__label">
          Chefs
        </label>
        <ChefsContainer />

        <input
          type="radio"
          className="tabs__radio"
          name="tabs-example"
          id="tab4"
          disabled
        />
        <label style={{color:'gray'}} htmlFor="tab4" className="tabs__label">
          Dishes
        </label>
        <DishesContainer />
      </div>
  </>
  )
};