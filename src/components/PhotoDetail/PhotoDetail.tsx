import { ReactElement } from 'react';
import { deletePhotoId, useAppDispatch } from '../../features/slices/photoSlice';
import { Photo } from '../../types/types';
import DeleteButton from '../DeleteButton/DeleteButton';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import PhotoDetailEntry from '../PhotoDetailEntry/PhotoDetailEntry';
import './PhotoDetail.css';

interface PhotoDetailProps {
    photo: Photo | null | undefined;
}

const PhotoDetail = (props: PhotoDetailProps): ReactElement => {

    const dispatch = useAppDispatch();

    return (
        <article className="photoDetailMain">

            {
                props.photo
                    ?
                    <>

                        <section className="photoDetailPicture">
                            <img src={props.photo.url} />
                        </section>

                        <section className="photoDetailTitle">

                            <section>
                                <h3>
                                    {
                                        props.photo.filename
                                    }
                                </h3>

                                <span>
                                    {
                                        `${Math.round(props.photo.sizeInBytes * 10 / 1048576) / 10} MB`
                                    }
                                </span>
                            </section>

                            <section>
                                <FavoriteButton
                                    photo={props.photo} />
                            </section>

                        </section>

                        <section>
                            <PhotoDetailEntry
                                firstText=""
                                secondText="Information" />

                            <PhotoDetailEntry
                                firstText="Uploaded by"
                                secondText={props.photo.uploadedBy} />

                            <PhotoDetailEntry
                                firstText="Created"
                                secondText={new Date(props.photo.createdAt).toDateString()} />

                            <PhotoDetailEntry
                                firstText="Dimensions"
                                secondText={
                                    `${props.photo.dimensions.width} x ${props.photo.dimensions.height}`} />

                            <PhotoDetailEntry
                                firstText="Resolution"
                                secondText={
                                    `${props.photo.resolution.width} x ${props.photo.resolution.height}`} />

                        </section>
                        <section className="photoDetailDescription">

                            <section>
                                Description
                            </section>

                            <section>
                                {
                                    props.photo.description
                                }
                            </section>

                        </section>

                        <section>
                            <DeleteButton
                                onClick={() => {
                                    if (props.photo) {
                                        dispatch(deletePhotoId(props.photo.id));
                                    }
                                }}
                            />
                        </section>

                    </>
                    :
                    <section className="photoDetailPlaceholder">
                        <h3>Click a picture to view details</h3>
                    </section>
            }


        </article>
    );

};

export default PhotoDetail;