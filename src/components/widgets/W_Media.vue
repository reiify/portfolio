<template>
    <div class="widget media">
        <img src="@/assets/images/anime.png" alt="background image" v-if="[title] == 'anime'">
        <img src="@/assets/images/game.png" alt="background image" v-if="[title] == 'game'">
        <img src="@/assets/images/music.png" alt="background image" v-if="[title] == 'music'">
        <div class="caption">
            <p>{{ $t(`media.${[title]}.caption`) }}</p>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n({useScope: 'global'});

defineProps({
    title: String
})
</script>

<style lang="scss">
.caption {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    background-color: #fff;
    z-index: 1;

    & p {
        color: #000;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
    }
}
.media {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    justify-content: flex-start;
    align-items: flex-end;
    border: 0;
    cursor: auto;
    position: relative;
    
    & img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        object-fit: cover;
    }
}
.media:hover {
    border: 0;
}
.media:active {
    scale: 1;
}
</style>