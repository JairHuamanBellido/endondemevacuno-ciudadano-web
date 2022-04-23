import tailwindCssBuilder from "./tailwindCssBuilder";

describe("Tailwind CSS Builder", () => {
  it("should return a string", () => {
    expect(tailwindCssBuilder("flex", "items-center")).toBe(
      "flex items-center"
    );
  });
});
