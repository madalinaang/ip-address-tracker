import Loading from "./Loading";

describe("<Loading />", () => {
  beforeEach(() => {
    cy.mount(<Loading />);
  });

  it("renders the loading component", () => {
    cy.get(".loading").should("be.visible");
  });

  it("displays the correct text", () => {
    cy.get(".loading").contains(/loading/i);
  });
});
