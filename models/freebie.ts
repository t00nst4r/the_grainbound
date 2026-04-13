export interface Freebie {
    id: string;
    title: string;
    description: string;
    fileUrl: string;
    videoId?: string;
    category: 'Worksheet' | 'Guide' | 'Table';
}