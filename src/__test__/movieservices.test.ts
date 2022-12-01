/**
 * @jest-environment jsdom
 */

import { IMovie } from "../ts/models/Movie";
import { getData } from "../ts/services/movieservice";
import { test, expect, jest } from "@jest/globals";
import { mockData } from "../ts/services/__mocks__/movieservice";

jest.mock("axios", () => ({
  get: async () => {
    return new Promise((resolve) => {
      resolve({ data: { Search: mockData } });
    });
  },
}));

test("should get mock data", async () => {
  //Arrange
  //Act
  let response: IMovie[] = await getData("Mockad sökväg");
  //Assert
  expect(response.length).toBe(mockData.length);
  expect(response[0].Title).toBe("The Lion King");
});
