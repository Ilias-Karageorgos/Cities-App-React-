import CityList from "../components/cities/CityList";

const DUMMY_Data = [
    {id: 1,
    title: 'Athens',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/94/f8/c3/caption.jpg?w=1200&h=700&s=1&cx=1059&cy=707&chk=v1_dbc744db8746e4bc888e',
    country: 'Greece',
    description: 'Athens is a major coastal urban area in the Mediterranean, and it is both the capital and the largest city of Greece.'
    },

    {id: 2,
    title: 'Rome',
    image: 'https://santorinidave.com/wp-content/uploads/2021/07/rome-travel-guide-colosseum.jpeg',
    country: 'Italy',
    description: "Rome (Italian and Latin: Roma [ˈroːma] ⓘ) is the capital city of Italy. It is also the capital of the Lazio region, the centre of the Metropolitan City of Rome, and a special comune named Comune di Roma Capitale. With 2,860,009 residents in 1,285 km2 (496.1 sq mi),[2] Rome is the country's most populated comune and the third most populous city in the European Union by population within city limits"
    },

    {id: 3,
    title: 'Porto',
    image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/26/18/porto-main.jpg',
    country: 'Portugal',
    description: "Porto (Portuguese pronunciation: [ˈpoɾtu] ⓘ), also known in English as Oporto,[a] is the second largest city in Portugal after Lisbon, the capital of the Porto District, and one of the Iberian Peninsula's major urban areas."
    },

    {id: 4,
    title: 'Amsterdam',
    image: 'https://static.independent.co.uk/2023/10/12/16/newFile-1.jpg',
    country: 'Netherlands',
    description: `Amsterdam (/ˈæmstərdæm/ AM-stər-dam, UK also /ˌæmstərˈdæm/ AM-stər-DAM,[9][10] Dutch: [ˌɑmstərˈdɑm] ⓘ; literally, "The Dam on the River Amstel") is the capital and most populated city of the Netherlands, with The Hague being the seat of government.`
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