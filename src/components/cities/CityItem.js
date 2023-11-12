import classes from './CityItem.module.css'

function CityItem(props) {

    return (

        <li className={classes.item}>

            <div className={classes.content}>
                <h3>{props.title}</h3>
                <country>{props.country}</country>
                <p>{props.description}</p>

            </div>

            <div className={classes.actions}>
                <button>Add to favorites</button>
            </div>

            <div className={classes.image} >
                <img src={props.image} alt={props.title}/>
            </div>            
         </li>
    );

}

export default CityItem;