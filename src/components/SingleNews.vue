
<template>
  <a :href="urlNews"><q-card class="q-ma-sm cursor-pointer q-hoverable" v-ripple clickable>
    <img :src="urlToImage"/>
    <q-card-section>
      <div class="text-h7">{{ title }}</div>
    </q-card-section>
  </q-card></a>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    urlNews: {
      type: String,
      required: false,
    },
    urlToImage: {
      type: String,
      required: false,
    },
  },
};
</script>
