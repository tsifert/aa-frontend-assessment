import { ReactElement } from "react";
import '../css/PhotoList.css';
import PhotoCard from "./PhotoCard";

const PhotoList = (): ReactElement => {

    return (
        <div className="photoListMain">
            <div>
                <h2>
                    Photos
                </h2>
            </div>

            <div>
                filter
            </div>

            <div className="photoListCards">

            </div>
        </div>

    )
};

export default PhotoList;