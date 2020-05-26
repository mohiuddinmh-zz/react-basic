import React, {Fragment} from 'react';

class Articles extends React.Component {

  render() {
    return (
      <Fragment>
        <div className="controls">
          <div className="input-container">
            <span>author:</span>
            <input type="text" className="text-input" data-testid="text-input" />
            <button className="fetch-button" data-testid="fetch-button">Fetch</button>
          </div>
        </div>
        <div className="results">
          <li key="example-key" data-testid="result-row">Example title</li>
        </div>
        <div data-testid="no-results">No results</div>
      </Fragment>
    );
  }
}

export default Articles;
