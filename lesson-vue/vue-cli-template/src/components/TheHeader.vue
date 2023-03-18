<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar-content">
        <a class="navbar-logo" href="/">{{ title }}</a>
        <ul class="navbar-list">
          <li class="navbar-item" v-for="link in links" :key="link.alias">
            <a class="navbar-link" :href="link.url">{{ link.title }}</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: 'default title',
    },
    links: {
      type: Array,
      required: true,
      default: () => [
        {
          title: 'Home',
          alias: 'home',
          url: '/',
        },
      ],
    },
  },
};
</script>
