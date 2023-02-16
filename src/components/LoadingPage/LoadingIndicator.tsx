import { ReactElement } from "react";
import './loadingIndicator.css';

const Loading = (): ReactElement => {

    return (
        <div className="loadingIndicator">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <style>

                </style>
                <circle className="spinner_qM83" cx="4" cy="12" r="3" />
                <circle className="spinner_qM83 spinner_oXPr" cx="12" cy="12" r="3" />
                <circle className="spinner_qM83 spinner_ZTLf" cx="20" cy="12" r="3" /></svg>
        </div>
    )
};

export default Loading;