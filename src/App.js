import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';
import BubbleEffect from './Components/BubbleEffect';
import Navbarcomp from './Components/Navbarcomp';
import Banner from './Components/Banner';
import MiddleSection from './Components/MiddleSection';
import LogIn from './Components/LogIn';
import Sample from './Components/Sample';

const App= () =>{
  return (

 <div className='App'>

<BubbleEffect/>
<Navbarcomp/> 
<Banner/>
<MiddleSection/>

</div>
  );
}

export default App;
