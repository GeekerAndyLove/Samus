/**
 * H5+初始化
 */
if (window.plus) {
	plusReady();
} else {
	document.addEventListener('plusready', plusReady, false);
}

function plusReady() {
	plus.key.addEventListener('backbutton', function () {
		plus.runtime.quit();
	}, false);
}
/*
 * 跳转到主页面
 */
function jumpToMainPage() {
//	plus.webview.open("_www/main/main.html");
	mui.openWindow("../main/main.html");
}
/*
 * 跳转到用户注册
 */
function jumpToRegister() {
    plus.webview.open('register.html', 'new', {}, 'slide-in-right', 200);
}
/*
 * 跳转到密码找回
 */
function jumpToForgetPwd() {
	plus.webview.open('forgetpwd.html', 'new', {}, 'slide-in-right', 200);
}
