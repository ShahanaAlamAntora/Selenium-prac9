import React ,{Component} from 'react';
import Flat from './Flat';



class Floor extends Component {
  render ()
  {
   return(
    <div className="Floor">

      <h1> It is Floor  {this.props.floor_number} </h1>

       <Flat floor_number={this.props.floor_number} flat_number = {'A'}> </Flat>
        <Flat  floor_number={this.props.floor_number} flat_number = {'B'}> </Flat>
         <Flat  floor_number={this.props.floor_number} flat_number = {'C'}> </Flat>
        <Flat  floor_number={this.props.floor_number} flat_number = {'D'}> </Flat>
    </div>
  );
  }
}

export default Floor;
//export default Flat;
