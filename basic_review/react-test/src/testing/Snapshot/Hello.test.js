import { unmountComponentAtNode, render } from "react-dom";
import { act } from "react-dom/test-utils";
import Hello from "./Hello";
import pretty from "pretty";

let container = null;

beforeEach(() => {
  // setup a DOM element as a render targat
  container = document.createElement("div");
  document.body.append(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// it("renders with or without a name", () => {
//   act(() => {
//     render(<Hello />, container);
//   });

//   expect(
//     pretty(container.innerHTML)
//   ).toMatchInlineSnapshot(); /* ... gets filled automatically by jest ... */

//   act(() => {
//     render(<Hello name="Jenny" />, container);
//   });

//   expect(
//     pretty(container.innerHTML)
//   ).toMatchInlineSnapshot(); /* ... gets filled automatically by jest ... */

//   act(() => {
//     render(<Hello name="Margaret" />, container);
//   });

//   expect(
//     pretty(container.innerHTML)
//   ).toMatchInlineSnapshot(); /* ... gets filled automatically by jest ... */
//   // expect(true).toBe(true);
// });

it("renders with or without a name", () => {
  act(() => {
    render(<Hello />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
    `"<span>Hey, stranger</span>"`
  ); /* ... gets filled automatically by jest ... */

  act(() => {
    render(<Hello name="Jenny" />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
    `"<h1>Hello, Jenny!</h1>"`
  ); /* ... gets filled automatically by jest ... */

  act(() => {
    render(<Hello name="Margaret" />, container);
  });

  expect(
    pretty(container.innerHTML)
  ).toMatchSnapshot(); /* ... gets filled automatically by jest ... */
  // expect(true).toBe(true);
});
