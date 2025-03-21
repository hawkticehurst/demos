<script setup lang='ts'>
// Source: https://github.com/selemondev/shiki-code-block
import type { BuiltinTheme, BundledLanguage, ShikiTransformer } from 'shiki'
import { convertCodeToHtml } from '../utils/codeToHtml.ts';
import { ref, watch } from 'vue'

const props = defineProps<{
  code: string
  lang: BundledLanguage
  theme: {
    light: BuiltinTheme
    dark?: BuiltinTheme
  }
  transformers?: ShikiTransformer[]
}>()

const codeToHtml = ref('')
watch(props, async (val: { code: string, lang: BundledLanguage, theme: { light: BuiltinTheme, dark?: BuiltinTheme }, transformers?: ShikiTransformer[] }) => {
  if (val) {
    return codeToHtml.value = await convertCodeToHtml(val.code?.trim(), val.lang, { light: val.theme.light, dark: val.theme.dark || 'vitesse-dark' }, val.transformers || [])
  }
}, {
  immediate: true,
})
</script>

<template>
  <div
    class="shiki--code--block" role="region"
    aria-labelledby="codeLabel"
    tabindex="0"
    aria-live="polite"
    aria-roledescription="code block"
    lang="en" v-html="codeToHtml"
  ></div>
</template>

<style>
/* Dark Mode */
html.dark-theme .shiki,
html.dark-theme .shiki span {
  color: var(--shiki-dark) !important;
  background-color: var(--shiki-dark-bg) !important;
  font-style: var(--shiki-dark-font-style) !important;
  font-weight: var(--shiki-dark-font-weight) !important;
  text-decoration: var(--shiki-dark-text-decoration) !important;
}

html.light-theme .shiki,
html.light-theme .shiki span {
  color: var(--shiki-light) !important;
  background-color: var(--shiki-light-bg) !important;
  font-style: var(--shiki-light-font-style) !important;
  font-weight: var(--shiki-light-font-weight) !important;
  text-decoration: var(--shiki-light-text-decoration) !important;
}

.shiki--code--block {
  width: 100%;
	background-color: var(--vscode-interactive-result-editor-background-color);
  border: 1px solid var(--vscode-input-border, transparent);
	border-radius: 4px;
}

pre {
  z-index: 1;
  padding: 4px;
	margin: 0;
  border-radius: 10px;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  position: relative;
}

code {
  display: block;
  line-height: 1.7;
  font-size: 15px;
	font-weight: 600;
}
</style>