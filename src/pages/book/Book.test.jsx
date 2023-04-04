import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Book from "./Book";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

it("should match snapshot", async () => {
  const queryClient = new QueryClient();
  const route = "/books?category=all";
  const wrapperEl = render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[route]}>
        <Book />
      </MemoryRouter>
    </QueryClientProvider>
  );

  expect(wrapperEl).toMatchSnapshot();
});
