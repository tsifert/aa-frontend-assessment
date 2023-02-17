export interface Photo {
    createdAt: Date;
    description: string;
    dimensions: {
        height: number;
        width: number;
    }
    favorited: boolean;
    filename: string;
    id: string;
    resolution: {
        height: number;
        width: number;
    }
    sizeInBytes: number;
    updatedAt: Date;
    uploadedBy: string;
    url: string;
}

export interface PhotosState {
    photos: Photo[];
    selectedId: string | null;
    loading: boolean;
    error: string | null;
}

export const PHOTO_API_URL = 'https://agencyanalytics-api.vercel.app/images.json';

export type PhotoFilter = 'RECENTLY_ADDED' | 'FAVORITED';

