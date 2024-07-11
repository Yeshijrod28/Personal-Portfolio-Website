<template>
    <nav>
        <ul>
            <li><RouterLink to="/" class="router-link">Home</RouterLink></li>
            <li><RouterLink to="/about" class="router-link">About</RouterLink></li>
            <li><RouterLink to="/portfolio" class="router-link">Portfolio</RouterLink></li>
            <li><RouterLink to="/projects" class="router-link">Projects</RouterLink></li>
            <li><RouterLink to="/achievements" class="router-link">Achievements</RouterLink></li>
            <li><RouterLink to="/contact" class="router-link">Contact</RouterLink></li>
        </ul>
    </nav>
</template>

<style>
nav {
    position: fixed;
    margin-top: 0;
    background-color: var(--primary-color);
    z-index: 1;
    display: flex;
    justify-content: center;
}
nav ul li {
    display: inline;
    margin: 0 33px;
    font-size: 30px;
}
nav ul li .router-link {
    color: var(--text-color);
    text-decoration: none;
}
.router-link.router-link-active {
    color: var(--secondary-color);
    font-style: italic;
    font-size: 34px;
}
nav .router-link:hover{
    background-color:var(--tertiary-color) ;
}

@media(max-width:1220px){
nav ul li {
    margin: 0 20px;
    font-size: 22px;
}
.router-link.router-link-active {
    font-size:24px;
}
}
@media(max-width:980px){
  *{
    margin-left: 5px;
  }
nav ul li {
    margin: 0 17px;
    font-size: 18px;
}
.router-link.router-link-active {
    font-size:22px;
}
}

@media(max-width:432px){
  *{
    margin-left: 1px;
  }
nav ul li {
    margin-left: 1px;
    font-size: 12px;
}
.router-link.router-link-active {
    font-size:14px;
}
}
</style>