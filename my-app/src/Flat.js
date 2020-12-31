import React ,{Component} from 'react';
import DrawingRoom from './DrawingRoom';
import BedRoom from './BedRoom';
import DinningRoom from './DinningRoom';

class Flat extends Component {
  render ()
  {
   return(
    <div className="Flat">

      <h1> {this.props.floor_number} - {this.props.flat_number} </h1>
      <DrawingRoom draw_room_number={1} > </DrawingRoom>
      <BedRoom bed_room_number={1}> </BedRoom>
      <DinningRoom din_room_number ={1} > </DinningRoom>


    </div>
  );
  }
}

export default Flat;
//export default DrawingRoom;
//export default BedRoom;
//export default DinningRoom;
