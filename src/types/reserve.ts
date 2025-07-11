export interface Reserve {
  id: string;
  name: string;
  category: string;
  people: number;
  time: number;
  description?: string | undefined | null;
  location: string;
  locationName: string;
}
