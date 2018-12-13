<template>
  <div class="my-component">
    <h1>{{ title }}</h1>
    안나옴?
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data: () => {
    return {
      title: 'This is My Component'
    }
  }
}
</script>

<style scoped lang="less">
</style>
