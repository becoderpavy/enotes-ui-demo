export interface Notes {
  id: number | null;
  title: string;
  description: string;
  category: { id: number };
}
