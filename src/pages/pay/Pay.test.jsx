import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Pay from "./Pay";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

it("matches snapshot of payment page", async () => {
  const queryClient = new QueryClient();
  const route = "/pay";
  const wrapperEl = render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[route]}>
        <Pay />
      </MemoryRouter>
    </QueryClientProvider>
  );
  expect(wrapperEl).toMatchSnapshot();
});
