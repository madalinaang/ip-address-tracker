import SearchBar from "./SearchBar";

describe("<SearchBar />", () => {
  beforeEach(() => {
    const setIpSpy = cy.spy().as("setIpSpy");

    cy.mountWithMockProvider(<SearchBar />, setIpSpy);
  });

  it("calls setIp function on button click", () => {
    cy.get(".search-bar input").type("1.1.1.1");
    cy.get(".search-bar button").click();

    cy.get("@setIpSpy").should("have.been.calledOnceWith", "1.1.1.1");

    cy.get(".search-bar input").should("have.value", "");
  });

  it("calls setIp function on enter key", () => {
    cy.get(".search-bar input").type("1.1.1.1");
    cy.get(".search-bar button").type("{enter}");

    cy.get("@setIpSpy").should("have.been.calledOnceWith", "1.1.1.1");

    cy.get(".search-bar input").should("have.value", "");
  });
});
