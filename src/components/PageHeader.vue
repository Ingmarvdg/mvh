<template>
    <div class="header-bar">
        <router-link class="header-button" :to="dynamicLink">
            <img src="../assets/name.png" />
        </router-link>
    </div>
    <!-- <div class="whitewash">
        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
    </div> -->
</template>

<script>
export default {
    name: 'PageHeader',
    computed: {
        dynamicLink() {
            const currentPath = this.$route.path
            console.log(currentPath)
            return currentPath === "/" ? "/about" : "/"
        }
    },
}
</script>

<style>
@import '../assets/custom.css';

.header-bar {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.header-button {
    display: inline-block;
    background: none;
    border: none;
    flex: 0 0 auto;
    padding: 0;
    width: 50%;
    height: auto;
}

.header-button img {
    width: 100%;
}

/* .whitewash {
    position: relative;
    height: 64px;
    width: 100%;
    background: var(--lightbase);
    margin-bottom: 32px;
    overflow: hidden;
} */

/* .wave {
    position: absolute;
    opacity: 1;
    stroke-width: 0;
    width: 200%;
    border-top: 4px;
    border-top-color: var(--lightbase);
    height: 42px;
    color: var(--lightbase);
    background:
        url("data:image/svg+xml;utf8,<svg viewBox='0 0 1440 80' xmlns='http://www.w3.org/2000/svg'><path fill='currentColor' d='M0,40 C360,0 1080,80 1440,40 L1440,0 L0,0 Z'/></svg>") repeat-x;
    background-color: var(--lightbase);
    pointer-events: none;
} */

/* First wave: scrolls horizontally */
/* .wave1 {
    animation: wave-scroll 18s linear infinite;
} */

/* Second wave: vertical swell */
/* .wave2 {
    opacity: 0.5;
    animation: wave-swell 12s ease-in-out infinite;
    z-index: 1;
} */

/* @keyframes wave-scroll {
    0% {
        background-position: 0 0;
    }

    100% {
        background-position: 100% 0;
    }
} */

/* @keyframes wave-swell {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(8px);
    }
} */
</style>