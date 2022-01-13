<template>
	<div class="main-page" id="zoomDom">
		<section class="nav-header">
			<div class="logo-cover">
				<img style="width:123px;height:51px;margin-right:170px;" src="../../static/img/logo@2x.png" alt="">
			</div>
			<div class="option-cover">
				<span @click="routeTo('/')">Home</span>
				<span class="active" @click="routeTo('/mint')">Mint</span>
				<span>Game</span>
				<span @click="openTo('Whitepaper')">Whitepaper</span>
				<span @click="routeTo('/home?id=road')">Roadmap</span>
				<span @click="routeTo('/home?id=team')">Team</span>
				<span class="wallet-button" @click="connectWallet" id="connectButton">connect wallet</span>
			</div>
		</section>
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
					<div class="number-contro">
						<div class="button" @click="count('mint1',-1)">-</div>
						<div class="number">{{mint1}}</div>
						<div class="button" @click="count('mint1',1)">+</div>
					</div>
					<div @click="buy('land')" class="buy-botton">MINT 0.15 BNB(≈82$)</div>
				</div>
				<div class="right-part">
					<div class="number-contro">
						<div class="button" @click="count('mint2',-1)">-</div>
						<div class="number">{{mint2}}</div>
						<div class="button" @click="count('mint2',1)">+</div>
					</div>
					<div @click="buy('pond')" class="buy-botton">MINT 0.15 BNB(≈82$)</div>
				</div>
			</div>
			<div class="nft" v-if="this.buySuccess" @click="getInfo">
				<img src="../../static/img/mint/lands.jpg" alt="" class="title2">
				<div class="ntf-group">
					<img src="../../static/img/mint/mang.png" class="mang" v-for="(item,index) in mangArr" :key="index">
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
				<div class="button blue" @click="confirmOpenMang">Soon</div>
			</div>
			<img src="../../static/img/close.png" class="close-box" @click="openMangBox = false">
		</div>
		<div class="mang-box-open" v-if="showNFT">
			<img src="../../static/img/mangImg.png" class="mang-img">
			<span class="tip">Congrats！</span>
			<span class="tip">you got #LAND 000001 NFT.</span>
			<img src="../../static/img/close.png" class="close-box" @click="showNFT = false">
		</div>
	</div>
</template>

<script>
/* eslint-disable */
import { ethers } from 'ethers'

export default {
	data () {
		return {
			mint1: 1,
			mint2: 1,
			provider: null,
			signer: null,
			userWallet: '',
			price: '0.15',
			buySuccess: false,
			nfts: 0,
			openMangBox: false,
			showNFT: false,
			mangNum: 0,
			mangArr: 0
		}
	},
	mounted () {
		// let dom = document.getElementById('connectButton')

		// dom.innerText = localStorage.getItem('showAdress') || 'connect wallet'
		this.zoomDom()
		if (localStorage.getItem('currentWallet')) {
			this.connectWallet()
		}
		// this.$initializ()
	},
	methods: {
	  async	connectWallet () {
			if (window.ethereum) {
				const [user] = await ethereum.request({ method: 'eth_requestAccounts' })
				this.userWallet = user
				localStorage.setItem('currentWallet',user)
				this.provider = await new ethers.providers.Web3Provider(window.ethereum)
				this.signer = this.provider.getSigner()

				console.log('用户地址：' + user)
				this.provider.getBlockNumber().then(number => console.log('最新区块号：' + number))

				document.getElementById('connectButton').innerText = user.split('').slice(0, 5).join('') + '...'

				// const abi = [
				// "function balanceOf(address owner) external view returns (uint256 balance)",
				// "function buy(uint amount, uint adv_time) public payable",
				// "function ownerOf(uint256 tokenId) external view returns (address owner)",
				// "function tokenMeta(uint256 _tokenId) public override view returns (TokenMeta memory)"
				// ]

				const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURL","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"adv_time","type":"uint256"}],"name":"buy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buy_limit_per_address","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"current_sold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"current_supply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getSoldTimes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"increaseSoldTimes","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_num","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint256","name":"_limit","type":"uint256"},{"internalType":"uint256","name":"_time","type":"uint256"}],"name":"mintAndPricing","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sell_begin_time","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURL","type":"string"}],"name":"setBaseURL","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"}],"name":"setNames","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"address","name":"_contractAddr","type":"address"},{"internalType":"uint256[]","name":"_settings","type":"uint256[]"},{"internalType":"address[]","name":"_addrs","type":"address[]"}],"name":"setSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_current_supply","type":"uint256"},{"internalType":"uint256","name":"_max_supply","type":"uint256"}],"name":"setSupplies","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"string","name":"_uri","type":"string"},{"internalType":"string","name":"_hash","type":"string"},{"internalType":"address","name":"_minter","type":"address"}],"name":"setTokenAsset","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenMeta","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"uri","type":"string"},{"internalType":"string","name":"hash","type":"string"},{"internalType":"uint256","name":"soldTimes","type":"uint256"},{"internalType":"address","name":"minter","type":"address"}],"internalType":"struct TokenMeta","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenOnChainMeta","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"uri","type":"string"},{"internalType":"string","name":"hash","type":"string"},{"internalType":"uint256","name":"soldTimes","type":"uint256"},{"internalType":"address","name":"minter","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
				const landAddress = '0xcdbb464fBf93D9c8f827137E87cC913CAF4c2B7f'
				const pondAddress = '0x7EB5F588631e40fea7c65ec5eF5a438105b452E6'

				this.land = new ethers.Contract(landAddress, abi, this.signer)
				this.pond = new ethers.Contract(pondAddress, abi, this.signer)
				this.land.balanceOf(this.userWallet).then(res => {
					this.mangNum = res.toString()
					if(ethers.utils.formatEther(res) > 0) this.buySuccess = true
				})

				this.pond.balanceOf(this.userWallet).then(res => {
					this.mangNum = Number(res.toString()) + Number(this.mangNum)
					if(ethers.utils.formatEther(res) > 0) this.buySuccess = true
					this.mangArr = new Array(this.mangNum)
				})
			}
		},
		async buy(nft) {

			if(nft === 'land') {
				const tx1 = await this.land.buy(this.mint1, 87000, {
					value: ethers.utils.parseEther(`${this.mint1 * 0.15}`)
				})
				await tx1.wait()
				this.buySuccess = true
			}

			if(nft === 'pond') {
				const tx2 = await this.pond.buy(this.mint2, 87000, {
					value: ethers.utils.parseEther(`${this.mint1 * 0.15}`)
				})
				await tx2.wait()
				this.buySuccess = true
			}

		},
		async getInfo() {
			const info = await this.land.tokenOnChainMeta(9998)
			console.log(info)
			this.openMangBox = true
		},
		async confirmOpenMang () {

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
.main-page {
	.mang-box-open {
		position: fixed;
		top: 366px;
		left: 50%;
		transform: translateX(-491px);
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
			cursor: not-allowed;
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
		.option-cover {
			span {
				margin-left: 39px;
				cursor: pointer;
			}
			.wallet-button {
				width: 160px;
				height: 36px;
				line-height: 36px;
				padding: 5px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				padding-left: 20px;
				padding-right: 20px;
				background: #294EE2;
				border-radius: 18px;
			}
			.active {
				color:#FF9E3F;
				position: relative;
				&::after{
					content: '';
					position: absolute;
					bottom: -22px;
					left: 0;
					width: 38px;
					border-bottom: 4px solid #FF9E3F;
				}
			}
		}
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
		.title2 {
		margin-bottom: 46px;
			width: 471px;
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
