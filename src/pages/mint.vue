<template>
	<div class="main-page" id="zoomDom">
		<nav-header @connectWallet="connectWallet"></nav-header>
		<section class="section2">
			<img class="title" src="../../static/img/mint/mint.png" alt="">
			<p style="width: 567px;text-align:center;">By minting/buying any of our initial minted NFTs, you will be granted access to the game for as long as you own it。</p>
			<div class="after-part">

				<div class="left-part">
					<img style="width:550px;height:610px;" src="../../static/img/mint/land1.png" alt="">
					<img class="lcloud" style="width:128px;height:92px;" src="../../static/img/14.png" alt="">
				</div>
				<div class="right-part">
					<img style="width:550px;height:610px;" src="../../static/img/mint/land2.png" alt="">
					<img class="rcloud" style="width:177px;height:142px;" src="../../static/img/23.png" alt="">
				</div>
			</div>
		</section>
		<section class="section3">
			<div class="content">Dream Farm $DRF will contain 10,000 Land NFTs and 10,000 Pond NFTs for sale, and once we reach the upper limit, we will plan to open more farms to allow new players to join the game. The land and pond will be split into 4 phases for sale. Each stage contains 2500 NFTs.</div>
			<div class="after-part">
				<div class="left-part">
					<!-- <div class="number-contro">
						<div class="button" @click="count('mint1',-1)">-</div>
						<div class="number">{{mint1}}</div>
						<div class="button" @click="count('mint1',1)">+</div>
					</div> -->
					<div @click="buy('land')" class="buy-botton">MINT 0.15 BNB(≈82$)</div>
				</div>
				<div class="right-part">
					<!-- <div class="number-contro">
						<div class="button" @click="count('mint2',-1)">-</div>
						<div class="number">{{mint2}}</div>
						<div class="button" @click="count('mint2',1)">+</div>
					</div> -->
					<div @click="buy('pond')" class="buy-botton">MINT 0.15 BNB(≈82$)</div>
				</div>
			</div>
			<div class="title2" v-show="mangArr.length > 0 || nftArr.length > 0">
				<!-- <span @click="chageTab(1)" :class="{'active-tab': currentTab === 1}">Blind Box</span> -->
				<span @click="chageTab(2)" :class="{'active-tab': currentTab === 2}">My LANDS/PONDS</span>
			</div>
			<div class="nft" v-if="mangArr.length > 0 && currentTab === 1">
				<div class="ntf-group">
					<div v-for="(item,index) in mangArr" :key="index" style="position:relative;" >
						<img src="../../static/img/mint/mang.png" class="mang"  @click="getInfoAndOpen(item)">
						<div class="token-id">#{{item.type === 'land' ? 'LAND ' : 'POND '}}</div>
					</div>
				</div>
			</div>
			<div class="nft" v-if="nftArr.length > 0 && currentTab === 2">
				<div class="ntf-group">
					<div v-for="(item,index) in nftArr" :key="index" style="position:relative;" class="nft-box-card">
						<img :src="NTFImg(item)" class="mang">
						<div class="nft-token-id  token-id">#{{item.NFTtype === 'land' || item.type === 0 ? 'LAND ' : 'POND '}} {{item.token_id}}</div>
					</div>
				</div>
			</div>
			<section class="bg">
			</section>
		</section>
		<section class="section4"></section>
		<div class="mang-box-open" v-if="openMangBox">
			<img src="../../static/img/mangImg.png" class="mang-img">
			<span class="tip">Make sure to open the FBOX?</span>
			<div class="button-group">
				<div class="button" @click="openMangBox = false">No</div>
				<div class="button blue" @click="confirmOpenMang">Open</div>
			</div>
			<img src="../../static/img/close.png" class="close-box" @click="openMangBox = false">
		</div>
		<div class="mang-box-open" v-if="showNFT">
			<img :src="NTFImg(this.currentOpenMang)" class="mang-img">
			<span class="tip">Congrats！</span>
			<span class="tip">you got #{{this.currentOpenMang.type}} {{this.currentOpenMang.token_id}} NFT.</span>
			<img src="../../static/img/close.png" class="close-box" @click="showNFT = false">
		</div>
		<div class="loading" v-show="loading">
			<img src="../../static/img/loading.gif" alt="">
		</div>
	</div>
</template>

