<template>
    <div class="left">
        <div class="pic-name">
            <img class="photo" src="@/assets/images/img.png" alt="photo">
            <h2 class="name">{{$t('user_name')}}</h2>
        </div>
        <div class="about-me">
            <p>{{$t('bio.1')}}</p>
            <p>{{$t('bio.2')}}</p>
            <p>{{$t('bio.3')}}</p>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n({useScope: 'global'})
</script>

<style>
.left {
    max-width: 30vw;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 30px;

    /* disable scrolling */
    height: 0;
    top: 60px;
    position: sticky;
}

.pic-name {
    display: flex;
    flex-direction: column;
    gap: 30px;
}
.photo {
    border-radius: 100%;
    width: 200px;
    height: 200px;
}

.name {
    color: var(--link);
    font-size: 48px;
    font-weight: 700;
}

.about-me {
    display: flex;
    max-width: calc(100% - 50px);
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
}
.about-me p {
    color: var(--text-p);
    font-size: 20px;
    font-weight: 500;
    line-height: 120%;
}
</style>