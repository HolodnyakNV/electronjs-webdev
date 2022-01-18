<template>
<div
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
        justify-content: space-between;
        margin-bottom: -3rem;
      "
    >
      <div
        v-for="(video, index) in youtubes.slice((row-1)*4, (row-1)*4+4)" :key="video.id"
      >
        <video
          :width="_width" :height="_height"
          controls="controls" autoplay="autoplay" loop="loop"
          style="
            width: 100%;
            height: auto;
            max-height: 100%;
          "
        >
          <source :src="video.ref" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Youtube',
  props: {
    _width: Number,
    _height: Number,
  },

  data: () => ({
    youtubes: [
      {
        ref: 'video/1.mp4'
      },
      {
        ref: 'video/2.mp4'
      },
      {
        ref: 'video/3.mp4'
      },
      {
        ref: 'video/4.mp4'
      },

      {
        ref: 'video/5.mp4'
      },
      {
        ref: 'video/6.mp4'
      },
      {
        ref: 'video/7.mp4'
      },
      {
        ref: 'video/8.mp4'
      },

      {
        ref: 'video/9.mp4'
      },
      {
        ref: 'video/10.mp4'
      },
      {
        ref: 'video/11.mp4'
      },
      {
        ref: 'video/12.mp4'
      },

      {
        ref: 'video/13.mp4'
      },
      {
        ref: 'video/14.mp4'
      },
      {
        ref: 'video/15.mp4'
      },
      {
        ref: 'video/16.mp4'
      },
    ]
  }),

}
</script>