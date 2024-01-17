<template>
    <div class="widget media" :style="{ backgroundImage: 'url(' +  `@/assets/images/${[title]}.png` + ')' }">
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
}
.media:hover {
    border: 0;
}
.media:active {
    scale: 1;
}
</style>