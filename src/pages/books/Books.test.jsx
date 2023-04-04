import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Books from "./Books";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

it("should show h1 tag", async () => {
  const queryClient = new QueryClient();
  const route = "/books?category=all";
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[route]}>
        <Books />
      </MemoryRouter>
    </QueryClientProvider>
  );
  const titleTag = screen.getByTestId("h1");
  expect(titleTag).toBeVisible();
});

it("should show bookCard component", async () => {
  const queryClient = new QueryClient();
  const route = "/books?category=all";
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[route]}>
        <Books />
      </MemoryRouter>
    </QueryClientProvider>
  );
  const bookCard = screen.getByTestId("book-card");
  expect(bookCard).toBeVisible();
});

it("should show both input", async () => {
  const queryClient = new QueryClient();
  const route = "/books?category=all";
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[route]}>
        <Books />
      </MemoryRouter>
    </QueryClientProvider>
  );
  const minInput = screen.getByTestId("min");
  const maxInput = screen.getByTestId("max");
  expect(minInput).toBeVisible();
  expect(maxInput).toBeVisible();
});

it("should update both input's value on change", async () => {
  const queryClient = new QueryClient();
  const route = "/books?category=all";
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[route]}>
        <Books />
      </MemoryRouter>
    </QueryClientProvider>
  );
  const minInput = screen.getByTestId("min");
  const maxInput = screen.getByTestId("max");
  const testValue = "10";
  fireEvent.change(minInput, { target: { value: testValue } });
  fireEvent.change(maxInput, { target: { value: testValue } });
  expect(minInput.value).toBe(testValue);
  expect(maxInput.value).toBe(testValue);
});

it("matches snapshot of the Books page", async () => {
  const queryClient = new QueryClient();
  const route = "/books?category=all";
  const wrapperEl = render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[route]}>
        <Books />
      </MemoryRouter>
    </QueryClientProvider>
  );
  expect(wrapperEl).toMatchSnapshot();
});
