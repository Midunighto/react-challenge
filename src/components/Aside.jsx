
function Aside() {
   return(
    <div className="aside">
    <aside>
        <div>
        <img src="/assets/img/filter.svg" alt="" />
        <h2>Filters</h2>
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
            <li>
                <a href="">Rings</a>
                <img src="/assets/img/expand.svg" alt="" />
            </li>
        </ul>
        <h2>Type of product</h2>
        <ul>
            <li><a href="">Necklaces</a></li>
            <li><a href="">Earrings</a></li>
            <li><a href="">Rings</a></li>
        </ul>
    </aside>
    </div>
   )
}

export default Aside; 