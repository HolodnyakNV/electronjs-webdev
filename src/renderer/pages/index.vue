<template>
  <div>

    <div class="menu">

      <div
        class="video"
      >
        <div
          class="content"
          ref="video"
        >
          <Youtube
          :_width='width'
          :_height='height'
            v-if="youtubes_shown"
          />

          <LocalVideo
            :_width='width'
            :_height='height'
            v-if="local_shown"
          />
        </div>

        <div class="opacity"></div>
      </div>


      <div class="btn-menu">
        
        <div
          class="btn"
          @click='openSecondWindow'
        >
          <ButtonCommon title="Открыть/закрыть окно"/>
        </div>

        <div
          class="btn"
          @click='show_youtubes'
        >
          <ButtonCommon title="Показать видео с youtube"/>
        </div>
        
        <div
          class="btn"
          @click='show_local'
        >
          <ButtonCommon title="Показать из файла"/>
        </div>

        <div
          class="btn"
          @click='manual_choise'
        >
          <ButtonCommon title="Ручной выбор видео"/>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import appHeader from '@/components/header'
import ButtonCommon from '@/components/ButtonCommon'
import Youtube from '@/components/Youtube'
import LocalVideo from '@/components/LocalVideo'
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'IndexPage',
  layout: 'main_layer',
  components: {
    appHeader,
    ButtonCommon,
    Youtube,
    LocalVideo
  },
  data: () => ({
    youtubes_shown: false,
    local_shown: false,
    width: 0,
    height: 0,
  }),

  computed: {
    ...mapGetters(['GET_is_created'])
  },

  mounted() {
    let t = this;
    t.calc_size();
    window.addEventListener('onresize', function(event) {
      t.calc_size();
    });
  },

  methods: {
    ...mapMutations(['SET_is_created']),
    calc_size() {
      if (this.$refs.video) {
        this.width =  this.$refs.video.clientWidth/4;
        this.height = this.$refs.video.clientHeight/4;
      }
    },
    async openSecondWindow() {
      if (this.GET_is_created == false) {
        this.SET_is_created(true)
        ipcRenderer.send('new-window');
      } else {
        let opened = await ipcRenderer.invoke('get-opened');
        if (opened == false) {
          ipcRenderer.send('show');
        } else {
          ipcRenderer.send('hid');
        };
      }
    },
    show_youtubes() {
      if (!this.youtubes_shown) {
        ipcRenderer.send('youtube');
        this.youtubes_shown = true;
        this.local_shown = false;
      } else {
        ipcRenderer.send('youtube');
        this.youtubes_shown = false;
        this.local_shown = false;
      }
    },
    show_local() {
      if (!this.local_shown) {
        ipcRenderer.send('local');
        this.local_shown = true;
        this.youtubes_shown = false;
      } else {
        ipcRenderer.send('local');
        this.local_shown = false;
        this.youtubes_shown = false;
      }
    },
    manual_choise() {
      this.$router.push('/manual-one')
      ipcRenderer.send('manual');
    }
  }
}
</script>

<style scoped>
  .menu {
    position: relative;
    display: flex;
    justify-content: center;
    min-width: 1000rem;
  }
  .opacity {
    position: absolute;
    width: 100%;
    height: 65rem;
    background: rgba(193, 179, 211, 0.2);
    backdrop-filter: blur(4rem);
  }
  /* .btn {
    width: 200rem;
  } */
  .btn-menu {
    position: absolute;
    width: 100%;
    height: 65rem;
    min-width: 1000rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .video {
    position: absolute;
    width: 100%;
    min-width: 100%;
  }
  .content {
    position: absolute;
    top: 65rem;
    width: 100vw;
    height: calc(100vh - (65rem + 37rem));
    min-width: 100%;
    border-top: 1rem solid var(--element-color);
  }
</style>
