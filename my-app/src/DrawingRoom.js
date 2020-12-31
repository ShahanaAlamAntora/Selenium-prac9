import React ,{Component} from 'react';



class DrawingRoom extends Component {
  render ()
  {
   return(
    <div>

      <h3>Drawing Room   {this.props.draw_room_number} </h3>

    </div>
  );
  }
}

export default DrawingRoom;
