/**
 * @jest-environment jsdom
 */

import { IMovie } from "../ts/models/Movie";
import { test, expect, jest, beforeEach, describe } from "@jest/globals";
import { mockData } from "../ts/services/__mocks__/movieservice";
import * as movieAppfunctions from "../ts/movieApp";

jest.mock("../ts/services/movieservice.ts");

describe("init", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });
  test("should be able to call function handleSubmit", () => {
    //Arrange
    document.body.innerHTML = `<form id="searchForm">
    <input type="text" id="searchText" placeholder="Skriv titel här" />
    <button type="submit" id="search">Sök</button>
  </form>
    `;

    let spy = jest.spyOn(movieAppfunctions, "handleSubmit").mockReturnValue(
      new Promise<void>((resolve) => {
        resolve();
      })
    );

    movieAppfunctions.init();

    //Act
    (document.getElementById("searchForm") as HTMLFormElement).submit();

    //Assert
    expect(spy).toHaveBeenCalled();

    //Empty code
    document.body.innerHTML = "";
  });
});

describe("handleSubmit", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });

  test("should call function createHtml() if searchtext found and list contains more than zero", async () => {
    //Arrange
    document.body.innerHTML = `<form id="searchForm">
      <input type="text" id="searchText" placeholder="Skriv titel här" />
      <button type="submit" id="search">Sök</button>
    </form><div id="movie-container"></div>
    `;
    (document.getElementById("searchText") as HTMLInputElement).value =
      "The Lion King";
    let spy = jest.spyOn(movieAppfunctions, "createHtml").mockReturnValue();

    //Act
    await movieAppfunctions.handleSubmit();

    //Assert
    expect(spy).toHaveBeenCalled();

    //Empty code
    document.body.innerHTML = "";
  });

  test("should call function displayNoResult() if searchtext not found and list not contains anything", async () => {
    //Arrange
    document.body.innerHTML = `<form id="searchForm">
     <input type="text" id="searchText" placeholder="Skriv titel här" />
     <button type="submit" id="search">Sök</button>
   </form><div id="movie-container"></div>
   `;

    (document.getElementById("searchText") as HTMLInputElement).value = "";

    let spy = jest.spyOn(movieAppfunctions, "createHtml").mockReturnValue();

    //Act
    await movieAppfunctions.handleSubmit();

    //Assert
    expect(spy).toHaveBeenCalledTimes(0);

    //Empty code
    document.body.innerHTML = "";
  });

  test("should call function displayNoResult() if search not found", async () => {
    //Arrange
    document.body.innerHTML = `<form id="searchForm">
    <input type="text" id="searchText" placeholder="Skriv titel här" />
    <button type="submit" id="search">Sök</button>
  </form><div id="movie-container"></div>
  `;

    (document.getElementById("searchText") as HTMLInputElement).value =
      "search not found";

    let spy = jest
      .spyOn(movieAppfunctions, "displayNoResult")
      .mockReturnValue();

    //Act
    await movieAppfunctions.handleSubmit();

    //Assert
    expect(spy).toHaveBeenCalledTimes(1);

    //Empty code
    document.body.innerHTML = "";
  });
});

describe("createHtml", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });

  test("should create HTML for movielist", () => {
    //Arrange
    document.body.innerHTML = `<div id="movie-container"></div>`;
    let container: HTMLDivElement = document.getElementById(
      "movie-container"
    ) as HTMLDivElement;
    let movies: IMovie[] = mockData;

    //Act
    movieAppfunctions.createHtml(movies, container);

    //Assert
    expect(document.querySelectorAll("div.movie").length).toBe(4);
    expect(document.querySelectorAll("h3").length).toBe(4);
    expect(document.querySelectorAll("img").length).toBe(4);

    //Empty code
    document.body.innerHTML = "";
  });
});

describe("displayNoResult", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });

  test("should show errorMessage", async () => {
    //Arrange
    document.body.innerHTML = `<div id="movie-container"></div>`;
    let container: HTMLDivElement = document.getElementById(
      "movie-container"
    ) as HTMLDivElement;

    //Act
    movieAppfunctions.displayNoResult(container);

    //Assert
    expect(container.innerHTML).toBe("<p>Inga sökresultat att visa</p>");

    //Empty code
    document.body.innerHTML = "";
  });
});
