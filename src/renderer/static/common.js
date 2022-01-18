const { ipcRenderer } = require('electron')

function hide(value) {
  window.dispatchEvent(new CustomEvent('hidden'));
}

function youtube(value) {
  window.dispatchEvent(new CustomEvent('youtube', {
    detail: value
  }));
}
function local(value) {
  window.dispatchEvent(new CustomEvent('local', {
    detail: value
  }));
}

function setVideo(youtube, local) {
  window.dispatchEvent(new CustomEvent('set-video', {
    detail: {youtube, local}
  }));
}

function manual() {
  window.dispatchEvent(new CustomEvent('manual'));
}

function back() {
  window.dispatchEvent(new CustomEvent('back'));
}


(function() {
  let throttle = function(type, name, obj) {
      obj = obj || window;
      var running = false;
      var func = function() {
          if (running) { return; }
          running = true;
           requestAnimationFrame(function() {
              obj.dispatchEvent(new CustomEvent('onresize'));
              running = false;
          });
      };
      obj.addEventListener(type, func);
  };

  /* init - you can init any event */
  throttle("resize", "optimizedResize");
})();
// handle event
// window.addEventListener("optimizedResize", function() {
//   console.log("Resource conscious resize callback!");
// });

(function() {
  let throttle = function(type, name, obj) {
      obj = obj || window;
      var running = false;
      var func = function() {
          if (running) { return; }
          running = true;
           requestAnimationFrame(function() {
              obj.dispatchEvent(new CustomEvent('onresize2'));
              running = false;
          });
      };
      obj.addEventListener(type, func);
  };

  /* init - you can init any event */
  throttle("resize", "optimizedResize");
})();






