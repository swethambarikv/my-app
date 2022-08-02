import './App.css';
import Greet from './componenets/Greet';
import Welcome from './componenets/Welcome';
import Hello from './componenets/Hello';
import Message from './componenets/Message'
function App() {
  return (
    <div className="App">
    <Greet name = "Swetha" surName = "Vijay">
    <h2>Age: 21</h2>  </Greet> 
    <Greet name = "Savitha" surName = "Ragunathan">
    <h2>Age:26</h2> </Greet>

    <Greet name = "Antonette" surName = "Paul">
      <h2>Age:44</h2>
    </Greet>
     <p><Welcome/></p>
     
     <p><Hello/></p>

     <p><Message/></p>
    </div>
  );
}

export default App;
