<template>
<div>
  <div class="button">
    {{title}}
  </div>
</div>
</template>

<script>
export default {
  name: 'ButtonCommon',
  props: {
    title: String
  }
}
</script>

<style scoped>
  .button {
    width: 100%;
    height: 40rem;
    line-height: 40rem;
    text-align: center;
    border-radius: 5rem;
    cursor: pointer;
    padding: 0 10rem;
    background-color: var(--element-color);
    box-shadow: 0rem 2rem 6rem 1rem black;
    font-size: 16rem;
    transition: 0.1s;
  }
  .button:active {
    transform: translateY(2rem);
    box-shadow: 0rem 2rem 4rem 0.8rem black;
    transition: 0.1s;
  }
  .button::selection {
    user-select: none;
  }
</style>