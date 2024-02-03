<template>
    <a :href="$t(`links.${[title]}.href`)">
        <div class="widget">
            <div class="left-content">
                <img :src="$t(`links.${[title]}.icon`)" alt="icon">
                <div class="text">
                    <h4>{{ $t(`links.${[title]}.name`) }}</h4> 
                    <p>{{ $t(`links.${[title]}.caption`)}}</p>
                </div>
            </div>
            <img src="@/assets/images/project.png" alt="content" v-if="[title] == 'project'" class="right-content">
            <img src="https://creatorspace.imgix.net/sites/ogimages/aHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvbWRuLXNvY2lhbC1zaGFyZS5jZDZjNGE1YS5wbmc=.png?width=600&height=600" alt="content" v-if="[title] == 'js'" class="right-content">
        </div>
    </a>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n({useScope: 'global'});

defineProps({
    title: String
});
</script>

<style lang="scss">
.left-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.right-content {
    border-radius: 10px;
    object-fit: cover;
    flex: 1;
    height: 100pt !important;
}
</style>