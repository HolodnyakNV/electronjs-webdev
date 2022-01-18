<template>
  <div style="-webkit-app-region: drag">
    <div class="app">
      <div class="header">
        <div class="sp"></div>
        <div class="icon">V32</div>
        <div class="title">Управление видеоканалами</div>
        <div @click='min' class="min menu-buttons"></div>
        <div @click='max' class="max menu-buttons"></div>
        <div @click='close' class="close menu-buttons"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    e_min: String,
    e_max: String,
    e_close: String,
    all_close: String,
  },

  methods: {
    min() {
      let t = this;
      ipcRenderer.send(t.e_min);
    },
    max() {
      let t = this;
      ipcRenderer.send(t.e_max);
    },
    close() {
      let t = this;
      if (t.all_close) {  //variants - destroy, cls1, cls2
        let e = t.all_close.split(',');
        ipcRenderer.send(e[0]);
        ipcRenderer.send(e[1]);
      } else {
        ipcRenderer.send(t.e_close); 
      }
    }
  }
}
</script>

<style scoped>
  .app {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 30rem;
    line-height: 30rem;
    background-color: var(--element-color);
  }
  .icon {
    min-width: 50rem;
    text-align: center;
  }
  .title {
    min-width: 300rem;
    width: 100%;
    -webkit-app-region: drag;
  }
  .min {
    background-color: white;
    right: 74rem;
  }
  .max {
    background-color: rgba(255, 255, 255, 0.603);
    right: 37rem;
  }
  .close {
    background-color: red;
    right: 0;
  }
  
  .menu-buttons {
    position: absolute;
    cursor: pointer;
    border: 1rem solid black;
    border-radius: 3rem;
    width: 35rem;
    height: 28rem;
    -webkit-app-region: no-drag;
    z-index: 1;
    transition: 0.1s;
  }
  .menu-buttons:active {
    transform: translateY(2rem);
    transition: 0.1s;
  }
</style>
