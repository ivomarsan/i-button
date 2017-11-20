<template>
  <a :href="href" :disabled="disabled" :target="target" :rel="newRel" @click="$emit('click', $event)" :style="style" v-if="href">
    <md-ink-ripple :md-disabled="disabled"></md-ink-ripple>
    <slot></slot>
  </a>

  <button :type="type" :disabled="disabled" @click="$emit('click', $event)" :style="style" v-else>
    <md-ink-ripple :md-disabled="disabled"></md-ink-ripple>
    <slot></slot>
  </button>
</template>

<style lang="css" src="../node_modules/i-colors/dist/i-colors.css" scoped></style>

<script>
import mdInkRipple from './mdInkRipple/mdInkRipple.vue';

export default {
  name: 'md-button',
  components: {
    'md-ink-ripple': mdInkRipple,
  },
  props: {
    href: String,
    target: String,
    rel: String,
    type: {
      type: String,
      default: 'button',
    },
    disabled: Boolean,
    isBackground: String,
    isOutline: String,
    isColor: String,
  },
  computed: {
    newRel() {
      if (this.target === '_blank') {
        return this.rel || 'noopener';
      }
      return this.rel;
    },
    style() {
      return {
        'background-color': this.isBackground,
        'border-color': this.isOutline,
        color: this.isColor,
      };
    },
  },
};
</script>