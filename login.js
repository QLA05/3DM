// XSS特殊字符转义
function htmlEscape(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    // 获取并转义输入内容
    const uname = htmlEscape(this.username.value.trim());
    const pwd = this.password.value.trim();

    // 可自行增减账号密码，格式："账号":"密码"
    const accountLibrary = {
        "admin": "123456"
    };

    // 校验账号密码
    if (accountLibrary[uname] && accountLibrary[uname] === pwd) {
        // 会话存储登录状态，关闭浏览器就失效
        sessionStorage.setItem("isLogin", "true");
        // 跳转到骨骼3D预览页
        window.location.href = "./viewer.html";
    } else {
        alert("账号或密码错误，请重试");
    }
})
