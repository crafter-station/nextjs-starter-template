import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home Component", () => {
  render(<Home />);

  it("renders main layout container", () => {
    const mainContainer = screen.getByRole("main");
    expect(mainContainer).toBeDefined();
  });

  it("displays the start editing prompt", () => {
    expect(screen.getByText(/Get started by editing/i)).toBeDefined();
  });

  it("ensures images are rendered", () => {
    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThan(0);
  });

  it("displays the documentation link", () => {
    expect(screen.getByText(/Docs/)).toBeDefined();
  });
});
