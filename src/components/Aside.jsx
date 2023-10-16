import { useState } from 'react';

function Aside(articleCategory, category, handleClick) {
  

   return(
    <div className="aside">
    <aside>
        <div>
        <img src="/assets/img/filter.svg" alt="" />
        <h3>Filters</h3>
        </div>
        <ul>
            <li>
                <a href="">Price</a>
                <img src="/assets/img/expand.svg" alt="" />
            </li>
            <li>
                <a href="">In stock</a>
                <label class="switch">
                 <input type="checkbox"/>
                <span class="slider round"></span>
                </label>

            </li>
        </ul>
        <h3>Type of product</h3>
        <ul>
            <li>
                <button onClick={() => {handleClick(category)}} className="filter">Necklace</button>
                </li>
            <li>
                
                <button className="filter">Earrings</button>
                </li>
            <li>
                <button className="filter">Rings</button>
                </li>
           
        </ul>
    </aside>
    </div>
   )
}

export default Aside; 