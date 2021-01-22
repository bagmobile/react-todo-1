import React from 'react';
import {FilterTypes} from "../../consts/consts";

import './ItemStatusFilter.css';

const ItemStatusFilter = ({currentType, onChangeFilterType}) => {

    return (
        <div className="btn-group">
            {Object.entries(FilterTypes).map(([key, value]) => {
                const currentTypeStyle = value === currentType ? 'btn-info' : 'btn-outline-secondary';
                return (<button
                    key={key}
                    type="button"
                    className={`btn ${currentTypeStyle}`}
                    onClick={() => onChangeFilterType(value)}
                >
                    {value}
                </button>);
            })}
        </div>
    );

}

export default ItemStatusFilter;
