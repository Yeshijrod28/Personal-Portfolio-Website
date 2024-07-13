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
    margin: auto 1em;
    font-size: 1.8em;
}
nav ul li .router-link {
    color: var(--text-color);
    text-decoration: none;
}
.router-link.router-link-active {
    color: var(--secondary-color);
    font-style: italic;
    font-size: 1.1em;
}
nav .router-link:hover{
    background-color:var(--tertiary-color) ;
}
@media (max-width:1066px) {
nav ul li {
    margin: auto 0.8em;
    font-size: 1.6em;
}
}
@media (max-width:904px) {
nav ul li {
    margin: auto 0.6em;
    font-size: 1.4em;
}
}
@media (max-width:738px) {
nav ul li {
    margin: auto 0.4em;
    font-size: 1.2em;
}
}
@media (max-width:600px) {
nav ul li {
    margin: auto 0.5em;
    font-size: 1em;
}
}
@media (max-width:513px) {
nav ul li {
    margin: auto 0.3em;
    font-size: .75em;
}
}
</style>