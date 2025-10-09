import { render } from "@testing-library/react";
import Page from "../page";

describe("Home Page", () => {
  it("renders successfully", () => {
    const { container } = render(<Page />);
    expect(container).toMatchSnapshot();
  });
});
