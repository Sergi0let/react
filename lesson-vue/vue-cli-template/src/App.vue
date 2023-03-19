<template>
  <div class="wrapper">
    <Header />

    <div class="wrapper-content">
      <div class="container">
        <!-- This is the magic line -->
        <router-view />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  name: 'App',
  components: { Header: TheHeader, Footer: TheFooter },
};
</script>

<style lang="scss"></style>
