<template>
	<section class="chat-message">
		<slot></slot>
	</section>
</template>

<style>
	.chat-message {
		display: flex;
		flex-direction: column;
		gap: 8px;
		width: 575px;
	}
</style>