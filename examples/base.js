(function(window, videojs) {
    
    var log = function(name, data) {
      // Save the content of the canvas to localStorage
      // function saveData(){
      //   localStorage.setItem("console", ele.innerHTML);
      // }
      var currentTime = new Date().toLocaleString();
      var args = Array.from(arguments);
      var ele = document.getElementById('console');
      var node = document.createElement('p');
      node.innerHTML = '{"video_id":{"date":"' + currentTime + '","' + name + '":"' + JSON.stringify(data) + '"},';
      ele.innerHTML = node.outerHTML + ele.innerHTML;
      var xhr = new XMLHttpRequest();
      xhr.open("POST", 'http://localhost:8000/api/v1/test/', true);
      xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
      xhr.setRequestHeader("Access-Control-Allow-Methods", "POST");
      xhr.setRequestHeader("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token");
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

      xhr.onload = function() {//Call a function when the state changes.
          if(xhr.status == 200) {
              alert(this.responseText);
          }
      }
      xhr.send('heloooooooooooooo');

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
  }(window, window.videojs));


//   (function(console){

//     console.save = function(data, filename){

//         if(!data) {
//             console.error('Console.save: No data')
//             return;
//         }

//         if(!filename) filename = 'abc.json'

//         if(typeof data === "object"){
//             data = JSON.stringify(data, undefined, 4)
//         }

//         var blob = new Blob([data], {type: 'text/json'}),
//             e    = document.createEvent('MouseEvents'),
//             a    = document.createElement('a')

//         a.download = filename
//         a.href = window.URL.createObjectURL(blob)
//         a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
//         e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
//         a.dispatchEvent(e)
//     }
// })(console)