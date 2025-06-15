export class Notes {
  id: number;
  title: string;
  description: string;
  category: { id: number };

  constructor() {
    this.id = 0;
    this.title = '';
    this.description = '';
    this.category = { id: 0 };
  }
}
