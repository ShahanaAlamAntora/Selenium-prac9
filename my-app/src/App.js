import React ,{Component} from 'react';

import './App.css';
import Floor from './Floor';
import Flat from './Flat';
import DrawingRoom from './DrawingRoom';
import BedRoom from './BedRoom';
import DinningRoom from './DinningRoom';


class App extends Component {
  render() {
  return(
    <div className="App">

       <Floor floor_number={1}>

        </Floor>
            <Floor floor_number={2}>

        </Floor>
                 <Floor floor_number={3}>

        </Floor>





 </div>
    );
  }
  }

export default App;
