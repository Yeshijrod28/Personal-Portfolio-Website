<template>
    <div class="container">
        <div class="text-container">
            <h4>Hi, I am</h4>
            <h1>YESHI DORJI</h1>
            <p>A SOFTWARE ENGINEERING STUDENT</p>
            <div class="icons">
                <a href="https://github.com/Yeshijrod28?tab=overview&from=2024-06-01&to=2024-06-30">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/>
                    </svg>
                </a>
                <a href="https://x.com/Yeshijrod99?t=3x5BWZ-6eyRcIxr-QrppYg&s=08">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584l-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                    </svg>
                </a>
                <a href="https://www.facebook.com/yeshijrod49">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/>
                    </svg>
                </a>
                <a href="https://www.instagram.com/yeshijrod_49?fbclid=IwZXh0bgNhZW0CMTAAAR11EyeVDqdNU8J6EP1dYmYxRxTqfyxkh0jTDsgj4yGshFspo2ICaGKLxFw_aem_w7DaOkILsAwSynJ1uUDZ9g">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
                    </svg>
                </a>
            </div>
            <button @click="downloadResume()">Download Resume</button>
        </div>
        <div class="image">
          <img src="../assets/hero.png" alt="Yeshi Dorji" />
        </div>
    </div>
    <hr />
</template>

<script setup>
const downloadResume = () => {
  try {
    window.open('https://acrobat.adobe.com/id/urn:aaid:sc:AP:c2bcbf49-d4fc-4c6f-9452-c329d97840b9')
  } catch (error) {
    console.error('Error downloading resume:', error)
    alert('Error downloading resume. Please try again later.')
  }
}
</script>

<style scoped>
*{
  margin-left: 1rem;
}
.text-container{
  align-content: center;
}
h4 {
  font-size: 2.6em;
  color: var(--text-color);
}
h1 {
  font-size:5.2em;
  color: var(--secondary-color);
}
p {
  font-size: 2em;
  color: var(--text-color);
}
.container {
  display: flex;
  justify-content: center;
}
.image img {
  height:41em;
  width: 37em;
  margin: 1.5rem 2rem;
}
.icons svg {
  color: var(--secondary-color);
  margin: auto 0.7em;
  height: 1.8em;
  width: 1.8em;
}
.text-container button {
  height: 4.375rem;
  width: 18.375rem;
  border: 3px solid var(--secondary-color);
  color: var(--secondary-color);
  font-size: 1.5em;
  border-radius: 40px;
  margin-top: 1rem;
  cursor: pointer;
}
button:hover {
  border: none;
  background-color: var(--secondary-color);
  color: #000;
}
@media (max-width: 1364PX) {
h4 {
  font-size: 2.2em;
}
h1 {
  font-size:4.8em;
}
p {
  font-size: 1.6em;
}
.image img {
  height:36em;
  width: 32em;
}
}
@media (max-width: 1234px) {
h4 {
  font-size: 2.2em;
}
h1 {
  font-size:4.8em;
}
p {
  font-size: 1.6em;
}
.image img {
  height:36em;
  width: 32em;
}
}
@media (max-width:1154px) {
  h4 {
  font-size: 1.8em;
}
h1 {
  font-size:4em;
}
p {
  font-size: 1.2em;
}
.image img {
  height:32em;
  width: 28em;
} 
}
@media (max-width: 1010px) {
h4 {
  margin-top: 4rem;
}
.container {
  flex-direction: column;
  align-items: center;
}
.image img{
  margin-left: 4em;
  height: 26em;
  width: 20em;
}
}
</style>