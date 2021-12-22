<template>
  <div class="dashboard">

    <div v-if="!currentUser">
      <Login :verifyUser="verifyUser" />
    </div>
    <div>
      <video-player :options="videoOptions"/>
    </div>
    
  </div>
</template>

<script>
import VideoPlayer from "@/components/VideoPlayer.vue";

// import { getAPI } from '../axios-api'
// import moment from 'moment';


export default {
  name: 'Dashboard',
  components: {
    VideoPlayer,

  },
  props: {
    currentUser: null
  },
  created () {
    this.updateData();
    document.title = 'test'
  },
  computed:{
  },
  data() {
    return {
      videoOptions: {
				autoplay: true,
				controls: true,
        plugins: { eventTracking: true },
				sources: [
					{
						src:
              require('../assets/test.mp4'),
              type: "video/mp4"
					}
				]
			},
  }
  },
  methods: {
  
  }

}
</script>

<style>
</style>
