import { ReactElement } from 'react';
import './FilterTab.css';


const FilterTab = (): ReactElement => {

    return (
        <div className="filterTab">
            <div className="filterTabButton filterTabButton-selected">
                Recently Added
            </div>

            <div className="filterTabButton">
                Favorited
            </div>

        </div>
    )

};

export default FilterTab;
