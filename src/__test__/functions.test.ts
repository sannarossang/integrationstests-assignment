/**
 * @jest-environment jsdom
 */

import { IMovie } from "../ts/models/Movie";
import { test, expect, jest, beforeEach, describe } from "@jest/globals";
import * as functions from "../ts/functions";
import axios from "axios";

describe("sortMovies", () => {
  test("should sort list descending from a-ö", () => {
    //Arrange/Förutsättningar
    let bestMovies: IMovie[] = [
      {
        Title: "The Holiday",
        imdbID: "2233",
        Type: "movie",
        Poster: "https//img3.com",
        Year: "2004",
      },
      {
        Title: "Lejonkungen",
        imdbID: "2332",
        Type: "movie",
        Poster: "https//img.com",
        Year: "1994",
      },
      {
        Title: "Lejonkungen",
        imdbID: "2332",
        Type: "movie",
        Poster: "https//img.com",
        Year: "1994",
      },
      {
        Title: "Sagan om ringen",
        imdbID: "2222",
        Type: "movie",
        Poster: "https//img2.com",
        Year: "1894",
      },
    ];

    //Act/Agera på funktion
    functions.movieSort(bestMovies);

    //Assert/Verifiera resultatet
    expect(bestMovies[0].Title).toBe("Lejonkungen");
    expect(bestMovies[3].Title).toBe("The Holiday");
  });

  test("should sort list ascending from ö-a", () => {
    //Arrange/Förutsättningar
    let bestMovies: IMovie[] = [
      {
        Title: "Sagan om ringen",
        imdbID: "2222",
        Type: "movie",
        Poster: "https//img2.com",
        Year: "1894",
      },
      {
        Title: "Lejonkungen",
        imdbID: "2332",
        Type: "movie",
        Poster: "https//img.com",
        Year: "1994",
      },
      {
        Title: "Lejonkungen",
        imdbID: "2332",
        Type: "movie",
        Poster: "https//img.com",
        Year: "1994",
      },
      {
        Title: "The Holiday",
        imdbID: "2233",
        Type: "movie",
        Poster: "https//img3.com",
        Year: "2004",
      },
    ];
    //Act/Agera på funktion
    functions.movieSort(bestMovies, false);
    //Assert/Verifiera resultatet
    expect(bestMovies[3].Title).toBe("Lejonkungen");
    expect(bestMovies[0].Title).toBe("The Holiday");
  });
});
