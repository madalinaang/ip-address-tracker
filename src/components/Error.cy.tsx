import ErrorComp from "./Error";

describe("<Error />", () => {
  beforeEach(() => {
    const error = new Error("Test error");

    cy.mount(<ErrorComp error={error} />);
  });

  it("renders the error", () => {
    cy.get(".error").should("be.visible");
  });

  it("renders the error message", () => {
    cy.get(".error").contains("Test error");
  });
});
