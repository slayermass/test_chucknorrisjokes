import { JokeResponseModel } from 'src/models/JokeModel';

export const apiGetJoke = (): Promise<JokeResponseModel | Error> =>
  fetch('https://api.chucknorris.io/jokes/random').then((response) =>
    response.ok ? response.json() : Promise.reject(response.statusText)
  );
