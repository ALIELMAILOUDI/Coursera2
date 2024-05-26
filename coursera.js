(function(window) {
    var helloSpeaker = {};
    var speakWord = "Hello";
  
    helloSpeaker.speak = function(name) {
      console.log(speakWord + " " + name);
    }
  
    window.helloSpeaker = helloSpeaker;
  })(window);
  (function(window) {
    var goodbyeSpeaker = {};
    var speakWord = "Goodbye";
  
    goodbyeSpeaker.speak = function(name) {
      console.log(speakWord + " " + name);
    }
  
    window.goodbyeSpeaker = goodbyeSpeaker;
  })(window);
    