
import './App.css';
import FreeShipping from './component/header/FreeShiping'
import Header from './component/header/Header';
import Thumbnail from './component/header/Thumbnail';
function App() {
  return (
    <div style={{width:'100%', height:'100vh',overflowX:'hidden'}}> 
      <FreeShipping/>
      <Header/>
      <Thumbnail/>
    </div>
  );
}

export default App;
