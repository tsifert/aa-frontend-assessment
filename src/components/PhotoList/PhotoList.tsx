import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { photoSelector } from '../../features/slices/photoSlice';
import FilterTab from '../FilterTab/FilterTab';
import PhotoCard from '../PhotoCard/PhotoCard';
import './PhotoList.css';



const PhotoList = (): ReactElement => {

    const { photos, selectedId } = useSelector(photoSelector);

    return (
        <article className="photoListMain">
            <section>
                <h2>
                    Photos
                </h2>
            </section>

            <section>
                <FilterTab />
            </section>

            <section className="photoListCards">
                {
                    [...photos].sort((a, b) => new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 0)
                        .map((photo) => {
                            return (
                                <PhotoCard
                                    key={photo.id}
                                    selected={selectedId === photo.id}
                                    photo={photo} />
                            )
                        })
                }
            </section>
        </article>

    )
};

export default PhotoList;