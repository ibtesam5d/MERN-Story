import { fireEvent, render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import Featured from "./Featured";
import { MemoryRouter } from "react-router-dom";

it("should show search input", () => {
  const route = "/";
  render(
    <MemoryRouter initialEntries={[route]}>
      <Featured />
    </MemoryRouter>
  );
  const searchInput = screen.getByTitle("text-input");
  expect(searchInput).toBeVisible();
});

it("should change value on typing", () => {
  const route = "/";
  render(
    <MemoryRouter initialEntries={[route]}>
      <Featured />
    </MemoryRouter>
  );
  const searchInput = screen.getByTitle("text-input");
  const textValue = "comedy";
  fireEvent.change(searchInput, { target: { value: textValue } });
  expect(searchInput.value).toBe(textValue);
});
