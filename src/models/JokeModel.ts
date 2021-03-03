export type JokeResponseModel = Readonly<{
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}>;

export interface IJokeModel {
  id: string;
  text: string;
}

export class JokeModel implements IJokeModel {
  id: string;

  text: string;
  // остальное не нужно

  constructor(params: JokeResponseModel) {
    this.id = params.id;
    this.text = params.value;
  }
}
