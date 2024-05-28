import InfoBlock from "./InfoBlock";

describe("<InfoBlock />", () => {
  const info = {
    title: "Test title",
    content: "Test content",
  };

  beforeEach(() => {
    cy.mount(<InfoBlock title={info.title} content={info.content} />);
  });

  it("renders the component", () => {
    cy.get(".info-block").should("be.visible");
  });

  it("renders the title and content", () => {
    cy.get(".info-block").get("h6").should("contain", info.title);
    cy.get(".info-block").get("p").should("contain", info.content);
  });
});
