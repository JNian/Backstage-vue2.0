<template>
	<div id="login" class="login">
        <video src="/static/video/1621123_VJshi_0101387751017619f8f02f3fc4ed7bfd.mp4" autoplay loop muted>
        您的浏览器不支持 video 标签。
        </video>
		<div class="m-logo"></div>
        <div class="u-circular">
            <div class="u-item1"></div>
            <div class="u-item2 u-item"></div>
            <div class="u-item3 u-item"></div>
            <div class="u-item4 u-item"></div>
            <div class="u-item5 u-item"></div>
            <div class="u-item6 u-item"></div>
            <div class="u-item7 u-item"></div>
            <span class="u-line"></span>
        </div>
		<div class="m-login">
			<div class="t-login">LOGIN</div>
			<div class="f-username">
                <img class="icon" src="/static/imgs/user.png">
                <input type="text" class="item" id="username" @change="changeKey()" placeholder="请输入用户名">
			</div>
			<div class="f-password">
                <img class="icon" src="/static/imgs/suo.png">
                <input type="text" class="item" id="password" placeholder="请输入密码">
			</div>
			<div class="f-remember">
                <span class="f-checked-label" @click="savePass()">记住密码</span>
                <img class="f-checked" id="changeSrc" @click="savePass()" :src="imgSrc?'/static/imgs/border.png': '/static/imgs/xuanzhong.png'">
            </div>
			<div class="f-submit">
               <button class="sumbit" type="button">登录</button>         
               <span class="u-itme1 item"></span>
               <span class="u-itme2 item"></span>
               <span class="u-itme3 item"></span>
               <span class="u-itme4 item"></span>
               <span class="u-itme5 item"></span>
               <span class="u-itme6 item"></span>
            </div>
		</div>
	</div>
</template>

<script>
    export default {
        data() {
            return {
                imgSrc: true
            }
        },
        methods: {
            savePass() {
                this.imgSrc = !this.imgSrc;
            },
            getElement(id) {
                return document.getElementById(id);
            },
            changeKey() {
                const $username = this.getElement('username');
                const username = $username.value;
                this.$http.get('/check_name', {
                    params: {
                        username
                    }
                })
                .then((result)=>{
                    alert(result.data.data);
                })
            }
        }

    }
</script>
<style lang="scss">
    /* 登录页面 */
	.login {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: #030303;
        video {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            height: 100%;
        }
	}
    /* 登录框 */
	.m-login {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 450px;
		height: 450px;
		margin-top: -225px;
		margin-left: -225px;
		padding: 80px 80px 10px;
		border: 1px solid #98e5fb;
		border-radius: 50%;
		background-color: #06212799;
        -webkit-animation: line 5s linear 0s infinite;
        
        .t-login {
            width: 150px;
            height: 90px;
            margin: 0 auto;
            font-size: 35px;
            font-weight: bold;
            text-align: center;
            color: #c7fdff;
        }
        .f-username, 
        .f-password {
            position: relative;
            box-sizing: border-box;
            padding: 10px;
            .icon {
                position: absolute;
                top: 8px;
                width: 28px;
                height: 28px;
            }
            .item {
                height: 30px;
                padding: 0 10px 0 40px;
                line-height: 30px;
                font-size: 14px;
                width: 100%;
                color: #eee;
            }
        }

        .f-remember {
            height: 40px;
            padding: 10px;
            line-height: 20px;
            .f-checked {
                float: right;
                width: 12px;
                height: 12px;
                margin: 4px;
                cursor: pointer;
            }
            .f-checked-label {
                float: right;
                font-size: 12px;
                cursor: pointer;
                color: #ddd;
            }
        }
        .f-submit {
            position: relative;
            margin-top: 50px;
            .sumbit {
                display: block;
                box-sizing: border-box;
                width: 120px;
                height: 35px;
                margin: 0 auto;
                padding: 0;
                outline: none; 
                border: none;
                background-color: #06212730;
                color: #fff;
                font-size: 14px;
                cursor: pointer;
            }
            .item {
                box-shadow: 0px 0px 5px 1px #16bff9;
                -webkit-animation: breathing 5s linear 0s infinite;
            }
            .u-itme1 {
                position: absolute;
                top: -1px;
                left: 88px;
                width: 1px;
                height: 12px;
                background-color: #49a1bf;
                transform: rotate(45deg);
            }
            .u-itme2 {
                position: absolute;
                top: 24px;
                left: 199px;
                width: 1px;
                height: 12px;
                background-color: #49a1bf;
                transform: rotate(45deg);
            }
            .u-itme3 {
                position: absolute;
                bottom: -2px;
                left: 92px;
                width: 1px;
                height: 30px;
                background-color: #49a1bf;
                transform: rotate(-30deg);
            }
            .u-itme4 {
                position: absolute;
                bottom: 7px;
                left: 196px;
                width: 1px;
                height: 30px;
                background-color: #49a1bf;
                transform: rotate(-30deg);
            }
            .u-itme5 {
                position: absolute;
                top: 0px;
                left: 93px;
                width: 96px;
                height: 1px;
                background-color: #49a1bf;
            }
            .u-itme6 {
                position: absolute;
                bottom: 0px;
                left: 100px;
                width: 96px;
                height: 1px;
                background-color: #49a1bf;
            }
        }

		input[type="text"],#btn1,#btn2{
		    -web-kit-appearance:none;
		    -moz-appearance: none;
		    outline:0;
		    display:block;
		    box-sizing: border-box;
		    border: none;
		    border-bottom: 1px solid #999;
		    background-color: #03030380;
		}
		input[type="text"]:focus{
		  border-bottom: 1px solid #fcfcfc;
		}
	}

    .u-circular {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 500px;
        height: 500px;
        margin-top: -250px;
        margin-left: -250px;
        border: 1px solid #9e6f54;
        border-radius: 50%;
        -webkit-animation: rotate 5s linear 0s infinite;
        .u-item1 {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 400px;
            height: 400px;
            margin-top: -200px;
            margin-left: -200px;
            border: 1px solid #98e5fb;
            border-radius: 50%; 
        }
        .u-item {
            position: absolute;
            top: 150px;
            left: 30px;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background-color: #98e5fb;
        }
        .u-item3 {
            top: 160px;
            left: 26px;
        }
        .u-item4 {
            top: 170px;
            left: 22px;
        }
        .u-item5 {
            top: 200px;
            left: 15px;
        }
        .u-item6 {
            top: 210px;
            left: 13px;
        }
        .u-item7 {
            top: 220px;
            left: 11px;
        }
        .u-line {
            position: absolute;
            top: 24px;
            left: 23px;
            width: 452px;
            height: 452px;
            border-radius: 50%;
            border-top: 1px solid #fff;
            z-index: 2;
        }
    }
    @-webkit-keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        45% {
            transform: rotate(155deg);
        }
        65% {
            transform: rotate(155deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    @-webkit-keyframes breathing {
        0% {
            box-shadow: 0px 0px 5px 1px #16bff9;
        }
        35% {
            box-shadow: 0px 0px 3px 0px #16bff9;
        }
        65% {
            box-shadow: 0px 0px 3px 0px #16bff9;
        }
        100% {
            box-shadow: 0px 0px 5px 1px #16bff9;
        }
    }
    @-webkit-keyframes line {
        0% {
            border-color: transparent;
        }
        25% {
            border-color: transparent;
        }
        35% {
            border-color: #98e5fb;
        }
        65% {
            border-color: #98e5fb;
        }
        75% {
            border-color: transparent;
        }
        100% {
            border-color: transparent;
        }
    }
</style>
