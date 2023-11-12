import CityList from "../components/cities/CityList";

const DUMMY_Data = [
    {id: 1,
    title: 'Athens',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/94/f8/c3/caption.jpg?w=1200&h=700&s=1&cx=1059&cy=707&chk=v1_dbc744db8746e4bc888e',
    country: 'Greece'
    },

    {id: 2,
    title: 'Rome',
    image: 'https://santorinidave.com/wp-content/uploads/2021/07/rome-travel-guide-colosseum.jpeg',
    country: 'Italy'
    },

    {id: 3,
    title: 'Porto',
    image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/26/18/porto-main.jpg',
    country: 'Portugal'
    },

    {id: 4,
    title: 'Amsterdam',
    image: 'https://static.independent.co.uk/2023/10/12/16/newFile-1.jpg',
    country: 'Netherlands'
    }
]
function AllCities() {
    return (
        <div>
            <h1>All Cities</h1>
           <CityList cities = {DUMMY_Data} />
        </div>
    );
}

export default AllCities;