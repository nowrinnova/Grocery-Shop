import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../routes/Header';
import Footer from '../routes/Footer';
import HomeItems from '../routes/HomeItems';
import SideBar from '../routes/SideBar';
import { Outlet} from 'react-router-dom';
function App() {

  return (
    <>
      <Header></Header>
      <div className='app-container'> 
        <SideBar/>
        <div className='items-container'>
          {/* <HomeItems ></HomeItems> */}
          <Outlet />
          </div>
      </div>
     
      
      <Footer></Footer>
    </>
  )
}

export default App
