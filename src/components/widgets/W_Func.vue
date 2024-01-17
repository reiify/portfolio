<template>
    <div class="widget func">
        <img :src="$t(`links.${[title]}.icon`)" alt="icon">
        <div class="text">
            <h4>{{ $t(`links.${[title]}.name`) }}</h4> 
            <p>{{ $t(`links.${[title]}.caption`) }}</p>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n({useScope: 'global'});

defineProps({
    title: String
});
</script>

<style lang="scss">
.func {
    display: flex;
    flex-direction: column;
}
</style>