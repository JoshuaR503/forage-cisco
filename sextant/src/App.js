import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';

function App() {
  return (
    <div >
      <Exhibit title={"Hello World"}>
        <Banner title={"Hello World!"}/>
        <p>Hi there!</p>
      </Exhibit>
    </div>
  );
}

export default App;
