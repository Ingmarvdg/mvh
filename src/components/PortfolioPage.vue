<template>
    <PageHeader />
    <div class="content">
        <flickity v-for="(images, folderName) in folders" :key="folderName" class="gallery js-flickity"
            :ref="el => galleryRefs[folderName] = el" :options="flickityOptions">
            <img class="carousel-cell" v-for="(imgSrc, index) in images" :key="index" :src="imgSrc"
                :alt="`${folderName}-${index}`" />
        </flickity>
    </div>
    <PageFooter />
</template>

<script>
import Flickity from 'vue-flickity';

export default {
    name: 'PortFolioPage',
    components: {
        Flickity
    },
    data() {
        return {
            folders: {},
            galleryRefs: {},
            flickityOptions: {
                cellAlign: 'left',
                contain: false,  // So next slide can peek out
                prevNextButtons: false,
                pageDots: true,
                dragThreshold: 10,
            }
        };
    },
    created() {
        this.loadImages();
    },
    mounted() {
    },
    methods: {
        loadImages() {
            fetch(`/mvh/manifest.json`)
                .then(res => {
                    if (!res.ok) throw new Error('Failed to fetch manifest');
                    return res.json();
                })
                .then(folderMap => {
                    console.log(folderMap)
                    this.folders = folderMap;
                })
                .catch(err => {
                    console.error('Error loading manifest.json:', err);
                });
        }
    }
};
</script>

<style scoped>
@import '../assets/custom.css';

.gallery {
    margin-bottom: 40px;
    background: none;
    /* Removed background */
    overflow: visible;
    /* Ensure next slide slice is visible */
    margin-left: auto;
    margin-right: auto;
    /* Centers horizontally */
}

.gallery::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    /* allow clicks through */

    background:
        linear-gradient(to right, var(--lightbase) 0%, transparent 5%, transparent 95%, var(--lightbase) 100%);
}

.carousel-cell {
    margin-right: 10px;
    width: calc(100% - 60px);
    aspect-ratio: 16/10;
}

.carousel-cell {
    width: calc(100% - 60px);
    /* Make main slide take most of width minus slice */
}
</style>
