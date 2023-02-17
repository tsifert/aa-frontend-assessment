import { ReactElement } from 'react';
import { Photo } from '../../types/types';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import './PhotoDetail.css';

interface PhotoDetailProps {
    photo: Photo | null | undefined;
}

const PhotoDetail = (props: PhotoDetailProps): ReactElement => {

    return (
        <article className="photoDetailMain">

            {
                props.photo &&
                <>

                    <section className="photoDetailPicture">
                        <img src={props.photo.url} />
                    </section>

                    <section className="photoDetailTitle">

                        <div>
                            <h3>
                                {
                                    props.photo.filename
                                }
                            </h3>

                            <span>
                                {
                                    Math.round(props.photo.sizeInBytes * 10 / 1048576) / 10
                                }
                                MB
                            </span>
                        </div>

                        <div>
                            <FavoriteButton
                                photo={props.photo} />
                        </div>

                    </section>

                    <section className="photoDetailSize">

                    </section>

                </>
            }


        </article>
    )
};

export default PhotoDetail;