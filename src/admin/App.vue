<template>
  <div class="wrap">
    <app-title/>
    <div class="button-list">
      <a 
        href="#" 
        class="button-list__link" 
        @click="changeTab('about')"><span class="link-txt">Обо мне</span></a>
      <a 
        href="#" 
        class="button-list__link" 
        @click="changeTab('blog')"><span class="link-txt">Блог</span></a>
      <a 
        href="#" 
        class="button-list__link" 
        @click="changeTab('works')"><span class="link-txt">Мои работы</span></a>
      <div class="other-space"/>
    </div>
    <div class="maincontent">
      <about-tab v-if="activeTab === 'about'" />
      <works-tab v-else-if="activeTab === 'works'" />
    </div>

  </div>
</template>

<script>
export default {
  components: {
    AppTitle: require("./components/title").default,
    AboutTab: require("./components/about").default,
    WorksTab: require("./components/works").default,
    BlogTab: require("./components/blog").default
  },
  data() {
    return {
      activeTab: "about"
    };
  },
  methods: {
    changeTab(tabName) {
      this.activeTab = tabName;
    }
  }
};
</script>
<style lang="scss" src="./styles/main.scss">
</style>
