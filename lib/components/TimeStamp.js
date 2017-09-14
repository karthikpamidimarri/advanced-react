import React from 'react';

class TimeStamp extends React.Component{
  render(){
    return(
      <div>{this.props.timeStamp.toString()}</div>
    );
  }
}

export default TimeStamp;