import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css'

function MainNavigation() {
    
    return (
        <header className={classes.header}>
            <div className={classes.logo} >Top Cities</div>

            <nav>
                <ul>

                    <li>
                        <Link to='/' >All Cities</Link>
                    </li>
                    <li>
                        <Link to='/Favorites' >My Favorite Cities</Link>
                    </li>
                    <li>
                        <Link to='/New-cities' >New City</Link>
                    </li>

                </ul>
            </nav>
        </header>


    );
}

export default MainNavigation;