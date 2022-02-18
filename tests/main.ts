import { Hello } from "../src";
import { expect } from "chai";

describe("# App test! - original", () => {
  it("sayHello should return hello", () => {
    expect(Hello()).to.equal("asdf");
  });
});
