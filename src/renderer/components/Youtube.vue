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
      "
    >
    
    <iframe
      :width="_width" :height="_height"
      v-for="video in _youtubes.slice((row-1)*4, (row-1)*4+4)" :key="video.id"
      :src="video.ref" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      @load='onLoad'
    ></iframe>
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
    i: 0,
    youtubes: [
      {
        i: 0,
        ref: 'https://www.youtube.com/embed/ET8eQoi4WrY'
      },
      {
        i: 1,
        ref: 'https://www.youtube.com/embed/wKpj7YGRYmc'
      },
      {
        i: 2,
        ref: 'https://www.youtube.com/embed/bUbEb0jDxEI'
      },
      {
        i: 3,
        ref: 'https://www.youtube.com/embed/5IObVPcG6l8'
      },

      {
        i: 4,
        ref: 'https://www.youtube.com/embed/ET8eQoi4WrY'
      },
      {
        i: 5,
        ref: 'https://www.youtube.com/embed/wKpj7YGRYmc'
      },
      {
        i: 6,
        ref: 'https://www.youtube.com/embed/bUbEb0jDxEI'
      },
      {
        i: 7,
        ref: 'https://www.youtube.com/embed/5IObVPcG6l8'
      },

      {
        i: 8,
        ref: 'https://www.youtube.com/embed/ZdzMdStz8CM'
      },
      {
        i: 9,
        ref: 'https://www.youtube.com/embed/Vpvif04v1Zw'
      },
      {
        i: 10,
        ref: 'https://www.youtube.com/embed/fYWIt4Xe_J0'
      },
      {
        i: 11,
        ref: 'https://www.youtube.com/embed/z6uupwpcgU0'
      },

      {
        i: 12,
        ref: 'https://www.youtube.com/embed/L5og4iapgFg'
      },
      {
        i: 13,
        ref: 'https://www.youtube.com/embed/urO87XQrG0w'
      },
      {
        i: 14,
        ref: 'https://www.youtube.com/embed/PpagCkWW5IM'
      },
      {
        i: 15,
        ref: 'https://www.youtube.com/embed/bboyvAUiCNM'
      },
    ]

  }),

  computed: {
    _youtubes: function() {
      let iframes = [];

      this.youtubes.forEach(video => {
        iframes.push(
          {
            ref: `${video.ref}?list=PL3Pqqyrnj-9BYLjvrF7THJEe1wcOE6OgL&autoplay=1&controls=0&loop=1`,
            loaded: false,
          }
        )
      })
      return iframes;
    },
    count: function() {
      return this.youtubes.length;
    }
  },

  methods: {
    //когда прогрузился iframe
    onLoad() {
    //   if (this.i < this.count-1) {
    //     this.i++;
    //   } else {
    //     console.log('finished');
    //   }
    //   console.log(this.i);
    }
  }
}
</script>