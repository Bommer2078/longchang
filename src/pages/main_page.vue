<template>
	<div class="main-page" id="zoomDom">
		<section class="nav-header">
			<div class="logo-cover">
				<img style="width:123px;height:51px;margin-right:170px;" src="../../static/img/logo@2x.png" alt="">
			</div>
			<div class="option-cover">
				<span class="active" @click="routeTo('/')">Home</span>
				<span @click="routeTo('/mint')">Mint</span>
				<span>Game</span>
				<span @click="openTo('Whitepaper')">Whitepaper</span>
				<span @click="scrollTo('road')">Roadmap</span>
				<span @click="scrollTo('team')">Team</span>
				<span class="wallet-button" @click="connectWallet" id="connectButton">connect wallet</span>
			</div>
		</section>
		<section class="section2">
			<div class="left-part">
				<img style="width:468px;height: 189px;margin-bottom:64px;" src="../../static/img/logo@2x.png" alt="">
				<img src="../../static/img/wis.png" alt="" style="margin-bottom: 48px;width: 580px;">
				<div class="text-part">Dream Farm DRF is a money making game of metauniverse. Players need to manage your farm, plant plants and pond fish through the land to get compensation. Of course, players can also buy and sell your land and pond through the exchange. Our goal is to make everyone benefit financially through the game, create a metauniverse of dream farm around the game, and join us. We believe you will like this game.</div>
				<div class="button-group">
					<div class="button">
						<span>BUY DRF</span>
						<img src="../../static/img/10.png" alt="">
					</div>
					<div class="button">
						<span>Presale</span>
						<img src="../../static/img/13.png" alt="">
					</div>
				</div>
			</div>
			<div class="right-part">
				<img style="width:702px;height:788px;" src="../../static/img/21.png" alt="">
				<img class="cloud" src="../../static/img/15.png" alt="">
			</div>
		</section>
		<section class="section3">
			<img class="title" src="../../static/img/5.png" alt="">
			<div class="content">By minting/buying any of our initial minted NFTs, you will be granted access to the game for as long as you own it。</div>
			<section class="bg">
				<div class="left-part">
					<img style="width:550px;height:610px;" src="../../static/img/21.png" alt="">
					<img class="lcloud" style="width:128px;height:92px;" src="../../static/img/14.png" alt="">
				</div>
				<div class="right-part">
					<img style="width:550px;height:610px;" src="../../static/img/22.png" alt="">
					<img class="rcloud" style="width:177px;height:142px;" src="../../static/img/23.png" alt="">
				</div>
			</section>
		</section>
		<section class="section4">
			<div class="text-part">By holding Land NFT and Pond NFT, players will be able to receive passive income rewards from each NFT transaction. Its working principle is once there a sale occurs, it will allocate 5% to each owner of our NFT at the time of purchase, 2% to the original minters, and 3% to the team (dev, marketing).  The 5%put into the BNB reward pool is used to set off BNB for the events. Depending on your holdings of NFTs, holding 4 Land NFTs and 4 Pond NFTs means you get the maximum profit from each transaction.</div>
			<img class="video-img" src="../../static/img/video.png" alt="">
			<img class="play-img" src="../../static/img/7.png" alt="">
			<img class="title" src="../../static/img/2.png" alt="">
		</section>
		<section class="section5">
			<div class="img-group">
				<div class="nft-box">
					<img src="../../static/img/1.png" alt="">
				</div>
				<div class="nft-box">
					<img src="../../static/img/11.png" alt="">
				</div>
				<div class="nft-box">
					<img src="../../static/img/9.png" alt="">
				</div>
				<div class="nft-box">
					<img src="../../static/img/12.png" alt="">
				</div>
				<div class="nft-box">
					<img src="../../static/img/8.png" alt="">
				</div>
			</div>
			<img class="title" id="road" src="../../static/img/6.png" alt="">
		</section>
		<section class="section6">
			<div class="info-group">
				<div class="info-box-cover">
					<div class="info-title">Phase 1</div>
					<div class="info-box">
						<span class="session">2021Q4</span>
						<div class="item-cover">
							<img src="../../static/img/24.png" class="check-img" v-if="true">
							<div class="circle" v-else></div>
							<span>Start game development</span>
						</div>
						<div class="item-cover">
							<img src="../../static/img/24.png" class="check-img" v-if="true">
							<div class="circle" v-else></div>
							<span>Website Launch</span>
						</div>
						<div class="item-cover">
							<img src="../../static/img/24.png" class="check-img" v-if="true">
							<div class="circle" v-else></div>
							<span>Socials Launch</span>
						</div>
						<div class="item-cover">
							<img src="../../static/img/24.png" class="check-img" v-if="true">
							<div class="circle" v-else></div>
							<span>Smart contract development</span>
						</div>
						<div class="item-cover">
							<img src="../../static/img/24.png" class="check-img" v-if="true">
							<div class="circle" v-else></div>
							<span>Audit by interfi</span>
						</div>
						<div class="item-cover">
							<img src="../../static/img/24.png" class="check-img" v-if="true">
							<div class="circle" v-else></div>
							<span>Dream Farm Video #1 release</span>
						</div>
						<div class="item-cover">
							<img src="../../static/img/24.png" class="check-img" v-if="true">
							<div class="circle" v-else></div>
							<span>Land and Pond NFT Minting</span>
						</div>
						<div class="item-cover">
							<span>(1 Phase)</span>
						</div>
					</div>
				</div>
				<div class="info-box-cover" style="top: 420px;left:728px;">
					<div class="info-title">Phase 2</div>
					<div class="info-box" style="padding-bottom:10px;">
						<span class="session">2022Q1</span>
						<div class="item-cover">
							<img src="../../static/img/24.png" class="check-img" v-if="true">
							<div class="circle" v-else></div>
							<span>Dream Farm Video #2 release</span>
						</div>
						<div class="item-cover" style="display:block;">
							<img src="../../static/img/24.png" class="check-img" v-if="true">
							<div class="circle" v-else></div>
							<span>Active Marketing Launch</span>
							<div class="icon-group">
								<div class="icon-item" @click="openTo('twitter')">
									<img src="../../static/img/twitter-circle-fill@2x.png" alt="">
									<span>twitter</span>
								</div>
								<div class="icon-item" @click="openTo('youtube')">
									<img src="../../static/img/YouTube_youtube7@2x.png" alt="">
									<span>YouTube</span>
								</div>
								<div class="icon-item" @click="openTo('discord')">
									<img src="../../static/img/discord@2x.png" alt="">
									<span>discord</span>
								</div>
								<div class="icon-item" @click="openTo('telegram')">
									<img src="../../static/img/telegram@2x.png" alt="">
									<span>telegram</span>
								</div>
							</div>
						</div>
						<div class="item-cover">
							<img src="../../static/img/24.png" class="check-img" v-if="false">
							<div class="circle" v-else></div>
							<span>Presale Whitelist</span>
						</div>
						<div class="item-cover">
							<img src="../../static/img/24.png" class="check-img" v-if="false">
							<div class="circle" v-else></div>
							<span>Private sale</span>
						</div>
						<div class="item-cover">
							<img src="../../static/img/24.png" class="check-img" v-if="false">
							<div class="circle" v-else></div>
							<span>Land and Pond NFT Minting (2 Phase)</span>
						</div>
						<div class="item-cover">
							<img src="../../static/img/24.png" class="check-img" v-if="false">
							<div class="circle" v-else></div>
							<span>Dream Farm Game Video #3 release</span>
						</div>
						<div class="item-cover">
							<img src="../../static/img/24.png" class="check-img" v-if="false">
							<div class="circle" v-else></div>
							<span>PancakeSwap Launch</span>
						</div>
						<div class="item-cover">
							<img src="../../static/img/24.png" class="check-img" v-if="false">
							<div class="circle" v-else></div>
							<span>Land and Pond NFT Minting(3 Phase)</span>
						</div>
						<div class="item-cover">
							<img src="../../static/img/24.png" class="check-img" v-if="false">
							<div class="circle" v-else></div>
							<span>CG and CMC</span>
						</div>
						<div class="item-cover">
							<img src="../../static/img/24.png" class="check-img" v-if="false">
							<div class="circle" v-else></div>
							<span>Land and Pond NFT Minting (4 Phase)</span>
						</div>
						<div class="item-cover">
							<img src="../../static/img/24.png" class="check-img" v-if="false">
							<div class="circle" v-else></div>
							<span>NFT Marketplace</span>
						</div>
						<div class="item-cover">
							<img src="../../static/img/24.png" class="check-img" v-if="false">
							<div class="circle" v-else></div>
							<span>CG and CMC</span>
						</div>
						<div class="item-cover" style="display:block;">
							<img src="../../static/img/24.png" class="check-img" v-if="false">
							<span class="circle" v-else></span>
							<span style="line-height: 30px;">Alpha testing, Alpha testing for private sale investors and testers.</span>
						</div>
					</div>
				</div>
				<div class="info-box-cover" style="top: 1170px;">
					<div class="info-title">Phase 3</div>
					<div class="info-box">
						<span class="session">2022Q2</span>
						<div class="item-cover">
							<img src="../../static/img/24.png" class="check-img" v-if="false">
							<div class="circle" v-else></div>
							<span>Dream Farm Beta release</span>
						</div>
					</div>
				</div>
			</div>
			<img src="../../static/img/fish.png" class="fish">
			<img class="title" id="team" src="../../static/img/times.png" alt="">
		</section>
		<section class="section7">
			<div class="img-box-cover">
				<div style="top:40px;left:-205px;" class="test1">
					<span>DEVELOPMENT</span>
					<span>GILBERT</span>
				</div>
				<div style="top:40px;right:-170px;" class="test2">
					<span>BUSINESS</span>
					<span>ELLY</span>
				</div>
				<div style="bottom:40px;left:-170px;" class="test3">
					<span>Designer</span>
					<span>JEROME</span>
				</div>
				<div style="bottom:40px;right:-170px;" class="test4">
					<span>Leader</span>
					<span>JOSEPH</span>
				</div>
				<img src="../../static/img/20.png" class="img0">
				<img src="../../static/img/16.png" style="top:0;left:-63px;" class="img1">
				<img src="../../static/img/17.png" style="top:0;right:-63px;" class="img2">
				<img src="../../static/img/18.png" style="bottom:0;left:-63px;" class="img3">
				<img src="../../static/img/19.png" style="bottom:0;right:-63px;" class="img4">
			</div>
			<img style="margin-top:176px;width:382px;" src="../../static/img/4.png" alt="">

			<div class="icon-group">
				<div class="icon-box">
					<img src="../../static/img/binance-smart-chain@2x.png" alt="">
					<div class="text">
						<span>binance</span>
						<span>smart chain</span>
					</div>
				</div>
				<div class="icon-box">
					<img src="../../static/img/pancakeswap-cake-logo@2x.png" alt="">
					<div class="text">
						<span>pancakeswap</span>
					</div>
				</div>
				<div class="icon-box">
					<img src="../../static/img/MetaMask@2x.png" alt="">
					<div class="text">
						<span>metamask</span>
					</div>
				</div>
				<div class="icon-box">
					<img src="../../static/img/Chainlink@2x.png" alt="">
					<div class="text">
						<span>chainlink</span>
					</div>
				</div>
				<div class="icon-box">
					<img src="../../static/img/unity@2x.png" alt="">
					<div class="text">
						<span>unity</span>
					</div>
				</div>
			</div>
			<section class="section9">
				<div class="icon-group-cover">
					<img class="logo" src="../../static/img/logo@2x.png" alt="">

					<div class="icon-group-2">
						<div class="icon-item" @click="openTo('twitter')">
							<img style="width:40px;height:40px;marginBottom: 5px;" src="../../static/img/twitter-square-fill@2x.png" alt="">
							<span>twitter</span>
						</div>
						<div class="icon-item" @click="openTo('youtube')">
							<img src="../../static/img/YouTube_youtube7@2x.png" alt="">
							<span>YouTube</span>
						</div>
						<div class="icon-item" @click="openTo('discord')">
							<img src="../../static/img/discord@2x.png" alt="">
							<span>discord</span>
						</div>
						<div class="icon-item" @click="openTo('telegram')">
							<img src="../../static/img/telegram@2x.png" alt="">
							<span>telegram</span>
						</div>
					</div>
				</div>
				<p class="copy-right">Copyright © 2021. All Rights Reserved By Dream Farm.</p>
			</section>
		</section>
	</div>
