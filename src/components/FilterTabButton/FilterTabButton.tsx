import { MouseEvent, ReactElement } from 'react';
import './FilterTabButton.css';

interface FilterTabButtonProps {
    isSelected: boolean;
    text: string;
    onClick: () => void;
}

const FilterTabButton = (props: FilterTabButtonProps): ReactElement => {

    return (

        <button
            className={`filterTabButton${props.isSelected ? ' filterTabButton-selected' : ''}`}
            onClick={(e: MouseEvent<HTMLElement>) => {
                e.preventDefault();
                props.onClick();
            }}>
            {
                props.text
            }
        </button>

    );

};

export default FilterTabButton;
