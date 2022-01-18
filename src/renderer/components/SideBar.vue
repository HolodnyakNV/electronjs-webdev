<template>
<div>
  <div class="list">

    <div class="block">
      Youtube
      <div
        class="source"
        :class="{ disabled : el.disable }"
        v-for="el in list" :key="el.id"
        @click.self.stop='turn_check(el)'
      >
        <label
          class="label"
          :for="el._id"
          :class="{ disabled : el.disable }"
        >{{el.ref}}</label>
        <input
          style="cursor: pointer;"
          type="checkbox" :id="el._id"
          v-model="el.check"
          @change='changed(el)'
          :class="{ disabled : el.disable }"
        >
      </div>
    </div>

    <div class="block">
      Локальные файлы
      <div
        class="source"
        :class="{ disabled : el.disable }"
        v-for="el in locals" :key="el.id"
        @click.self='turn_check(el)'
      >
        <label
          class="label"
          :for="el._id"
          :class="{ disabled : el.disable }"
        >{{el.ref}}</label>
        <input
          style="cursor: pointer;"
          type="checkbox" :id="el._id"
          v-model="el.check"
          @change='changed(el)'
          :class="{ disabled : el.disable }"
        >
      </div>
    </div>


  </div>
</div>
</template>

<script>
export default {
  data: () => ({
    count: 0,
    locals: [],
    list: [
      {
        _id: 'check1',
        check: false,
        disable: false,
        ref: 'embed/ET8eQoi4WrY',
      },
      {
        _id: 'check2',
        check: false,
        disable: false,
        ref: 'embed/wKpj7YGRYmc'
      },
      {
        _id: 'check3',
        check: false,
        disable: false,
        ref: 'embed/bUbEb0jDxEI'
      },
      {
        _id: 'check4',
        check: false,
        disable: false,
        ref: 'embed/5IObVPcG6l8'
      },

      {
        _id: 'check5',
        check: false,
        disable: false,
        ref: 'embed/ET8eQoi4WrY'
      },
      {
        _id: 'check6',
        check: false,
        disable: false,
        ref: 'embed/wKpj7YGRYmc'
      },
      {
        _id: 'check7',
        check: false,
        disable: false,
        ref: 'embed/bUbEb0jDxEI'
      },
      {
        _id: 'check8',
        check: false,
        disable: false,
        ref: 'embed/5IObVPcG6l8'
      },

      {
        _id: 'check9',
        check: false,
        disable: false,
        ref: 'embed/ZdzMdStz8CM'
      },
      {
        _id: 'check10',
        check: false,
        disable: false,
        ref: 'embed/Vpvif04v1Zw'
      },
      {
        _id: 'check11',
        check: false,
        disable: false,
        ref: 'embed/fYWIt4Xe_J0'
      },
      {
        _id: 'check12',
        check: false,
        disable: false,
        ref: 'embed/z6uupwpcgU0'
      },

      {
        _id: 'check13',
        check: false,
        disable: false,
        ref: 'embed/L5og4iapgFg'
      },
      {
        _id: 'check14',
        check: false,
        disable: false,
        ref: 'embed/urO87XQrG0w'
      },
      {
        _id: 'check15',
        check: false,
        disable: false,
        ref: 'embed/PpagCkWW5IM'
      },
      {
        _id: 'check16',
        check: false,
        disable: false,
        ref: 'embed/bboyvAUiCNM'
      },
    ],

  }),

  mounted() {
    this.init_locals();
  },

  methods: {
    init_locals() {
      let arr = [];
      for (let i=1; i<=16;i++) {
        arr.push(
          {
            _id: `_check${i}`,
            ref: `video/${i}.mp4`,
            disable: false,
            check: false
          }
        )
      };
      this.locals = arr.slice();
    },
    turn_check(el) {
      this.$nextTick(() => {
        el.check = !el.check;
        this.changed(el);
      })
    },
    changed(el) {
      this.$emit('changed', el);
      if (el.check == true) {
        this.count++
      } else {
        this.count--
      };

      if (this.count < 16) {

        this.list.forEach(check => {
          check.disable = false;
        });
        this.locals.forEach(check => {
          check.disable = false;
        });

      } else {
        this.list.forEach(check => {
          if (check.check == false) {
            check.disable = true;
          }
        });

        this.locals.forEach(check => {
          if (check.check == false) {
            check.disable = true;
          }
        });
      };
    },

  }
}
</script>

<style scoped>
  *::selection {
    user-select: none;
  }
  .list {
    position: absolute;
    left: 0;
    top: 65rem;
    width: 200rem;
    height: calc(100vh - 96rem);
    background: rgba(193, 179, 211, 0.2);
    border-top: 1rem solid var(--element-color);
    border-right: 1rem solid var(--element-color);
  }
  .block {
    padding-top: 5rem;
    margin: 10rem 0 0 10rem;
    background-color: rgb(233, 224, 241);
    border-radius: 6rem 0 0 6rem;
    text-align: center;
    font-size: large;
  }
  .source {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 160rem;
    height: 29rem;
    cursor: pointer;
    margin-left: 10rem;
  }
  .source:active {
    transform: translateY(2rem);
  }
  .label {
    font-size: 14rem;
    letter-spacing: -0.5rem;
    cursor: pointer;
  }
  .disabled {
    opacity: 0.5;
    cursor: default;
    pointer-events: none;
  }
</style>