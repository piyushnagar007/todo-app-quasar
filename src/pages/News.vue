<template>
  <div class="q-pa-md">
    <div ref="myList" class="row justify-center q-gutter-sm">
      <q-intersection
        v-for="newsTemp in newsData"
        :key="newsTemp.title"
        transition="scale"
        class="news-item"
      >
        <SingleNews
        :title="newsTemp.title"
        :urlNews="newsTemp.urlNews"
        :urlToImage="newsTemp.urlToImage"
      />
      </q-intersection>
    </div>
  </div>
</template>
<script>
import SingleNews from "../components/SingleNews.vue";

export default {

  async mounted() {
    let res = await this.$axios.get(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=90779bc7866942a5ada6cc97125d6523"
    )
    console.log(res)
    res.data.articles.forEach((element) => {
      console.log(element)
      const newsTemp = {
        title: element.title,
        urlNews: element.url,
        urlToImage: element.urlToImage
      };
      this.newsData.push(newsTemp)
    });
  },
  data() {
    return {
      newsData: [],
    };
  },
  components: {
    SingleNews,
  },
};
</script>
<style lang="sass" scoped>
.news-item
  height: 290px
  width: 290px
</style>


