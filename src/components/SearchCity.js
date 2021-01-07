import React from 'react';

const SearchCity = (props) => (
    <>
    <div className="row" style={{marginButton : 30}}>
    <div className="col">
      <h3>Search City</h3>
      <div className="card">
        <div className="card-body">
          <div className="form-row">
            <div className="col-11">
              <input
              type="text"
              className="form-control"
              placeholder="Type keyword or city name"
              value={props.value}
              onChange={props.onChange}
              />
            </div>
            <div className="col-1">
              <button
              className="btn btn-primary" 
              type="button"
              onClick ={props.onClickSearch}
              > Search</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
);

export default SearchCity;