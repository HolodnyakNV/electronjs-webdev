<template>
  <div>

    <div class="menu">

      <div
        class="video"
      >
        <div
          class="content"
          ref="video"
          v-if="is_shown"
        >
          <VideoList
            ref="videolist"
            @overload='$refs.sidebar.disable_checks()'
            @overload-back='$refs.sidebar.return_checks()'
            :_width='width'
            :_height='height'
          />
        </div>

        <div class="opacity"></div>
      </div>


      <div class="btn-menu">

      </div>

      <div class="sidebar">
        <SideBar
          ref="sidebar"
          @changed='send_event($event)'
        />
      </div>

    </div>
  </div>
</template>

<script>
import ButtonCommon from '@/components/ButtonCommon'
import SideBar from '@/components/SideBar'
import VideoList from '@/components/VideoList'

export default {
  layout: 'second_layer',
  name: 'manual-two',
  components: {
    ButtonCommon,
    SideBar,
    VideoList
  },
  data: () => ({
    width: 0,
    height: 0,
    is_shown: true
  }),

  mounted() {
    let t = this;
    t.calc_size();
    window.addEventListener('onresize', function(event) {
      t.calc_size();
    });
    window.addEventListener('back', function(event) {
      t.$router.push('/second');
    });
    window.addEventListener('hidden', function(event) {
      t.is_shown = false;
    });
  },

  methods: {
    calc_size() {
      if (this.$refs.video) {
        this.width =  this.$refs.video.clientWidth;
        this.height = this.$refs.video.clientHeight;
      }
    },
    send_event(e) {
      this.$refs.videolist.handle_checked(e);
    },

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
  .btn {
    width: 175rem;
  }
  .btn-menu {
    position: absolute;
    width: 100%;
    height: 65rem;
    min-width: 1000rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1rem solid var(--element-color);
  }
  .video {
    position: absolute;
    width: 100%;
    min-width: 100%;
  }
  .content {
    position: absolute;
    top: 65rem;
    left: 202rem;
    width: calc(100vw - 202rem);
    min-width: calc(100% - 202rem);
    height: calc(100vh - (65rem + 30rem));
  }
  .spacer {
    width: 1100rem;
  }

</style>
