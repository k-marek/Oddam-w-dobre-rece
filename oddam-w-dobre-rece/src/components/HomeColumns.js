import React from "react";
import ReactDOM from "react-dom";

const HomeColumns = () => {
  return (
    <>
      <div className="columns-containter">
        <div className="columns-content" name="columns">
          <div className="columns-element">
            <h1>10</h1>
            <p>Oddanych worków</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id
              fringilla ipsum. Vestibulum condimentum hendrerit velit interdum
              rhoncus.
            </p>
          </div>
          <div className="columns-element">
            <h1>5</h1>
            <p>Wspartych organizacji</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id
              fringilla ipsum. Vestibulum condimentum hendrerit velit interdum
              rhoncus.
            </p>
          </div>
          <div className="columns-element">
            <h1>7</h1>
            <p>zorganizowanych zbiórek</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id
              fringilla ipsum. Vestibulum condimentum hendrerit velit interdum
              rhoncus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeColumns;
