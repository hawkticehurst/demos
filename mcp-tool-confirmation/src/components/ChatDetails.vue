<script setup lang='ts'>
import { defineProps, ref, computed } from 'vue';

const props = defineProps({
	id: {
		type: String,
		default: 'tool-confirmation'
	},
	toggleable: {
		type: Boolean,
		default: true
	}
});

const isExpanded = ref(false);
const toggleExpanded = () => {
	if (props.toggleable) {
		isExpanded.value = !isExpanded.value;
	}
};

const showContent = computed(() => props.toggleable ? isExpanded.value : false);

// Animation handlers
const onEnter = (el: Element, done: () => void) => {
	const element = el as HTMLElement;
	element.style.height = 'auto';
	const height = element.offsetHeight + 'px';
	element.style.height = '0px';
	// Force browser to acknowledge the change
	void element.offsetHeight;
	element.style.height = height;
	element.addEventListener('transitionend', done, { once: true });
};

const onLeave = (el: Element, done: () => void) => {
	const element = el as HTMLElement;
	element.style.height = element.offsetHeight + 'px';
	// Force browser to acknowledge the change
	void element.offsetHeight;
	element.style.height = '0px';
	element.addEventListener('transitionend', done, { once: true });
};
</script>

<template>
	<section class="tool-executed" :class="{ 'non-toggleable': !toggleable }" :id="id">
		<p class="tool-executed-header" @click="toggleExpanded" :class="{ 'toggleable': toggleable }">
			<slot></slot>
			<template v-if="toggleable">
				<vscode-icon name="chevron-down" :style="{ display: isExpanded ? 'block' : 'none' }"></vscode-icon>
				<vscode-icon name="chevron-right" :style="{ display: !isExpanded ? 'block' : 'none' }"></vscode-icon>
			</template>
		</p>
		<transition name="toggle-content" @enter="onEnter" @leave="onLeave">
			<div class="tool-executed-content" v-show="showContent">
				<slot name="content"></slot>
			</div>
		</transition>
		<template v-if="$slots.footer">
			<div class="tool-executed-footer">
				<slot name="footer"></slot>
			</div>
		</template>
	</section>
</template>

<style>
.tool-executed {
	display: flex;
	flex-direction: column;
	background-color: var(--vscode-menu-background);
	padding: 4px;
	border-radius: 8px;
	border: 1px solid var(--vscode-menu-border);
	width: 575px;
	outline: none;
	display: none;
}

.tool-executed.non-toggleable {
	background-color: transparent;
	border: none;
	padding: 0;
}

.tool-executed-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-weight: 500;
	padding: 4px;
	border-radius: 4px;
}

.tool-executed-header.toggleable {
	cursor: pointer;
}

.tool-executed-header:has(:not(vscode-icon)) {
	padding-left: 8px;
}

.tool-executed-header.toggleable:hover {
	background-color: var(--vscode-list-hoverBackground);
}

.tool-executed-content {
	display: flex;
	flex-direction: column;
	gap: 8px;
	padding: 8px;
	overflow: hidden;
}

.tool-information {
	display: flex;
	flex-direction: column;
	gap: 8px;
	border-top: solid 1px var(--vscode-input-border);
	padding-top: 16px;
	margin-top: 24px;
}

.tool-executed-footer {
	display: flex;
	gap: 8px;
	padding: 8px;
}

/* Animation styles */
.toggle-content-enter-active,
.toggle-content-leave-active {
	transition: height 0.2s ease-in-out;
	overflow: hidden;
}

.toggle-content-enter-from,
.toggle-content-leave-to {
	height: 0;
}
</style>