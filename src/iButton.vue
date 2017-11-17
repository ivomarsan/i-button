<template>
  <a :href="href" :disabled="disabled" :target="target" :rel="newRel" @click="$emit('click', $event)" v-if="href">
    <!-- <md-ink-ripple :md-disabled="disabled"></md-ink-ripple> -->
    <slot></slot>
  </a>

  <button :type="type" :disabled="disabled" @click="$emit('click', $event)" v-else>
    <!-- <md-ink-ripple :md-disabled="disabled"></md-ink-ripple> -->
    <slot></slot>
  </button>
</template>

<style lang="scss" src="./iButton.scss" scoped></style>

<script>
export default {
  name: 'md-button',
  props: {
    href: String,
    target: String,
    rel: String,
    type: {
      type: String,
      default: 'button',
    },
    disabled: Boolean,
  },
  computed: {
    newRel() {
      if (this.target === '_blank') {
        return this.rel || 'noopener';
      }
      return this.rel;
    },
  },
};
</script>