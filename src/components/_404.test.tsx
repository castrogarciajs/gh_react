import { render, screen } from "@testing-library/react";
import { UserNotFound } from "./_404";

describe("404", () => {
  test("should true", () => {
    render(<UserNotFound />);

    expect(screen.getAllByAltText("Not Found")).toBeDefined();
  });
});
