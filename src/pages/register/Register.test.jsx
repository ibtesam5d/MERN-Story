import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Register from "./Register";

it("should match snapshot", () => {
  const route = "/register";
  const wrapperEl = render(
    <MemoryRouter initialEntries={[route]}>
      <Register />
    </MemoryRouter>
  );
  expect(wrapperEl).toMatchSnapshot();
});
