<script>
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
	name: 'ToggleQuickPickOption',
	props: {
		selected: {
			type: Boolean,
			default: false
		},
		checked: {
			type: Boolean,
			default: false
		},
		bold: {
			type: Boolean,
			default: false
		}
	},
	emits: ['toggle'],
	setup(props, { emit }) {
		const checkboxRef = ref(null);

		// Keep local state in sync with prop
		watch(() => props.checked, (newValue) => {
			if (checkboxRef.value) {
				checkboxRef.value.checked = newValue;
			}
		});

		const toggleCheckbox = () => {
			emit('toggle', !props.checked);
		};

		return {
			checkboxRef,
			toggleCheckbox
		};
	}
});
</script>

<template>
	<section class="quick-pick-option" :class="{ 'selected': selected }" @click="toggleCheckbox">
		<vscode-checkbox ref="checkboxRef" :checked="checked" @click.stop></vscode-checkbox>
		<div class="quick-pick-option-content">
			<div class="option-label" :class="{ 'bold': bold }">
				<slot></slot>
			</div>
			<div class="option-description">
				<slot name="description"></slot>
			</div>
		</div>
		<div class="quick-pick-option-metadata">
			<slot name="metadata"></slot>
		</div>
	</section>
</template>

<style>
.quick-pick-option {
	display: flex;
	align-items: center;
	gap: 8px;
	padding: 2px 6px;
	border-radius: 4px;
	background-color: var(--vscode-menu-background);
	color: var(--vscode-menu-foreground);
	border: 1px solid transparent;
	cursor: pointer;
}

.quick-pick-option:hover {
	/* This background color variable should not be changed */
	background-color: var(--vscode-menu-separatorBackground);
}

.quick-pick-option.selected {
	background-color: var(--vscode-inputOption-activeBackground);
}

.quick-pick-option-content {
	flex-grow: 1;
	display: flex;
	flex-direction: row;
	align-items: baseline;
	gap: 8px;
	overflow: hidden;
	text-overflow: ellipsis;
	user-select: none;
}

.option-label {
	font-weight: 500;
	width: max-content;
	white-space: nowrap;
}

.option-label.bold {
	font-weight: 500;
}

.option-description {
	font-size: 0.9em;
	color: var(--vscode-descriptionForeground, #ccccccb3);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.quick-pick-option-metadata {
	/* VS Code primary blue */
	color: var(--vscode-focusBorder);
	font-weight: 500;
}
</style>