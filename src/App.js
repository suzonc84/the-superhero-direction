import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import PhysicianMainDiv from './Components/PhysicianMainDiv/PhysicianMainDiv';
function App() {
  return (
    <div className="App">
      <div className="">
        <Header></Header>
      </div>
      <div className="col-10">
        <PhysicianMainDiv></PhysicianMainDiv>
      </div>
    </div>
  );
}

export default App;