/**
 * @jest-environment jsdom
 */

import { IMovie } from "../ts/models/Movie";
import { getData } from "../ts/services/movieservice";
import { test, expect, jest, describe, beforeEach } from "@jest/globals";
import { mockData } from "../ts/services/__mocks__/movieservice";

jest.mock("axios", () => ({
  get: async () => {
    return new Promise((resolve, reject) => {
      let searchText: string = "Lejonkungen";
      if (searchText) {
        resolve({ data: { Search: mockData } });
      } else reject("hittade ingen mockData");
    });
  },
}));

describe("getData", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });
  test("should get mock data", async () => {
    //Arrange
    //Act
    let response: IMovie[] = await getData("Mockad sökväg");
    //Assert
    expect(response.length).toBe(mockData.length);
    expect(response[2].Title).toBe("The Lion King 2: Simba's Pride");
  });

  test("should return empty list", async () => {
    //Arrange
    let emptyMovieList: IMovie[] = [];
    //Act
    emptyMovieList = await getData("Mockad sökväg");
    //Assert
    expect(emptyMovieList.length).toBe(mockData.length);
  });
});
