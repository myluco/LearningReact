import React from 'react';
import PropTypes from 'prop-types'

class GuestList extends React.Component {

  static propTypes = {
    guests: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (

        <ul>
          {this.props.guests.map ((guest,index) =>
          <li key={index}>
            <span>{guest.name}</span>
            <label>
              <input type="checkbox" checked={guest.isConfirmed}/> Confirmed
            </label>
            <button>edit</button>
            <button>remove</button>
          </li>
          )}
        </ul>
    );
  }
}

export default GuestList;