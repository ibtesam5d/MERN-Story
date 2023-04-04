import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Mybooks from "./Mybooks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

it("matches snapshot of the mybooks page", async () => {
  const queryClient = new QueryClient();
  const route = "/books?category=all";
  const wrapperEl = render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[route]}>
        <Mybooks />
      </MemoryRouter>
    </QueryClientProvider>
  );
  expect(wrapperEl).toMatchSnapshot();
});
