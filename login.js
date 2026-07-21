// login.js
function htmlEscape(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const uname = htmlEscape(this.username.value);
    const pwd = this.password.value;
    // 仅前端打印、弹窗，不发送网络请求
    console.log('已安全转义账号：', uname);
    alert(`表单校验完成，账号：${uname}；线上暂无后端接口，请求已取消`);
    // 注释原有fetch请求代码
    /*
    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-CSRF-Token': this._csrf.value
        },
        body: `username=${encodeURIComponent(uname)}&password=${encodeURIComponent(pwd)}`
    })
    */
})
