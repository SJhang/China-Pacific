import React from 'react';
import Modal from 'react-modal';

class MenuEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      prices: {},
      spiciness,
      sauce: "",
      ingredients: "",
      thumbnail_url: ""
    }
  }
  render () {
    return (
      <div className={`${this.props.dishName}-edit-form`}>
        <h2>{`Edit ${this.props.dishName}`}</h2>
      </div>
    )
  }
}

export default MenuEdit;
