<template>
	<header class="header">
		<div class="header__inner container">
			<a class="header__logo" href='/'>
				<img class='header__logo-image' src="/images/logo.svg" alt="логотип" width="46" height="46">
			</a>
			<div class="user-profile" v-if='!auth'>
				<button class="user-profile__button-login" @click='changeShow'>Войти</button>
				<Modal v-show='showModal' @close="showModal = false" />
			</div>
			<div class="user-profile" v-if='auth'>
				<button class="user-profile__button-user">{{ login }}</button>
				<button class="user-profile__button-user-logout" @click='logout'>Выйти</button>
			</div>
		</div>
	</header>
</template>

<script lang='ts'>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
	name: 'Header',
	setup() {
		const store = useStore()
		const auth = computed(() => store.state.authenticated)
		const login = computed(() => store.state.login)

		const logout = async () => {
			try {
				const response = await fetch('http://localhost:8000/api/logout', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
				})
				if (!response.ok) {
					throw new Error('Ошибка при выходе')
				}
			} catch (error) {
				console.error('Logout error:', error)
			}
		}

		return {
			auth,
			login,
			logout
		}
	},
	data() {
		return {
			showModal: false
		}
	},
	methods: {
		changeShow() {
			this.showModal = !this.showModal
		}
	}
}
</script>

<style lang="">
</style>