<template>
  <div>

      <div
        class="content"
        ref="video"
      >
        <Youtube
          :_width='width'
          :_height='height'
          v-if="is_youtube_shown"
        />

        <LocalVideo
          :_width='width'
          :_height='height'
          v-if="is_local_shown"
        />
      </div>

    </div>
  </div>
</template>

<script>
import appHeader from '@/components/header'
import ButtonCommon from '@/components/ButtonCommon'
import Youtube from '@/components/Youtube'
import LocalVideo from '@/components/LocalVideo'

export default {
  layout: 'second_layer',
  name: 'IndexPage',
  components: {
    appHeader,
    ButtonCommon,
    Youtube,
    LocalVideo
  },

  data: () => ({
    is_youtube_shown: false,
    is_local_shown: false,
    width: 0,
    height: 0,
  }),

  mounted() {
    let t = this;
    window.addEventListener('hidden', function(event) {
      t.is_youtube_shown = false;
      t.is_local_shown = false;
    });

    window.addEventListener('set-video', function(event) {
      t.is_youtube_shown = event.detail.youtube;
      t.is_local_shown = event.detail.local;
    });

    window.addEventListener('manual', function(event) {
      t.$router.push('/manual-two')
    });

    window.addEventListener('youtube', function(event) {
      t.$nextTick(() => {
        t.is_youtube_shown = event.detail;
        t.is_local_shown = false;
      });
    });

    window.addEventListener('local', function(event) {
      t.$nextTick(() => {
        t.is_local_shown = event.detail;
        t.is_youtube_shown = false;
      })
    });

    t.calc_size();
    window.addEventListener('onresize', function(event) {
      t.calc_size();
    });
  },

  methods: {
    calc_size() {
      if (this.$refs.video) {
        this.width =  this.$refs.video.clientWidth/4;
        this.height = this.$refs.video.clientHeight/4;
      }
    },
  }

}
</script>

<style scoped>
  .content {
    position: absolute;
    top: 65rem;
    width: 100vw;
    height: calc(100vh - (65rem + 37rem));
    min-width: 100%;
    border-top: 1rem solid black
  }
</style>
