<template>
    <div class="header-bar">
        <button @click="navigate" @mouseenter="isHovered = true" @mouseleave="isHovered = false" class="header-button">
            {{ isHovered ? hoverLabel : label }}
        </button>
    </div>
    <div class="whitewash">
        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
    </div>
</template>

<script>
export default {
    name: 'HeaderButton',
    data() {
        return {
            isHovered: false,
        };
    },
    computed: {
        isPortfolio() {
            return this.$route.path === '/';
        },
        label() {
            return 'Myrthe van Heerwaarden';
        },
        hoverLabel() {
            return this.isPortfolio ? 'About me' : 'Portfolio';
        },
        targetRoute() {
            return this.isPortfolio ? '/about' : '/';
        }
    },
    methods: {
        navigate() {
            this.$router.push(this.targetRoute);
        }
    }
};
</script>

<style>
@import '../assets/custom.css';

.header-bar {
    height: 64px;
    width: 100%;
    background-color: #4ca1af;
    /* Ocean blue-green island vibe */
    display: flex;
    align-items: center;
    justify-content: center;
    /* Optional: add a subtle shadow for depth */
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

/* Keep button fixed width, center text */
.header-button {
    width: 400px;
    padding: 0.5em 1em;
    font-size: 1.2em;
    background-color: transparent;
    border: 2px solid #f7e9d7;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: center;
    white-space: nowrap;
    /* Prevent text wrapping */
    overflow: hidden;
    text-overflow: ellipsis;
    color: #f7e9d7;
    /* In case text is longer */
}

.header-button:hover {
    background-color: #f7e9d7;
    color: #4ca1af;
    border: 2px solid #4ca1af;
}

.whitewash {
  position: relative; /* Needed for absolute positioning inside */
  height: 64px;
  width: 100%;
  background: #f7e9d7;
  margin-bottom: 32px;
  overflow: hidden; /* Clean overflow */
}

/* Common wave styles */
.wave {
  position: absolute;
  opacity: 1;
  width: 200%;
  height: 64px;
  background:
    url('data:image/svg+xml;utf8,<svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg"><path fill="%234ca1af" d="M0,40 C360,0 1080,80 1440,40 L1440,0 L0,0 Z"/></svg>') repeat-x;
  background-color: #f7e9d7;
  pointer-events: none;
}

/* First wave: scrolls horizontally */
.wave1 {
  animation: wave-scroll 10s linear infinite;
}

/* Second wave: vertical swell */
.wave2 {
  opacity: 0.5;
  animation: wave-swell 4s ease-in-out infinite;
  z-index: 1; /* put it behind wave1 if needed */
}

@keyframes wave-scroll {
  0%   { background-position: 0 0; }
  100% { background-position: 100% 0; }
}

@keyframes wave-swell {
  0%, 100% { transform: translateY(0px); }
  50%      { transform: translateY(8px); }
}

</style>