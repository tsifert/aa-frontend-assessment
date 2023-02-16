import { ReactElement, useEffect } from "react";
import '../css/PhotoCard.css';

interface PhotoCardProps {
    photoId: string;
    filename: string;
    sizeInBytes: number;
}

const PhotoCard = (props: PhotoCardProps): ReactElement => {

    // https://agencyanalytics-api.vercel.app/images.json

    useEffect(() => {
        console.log(props.filename, props.photoId, props.sizeInBytes);
    }, []);


    return (
        <div className="photoCardMain">
            <span>Detail</span>
        </div>
    )
};

export default PhotoCard;