/*
 * 处理登录界面跳转提交逻辑
 */
function jumpToRegister() {
    plus.webview.open('/modules/register/register.html', 'new', {}, 'slide-in-right', 200);

}