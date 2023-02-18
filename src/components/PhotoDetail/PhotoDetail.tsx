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

                    <section>
                        <PhotoDetailEntry
                            firstText=""
                            secondText="Information" />
                    </section>

                    <section>
                        <PhotoDetailEntry
                            firstText="Uploaded by"
                            secondText={props.photo.uploadedBy} />
                    </section>

                    <section>
                        <PhotoDetailEntry
                            firstText="Created"
                            secondText={new Date(props.photo.createdAt).toDateString()} />
                    </section>

                    <section>
                        <PhotoDetailEntry
                            firstText="Dimensions"
                            secondText={
                                `${props.photo.dimensions.width} x ${props.photo.dimensions.height}`} />
                    </section>

                    <section>
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
                                console.log('click', props.photo?.id);
                                if (props.photo) {
                                    dispatch(deletePhotoId(props.photo.id));
                                }
                            }}
                        />
                    </section>

                </>
            }


        </article>
    )
};

export default PhotoDetail;