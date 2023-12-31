function Navbar (){
    return (
        <>
            <h1>Wild Luxury Jewelry</h1>
        <div className="navbar">
            <img src="/assets/img/Wild_Luxury.png" alt="Wilders Luxury logo" width={100} height={70} className="logo" />
            <nav>
            <ul className="navbar" id="nav">
                <li>
                    <a href="#nav" className="active">Home</a>
                </li>
                <li>
                    <a href="">Our Collections</a>
                </li>
                <li>
                    <a href="">Learn to know us</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
               <div className="icons">
                    <a href=""><img className="nav-icons"src="/assets/img/search.svg" alt="" /></a>
                    <a href=""><img className="nav-icons"src="/assets/img/cart.svg" alt="" /></a>
                    <a href=""><img className="nav-icons"src="/assets/img/account.svg" alt="" /></a>
               </div>
            </nav>
        </div>
      
        </>
    )
}

export default Navbar;