<template>
    <div class="sub-container">
        <ul class="socials-list">
            <li class=" socials-item">
                <a target="_blank" href="#">
                    <img src="~/assets/img/FacebookG.png" alt="">
                </a>
            </li>
            <li class=" socials-item">
                <a target="_blank" href="#">
                    <img src="~/assets/img/InstagramG.png" alt="">
                </a>
            </li>
            <li class=" socials-item">
                <a target="_blank" href="#">
                    <img src="~/assets/img/SpotifyG.png" alt="">
                </a>
            </li>
            <li class=" socials-item">
                <a target="_blank" href="#">
                    <img src="~/assets/img/YoutubeG.png" alt="">
                </a>
            </li>                                    
        </ul>
    </div>
</template>

<style>
    .socials-list {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0px 25%;
    }
    .socials-list .socials-item img {
        height: 50px;

    }
    .socials-list a {
        border: none;
    }
    .socials-list a:hover img {
        margin-top: -3px;
    }
</style>

