// LandingPage.js
import React from 'react';
import '../styles/landingpage.css';

const LandingPage = () => {
  return (
      <div className="landing-page">
          <header>
              <div className="header-content">
                  <h1>COVID-19 Visualizer</h1>
                  <nav>
                      <ul>
                          <li><a href="#cover-section">Home</a></li>
                          <li><a href="#about-me">About Me</a></li>
                          <li><a href="#feature-section">Key Features</a></li>
                          <li><a href="#github-repo">GitHub Repository</a></li>
                      </ul>
                  </nav>
              </div>
          </header>

          <section className="cover-section">
              <div className="left-content">
                  <h2 className="covertitle color">Welcome to the COVID-19 Visualizer</h2>
              </div>
              <div className="cta-button-container">
                  <a className="header-button" href="/Covid19-Globe/globe">Explore Now</a>
              </div>
          </section>

          <section className="about-me">
              <div className="section-content">
              <h2 className="color sectitle">About Me</h2>
                  <p className="paragraph">
                      Hello! I'm Mohamed Daif, the developer behind the COVID-19 Visualizer. With a passion for
                      technology and a
                      commitment to making a positive impact, I embarked on this project to provide a unique and
                      informative way to
                      explore the global impact of the COVID-19 pandemic.
                  </p>
                  <p className="paragraph">
                      Throughout the development journey, I faced various challenges that fueled my determination to
                      create a
                      user-friendly and visually engaging platform. Leveraging my skills in web development and a keen
                      interest in
                      data visualization, I crafted an interactive 3D globe that allows users to delve into real-time
                      COVID-19
                      statistics across the globe.
                  </p>
                  <p className="paragraph">
                      I invite you to explore the features of the COVID-19 Visualizer, gain insights into the pandemic's
                      footprint,
                      and stay informed about the latest data. Thank you for joining me on this journey of combining
                      technology with
                      global awareness.
                  </p>
              </div>
          </section>

          <section className="feature-section">
              <div className="section-content">
                  <br></br>
                  <h2 className="color sectitle">Key Features</h2>

                  <div className="feature">
                      <img src={require('../assets/feature1.PNG')} alt="Feature 1"/>
                      <h2 className="color sectitle">Explore the global impact of COVID-19 through an interactive 3D globe.</h2>
                      <p className="featureparagraph">
                          Dive into detailed case data per country displayed through a dynamic color spectrum. Hover
                          over regions for pop-up windows revealing confirmed cases, deaths, recoveries, and population
                          statistics. Gain a real-time snapshot of the pandemic's footprint while navigating the globe
                          for deeper insights.


                      </p>
                  </div>

                  <div className="feature">
                      <img src={require('../assets/feature2.PNG')} alt="Feature 1"/>
                      <h2 className="color sectitle">Learn more about the global impact of COVID-19 to each country through the
                          country cards</h2>
                      <p className="featureparagraph">
                          By hovering over a country, you can view a pop-up card with more detailed information, such as
                          the total number of confirmed cases, deaths, recoveries, and population. This allows you to
                          get a deeper understanding of the situation in each country.
                      </p>
                  </div>
              </div>
          </section>
          <section className="github-repo">
              <div className="section-content">
                  <h2 className="color">GitHub Repository</h2>
                  <p className="featureparagraph">
                      If you're interested in the code, check out the GitHub repository.
                  </p>
                  <a className="cta-button" href="https://github.com/CGUltimateno/Covid19-Globe" target="_blank"
                     rel="noopener noreferrer">GitHub Repository</a>
              </div>
          </section>

          <footer>
              <div className="footer-content">
                  <p>&copy; {new Date().getFullYear()} Mohamed Daif</p>
              </div>
          </footer>
      </div>
  );
};

export default LandingPage;
