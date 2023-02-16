import { ReactElement } from 'react';
import { PHOTO_API_URL } from '../../types/types';
import './ErrorMessage.css';


interface ErrorMessageProps {
    message: string;
}

const ErrorMessage = (props: ErrorMessageProps): ReactElement => {

    return (
        <div className="errorMessage">
            <h2>
                There was an error accessing the API
            </h2>
            <h3>
                {PHOTO_API_URL}
            </h3>
            <h3>
                {
                    props.message
                }
            </h3>
        </div>
    )
};

export default ErrorMessage;