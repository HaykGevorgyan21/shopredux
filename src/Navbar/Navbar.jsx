import { Link } from "react-router-dom";
import BurgerMenu from "./Burgermenu";
import { useSelector, useDispatch } from "react-redux/es/exports";
import handleCart from "../Redux/Reducers/handleCartReducer";
import classes from "./Navbar.module.scss"

function Navbar () {
 
    const state = useSelector((state ) => state.handleCart)


    return(<>
    <BurgerMenu />
    <div className={classes["navbar"]}>
        <span className={classes["brand"]}>accessories</span>
    <Link to={'/'} >Home</Link>
    <Link to={'/Electronics'} >Electronics</Link>
    <Link to={'/Jewelery'} >Jewelery</Link>
    <Link to={'/Men'} >Men</Link>
    <Link to={'/Women'} >Women</Link>
    <Link className={classes["basket"]} to={'/Basket'}></Link>
    </div>
    
    {/* <div className={classes["navbar-menu-mobile"]}>
        <span></span>
        <span></span>
        <span></span>
    </div> */}
    </> )
}

export default Navbar;