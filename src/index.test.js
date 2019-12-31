require("@testing-library/jest-dom/extend-expect");
const { cleanup, render } = require("@testing-library/svelte");
const Emoji = require("./index.svelte");

const className = "test-class";
const label = "test tube";
const symbol = "🧪";
const testId = "test-id";

test("Passes `symbol`", () => {
  const { getAllByLabelText } = render(Emoji, { label, symbol });
  const element = getAllByLabelText(label)[0];

  expect(element).toHaveTextContent(symbol);
});

test("Passes through props", () => {
  const testId = "pass-through";
  const { getByTestId } = render(Emoji, {
    class: className,
    symbol,
    "data-testid": testId
  });
  const element = getByTestId(testId);

  // Data attributes
  expect(element).toBeInTheDocument();

  // Class name
  expect(element.classList).toContain(className);
});

describe("When `label` is passed", () => {
  const { getByRole } = render(Emoji, { label, symbol });
  const element = getByRole("img");

  test("Passes label", () => {
    expect(element.getAttribute("aria-label")).toMatch(label);
  });

  test("Is NOT hidden", () => {
    expect(element.getAttribute("aria-hidden")).toBeNull();
  });
});

describe("When `label` is omitted", () => {
  const { getByTestId } = render(Emoji, { "data-testid": testId, symbol });
  const element = getByTestId(testId);

  test("Hides element", () => {
    expect(element.getAttribute("aria-hidden")).toMatch("true");
  });

  test("Sets NO label", () => {
    expect(element.getAttribute("aria-label")).toBeNull();
  });
});
