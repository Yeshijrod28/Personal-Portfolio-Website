<template>
    <div id="achievements">
        <div class="header"><h1>ACHIEVEMENTS</h1></div>
        <div class="container5">
            <div class="award">
                <p><strong style="color: var(--secondary-color); margin-left: 0;">01</strong> Three times recipient of <strong style="color: var(--secondary-color); margin-left: 0;">His Majesty's</strong> Academic Excellence Award(2014,2015,2018)</p>
            </div>
            <div class="award">
                <p><strong style="color: var(--secondary-color); margin-left: 0;">02</strong> Ranked <strong style="color: var(--secondary-color); margin-left: 0;">8th</strong> in Engineering Merit Ranking UG Scholarships 2020</p>
            </div>
            <div class="award">
                <p><strong style="color: var(--secondary-color); margin-left: 0;">03</strong> Successfully completed Japan-Asia Youth Exchange program in (<strong style="color: var(--secondary-color); margin-left: 0;">SAKURA</strong> exchange program)</p>
            </div>
            <div class="award">
                <p><strong style="color: var(--secondary-color); margin-left: 0;">04</strong> Recipient of 'Indian Council for Cultural Relation' scholarship from <strong style="color: var(--secondary-color); margin-left: 0;">ICCR</strong>.</p>
            </div>
            <div class="award">
                <p><strong style="color: var(--secondary-color); margin-left: 0;">05</strong> Successfully completed community engagement programme <strong style="color: var(--secondary-color); margin-left: 0;">Desh ka Mentor</strong> initiative of Govt. of NCT of Delhi from 14/01/22 to 20/03/22</p>
            </div>
            <div class="award">
                <p><strong style="color: var(--secondary-color); margin-left: 0;">06</strong> Achieved an official <strong style="color: var(--secondary-color); margin-left: 0;">FIDE</strong> rating for chess after competing in an official FIDE tournament organized by <strong style="color: var(--secondary-color); margin-left: 0;">Bhutan Chess Federation</strong>.</p>
            </div>
        </div>
    </div>
    <hr />
</template>

<style scoped>
* {
  margin-left: 30px;
  overflow: hidden;
}
.header h1 {
  color: var(--secondary-color);
  font-size: 34px;
  text-align: center;
  margin: 80px 0 0 -50px;

}
.container5 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px 0;
  margin: 50px 150px;
}
.award {
  height: 150px;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid var(--secondary-color);
  border-radius: 100px;
  padding: 0 40px;
  cursor: pointer;
}
.award p {
  font-size: 20px;
  color: var(--text-color);
}
.award:hover {
  background-color: var(--tertiary-color);
}
.award:hover p {
  background-color: var(--tertiary-color);
}

@media(max-width:1024px){
  *{
    margin-left: 0;
  }
.header h1 {
  font-size: 24px;
  text-align: center;
  margin-left: -40px;
}
.container5 {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
}
.award {
  height: 130px;
  width: 500px;
  padding:0 10px 0 40px;
}
.award p {
  font-size: 16px;
}
}
@media(max-width:432px){
.header h1 {
  font-size: 16px;
  margin-bottom: 20px;
}
.container5 {
  display: flex;
  flex-direction: column;
}
.award {
  width: 310px;
}
.award p {
  font-size: 14px;
  padding: 0 20px;
}
}
</style>
