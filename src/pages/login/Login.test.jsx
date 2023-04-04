import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Login from "./Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

it("should show all input, button and h1", () => {
  const queryClient = new QueryClient();
  const route = "/login";
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[route]}>
        <Login />
      </MemoryRouter>
    </QueryClientProvider>
  );
  const allInputs = screen.getAllByTestId("login");
  allInputs.map((item) => expect(item).toBeVisible());
});

it("should update value on change", () => {
  const queryClient = new QueryClient();
  const route = "/login";
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[route]}>
        <Login />
      </MemoryRouter>
    </QueryClientProvider>
  );
  const allInputs = screen.getAllByTestId("login");
  const testValue = "test";
  fireEvent.change(allInputs[1], { target: { value: testValue } });
  fireEvent.change(allInputs[2], { target: { value: testValue } });
  expect(allInputs[1].value).toBe(testValue);
  expect(allInputs[2].value).toBe(testValue);
});
