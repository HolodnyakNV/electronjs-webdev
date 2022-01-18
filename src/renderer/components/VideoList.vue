<template>
<div
  class="videolist"
  style="
    height: 100%;
    width: 100%;
  "
>
  <div
    style="
      height: 100%;
      width: 100%;
    "
    ref="video"
  >
    <div
      v-for="row of 5" :key="row.id"
      style="
        display: flex;
        justify-content: flex-start;
        margin-bottom: -3rem;
      "
    >
      <div
        v-for="video of videos.slice((row-1)*4,(row-1)*4+4)" :key="video.id"
      >
        <LocalOrYoutube
          :_width='width'
          :_height='height'
          :local='video.local'
          :_ref='video.ref'
          :length='_length'
        />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import LocalOrYoutube from '@/components/LocalOrYoutube'

export default {
  name: 'VideoList',
  components: {
    LocalOrYoutube
  },
  props: {
    _width: Number,
    _height: Number,
  },

  data: () => ({
    init_width: 0,
    init_height: 0,
    width: 0,
    height: 0,
    videos: []
  }),

  mounted() {
    this.init_data();
  },

  computed: {
    _length: function() {
      return this.videos.length;
    }
  },

  watch: {
    _width: function() {
      this.init_data();
      this.change_size();
    },
    _height: function() {
      this.init_data();
      this.change_size();
    },
    _length: function() {
      this.change_size();
    }
  },

  methods: {
    change_size() {
      this.$nextTick(() => {

        if (this._length <= 4) {
          if (this._length == 0) {
            this.width = this.init_width/1;
            this.height = this.init_height/1;
          } else {
            this.width = this.init_width/this._length;
            this.height = this.init_height/this._length;
          }
        } else {
          this.width = this.init_width/4;
          this.height = this.init_height/4;
        };
      });
    },
    init_data() {
      this.init_width = this._width;
      this.init_height = this._height;
    },
    handle_checked(video) {
      if (video._id.charAt() == '_') {
        video.local = true;
      } else {
        video.local = false;
      };

      if (video.check == true) {
        this.$nextTick(() => {
          this.videos.push(video);
        });
      } else {
        let i = this.videos.indexOf(video);
        this.$nextTick(() => {
          this.videos.splice(i, 1);
        })
      }
    },
  }

}
</script>