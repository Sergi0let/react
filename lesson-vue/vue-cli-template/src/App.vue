<template>
  <div class="wrapper">
    <Header :title="title" :links="links" />

    <div class="wrapper-content">
      <div class="container">
        <h1>Hello</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
          labore, aliquid nam, esse ullam minima voluptate dolorem voluptates
          officiis dicta harum deserunt eveniet corrupti minus quasi eaque nisi
          veritatis non.
        </p>
      </div>
    </div>

    <Footer :links="links" />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  name: 'App',
  components: { Header: TheHeader, Footer: TheFooter },

  data() {
    return {
      title: 'Template',
      links: [
        {
          title: 'Home',
          alias: 'home',
          url: '/',
        },
        {
          title: 'About',
          alias: 'about',
          url: '/about',
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
