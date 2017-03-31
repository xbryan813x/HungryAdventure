import React, { Component } from 'react';

export default class Homepage extends Component {
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
