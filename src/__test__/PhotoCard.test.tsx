import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PhotoCard from '../components/PhotoCard/PhotoCard';
import { Photo } from '../types/types';
import { Provider } from 'react-redux';
import { store } from '../features/store/store';


describe('PhotoCard', () => {

    const photo: Photo = {
        createdAt: new Date(),
        description: '',
        dimensions: {
            height: 0,
            width: 0,
        },
        favorited: false,
        filename: 'test-filename.jpg',
        id: '',
        resolution: {
            height: 0,
            width: 0,
        },
        sizeInBytes: 5634563,
        updatedAt: new Date(),
        uploadedBy: '',
        url: '',
    };

    beforeEach(() => {
        render(<Provider store={store}>
            <PhotoCard
                photo={photo}
                selected={true}
            />
        </Provider>);
    });

    test('should display filename passed to photo prop', () => {
        expect(
            screen.getByText(
                /test-filename.jpg/i
            )
        ).toBeInTheDocument();
    });

    test(`photo size of 5634563 should display '5.4 MB'`, () => {

        expect(
            screen.getByText(
                /5.4 MB/i
            )
        ).toBeInTheDocument();
    });


});

