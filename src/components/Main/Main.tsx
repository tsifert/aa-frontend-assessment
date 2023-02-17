import { ReactElement, useEffect } from 'react';
import './Main.css';
import { useSelector } from 'react-redux';
import PhotoDetail from '../PhotoDetail/PhotoDetail';
import PhotoList from '../PhotoList/PhotoList';
import { getPhotos, photoSelector, useAppDispatch } from '../../features/slices/photoSlice';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const Main = (): ReactElement => {

    const dispatch = useAppDispatch();
    const { photos, selectedId, loading, error } = useSelector(photoSelector);

    useEffect(() => {
        document.title = 'AgencyAnalytics Front-End Challenge';
    }, []);

    useEffect(() => {
        dispatch(getPhotos());
    }, [dispatch]);

    return (
        <main>
            {
                loading &&
                <LoadingIndicator />
            }

            {
                error &&
                <ErrorMessage
                    message={error}
                />
            }

            {
                (photos && photos.length) &&
                <section className="mainBody" >
                    <PhotoList />
                    <PhotoDetail
                        photo={selectedId ? photos.find((photo) => photo.id === selectedId) : null} />
                </section>
            }
        </main>
    );

};

export default Main;