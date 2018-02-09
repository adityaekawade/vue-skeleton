<template>
  <div>
    {{ page }}
    <div>
      <router-link to="/">Home</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'about',
  props: [],
  data() {
    return {
      page: "About"
    }
  },
  methods: {

  }
}
</script>
