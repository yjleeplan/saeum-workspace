export interface Reserve {
  id: string;
  name: string;
  category: string;
  people: string;
  time: number;
  description?: string | undefined | null;
  location: string;
  locationName: string;
}
