<template>
    <div>
        <video ref="videoPlayer" id="videojs-event-tracking-player" class="video-js vjs-default-skin vjs-big-play-centered" controls width="950" height="640"
        poster="../assets/placeholders/ph-venice.png"  preload="auto">
            <!-- <track label="English" kind="subtitles" srclang="en" src='../secret-escape-love-road-trips-8-video.vtt' default /> -->
        <p class="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading to a
            web browser that
            <a href="https://videojs.com/html5-video-support/" target="_blank"
              >supports HTML5 video</a
            >
        </p>
        </video>
        <button type="button" id="load">load another source</button>
        <div id="console"></div>
    </div>
</template>

<script>
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
window.videojs = require('video.js');   


export default {
    name: "VideoPlayer",
    props: {

        options: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    methods: {
        function(window, videojs) {
    
        var log = function(name, data) {
        var currentTime = new Date().toLocaleString();
        // var args = Array.from(arguments);
        var ele = document.getElementById('console');
        var node = document.createElement('p');
        node.innerHTML = '{"video_id":{"date":"' + currentTime + '","' + name + '":"' + JSON.stringify(data) + '"},';
        ele.innerHTML = node.outerHTML + ele.innerHTML;
        }
    
        var btn = document.getElementById('load')
        btn.addEventListener('click', function(e) {
        e.preventDefault();
        player.autoplay(true);
        player.src([
            { src: 'https://vjs.zencdn.net/v/oceans.mp4?' + Math.random(), type: 'video/mp4' },
            { src: 'https://vjs.zencdn.net/v/oceans.webm?' + Math.random(), type: 'video/webm' }
        ]);
        });
    
        var player = window.player = videojs('videojs-event-tracking-player', {
        poster: 'https://vjs.zencdn.net/v/oceans.png',
        sources: [
            { src: 'https://vjs.zencdn.net/v/oceans.mp4', type: 'video/mp4' },
            { src: 'https://vjs.zencdn.net/v/oceans.webm', type: 'video/webm' }
        ]
        });
    
        player.eventTracking({
        performance: function(data) {
            log('tracking:performance', data);
        },
        
        // optional configuration to consider buffering while user is scrubbing on the video player.
        bufferingConfig: {
            includeScrub: true
        }
        });
    
        player.on('tracking:firstplay', function(e, data) {
        log(e.type, data);
        });
    
        player.on('tracking:pause', function(e, data) {
        log(e.type, data);
        });
    
        player.on('tracking:first-quarter', function(e, data) {
        log(e.type, data);
        });
    
        player.on('tracking:second-quarter', function(e, data) {
        log(e.type, data);
        });
    
        player.on('tracking:third-quarter', function(e, data) {
        log(e.type, data);
        });
    
        player.on('tracking:fourth-quarter', function(e, data) {
        log(e.type, data);
        });
    
        player.on('tracking:buffered', function(e, data) {
        log(e.type, data);
        });
    
        player.on('tracking:performance', function(e, data) {
        log(e.type, data);
        });
    
        player.on('tracking:seek', function(e, data) {
        log(e.type, data);
        });
        }
    },
    data() {
		return {
            player: null,
			videoOptions: {
				autoplay: true,
				controls: true,
				sources: [],
                plugins: { eventTracking: true },

			}
		};
	},
    mounted() {
        this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady() {
            console.log('onPlayerReady', this);
        })
    },
    beforeDestroy() {
        if (this.player) {
            this.player.dispose()
        }
    }
}
</script>
<style>
#console {
display: block;
background-color: #2e2e2e;
border-radius: 5px;
padding: 10px;
margin: 10px 0;
width:1200;
}
  
#console p {
color: #9a9a9a;
margin: 2px 0;
}
</style>
