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
}

export const PHOTO_API_URL = 'https://agencyanalytics-api.vercel.app/images.json';


