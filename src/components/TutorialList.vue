<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by title" v-model="title" />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" @click="searchTitle">
            Search
          </button>
        </div>
      </div>
    </div>

    <h4>Tutorials List</h4>
    <ul class="list-disc">
      <li class="list-group-item" :class="{ active: index == currentIndex }" v-for="(tutorial, index) in tutorials"
        :key="index" @click="setActiveTutorial(tutorial, index)">
        {{ tutorial.title }}
      </li>
    </ul>

    <div class="col-md-6">
      <div v-if="currentTutorial">
        <h4>Tutorial</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentTutorial.title }}
        </div>
        <div>
          <label><strong>Description:</strong></label> {{ currentTutorial.description }}
        </div>
        <div>
          <label><strong>Status:</strong></label> {{ currentTutorial.published ? "Published" : "Pending" }}
        </div>
        <router-link :to="'/tutorials/' + currentTutorial.id" class="badge badge-warning">Edit</router-link>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Tutorial...</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TutorialList',
  data() {
    return {
      tutorials: [],
      currentTutorial: null,
      title: null
    }
  },
  methods: {
    getTutorials() {
      fetch('https://vue-demo-13c5f-default-rtdb.asia-southeast1.firebasedatabase.app/tutorials.json').then(response => response.json())
        .then(data => {
          this.tutorials = data;
          console.log('Success:', data);
        });
    }
  },
  mounted() {
    this.getTutorials();
  }
}
</script>
