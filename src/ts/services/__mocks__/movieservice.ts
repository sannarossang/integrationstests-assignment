import { IMovie } from "../../models/Movie";
import axios from "axios";

export async function getData(searchText: string): Promise<IMovie[]> {
  return new Promise((resolve, reject) => {
    if (searchText) resolve(mockData);
    else reject();
  });
}

//if(..inparameter..)
//resolve(lista eller ngt)
//else(...)
//reject(skicka tillbaka ett värde)

export const mockData: IMovie[] = [
  {
    Title: "The Lion King",
    imdbID: "tt0110357",
    Type: "movie",
    Poster: "https://imageofthelionking.jpg",
    Year: "1994",
  },
  {
    Title: "The Lion King",
    imdbID: "tt0110357",
    Type: "movie",
    Poster: "https://imageofthelionking.jpg",
    Year: "1994",
  },
  {
    Title: "The Lion King 2: Simba's Pride",
    imdbID: "tt0110358",
    Type: "movie",
    Poster: "https://imageofthelionking2.jpg",
    Year: "1998",
  },
  {
    Title: "The Lion King 3: Hakuna Matata",
    imdbID: "tt0110359",
    Type: "movie",
    Poster: "https://imageofthelionking3.jpg",
    Year: "2004",
  },
];
