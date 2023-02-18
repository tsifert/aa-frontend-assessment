import { ReactElement, useState } from 'react';
import { useSelector } from 'react-redux';
import { photoSelector } from '../../features/slices/photoSlice';
import { PhotoFilter } from '../../types/types';
import FilterTab from '../FilterTab/FilterTab';
import PhotoCard from '../PhotoCard/PhotoCard';
import './PhotoList.css';

const PhotoList = (): ReactElement => {

    const { photos, selectedId } = useSelector(photoSelector);
    const [selectedFilter, setSelectedFilter] = useState<PhotoFilter>('RECENTLY_ADDED');

    return (
        <article className="photoListMain" data-testid="photoListMain-check">
            <header>
                <h2>
                    Photos
                </h2>
            </header>

            <nav>
                <FilterTab
                    selectedFilter={selectedFilter}
                    filterClicked={(filter) => setSelectedFilter(filter)}
                />
            </nav>

            <section className="photoListCards">
                {
                    (photos && photos.length)
                        ?
                        [...photos].sort((a, b) => new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 0)
                            .map((photo) => {
                                if (selectedFilter === 'FAVORITED' && !photo.favorited) {
                                    return null;
                                }
                                else {
                                    return (
                                        <PhotoCard
                                            key={photo.id}
                                            selected={selectedId === photo.id}
                                            photo={photo} />
                                    );
                                }
                            })
                        :
                        <section>
                            <h3>
                                There are no photos to display
                            </h3>
                            <h4>
                                Refresh the page to reload all photos
                            </h4>
                        </section>
                }
            </section>
        </article>

    );
};

export default PhotoList;