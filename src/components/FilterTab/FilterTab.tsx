import { MouseEvent, ReactElement } from 'react';
import { PhotoFilter } from '../../types/types';
import './FilterTab.css';

interface FilterTabProps {
    selectedFilter: PhotoFilter;
    filterClicked: (filter: PhotoFilter) => void;
}

const FilterTab = (props: FilterTabProps): ReactElement => {

    return (
        <article className="filterTab">

            <section
                className={`filterTabButton${props.selectedFilter === 'RECENTLY_ADDED' ? ' filterTabButton-selected' : ''}`}
                onClick={(e: MouseEvent<HTMLElement>) => {
                    e.preventDefault();
                    props.filterClicked('RECENTLY_ADDED');
                }}>
                Recently Added
            </section>

            <section
                className={`filterTabButton${props.selectedFilter === 'FAVORITED' ? ' filterTabButton-selected' : ''}`}
                onClick={(e: MouseEvent<HTMLElement>) => {
                    e.preventDefault();
                    props.filterClicked('FAVORITED');
                }}>
                Favorited
            </section>

        </article>
    )

};

export default FilterTab;
