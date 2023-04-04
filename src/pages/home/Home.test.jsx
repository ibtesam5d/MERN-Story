import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
