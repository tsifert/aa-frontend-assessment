import { ReactElement } from 'react';
import { PhotoFilter } from '../../types/types';
import FilterTabButton from '../FilterTabButton/FilterTabButton';
import './FilterTab.css';

interface FilterTabProps {
    selectedFilter: PhotoFilter;
    filterClicked: (filter: PhotoFilter) => void;
}

const FilterTab = (props: FilterTabProps): ReactElement => {

    return (
        <nav className="filterTab" data-testid="filterTab-check">

            <FilterTabButton
                isSelected={props.selectedFilter === 'RECENTLY_ADDED'}
                onClick={() => props.filterClicked('RECENTLY_ADDED')}
                text="Recently Added" />

            <FilterTabButton
                isSelected={props.selectedFilter === 'FAVORITED'}
                onClick={() => props.filterClicked('FAVORITED')}
                text="Favorited" />

        </nav>
    );

};

export default FilterTab;
