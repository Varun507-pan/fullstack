import React from "react";
import { data } from "../restApi.json";
const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
           We dont chase trends. We set them."

"Dressed to impress—without trying too hard."

"Style that speaks before you do."

"Made for the man they cant ignore."

"Confidence: now available in your size."

"Because average never gets the second look."

"Outfits that flirt for you."

"Built to stand out. Worn to attract."

"Turning heads is just a bonus."

"Dress like you mean it."
          </p>
        </div>
        <div className="team_container">
          {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
