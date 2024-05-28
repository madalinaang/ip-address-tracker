describe("Show IP data", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("show loading when data is fetching", () => {
    cy.intercept("GET", "https://geo.ipify.org/api/v2/country,city*", {
      delay: 1000,
      fixture: "geolocation.json",
    }).as("fetchIpDetails");

    cy.get(".info .loading").should("exist");
    cy.get(".map .loading").should("exist");

    cy.wait("@fetchIpDetails");

    cy.get(".info .loading").should("not.exist");
    cy.get(".map .loading").should("not.exist");
  });

  it("show the error in both components if fetching fails", () => {
    cy.intercept("GET", "https://geo.ipify.org/api/v2/country,city*", {
      delay: 1000,
      statusCode: 500,
    }).as("fetchIpDetails");

    cy.wait("@fetchIpDetails");

    cy.get(".info .error").should("exist").should("contain", "500");
    cy.get(".map .error").should("exist").should("contain", "500");
  });

  it("show correct data when fetching is successful", () => {
    cy.intercept("GET", "https://geo.ipify.org/api/v2/country,city*", {
      delay: 1000,
      fixture: "geolocation.json",
    }).as("fetchIpDetails");

    cy.wait("@fetchIpDetails");

    cy.get(".info .geolocation")
      .should("contain", "1.1.1.1")
      .should("contain", "Internet Service Provider")
      .should("contain", "+1")
      .should("contain", "City, Region, PostalCode");
  });
});
