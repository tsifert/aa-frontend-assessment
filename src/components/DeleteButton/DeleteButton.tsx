import { MouseEvent, ReactElement } from 'react';
import './DeleteButton.css';

interface DeleteButtonProps {
    onClick: () => void;
}

const DeleteButton = (props: DeleteButtonProps): ReactElement => {

    return (
        <article className="deleteButton">
            <button
                onClick={(e: MouseEvent<HTMLButtonElement>) => {
                    e.preventDefault();
                    props.onClick();
                }}>
                Delete
            </button>
        </article>
    );

};

export default DeleteButton;