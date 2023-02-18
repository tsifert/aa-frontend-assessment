import '@testing-library/jest-dom';
import axios from 'axios';
import { PHOTO_API_URL } from '../types/types';

describe('call live api for results', () => {

    test('should get list of photos', async () => {
        const data = await axios.get(PHOTO_API_URL);
        expect(data.data.length).toBeGreaterThan(0);
    });

});