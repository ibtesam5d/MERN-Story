import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";

it("should show nav container", () => {
  const route = "/";
  render(
    <MemoryRouter initialEntries={[route]}>
      <Navbar />
    </MemoryRouter>
  );
  const navBar = screen.getByTitle("Nav");
  expect(navBar).toBeVisible();
});

it("should show logo, home, sign-in, join link", () => {
  const route = "/";
  render(
    <MemoryRouter initialEntries={[route]}>
      <Navbar />
    </MemoryRouter>
  );
  const signLink = screen.getAllByTestId("nav-visible");
  signLink.map((item) => expect(item).toBeVisible());
  expect(signLink).toHaveLength(4);
});

it("should have 4 link e.g. logo, home, sign-in, join", () => {
  const route = "/";
  render(
    <MemoryRouter initialEntries={[route]}>
      <Navbar />
    </MemoryRouter>
  );
  const signLink = screen.getAllByTestId("nav-visible");
  expect(signLink).toHaveLength(4);
});

it("should navigate to login page by clicking on sign in link", () => {
  const route = "/";
  render(
    <MemoryRouter initialEntries={[route]}>
      <Navbar />
    </MemoryRouter>
  );
  const signLink = screen.getAllByTestId("nav-visible");
  const signIn = signLink.find((link) => link.textContent === "Sign In");
  const value = "/login";
  // fireEvent.click(signIn,{target:{value:value}})
  expect(signIn.href).toContain(value);
});

it("should navigate to register page by clicking on join link", () => {
  const route = "/";
  render(
    <MemoryRouter initialEntries={[route]}>
      <Navbar />
    </MemoryRouter>
  );
  const signLink = screen.getAllByTestId("nav-visible");
  expect(signLink[3].textContent).toEqual("Join");
  const value = "/register";
  // fireEvent.click(signIn,{target:{value:value}})
  expect(signLink[3].href).toContain(value);
});

it("should navigate to home page when clicking on logo", () => {
  const route = "/";
  render(
    <MemoryRouter initialEntries={[route]}>
      <Navbar />
    </MemoryRouter>
  );
  const signLink = screen.getAllByTestId("nav-visible");
  expect(signLink[0].textContent).toEqual("story");
  const value = "/";
  // fireEvent.click(signIn,{target:{value:value}})
  expect(signLink[0].href).toContain(value);
});
