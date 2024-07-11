<template>
    <div id="projects">
        <div class="header"><h1>PROJECTS</h1></div>
    <div class="container4">
        <a href="https://www.kaggle.com/code/keerthivasankannan/price-prediction-on-laptops-using-machine-learning" style="text-decoration: none">
            <div class="project">
                <h1>ML based web application</h1>
                <h3>Laptop price predictor</h3>
                <p>
                  A ML based web application designed to assist users to find the most suitable laptops based
                  on their individual needs and budgets.
                </p>
            </div>
        </a>
        <a href="https://medium.com/inst414-data-science-tech/exploring-predictive-insights-in-aapl-stock-prices-using-machine-learning-daacbbec14a7" style="text-decoration: none;">
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
* {
    overflow: hidden;
}
.header h1{
    margin-top: 80px;
    color: var(--secondary-color);
    font-size: 34px;
    text-align: center;
}
.container4 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2,1fr);
    row-gap: 10px;
    column-gap: 5px;
    margin-left: 100px;
}
.project {
    text-align: center;
    background-color: var(--tertiary-color);
    border: 2px solid #000;
    border-radius: 80px;
    width: 500px;
    height: 210px;
    margin-bottom: 30px;
    padding: 20px 40px 0 60px;
    cursor: pointer;
}
.project h1 {
    font-size: 24px;
    color: var(--secondary-color);
    background-color: var(--tertiary-color);
}
.project h3 {
    font-size: 22px;
    color: var(--text-color);
    background-color: var(--tertiary-color);
}
.project p {
  text-align: left;
  font-size: 20px;
  color: var(--text-color);
  background-color: var(--tertiary-color);
}
.project:hover {
  border: 4px solid var(--secondary-color);
}

@media(max-width:1026px){
  .container4{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 0;
  }
.header h1{
  font-size: 22px;
}
.project {
  width: 500px;
  height: 160px;
  padding: 20px 10px 0 30px;

}
.project h1 {
  font-size: 20px;
}
.project h3 {
  font-size: 18px;
}
.project p {
  font-size: 16px;}

.project:hover {
  border: 3px solid var(--secondary-color);
}
}
@media(max-width:432px){
  *{
    margin-left: 0;
  }
.header h1{
  font-size: 18px;
}
.project h3 {
  font-size: 16px;
}
.project p {
  font-size: 14px;}

.project {
  width: 350px;
  height: 160px;
}
}
@media(max-width:415px){
.project {
  width: 300px;
  height: 160px;
}
}
</style>
