import React from "react";

function InfoHolder() {

  const closeInfoWarning = (e) => {
  e.target.parentNode.style.display = "none";
  };

    return (
        <div className="infoHolder">
              <span onClick={closeInfoWarning} className="closeInfoWarning">&times;</span>
            <div className="infoWarning">
                <p>32 Steps - Trial Version.</p>
                <p>An example pattern is loaded when the page loads.</p>
                <p>
                    Press play to listen or change the steps to try out your own
                    pattern.
                </p>
                <p>Tap the logo in the top left corner to clear all of the steps.</p>
            </div>
        </div>
    );
}

export default InfoHolder;