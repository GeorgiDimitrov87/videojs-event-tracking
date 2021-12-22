var player = videojs('videojs-event-tracking-player', {
    autoplay: 'muted',
    controls: true,
    width:1200,
    height:500,
    poster: "https://picsum.photos/800/450",
    loop: false,
    playbackRates: [0.25, 0.5, 1, 1.5, 2.5, 3],
    plugins: {
        eventTracking: {
            PauseTracking: true,
            BufferTracking: true,
            PercentileTracking: true,
            PlayTracking: true,
            SeekTracking: true,
            PerformanceTracking:true,
        },
        hotkeys: {
            enableModifiersForNumbers: false,
            seekStep: 5,
             
        },
    }
});
player.on('tracking:firstplay', (e, data) => console.log(data))
player.on('tracking:pause', (e, data) => console.log(data))
player.on('tracking:seek', (e, data) => console.log(data))
player.on('tracking:buffered', (e, data) => console.log(data))
player.on('tracking:first-quarter', (e, data) => console.log(data))
player.on('tracking:second-quarter', (e, data) => console.log(data))
player.on('tracking:third-quarter', (e, data) => console.log(data))
player.on('tracking:fourth-quarter', (e, data) => console.log(data))

player.on('tracking:performance', (e, data) => console.log(data))

// player.autoCaption();

// pluginConfig = {
//     performance: function(data) {
//       /** Use your preferred event tracking platform.
//        *  Google Analytics? Amplitude? Piwik? Mixpanel?
//        */
//     }
//   }

