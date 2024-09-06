<template>
  <div class="htmlClass">
    <h1>{{ title }}</h1>
    <form>
      <input type="text" id="firstName" v-model="firstName" />
      <input type="text" id="secondName" v-model="secondName" />
      <input type="text" id="student_code" v-model="student_code" />
      <button @click="submitForm()" class="submitForm">Submit</button>
  </form>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      title: 'Build',
      firstName: 'ชัชวาลย์',
      secondName: 'อ้วนล่ำ',
      student_code: '6604101319',
    }
  },
  methods: {
    submitForm() {
      this.$emit('submit form')
    },
  }
}
</script>

<style scoped></style>