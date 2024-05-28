import React from "react";
import Geolocation from "./Geolocation";

describe("<Geolocation />", () => {
  beforeEach(() => {
    cy.fixture("geolocation.json").then((geolocationData) => {
      cy.mount(<Geolocation geolocation={geolocationData} />);
    });
  });

  it("displayes correct IP address", () => {
    cy.get(".info-block").eq(0).find("p").should("contain", "1.1.1.1");
  });

  it("displayes correct location", () => {
    cy.get(".info-block")
      .eq(1)
      .find("p")
      .should("contain", "City, Region, PostalCode");
  });

  it("displayes correct timezone", () => {
    cy.get(".info-block").eq(2).find("p").should("contain", "UTC+1");
  });

  it("displayes correct ISP", () => {
    cy.get(".info-block")
      .eq(3)
      .find("p")
      .should("contain", "Internet Service Provider");
  });
});
