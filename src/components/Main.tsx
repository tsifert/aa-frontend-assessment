import { ReactElement, useEffect } from 'react';
import '../css/Main.css';
import { useSelector } from 'react-redux';
import PhotoDetail from './PhotoDetail';
import PhotoList from './PhotoList';
import { getPhotos, photoSelector, useAppDispatch } from '../features/photos/photoSlice';


const Main = (): ReactElement => {

    const dispatch = useAppDispatch();
    //const { photos, loading, error } = useSelector(photoSelector);
    const { photos } = useSelector(photoSelector);

    useEffect(() => {
        document.title = 'AgencyAnalytics Front-End Challenge';
    }, []);

    useEffect(() => {
        dispatch(getPhotos());
    }, [dispatch]);

    return (
        <>
            <div className='mainBody'>
                <PhotoList />
                <PhotoDetail />
            </div>
            <ul>
                {
                    photos.map((photo) => {
                        return (
                            <li key={photo.id}>{photo.description}</li>
                        )
                    })
                }
            </ul>
        </>
    );

};

export default Main;