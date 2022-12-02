import { IMovie } from "../../models/Movie";
import axios from "axios";

export const getData = async (searchText: string): Promise<IMovie[]> => {
  return new Promise((resolve, reject) => {
    if (searchText !== "") {
      if (searchText !== "search not found") {
        resolve(mockData);
        console.log(searchText);
        console.log("before else");
      } else {
        console.log("inside else");
        resolve([]);
      }
    } else reject("Du måste söka efter en film!");
  });
};

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
