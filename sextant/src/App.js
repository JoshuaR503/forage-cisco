import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';
import LatencyComponent from './components/Latency';
import PublicIpAddress from './components/PublicIpAddress';

function App() {
  return (
    <div >
      <Exhibit title={"Sextant by Cisco"}>

        <Banner title={"Public IP addresses:"} />
        <div className="row py-3">
          <div className="col-6">
            <PublicIpAddress type="v4" />
          </div>

          <div className="col-6">
            <PublicIpAddress type="v6" />
          </div>
        </div>

        <Banner title={"Packet latency:"} />
        <div className="row py-3">
          <LatencyComponent/>
        </div>

      </Exhibit>
    </div>
  );
}

export default App;
