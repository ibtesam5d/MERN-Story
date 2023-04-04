import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Orders from "./Orders";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

it("matches snapshot of orders page", async () => {
  const queryClient = new QueryClient();
  const route = "/orders";
  const wrapperEl = render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[route]}>
        <Orders />
      </MemoryRouter>
    </QueryClientProvider>
  );
  expect(wrapperEl).toMatchSnapshot();
});
