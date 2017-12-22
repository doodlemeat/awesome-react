import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <table className="result-table">
          <tr>
            <th className="align-left">Repository</th>
            <th className="align-left">Category</th>
            <th className="align-left">Description</th>
            <th>Last commit</th>
            <th>Stars</th>
          </tr>
          <tr>
            <td><a href="https://github.com/enaqx/awesome-react">https://github.com/enaqx/awesome-react</a></td>
            <td>Styling</td>
            <td>...</td>
            <td className="align-center">4 days ago</td>
            <td className="align-center">4,560</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default App;
