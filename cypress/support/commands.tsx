/// <reference types="cypress" />

import { ReactNode } from "react";
import { IpContext } from "../../src/context/IpContext";
import { mount } from "cypress/react";

declare global {
  namespace Cypress {
    interface Chainable {
      mountWithMockProvider(
        Component: ReactNode,
        setIpSpy: Cypress.Agent<sinon.SinonSpy>
      ): Chainable<Element>;
    }
  }
}

Cypress.Commands.add("mountWithMockProvider", (Component, setIpSpy) => {
  mount(
    <IpContext.Provider value={{ ip: "", setIp: setIpSpy }}>
      {Component}
    </IpContext.Provider>
  );
});
