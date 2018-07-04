<template>
  <div class="content">
    <div class="content__title">Страница "Обо мне"</div>
    <ul class="skills__list">
      <li class="skills__item">
        <div class="skills__title">Frontend</div>
        <div class="skills__group">
          <div class="skills__row">
            <div class="skills__name"/> Html
            <input
              v-model="about"
              class="skills__perc"
              type="text"
            >
            <span>%</span>
          </div>
          <div class="skills__row">
            <div class="skills__name"/> CSS
            <input
              v-model="about"
              class="skills__perc"
              type="text"
            >
            <span>%</span>
          </div>
          <div class="skills__row">
            <div class="skills__name"/> JavaScript
            <input
              v-model="about"
              class="skills__perc"
              type="text"
            >
            <span>%</span>
          </div>
        </div>
      </li>
      <li class="skills__item">
        <div class="skills__title">Backend</div>
        <div class="skills__group">
          <div class="skills__row">
            <div class="skills__name"/> PHP
            <input
              v-model="about"
              class="skills__perc"
              type="text"
            >
            <span>%</span>
          </div>
          <div class="skills__row">
            <div class="skills__name"/> Node.js
            <input
              v-model="about"
              class="skills__perc"
              type="text"
            >
            <span>%</span>
          </div>
          <div class="skills__row">
            <div class="skills__name"/> Mongo.db
            <input
              v-model="about"
              class="skills__perc"
              type="text"
            >
            <span>%</span>
          </div>

        </div>
      </li>
      <li class="skills__item">
        <div class="skills__title">Workflow</div>
        <div class="skills__group">
          <div class="skills__row">
            <div class="skills__name"/> Git
            <input
              v-model="about"
              class="skills__perc"
              type="text"
            >
            <span>%</span>
          </div>
          <div class="skills__row">
            <div class="skills__name"/> Gulp
            <input
              v-model="about"
              class="skills__perc"
              type="text"
            >
            <span>%</span>
          </div>
          <div class="skills__row">
            <div class="skills__name"/> Bower
            <input
              v-model="about"
              class="skills__perc"
              type="text"
            >
            <span>%</span>
          </div>
        </div>
      </li>
    </ul>
    <a
      href=""
      class="save-btn">Сохранить</a>
  </div>


</template>

<script>
export default {
  data() {
    return {
      about: ""
    };
  }
};
</script>

<style src="../styles/about.scss">
</style>