<script>
/* eslint-disable */
import { ethers } from 'ethers'
import myContract from '../libs/myContract'
export default {
	data () {
		return {
			mint1      : 1,
			mint2      : 1,
			signer     : null,
			price      : '0.15',
			nfts       : 0,
			openMangBox: false,
			showNFT    : false,
			currentMang    : null,
			currentOpenMang    : null,
			loading    : false,
			currentTab    : 2
		}
	},
	mixins: [ myContract ],
	mounted () {
		// this.initMoralis()
		this.zoomDom()
	},
	watch:{
		showNFT(newVal) {
			if (!newVal) {
				this.currentOpenMang = null
			}
		},
		openMangBox(newVal) {
			if (!newVal) {
				this.currentMang = null
			}
		},
	},
	methods: {
		chageTab (type) {
			if (this.currentTab === type) return
			this.currentTab = type
		},
		NTFImg(item) {
			let str = ''
			if (item.NFTtype === 'land' || item.type === 0) {
				switch (item.capacity) {
					case 1:
						str = require('../../static/img/nft/land1.png')
						break;
					case 2:
						str = require('../../static/img/nft/land2.png')
						break;
					case 3:
						str = require('../../static/img/nft/land3.png')
						break;
					case 4:
						str = require('../../static/img/nft/land4.png')
						break;
					default:
						break;
				}
			} else {
				switch (item.capacity) {
					case 1:
						str = require('../../static/img/nft/pond1.png')
						break;
					case 2:
						str = require('../../static/img/nft/pond2.png')
						break;
					case 3:
						str = require('../../static/img/nft/pond3.png')
						break;
					case 4:
						str = require('../../static/img/nft/pond4.png')
						break;
					default:
						break;
				}
				console.log('item.capacity',item.capacity)
			}
			return str
		},
		async initMoralis () {
			Moralis.start({
				serverUrl: 'https://itj2k4rlbcfn.usemoralis.com:2053/server',
				appId    : 'M9yIDWSPuez0y2EFftafEDSrAQoQ8Y5s0r5AO0Vm'
			})
		},
		async buy (nft) {
			if (this.loading) return
			if (!this.userWallet) {
				alert('connect your wallet first')
				return
			}
			this.loading = true
			if (nft === 'land') {
				let tx1 = null
				try {
					tx1 = await this.landContrack.buy(this.mint1, 86400, {
						value: ethers.utils.parseEther(`${this.mint1 * 0.15}`)
					})
					console.log('1111111111',tx1)
				} catch (error) {
					this.loading = false
					if (error.data && error.data.data) {
						if (error.data.code === -32000) {
							alert('1insufficient funds for transfer')
						} else {
							alert(error.data.message)
						}
					} else if (error.data) {
						alert(error.data.message)
					} else {
						alert(error)
					}
					return
				}

				let txR1 = await tx1.wait()
				this.loading = false
				console.log('222222222222222',txR1)
				if (txR1 && txR1.events && txR1.events.length > 0) {
				console.log('333333333333333333',txR1)
					let length = txR1.events.length
					let tokenId = txR1.events[length - 1].args.tokenId.toString()
					this.confirmOpenMang(tokenId, nft, txR1.transactionHash)
				}
			}

			if (nft === 'pond') {
				let tx2 = null
				try {
					tx2 = await this.pondContrack.buy(this.mint2, 86400, {
						value: ethers.utils.parseEther(`${this.mint1 * 0.15}`)
					})
				} catch (error) {
					this.loading = false
					if (error.data && error.data.data) {
						if (error.data.code === -32000) {
							alert('1insufficient funds for transfer')
						} else {
							alert(error.data.message)
						}
					} else if (error.data) {
						alert(error.data.message)
					} else {
						alert(error)
					}
					return
				}

				let txR2 = await tx2.wait()
				this.loading = false
				if (txR2 && txR2.events && txR2.events.length > 0) {
					let length = txR2.events.length
					let tokenId = txR2.events[length - 1].args.tokenId.toString()
					this.confirmOpenMang(tokenId, nft, txR2.transactionHash)
				}
			}
		},
		async getInfoAndOpen (item) {
			if (this.showNFT) return
			// const info = await this.land.tokenOnChainMeta(9998)

			// console.log(info)
			this.currentMang = item
			this.openMangBox = true
		},
		async confirmOpenMang (tokenId, nft, transactionHash) {
			if(this.loading) return
			this.loading = true
			let url = `/farm-game/api/open_space`
			let spaceAddr = nft === 'land' ? this.landAddress : this.pondAddress
			let type = nft === 'land' ? 0 : 1
			let params = {
				spaceAddr,
				tokenId: tokenId,
				transactionHash,
				type,
				userAddr: this.userWallet
			}
			this.$http.post(url, params).then((res) => {
				this.currentOpenMang = {
					...res.data.content,
					NFTtype: nft
				}
				console.log('444444444444444444',this.currentOpenMang)
				this.openMangBox = false
				this.showNFT = true
				this.getNTFs()
			})
			.catch(() => {
				alert('Internet error!, try again')
			})
			.finally(() => {
				this.loading = false
			})
		},
		routeTo (rout) {
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
		},
		count (key, value) {
			this[key] = this[key] + value
			this[key] = this[key] < 1 ? 1 : this[key]
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
.ntf-group {
	width: 1920px;
	overflow: auto;
	display: flex;
	justify-content: center;
	.token-id {
		color: #fff;
		position: absolute;
		bottom: 70px;
		left: 70px;
		font-size: 16px;
	}
	.nft-token-id {
		top: 40px;
		left: 40px;
		font-size: 24px;
	}
}
.nft-box-card {
	margin-left: 5px;
	margin-right: 5px;
}
.main-page {
	.loading {
		width: 80px;
		height: 80px;
		position: fixed;
		top: 50%;
		left: 50%;
		img {
			width: 80px;
			height: 80px;
		}
	}
	.mang-box-open {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-491px, -380px);
		width: 982px;
		height: 737px;
		background: rgba(22, 27, 32, 0.8);
		border: 1px solid #3195E4;
		border-radius: 27px;
		display: flex;
		flex-direction: column;
		align-items: center;
		color:#fff;
		z-index: 101;
		.mang-img {
			width: 311px;
			height: 422px;
			margin-top: 48px;
			margin-bottom: 29px;
		}
		.tip {
			font-size: 30px;
			margin-bottom: 63px;
		}
		.button-group {
			width: 594px;
			display: flex;
			justify-content: space-between;
		}
		.button {
			width: 260px;
			height: 55px;
			line-height: 55px;
			text-align: center;
			font-size: 20px;
			background: linear-gradient(90deg, #B6C4CC, #A7A7A7);
			border-radius: 27px;
			cursor: pointer;
		}
		.blue {
			background: linear-gradient(90deg, #06A1FF, #1467DE);
		}
		.close-box {
			position: absolute;
			right: 45px;
			top: 45px;
			width: 29px;
			cursor: pointer;
		}
	}
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
	}
	.section2 {
		display: flex;
		align-items: center;
		flex-direction: column;
		width: 1920px;
		height: 1080px;
		background: url(../../static/img/bg/DRFBG_01@2x.png);
		background-size: 1920px 1080px;
		.title {
			width: 561px;
			height: 110px;
			margin-bottom: 20px;
			margin-top: 199px;
		}
		p {
			color: #fff;
			font-size: 18px;font-weight: bold;
color: #FFFFFF;
line-height: 32px;
		}
		.after-part {

			display: flex;
			position: relative;
			align-items: center;
			justify-content: center;
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
	}
	.section3 {
		width: 1920px;
		height: 1080px;
		display: flex;
		position: relative;
		align-items: center;
		flex-direction: column;
		background: url(../../static/img/bg/DRFBG_02@2x.png);
		background-size: 1920px 1080px;
		.title2 {
			margin-bottom: 46px;
			width: 471px;
			font-size: 28px;
			display: flex;
			justify-content: space-between;
			color: #fff;
			margin-top: 150px;
			span {
				cursor: pointer;
			}
			.active-tab {
				color: #FFA62E;
				margin: 0 auto;
			}
		}
		.after-part {
			display: flex;
			position: relative;
			align-items: center;
			justify-content:space-around;
			color: #fff;
			width: 1200px;
			.number-contro {
				display: flex;
				position: relative;
				align-items: center;
				justify-content: center;
				.button {
					width: 40px;
					height: 32px;
					line-height: 32px;
					background: rgba(20, 27, 33, 0.4);
					border: 1px solid #3195E4;
					border-radius: 4px;
					text-align: center;
					cursor: pointer;
				}
				.number {
					width: 80px;
					height: 32px;
					line-height: 32px;
					text-align: center;
					margin-left: 20px;
					margin-right: 20px;
					background: rgba(20, 27, 33, 0.4);
					border: 1px solid #3195E4;
					border-radius: 4px;
				}
			}
				.buy-botton {
					cursor: pointer;
					width: 220px;
					height: 44px;
					line-height: 44px;
					text-align: center;
					background: linear-gradient(90deg, #FE7730, #FFA62E);
					border-radius: 22px;
					margin-top: 20px;
				}
				.right-part {
				.buy-botton {
background: linear-gradient(90deg, #06A1FF, #1467DE);
				}
				}
		}
		.title {
		margin-bottom: 36px;
			width: 471px;
			height: 105px;
		}
		.content {
			color: #fff;
			font-size: 18px;
			width: 1100px;font-weight: bold;
color: #FFFFFF;
line-height: 32px;
			margin-bottom: 72px;
		}
		.nft {
			position: absolute;
			z-index: 101;
			display: flex;
			align-items: center;
			flex-direction: column;
			bottom: 0;
			.mang {
				width: 449px;
				height: 609px;
			}
		}
		.bg {
			background: url(../../static/img/bg/bgriver.png) no-repeat;
			width: 100%;
			height: 682px;
			background-size: 1920px 682px;
			display: flex;
			position: absolute;
			align-items: center;
			justify-content: center;
			bottom: -75px;
			z-index: 100;
		}
	}
	.section4 {
		position: relative;
		width: 1920px;
		height: 900px;
		overflow-y: hidden;
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
