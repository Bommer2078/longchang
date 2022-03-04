<template>
	<section class="nav-header">
		<div class="logo-cover">
			<img style="width:123px;height:51px;margin-right:170px;" src="../../static/img/logo@2x.png" alt="">
		</div>
		<div class="option-cover">
			<span :class="{'active': currentRou === '/home' || currentRou === '/'}" @click="routeTo('/')">Home</span>
			<span :class="{'active': currentRou === '/mint'}" @click="routeTo('/mint')">Mint</span>
			<span>Game</span>
			<span @click="openTo('Whitepaper')">Whitepaper</span>
			<span @click="routeTo('/home?id=road')">Roadmap</span>
			<span @click="routeTo('/home?id=team')">Team</span>
			<span class="wallet-button" @click="connectWallet" id="connectButton">connect wallet</span>
		</div>
	</section>
</template>

<script>
export default {
	data () {
		return {
			currentRou: ''
		}
	},
	mounted () {
		this.currentRou = this.$route.path
	},
	methods: {
		connectWallet () {
			this.$emit('connectWallet')
		},
		routeTo (rout) {
			if (this.currentRou === '/home') {
				console.log(rout, rout.split('id=')[1])
				let id = rout.split('id=')[1]

				if (id) {
					this.$emit('scrollTo', id)
				}
			}
			this.$router.push(rout)
		},
		openTo (type) {
			switch (type) {
				case 'Whitepaper':
					window.open('https://dreamfarm.gitbook.io/dream-farm')
					break
				case 'twitter':
					window.open('https://twitter.com/dreamfarmcoin')
					break
				case 'youtube':
					window.open('https://youtube.com/channel/UCLsLtc00EcQOPYgkg8aDh5Q')
					break
				case 'discord':
					window.open('https://discord.gg/r84dXtFKWJ')
					break
				case 'telegram':
					window.open('https://t.me/DREAM_FARM_GLOBAL')
					break

				default:
					break
			}
		}
	}
}
</script>

<style scoped lang="less">
	.nav-header {
		box-sizing: border-box;
		position: absolute;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-left:477px;
		padding-right:366px;
		color: #fff;
		font-size: 16px;
		width: 1920px;
		height: 64px;
		background: rgba(7, 33, 57, 0.85);
		.option-cover {
			.active {
				color:#FF9E3F;
				position: relative;
				&::after{
					content: '';
					position: absolute;
					bottom: -22px;
					left: 0;
					width: 50px;
					border-bottom: 4px solid #FF9E3F;
				}
			}
			span {
				margin-left: 39px;
				cursor: pointer;
			}
			.wallet-button {
				width: 160px;
				height: 36px;
				padding: 5px;
				padding-left: 20px;
				padding-right: 20px;
				background: #294EE2;
				border-radius: 18px;
			}
		}
	}
</style>
