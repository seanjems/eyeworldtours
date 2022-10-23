import React from "react";

const funFact = [
  {
    title: "12+",
    subTitle: "Tour packages",
  },
  {
    title: "30+",
    subTitle: "Single destinations",
  },
  {
    title: "500+",
    subTitle: "Postive reviews",
  },
  {
    title: "30+",
    subTitle: "Experienced Guides",
  },
];

const FunFact = (props) => {
  return (
    <section className={`wpo-fun-fact-section ${props.fClass}`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col col-xs-12">
            <div className="wpo-fun-fact-grids clearfix">
              {funFact.map((funfact, fitem) => (
                <div className="grid" key={fitem}>
                  <div className="info">
                    <h3>{funfact.title}</h3>
                    <p>{funfact.subTitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFact;
