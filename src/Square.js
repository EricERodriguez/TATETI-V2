import React from 'react';
//importo botstrap
import 'bootstrap/dist/css/bootstrap.min.css'


class Square extends React.Component {
    render() {
      return (
        <button
        className="square"
        onClick={() => this.props.onClick()
        }>
          {this.props.value}
        </button>
      );
    }
  }

export default Square;