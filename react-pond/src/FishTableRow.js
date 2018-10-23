import React, { Component } from 'react';

//TODO: FishTable has many FishTableRows

class FishTableRow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showDescription: false,
    }
  }

  render() {
    // const picture = function(){
    //   this.setState({
    //     showDescription: !showDescription
    //   });
    // } 

    return (
      // <tr onClick='picture()'>
      <tr onClick={()=>this.setState({showDescription: !this.state.showDescription})}>
        <td class="fish-name">{this.props.fish.name}</td>
        <td><img src={this.props.fish.image} /></td>
        {this.state.showDescription ? <td id='fish_description'>{this.props.fish.description}</td> : null}
      </tr>
    )
  }
}



export default FishTableRow;
