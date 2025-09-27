import { render, screen } from "@testing-library/react";
import Page from "../page";

describe("Page", () => {
  it("renders a heading", () => {
    render(<Page />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeVisible();
    expect(heading).toHaveTextContent("Welcome to Loci!");
  });
});
