import { ReactElement } from 'react';
import { setSelectedPhotoId, useAppDispatch } from '../../features/slices/photoSlice';
import { Photo } from '../../types/types';
import './PhotoCard.css';

interface PhotoCardProps {
    photo: Photo;
    selected: boolean;
}

const PhotoCard = (props: PhotoCardProps): ReactElement => {

    const dispatch = useAppDispatch();

    return (
        <article className={`photoCardMain${props.selected ? ' photoCard-selected' : ''}`}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                e.preventDefault();
                dispatch(setSelectedPhotoId(props.photo.id));
            }}>

            <section className={`photoCardPicture${props.selected ? ' photoCardPicture-selected' : ''}`}>
                <img src={props.photo.url} />
            </section>

            <section className="photoCardFilename">
                {
                    props.photo.filename
                }
            </section>

            <section className="photoCardSize">
                {
                    Math.round(props.photo.sizeInBytes * 10 / 1048576) / 10
                }
                MB
            </section>
        </article>
    )
};

export default PhotoCard;