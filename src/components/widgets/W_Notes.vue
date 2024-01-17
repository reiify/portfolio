<template>
    <a :href="$t(`notes.${[note]}.href`)">
        <div class="widget notes" :style="{ background: '#' + bg, fontSize: + fs + 'px' }">
            <div>
                <p>{{ $t(`notes.${[note]}.note`) }}</p>
            </div>
        </div>
    </a>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n({useScope: 'global'});

defineProps({
    note: String,
    bg: String,
    fs: String,
})
</script>

<style lang="scss">
.notes {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--link);
    cursor: auto;

    font-size: 20px;
    color: var(--bg);
    font-weight: 500;
}
.notes:hover {
    border: 2px solid transparent;
}
</style>