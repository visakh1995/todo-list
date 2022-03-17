import React from "react";
import "./home.css";
function Home() {
  return (
    <div>
    <section className="home">
      <div className="container grid">
        <div className="home-text">
          <h1>Lets join our community</h1>
          <p>
            our, or randomised words which don't look even slightly believable.
            If you are going to use a passage of Lorem Ipsum, you need to be
          </p>
        </div>
        <div className="home-image small-card">
            <h1>Sign up and learn together..</h1>
          {/* <img src="https://images.unsplash.com/photo-1614696131965-cc559b1ecad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGVkJTIwdHZ8ZW58MHx8MHx8&w=1000&q=80" /> */}
        </div>
      </div>
    </section>
    {/* cards */}
    <section className="viewable">
        <div className="views container">
            <div className="view viewable-1 small-card">
                <p>card1 </p>
            </div>
            <div className="view viewable-2 small-card">
                <p>card2 </p>
            </div>
            <div className="view viewable-2 small-card">
                <p>card3 </p>
            </div>
            <div className="view viewable-2 small-card">
                <p>card4 </p>
            </div>
        </div>

    </section>
    </div>
  );
}

export default Home;
