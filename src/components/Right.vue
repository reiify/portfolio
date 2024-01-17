<template>
    <div class="right">
        <section class="sys widgets">
            <W_Func :title="propTheme" @click="toggleTheme" />
            <W_Func :title="$t('lang')" @click="switchLang" />
        </section>

        <section class="contacts section">
            <W_Title :title="$t('section.contacts')" />
            <div class="contacts__widgets widgets">
                <W_Link title="tel" class="cw-1" />
                <W_Mail class="cw-2" />
                <W_Link title="tg" class="cw-3" />
                <W_Map class="cw-4" />
                <W_Link title="ig" class="cw-5" />
            </div>
        </section>

        <section class="projects section">
            <W_Title :title="$t('section.my_projects')" />
            <div class="projects__widgets widgets">
                <W_Link title="ig" />
                <W_Link title="ig" />
                <W_Link title="ig" />
                <W_Link title="ig" />
            </div>
        </section>

        <section class="skills section">
            <W_Title :title="$t('section.my_skills')" />
            <div class="skills__widgets widgets">
                <W_Notes note="prog_langs" class="sw-1" />
                <W_Link title="js" class="sw-2" />
                <W_Notes note="frameworks" class="sw-3" />
                <W_Link title="vue" class="sw-4" />
                <W_Link title="quasar" class="sw-5" />
            </div>
        </section>

        <section class="hobbies section">
            <W_Title :title="$t('section.hobbies')" />
            <div class="hobbies__widgets widgets">
                <W_Media title="anime" class="hw-1" />
                <W_Media title="game" class="hw-2" />
                <W_Media title="music" class="hw-3" />
            </div>
        </section>

        <section class="socials section">
            <W_Title :title="$t('section.socials')" />
            <div class="socials__widgets widgets">
                <W_Link title="git" />
                <W_Link title="be" />
                <W_Link title="fig" />
                <W_Link title="dri" />
                <W_Link title="vk" />
                <W_Link title="tt" />
                <W_Link title="x" />
                <W_Link title="pin" class="pin" />
            </div>
        </section>

        <section class="about-project section">
            <W_Title :title="$t('section.about_project')" />
            <div class="about-project__widgets widgets">
                <W_Link title="bento" class="apw-1" />
                <W_Notes note="font" fs="48" class="apw-2" />
                <W_Link title="prototype" class="apw-3" />
                <W_Link title="used_framework" class="apw-4" />
                <W_Link title="localization" class="apw-5" />
            </div>
        </section>
    </div>
</template>

<script setup>
/*
    W_ - widget

    _Title - section title
    _Func - widget with functions // e.g. switch theme/language
    _Link - widget with link
    _Mail - widget for mails
    _Map - map widget
    _Media - media widget // e.g. images, gif, video
    _Notes - notes widget
*/

import W_Title from '@/components/widgets/W_Title.vue'

import W_Func from '@/components/widgets/W_Func.vue'
import W_Link from '@/components/widgets/W_Link.vue'
import W_Mail from './widgets/W_Mail.vue'
import W_Map from '@/components/widgets/W_Map.vue'
import W_Media from '@/components/widgets/W_Media.vue'
import W_Notes from '@/components/widgets/W_Notes.vue'

// language switcher
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n({useScope: 'global'})

const switchLang = () => {
    locale.value == 'ru' ? locale.value = 'en' : locale.value = 'ru'
    localStorage.setItem('lang', locale.value)
}

// theme toggler
import { ref } from 'vue';

// По умолчанию тема будет светлой
const propTheme = ref('lm');

function toggleTheme() {
    if(propTheme.value == 'lm') {
        propTheme.value = 'dm'
        document.body.setAttribute('dark', '');
        localStorage.setItem('theme', propTheme.value);
    }
    else {
        propTheme.value = 'lm'
        document.body.removeAttribute('dark');
        localStorage.setItem('theme', propTheme.value);
    }
};

// Получаем ключ из локального хранилища
const localTheme = localStorage.getItem('theme');

// Проверяем Local Storage
if(localTheme) { 
    propTheme.value = localTheme // если в Local Storage есть ключи, то устаналиваем
    
    if(localTheme == 'dm') { // если ключ 'dm' (dark mode), то устанавливаем аттрибут [dark]
        document.body.setAttribute('dark', '');
    }
    else { // если ключ 'lm' (light mode), то убираем аттрибут [dark]
        document.body.removeAttribute('dark');
    };
}
else {
    propTheme.value = 'lm'; // если Local Storage пустой, то устанавливаем светлую тему
};
</script>

<style lang="scss">
.right {
    max-width: 70vw;
    width: 100%;
    gap: 40px;
    user-select: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: var(--link);
}

.widgets {
    gap: 40px;
    display: grid;
}

.sys {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
}

/* contacts */
.contacts__widgets {
    grid-template-columns: repeat(4, 1fr);
}
.cw-1 {
    grid-column: 1 / 3;

    & p {
        max-width: fit-content;
    }
}
.cw-2 {
    grid-column: 3 / 5;

    & p {
        max-width: fit-content;
    }
}
.cw-4 {
    grid-column: 2 / 4;
}

/* projects */
.projects__widgets {
    grid-template-columns: repeat(2, 1fr);
}

/* skills */
.skills__widgets {
    grid-template-columns: repeat(4, 1fr);
}
.sw-1 {
    grid-column: 1 / 3;
}
.sw-2 {
    grid-column: 3 / 5;
}
.sw-3 {
    grid-column: 1 / 3;
}

/* hobbies */
.hobbies__widgets {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    height: 390px;
}
.hw-1 {
    display: inherit;
    grid-row: 1 / 3;
}
.hw-2 {
    display: inherit;
    grid-row: 1;
}
.hw-3 {
    display: inherit;
    grid-row: 2;
}

/* socials */
.socials__widgets {
    grid-template-columns: repeat(4, 1fr);
}

/* about project */
.about-project__widgets {
    grid-template-columns: repeat(2, 1fr);
}
.apw-2 {
    display: inherit;
    grid-column: 2;
    grid-row: 1 / 3;
}
.apw-4 .left-content, .apw-5 .left-content {
    flex-direction: row;
    align-items: center;
}
.apw-4, .apw-5 {
    display: inherit;
    height: fit-content;

    & p {
        display: none;
    }
}
</style>