<template>
  <div class="app">
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost"/>
    </my-dialog>
    <post-list 
      :posts="posts"
      @remove="removePost"/>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
 export default {
  components: {
    PostForm, PostList
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'JS',
          body: 'description 1',
        },
        {
          id: 2,
          title: 'HTML',
          body: 'description 2',
        },
        {
          id: 3,
          title: 'CSS ',
          body: 'description 3',
        }, 
      ], 
      dialogVisible: false,
    }
  },
  methods: {
    createPost(post){
      this.posts.push(post);
      console.log(post)
    },
    removePost(post){
      this.posts = this.posts.filter((p) => p.id !== post.id)
    }
  }
 }
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app{
  padding: 20px;
}
</style>