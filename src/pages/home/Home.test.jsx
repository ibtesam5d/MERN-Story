import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Abook } from "../../../public/images/abook.svg";

it("should show slider component", () => {
  const queryClient = new QueryClient();
  const route = "/";
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[route]}>
        <Home />
      </MemoryRouter>
    </QueryClientProvider>
  );
  const slide = screen.getByTestId("slide");
  expect(slide).toBeVisible();
});

it("should have src and alt attribute", () => {
  const queryClient = new QueryClient();
  const route = "/";
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[route]}>
        <Home />
      </MemoryRouter>
    </QueryClientProvider>
  );
  const images = screen.getAllByRole("img");
  images.map((img) => expect(img.src).toBeDefined());
  images.map((img) => expect(img.alt).toBeDefined());
});

it("should show welcome image", () => {
  const queryClient = new QueryClient();
  const route = "/";
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[route]}>
        <Home />
      </MemoryRouter>
    </QueryClientProvider>
  );
  const images = screen.getAllByRole("img");
  expect(images[0].src).toEqual("http://localhost:3000/images/abook.svg");
});

it("should show both feature image with correct src", () => {
  const queryClient = new QueryClient();
  const route = "/";
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[route]}>
        <Home />
      </MemoryRouter>
    </QueryClientProvider>
  );
  const featureImg1 = screen.getByTitle("feature-1st");
  const featureImg2 = screen.getByTitle("feature-2nd");
  expect(featureImg1.src).toEqual("http://localhost:3000/images/tackle.svg");
  expect(featureImg2.src).toEqual("http://localhost:3000/images/never.svg");
  expect(featureImg1).toBeVisible();
  expect(featureImg2).toBeVisible();
});
