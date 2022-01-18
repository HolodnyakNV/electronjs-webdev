<template>
<div>
  <div class="content"
    :style="{
      width: _width,
      height: _height,
    }"
  >

    <div class="youtube"
      v-if="!local"
    >
      <iframe
        :width="width" :height="height"
        :src="source" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>

    <div class="local"
      v-if="local"
    >
    <video
        :width="width" :height="height"
        controls="controls" autoplay="autoplay" loop="loop"
      >
        <source :src="source" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
      </video>
    </div>

  </div>
</div>
</template>

<script>
export default {
  name: 'LocalOrYoutube',
  props: {
    local: Boolean,
    _ref: String,
    _width: Number,
    _height: Number,
    length: Number
  },
  data: () => ({
    source: '',
    width: 0,
    height: 0,
  }),

  mounted() {
    this.init_data();
    this.init_size();
  },

  watch: {
    _ref: function() {
      if (this._ref) {
        this.init_data();
      }
    },
    _width: function() {
      this.init_size();
    },
    _height: function() {
      this.init_size();
    },
  },

  methods: {
    init_size() {
      this.height = this._height;
      this.width = this._width;
    },
    init_data() {
      if (this._ref.includes('embed')) {
        this.source = `https://www.youtube.com/${this._ref}?list=PL3Pqqyrnj-9BYLjvrF7THJEe1wcOE6OgL&autoplay=1&controls=1&loop=1`
      } else {
        this.source = this._ref
      };
    }
  }

}
</script>