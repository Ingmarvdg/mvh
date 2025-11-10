<template>
    <div class="overlay">
        <a class="social-button" href="https://www.instagram.com/myrthevanheerwaarden/" target="_blank" rel="noopener noreferrer">
            <img src="../assets/instagram.png" />
        </a>
        <a class="social-button" href="https://www.instagram.com/myrthevanheerwaarden/" target="_blank" rel="noopener noreferrer">
            <img src="../assets/linkedin.png" />
        </a>
    </div>
</template>

<style>
/* Social buttons on the right */
.overlay {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  pointer-events: auto;
  display: flex;
  gap: 10px;
}

.overlay button {
  padding: 10px 20px;
  font-size: 16px;
}


</style>