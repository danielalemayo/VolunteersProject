import React, {Component} from 'react';

class Button extends Component {
    state = {
        type: null,
      }
    render() { 
    return ( <button>{this.state.type}</button> );
    }
}
 
export default Button;