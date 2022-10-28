import Sign from "../auth/SignIn";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */

jest.mock("axios", () => ({
  __esModules: true,
  default: {
    get: () => ({
      data: { id: 1, email: "sebastienbange@gmail.com" },
    }),
  },
}));

describe("Login form test", () => {
  it("username input should be rendered", () => {
    render(<Sign />);
    const userInputEl = screen.getByPlaceholderText(/email/i);
    expect(userInputEl).toBeInTheDocument();
  });

  it("should render the password Input", () => {
    render(<Sign />);
    const passwordInputEl = screen.getByPlaceholderText(/passWord/i);
    expect(passwordInputEl).toBeInTheDocument();
  });

  it("should render the button element", () => {
    render(<Sign />);
    const buttonEl = screen.getAllByRole("button");
    expect(buttonEl.length).toBe(2);
  });

  it("should find element with id label", () => {
    render(<Sign />);
    const getDataById = screen.getByTestId("label");
    expect(getDataById).toBeInTheDocument();
  });

  it("username input should be empty", () => {
    render(<Sign />);
    const userInputEl = screen.getByPlaceholderText(
      /email/i
    ) as HTMLInputElement;
    expect(userInputEl.value).toBe("");
  });

  it("password field should be empty", () => {
    render(<Sign />);
    const passwordInputEl = screen.getByPlaceholderText(
      /passWord/i
    ) as HTMLInputElement;
    expect(passwordInputEl.value).toBe("");
  });

  it("Button should be disabled if no inputs", () => {
    render(<Sign />);
    const buttonEl = screen.getByTestId("button");
    expect(buttonEl).toBeDisabled();
  });

  it("password input should change", () => {
    render(<Sign />);
    const passwordInputEl = screen.getByPlaceholderText(
      /passWord/i
    ) as HTMLInputElement;
    const testValue = "test";
    fireEvent.change(passwordInputEl, { target: { value: testValue } });
    expect(passwordInputEl.value).toBe(testValue);
  });

  it("username should change", () => {
    render(<Sign />);
    const userInputEl = screen.getByPlaceholderText(
      /email/i
    ) as HTMLInputElement;
    const testValue = "test";
    fireEvent.change(userInputEl, { target: { value: testValue } });
    expect(userInputEl.value).toBe(testValue);
  });

  it("Button should not be disabled if inputs exist", () => {
    render(<Sign />);
    const buttonEl = screen.getByTestId("button");
    const userInputEl = screen.getByPlaceholderText(
      /email/i
    ) as HTMLInputElement;
    const passwordInputEl = screen.getByPlaceholderText(
      /passWord/i
    ) as HTMLInputElement;

    const testValue = "test";

    fireEvent.change(passwordInputEl, { target: { value: testValue } });
    fireEvent.change(userInputEl, { target: { value: testValue } });
    expect(buttonEl).not.toBeDisabled();
  });

  it("loading should be rendered when click", () => {
    render(<Sign />);
    const buttonEl = screen.getByTestId("button");
    const userInputEl = screen.getByPlaceholderText(
      /email/i
    ) as HTMLInputElement;
    const passwordInputEl = screen.getByPlaceholderText(
      /passWord/i
    ) as HTMLInputElement;

    const testValue = "test";

    fireEvent.change(passwordInputEl, { target: { value: testValue } });
    fireEvent.change(userInputEl, { target: { value: testValue } });
    fireEvent.click(buttonEl);
    expect(buttonEl).toHaveTextContent(/please wait/i);
  });

  it("loading should not be rendered after click", async () => {
    render(<Sign />);
    const buttonEl = screen.getByTestId("button");
    const userInputEl = screen.getByPlaceholderText(
      /email/i
    ) as HTMLInputElement;
    const passwordInputEl = screen.getByPlaceholderText(
      /passWord/i
    ) as HTMLInputElement;

    const testValue = "test";

    fireEvent.change(passwordInputEl, { target: { value: testValue } });
    fireEvent.change(userInputEl, { target: { value: testValue } });
    fireEvent.click(buttonEl);
    await waitFor(() => expect(buttonEl).not.toHaveTextContent(/please wait/i));
  });

  it("user should be rendered after click", async () => {
    render(<Sign />);
    const buttonEl = screen.getByTestId("button");
    const userInputEl = screen.getByPlaceholderText(
      /email/i
    ) as HTMLInputElement;
    const passwordInputEl = screen.getByPlaceholderText(
      /passWord/i
    ) as HTMLInputElement;

    const testValue = "test";

    fireEvent.change(passwordInputEl, { target: { value: testValue } });
    fireEvent.change(userInputEl, { target: { value: testValue } });
    fireEvent.click(buttonEl);

    const userItem = await screen.findByText("sebastienbange@gmail.com");
    expect(userItem).toBeInTheDocument();
  });
});
