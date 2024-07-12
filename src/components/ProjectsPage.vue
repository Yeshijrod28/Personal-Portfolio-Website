<template>
    <div id="projects">
        <div class="header"><h1>PROJECTS</h1></div>
        <div class="container4">
            <a href="" style="text-decoration: none">
                <div class="project">
                    <h1>ML based web application</h1>
                    <h3>Laptop price predictor</h3>
                    <p>
                      A ML based web application designed to assist users to find the most suitable laptops based
                      on their individual needs and budgets.
                    </p>
                </div>
            </a>
            <a href="" style="text-decoration: none;">
                <div class="project">
                    <h1>ML based web application</h1>
                    <h3>Stock price analysis</h3>
                    <p>
                      A machine learning-based stock price predictor that leverages historical data, market
                      indicators, and macroeconomic trends to forecast future stock performance.
                    </p>
                </div>
          </a>
          <a href="" style="text-decoration: none">
              <div class="project">
                  <h1>Front-end web development</h1>
                  <h3>Travel and tourism website</h3>
                  <p>
                    Designed use case, activity diagram, class diagram, IRD, SRS and sequence diagram.. Made
                    various test cases and then a front-end website was developed.
                  </p>
              </div>
          </a>
          <a href="" style="text-decoration: none">
              <div class="project">
                  <h1>Chat Server System</h1>
                  <h3>UI design</h3>
                  <p>
                    Deep understanding of functional requirements, use cases and SRS and designed a UI interface
                    page.
                  </p>
              </div>
          </a>
        </div>
        </div>
        <hr />
</template>

<style scoped>
#projects {
  overflow: hidden;
}
.header h1{
    margin: 2.5rem auto;
    color: var(--secondary-color);
    font-size: 2rem;
    text-align: center;
}
.container4 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2,1fr);
    row-gap: 0.625rem;
    column-gap: 0.3rem;
    margin: auto 5rem;
}
.project {
    text-align: center;
    background-color: var(--tertiary-color);
    border: 2px solid #000;
    border-radius: 80px;
    width: 32em;
    height: 10em;
    margin: 2em auto;
    padding: 2em;
    cursor: pointer;
}
.project h1 {
    font-size: 1.6em;
    color: var(--secondary-color);
    background-color: var(--tertiary-color);
}
.project h3 {
    font-size: 1.2em;
    color: var(--text-color);
    background-color: var(--tertiary-color);
}
.project p {
  text-align: center;
  vertical-align: middle;
  font-size: 1em;
  color: var(--text-color);
  background-color: var(--tertiary-color);
}
.project:hover {
  border: 4px solid var(--secondary-color);
}
@media (max-width:1256px){
.container4 {
    display:flex;
    flex-direction: column;
  }
.project {
    margin: 1em auto;
}
}
@media (max-width:670px){
.project {
  width: 24em;
  height: 12em;
}
}
@media (max-width:536px){
.project {
  width: 20em;
  height: 14em;
  padding: 1em;
}
}
@media (max-width:446px){
.project {
  width: 18em;
  height: 15em;
  margin: auto -3em;
}
}
</style>
