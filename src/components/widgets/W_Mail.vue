<template>
    <a :href="'mailto:'+ $t('links.mail.user') + '@' + $t('links.mail.domain')">
        <div class="widget">
            <div class="left-content">
                <img :src="$t(`links.mail.icon`)" alt="icon">
                <div class="text">
                    <h4>{{ $t('links.mail.name') }}</h4> 
                    <p>{{ $t('links.mail.user') + '@' + $t('links.mail.domain')}}</p>
                </div>
            </div>
        </div>
    </a>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n({useScope: 'global'});

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