import { unmountComponentAtNode, render } from "react-dom";
import { act } from "react-dom/test-utils";
import User from "./User";

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

it("renders use data", async () => {
  const fakeUser = {
    name: "Joni Baez",
    age: "32",
    address: "123, Charming Avenue",
  };

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser),
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<User id="123" />, container);
  });

  expect(container.querySelector("strong").textContent).toBe(fakeUser.age);
  expect(container.querySelector("summary").textContent).toBe(fakeUser.name);
  expect(container.textContent).toContain(fakeUser.address);

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});
