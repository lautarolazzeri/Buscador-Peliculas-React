import React, { Component } from 'react';

export class SearchForm extends Component {
    render() {
        return(
            <div className="field has-addons">
                <div className="control">
                    <input
                    className="input"
                    type="text"
                    placeholder="Movies to search..."
                    />
                </div>
                <div className="control">
                    <button className="button is-info">
                    Search
                    </button>
                </div>
            </div>
        )
    }
}