import './App.css';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListDonorComponent from './components/ListDonorComponent';
import CreateDonorComponent from './components/CreateDonorComponent';
import UpdateDonorComponent from './components/UpdateDonorComponent.js';

function App() {
  return (
    <div>
      <Router>              
          <HeaderComponent/>    
            <div className="container">     
              <Routes>                  
                  <Route exact path='/' element = {<ListDonorComponent/>}></Route>                   {/* http://localhost:3000/ */}
                  <Route path='/donors' element = {<ListDonorComponent/>}></Route>                   {/* http://localhost:3000/donors */}
                  <Route path='/add-donor/' element = {<CreateDonorComponent/>}></Route>             {/* http://localhost:3000/add-donor */}
                  <Route path='/update-donor/:id' element = {<UpdateDonorComponent/>}></Route>       {/* http://localhost:3000/update-donor/2 */}
              </Routes>
            </div>
          <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
