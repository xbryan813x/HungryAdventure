import React, { Component } from 'react';

class Homepage extends Component {
  render() {
    return (
      <form>
        <label>
          Price:
          <input type="text" name="price" />
        </label>
        <label>
          Date:
          <input type="text" name="date" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
};

export default Homepage;