</template>

<script>
export default {
	data () {
		return {
		}
	},
	mounted () {
		let id = this.$route.query.id

		if (id) {
			this.scrollTo(id)
		}
		let dom = document.getElementById('connectButton')

		dom.innerText = localStorage.getItem('showAdress') || 'connect wallet'

		this.zoomDom()
		this.$initializ()
	},
	methods: {
		routeTo (rout) {
			this.$router.push(rout)
		},
		scrollTo (id) {
			const dom = document.getElementById(id)

			dom.scrollIntoView({
				behavior: 'smooth',
				block   : 'start',
				inline  : 'nearest'
			})
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
		},
		connectWallet () {
		},
		zoomDom () {
			this.devicewidth = document.documentElement.clientWidth
			let zoomDom = document.getElementById('zoomDom')

			if (this.devicewidth > 716) {
				let num = Number(this.devicewidth / 1920).toFixed(2)

				zoomDom.style.zoom = num
			}
		}
	}
}
</script>

<style scoped lang="less">
section {
	box-sizing: border-box;
}
.main-page {
	position: relative;
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
	.section2 {
		display: flex;
		align-items: center;
		padding-left: 374px;
		padding-right: 227px;
		justify-content: space-between;
		width: 1920px;
		height: 1080px;
		background: url(../../static/img/bg/DRFBG_01@2x.png);
		background-size: 1920px 1080px;
		.left-part {
			display: flex;
			align-items: center;
			flex-direction: column;
			.text-part {
				font-size: 18px;
				color: #fff;
				width: 580px;
				text-align: justify;
				margin-bottom: 27px;
			}
			.button-group {
				width: 400px;
				display: flex;
				justify-content: space-around;
			}
			.button {
				width: 160px;
				height: 40px;
				background: linear-gradient(90deg, #06A1FF, #1467DE);
				border-radius: 20px;
				display: flex;
				font-size: 16px;
				color: #fff;
				align-items: center;
				justify-content: center;
				img {
					width: 16px;
					height: 16px;
					margin-left: 5px;
				}
			}
		}
		.right-part {
			position: relative;
			.cloud {
				position: absolute;
				right: -89px;
				top: 40px;
				width:  253px;
				height:  145px;
			}
		}
	}
	.section3 {
		width: 1920px;
		height: 1080px;
		display: flex;
		align-items: center;
		flex-direction: column;
		background: url(../../static/img/bg/DRFBG_02@2x.png);
		background-size: 1920px 1080px;
		.title {
		margin-bottom: 36px;
			width: 471px;
			height: 105px;
		}
		.content {
			color: #fff;
			font-size: 18px;
			width: 470px;
			margin-bottom: 72px;
		}
		.bg {
			background: url(../../static/img/bg/bgriver.png) no-repeat;
			width: 100%;
			height: 682px;
			background-size: 1920px 682px;
			display: flex;
			position: relative;
			align-items: center;
			justify-content: center;
		}
		.left-part{
			margin-right: 84px;
		}
		.left-part,.right-part{position:relative;}
		.rcloud {
			position: absolute;
			top: 14px;right: -85px;
		}
		.lcloud {
			position: absolute;
			top: 33px;left: -34px;
		}
	}
	.section4 {
		position: relative;
		width: 1920px;
		height: 1080px;
		display: flex;
		align-items: center;
		color: #fff;
		flex-direction: column;
		background: url(../../static/img/bg/DRFBG_03@2x.png);
		background-size: 1920px 1080px;
		.text-part {
			text-align: justify;
			position: absolute;
			width: 771px;
			top: -130px;
			line-height: 32px;
			margin-bottom: 100px;
		}
		.video-img {
			border-radius: 36px;
			width: 860px;
			margin-top: 175px;
			height: 489px;
		}
		.play-img {
			position: absolute;
			top: 360px;
			width: 114px;
			height: 114px;
		}
		.title {
			width: 242px;
			height: 43px;
			margin-top: 208px;
		}
	}
	.section5 {
		display: flex;
		align-items: center;
		flex-direction: column;
		position: relative;
		width: 1920px;
		height: 1080px;
		background: url(../../static/img/bg/DRFBG_04@2x.png);
		background-size: 1920px 1080px;
		.img-group {
			position: absolute;
			top: -80px;
			display: flex;
			align-items: center;
			width: 100%;
			justify-content: center;
			.nft-box {
				img {
					width: 292px;
					height: 400px;
				}
			}
		}
		.title {
			width: 334px;
			height: 41px;
			margin-top: 500px;
		}
	}
	.section6 {
		position: relative;
		width: 1920px;
		height: 1080px;
		background: url(../../static/img/bg/DRFBG_05@2x.png);
		background-size: 1920px 1080px;
		padding-left: 377px;
		padding-right: 377px;
		.title {
			bottom: 0;
			width: 242px;
			height: 43px;
			right: 50%;
			transform: translateX(121px);
			position: absolute;
		}
		.info-group {
			position: absolute;
			top: -495px;
		}
		.bg-cover {
			width: 440px;
			height: 691px;
			background: url(../../static/img/info.png) 100% no-repeat !important;
		}
		.info-box-cover {
			position: absolute;
			.info-title {
				font-size: 36px;
				margin-bottom: 21px;
				margin-left: 38px;
				color: #fff;
			}
			.info-box {
				width: 440px;
				background: #072139;
				background: rgba(0,0,0,0.3);
				border-radius: 20px;
				padding: 36px 33px 58px 33px;
				font-size: 20px;
				color: #fff;
				.session {
					font-weight: 500;
					display: block;
					margin-bottom: 20px;
					opacity: 1;
				}
				.item-cover {
					position: relative;
					opacity: 1;
					display: flex;
					align-items: center;
					margin-bottom: 20px;
				}
				.check-img {
					width: 23px;
					height: 23px;
					margin-right: 20px;
				}
				.circle {
					display: inline-block;
					width: 20px;
					height: 20px;
					border-radius: 50%;
					background: #fff;
					margin-right: 20px;
					flex-shrink: 0;
				}
				.icon-group {
					display: flex;
					align-items: center;
					margin-top: 20px;
					.icon-item {
						margin-left: 20px;
						display: flex;
						flex-direction: column;
						align-items: center;
						font-size: 16px;
						img {
							width: 32px;
							height: 32px;
							margin-bottom: 10px;
						}
					}
				}
			}
		}
		.fish {position: absolute;
		width: 260px;
		height: 400px;
		bottom: 269px;
		right: 50%;
		transform: translateX(130px);
		}
	}
	.section7 {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		flex-direction: column;
		position: relative;
		width: 1920px;
		height: 1295px;
		background: url(../../static/img/bg/DRFBG_06@2x.png);
		background-size: 1920px 1295px;
		.img-box-cover {
			position: relative;
			width: 507px;
			height: 507px;
			margin:0 auto;font-family: Microsoft YaHei;
			margin-top: 64px;
font-weight: bold;
color: #FFFFFF;
			.img0 {
				width: 507px;
				height: 507px;
			}
			.img1,.img2,.img3,.img4{
				position: absolute;
				width: 165px;
				height: 165px;
			}
			.test1,.test2,.test3,.test4{
				position: absolute;
				display: flex;
				align-items: center;
				flex-direction: column;
				span {
					margin-top:18px;
				}
			}
		}
		.icon-group {
			margin-top: 40px;
			display: flex;
			align-items: center;
			justify-content: space-around;
			width: 1200px;
			.icon-box {

			display: flex;
			align-items: center;
			flex-direction: column;font-size: 18px;
font-family: Microsoft YaHei;
font-weight: 400;
color: #FFFFFF;
				img {
					width: 100px;
					height: 100px;
				}
				.text {
					display: flex;
			align-items: center;
			flex-direction: column;
				}
			}
		}
	}
	.section9 {
		width: 1000px;
		margin: 0 auto;
		position: absolute;
		bottom:0;
.copy-right {
	font-weight: bold;
color: #FFFFFF;
opacity: 0.6;
text-align: center;
width: 100%;font-size: 20px;
}
				.icon-group-cover {
					display: flex;
					width: 744px;    margin: 0 auto;
					align-items: center;margin-bottom: 40px;
					margin-top: 20px;justify-content: space-between;
				color: #fff;
				.icon-group-2 {
					display: flex;
					flex-direction: row;
					align-items: center;
				}
				.logo {
					width: 234px;
					height: 97px;
				}
					.icon-item {
						margin-left: 20px;
						display: flex;
						flex-direction: column;
						align-items: center;
						font-size: 16px;
						img {
							width: 32px;
							height: 32px;
							margin-bottom: 10px;
						}
					}
				}
	}
}
</style>
