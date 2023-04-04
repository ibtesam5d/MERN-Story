import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Add from "./Add";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

it("should show input", async () => {
  const queryClient = new QueryClient();
  const route = "/add";
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[route]}>
        <Add />
      </MemoryRouter>
    </QueryClientProvider>
  );
  const allInputs = screen.getAllByRole("textbox");
  allInputs.map((item) => expect(item).toBeVisible());
});

it("should update value on change", async () => {
  const queryClient = new QueryClient();
  const route = "/add";
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[route]}>
        <Add />
      </MemoryRouter>
    </QueryClientProvider>
  );
  const allInputs = screen.getAllByRole("textbox");
  const testValue = "test";
  allInputs.map((item) => {
    fireEvent.change(item, { target: { value: testValue } });
    return expect(item.value).toBe(testValue);
  });
});
