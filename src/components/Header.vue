<template>
	<header class="header">
		<div class="header__inner container">
			<a class="header__logo" href='/'>
				<img class='header__logo-image' src="/images/logo.svg" alt="логотип" width="46" height="46">
			</a>
			<div class="user-profile">
				<button class="user-profile__button-login" id="openBtn" @click='changeShow'></button>
				<Modal v-show='showModal'></Modal>
			</div>
		</div>
	</header>
</template>
<script>
import Modal from './Modal.vue'

export default {
	data() {
		return {
			showModal: false
		}
	},
	components: { Modal },
	methods: {
		changeShow() {
			this.showModal = !this.showModal
		}
	}
}
</script>
<style lang="">

</style>