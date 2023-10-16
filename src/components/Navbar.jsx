function Navbar (){
    return (
        <nav>
            <img src="/assets/img/Wild_Luxery.png" alt="Wild Luxery logo" width={70} height={70} className="logo" />
            <ul className="navbar" id="nav">
                <li>
                    <a href="nav">Home</a>
                </li>
                <li>
                    <a href="">Our products</a>
                </li>
                <li>
                    <a href="">Learn to know us</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;