import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Header';
import Footer from '../routes/Footer';
import SideBar from '../routes/SideBar';
import { Outlet} from 'react-router-dom';
import FatchItems from '../Components/FatchItems';
function App() {

  return (
    <>
      <Header></Header>
      <div className='app-container'> 
        <SideBar/>
        <div className='items-container'>
          <FatchItems></FatchItems>
          <Outlet />
          </div>
      </div>
     
      
      <Footer></Footer>
    </>
  )
}

export default App
