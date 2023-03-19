<template>
  <div class="wrapper">
    <Header />

    <div class="wrapper-content">
      <div class="container">
        <h1>Hello</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
          labore, aliquid nam, esse ullam minima voluptate dolorem voluptates
          officiis dicta harum deserunt eveniet corrupti minus quasi eaque nisi
          veritatis non.
        </p>

        <!-- about -->
        We have a vacancy see <a href="/vacancy">here</a>
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
