<template>
    <div class="login">
        <!--登录页面-->
        <div class="loginbox" id="loginbox">
            <img class="login_logo" src="../../img/logo.png" />
            <p class="logintitle">请您登录</p>
            <p class="loginsubtile">进入XIAON机场 - 用过都说香</p>
            <input class="inputbox" type="email" placeholder="请输入邮箱" id="regusername" />
            <input class="inputbox" type="password" placeholder="请输入密码" id="regpassword" />
            <button class="loginbutton element" onclick="regrequest()">立即登录</button>
            <div class="loginlinkbox">
                <p class="loginlinktext element" onclick="gobox('regbox');buildrequest()">立即注册</p>
                <p class="loginlinktext element" onclick="gobox('forgot');buildrequest()">忘记密码</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/store/modules/user';
</script>

<style lang="scss" scoped>
.login {
    height: 100vh;
    width: 100vw;
    background-image: url(../../img/background.png);
    background-repeat: no-repeat;
    background-position: center 0;
    background-size: cover;
    display: flex;
    margin: 0;
    flex-direction: column;
    align-items: center;

    .loginbox {
        width: 480px;
        background-color: var(--component-bg5-color);
        border-radius: 10px;
        box-shadow: 2px 2px 8px 4px rgba(153, 153, 153, 0.2);
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        z-index: 100;
        border-radius: 16px;
        //居中
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 40px 40px 40px 40px;
        margin: 0 auto;
        position: absolute;
        top: 50%;
        left: 50%;
        --component-bg5-color: rgba(255, 255, 255, 0.5);
        .login_logo {
            width: 90px;
            margin-top: -45px;
        }

        img {
            overflow-clip-margin: content-box;
            overflow: clip;
        }
        .logintitle {
            font-size: 22px;
            font-weight: 700;
            margin-top: 40px;
            margin-bottom: 4px;
        }
        p {
            display: block;
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
        }
        .loginsubtile {
            font-size: 14px;
            font-weight: 400;
            margin-top: 4px;
            margin-bottom: 16px;
        }
        .inputbox {
            width: 416px;
            height: 58px;
            padding-left: 16px;
            box-sizing: border-box;
            border-radius: 6px;
            border-width: 1px;
            margin-bottom: 10px;
            border-color: #9e9e9e;
            border-image: none;
            border-style: solid;
            color: #5f5f73;
            font-size: 16px;
            outline-color: #0360df;
        }
        input[type='email' i] {
            writing-mode: horizontal-tb !important;
            padding-block: 1px;
            padding-inline: 12px;
        }
        input[type='password' i] {
            -webkit-text-security: disc !important;
            writing-mode: horizontal-tb !important;
            padding-block: 1px;
            padding-inline: 12px;
        }
        //两个输入框选中后的样式，边框2px蓝色
        input:focus {
            border-color: #0360df;
            outline-color: #0360df;
        }
        input:not([type='file' i], [type='image' i], [type='checkbox' i], [type='radio' i]) {
        }
        .loginbutton {
            width: 416px;
            height: 56px;
            background-color: #0561df;
            border-style: none;
            border-radius: 6px;
            font-size: 16px;
            font-weight: 700;
            color: #fff;
        }
        .element {
            cursor: pointer;
        }
        .loginlinkbox {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 416px;
            margin-bottom: 20px;
            font-size: 15px;
            color: #0060df;
            .element {
                cursor: pointer;
            }
            p {
                display: block;
                margin-block-start: 1em;
                margin-block-end: 1em;
                margin-inline-start: 0px;
                margin-inline-end: 0px;
            }
        }
    }
}
</style>
