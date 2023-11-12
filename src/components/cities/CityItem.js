
function CityItem(props) {

    return (

        <li>
            <div>
                <h3>{props.title}</h3>
                <country>{props.country}</country>
            </div>
            <div>
                <button className="btn btn">Add to favorites</button>
            </div>
            <div>
                <img src={props.image} alt={props.title}/>
            </div>            
         </li>
    );

}

export default CityItem;