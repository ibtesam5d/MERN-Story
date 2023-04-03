import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

// it("should show nav component", () => {
//     const route = "/";
//     render(
//       <MemoryRouter initialEntries={[route]}>
//         <Home />
//       </MemoryRouter>
//     );
//     const signLink = screen.get
//     signLink.map((item) => expect(item).toBeVisible());
//     expect(signLink).toHaveLength(4);
//   });
