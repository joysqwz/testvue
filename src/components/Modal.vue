<template>
	<dialog id="modal" class="user-profile__modal">
		<div v-if='showLogin' class="modal__wrapper modal__wrapper--authorization">
			<Login @toggleForm="toggleForm" />
		</div>
		<div v-if='!showLogin' class="modal__wrapper modal__wrapper--registration">
			<Register @toggleForm="toggleForm" />
		</div>
	</dialog>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'

export default {
	name: 'Modal',
	setup() {
		const message = ref('Вы не вошли в систему')
		const store = useStore()
		onMounted(async () => {
			try {
				const response = await fetch('http://localhost:8000/api/login', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					credentials: 'include'
				})

				const content = await response.json()

				message.value = content.login
				await store.dispatch('setAuth', true)
			}
			catch (e) {
				await store.dispatch('setAuth', false)
			}
		})
		return {
			message
		}
	},
	data() {
		return {
			showLogin: true,
		}
	},
	methods: {
		toggleForm() {
			this.showLogin = !this.showLogin
		}
	},
}
</script>

<style lang="">
</style>