import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';
import PublicIpAddress from './components/PublicIpAddress';

function App() {
  return (
    <div >
      <Exhibit title={"Sextant"}>
        <Banner title={"Public IP addresses:"} />

        <div className="row py-5">
          <div className="col-6">
            <PublicIpAddress type="v4" />
          </div>

          <div className="col-6">
            <PublicIpAddress type="v6" />
          </div>

        </div>
      </Exhibit>
    </div>
  );
}

export default App;
