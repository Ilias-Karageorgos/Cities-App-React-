import MainNavigation from "./components/layout/MainNavigation";
import AllCitiesPage from "./pages/AllCities";
import FavoritesPage from "./pages/Favorites";
import NewCitiesPage from "./pages/NewCities";
import {Routes,Route} from 'react-router-dom';

function App() {
  return (

    <div>

      <MainNavigation/>

      <Routes>
        <Route path='/' element={<AllCitiesPage />} />
        <Route path='/favorites' element={ <FavoritesPage/>} />
        <Route path='/new-cities' element={ <NewCitiesPage/> } />
        
      </Routes>


    </div>

    );
}

export default App;
