import React from 'react';
import './SearchPanel.css';

const SearchPanel = ({searchText, onChangeSearchText}) => {
    const placeholder = 'Type here to search';

    return <input
        className="search-input form-control"
        type="text"
        placeholder={placeholder}
        onChange={(event) => onChangeSearchText(event.target.value)}
        value={searchText}
    />;
}

export default SearchPanel;
