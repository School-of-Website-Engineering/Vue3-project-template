/*导航菜单开关*/
function closemenu() {
    let a = document.getElementById('menulistul');
    let b = document.getElementById('closemenu');
    let c = document.getElementById('openmenu');
    a.style.display = 'none';
    b.style.display = 'none';
    c.style.display = 'block';
}

function openmenu() {
    let a = document.getElementById('menulistul');
    let b = document.getElementById('closemenu');
    let c = document.getElementById('openmenu');
    a.style.display = 'block';
    b.style.display = 'block';
    c.style.display = 'none';
}
/*导航菜单开关结束*/

document.addEventListener('DOMContentLoaded', function () {
    const menuItems = [
        { id: 'icon1', svgPath: '../img/icon1.svg' },
        { id: 'icon2', svgPath: './img/icon2.svg' },
        { id: 'icon3', svgPath: './img/icon3.svg' },
        { id: 'icon4', svgPath: './img/icon4.svg' },
        { id: 'icon5', svgPath: './img/icon5.svg' },
        { id: 'icon6', svgPath: './img/icon6.svg' },
        { id: 'icon7', svgPath: './img/icon7.svg' },
        { id: 'icon8', svgPath: './img/icon8.svg' },
        { id: 'icon9', svgPath: './img/icon9.svg' },
        { id: 'icon10', svgPath: './img/icon10.svg' },
    ];
    menuItems.forEach((item) => {
        const lilist = document.getElementById(item.id);
        const li = document.createElement('li');
        li.classList.add('icon');
        const svg = document.createElement('img');
        svg.setAttribute('src', item.svgPath);
        li.appendChild(svg); // 将SVG图标添加到div中
        lilist.insertBefore(li, lilist.firstChild); // 在li中的第一个子元素之前插入div
    });
});

/*提示信息弹窗*/
function tan(mode, text) {
    if (mode == 'right') {
        let a = document.getElementById('tanright');
        a.setAttribute('style', '!display:block');
        let b = document.createTextNode(text);
        a.appendChild(b);
        setTimeout(canceltan, 1500, mode);
    } else {
        let c = document.getElementById('tancuowu');
        c.setAttribute('style', '!display:block');
        let d = document.createTextNode(text);
        c.appendChild(d);
        setTimeout(canceltan, 1500, mode);
    }
}
/*关闭信息弹窗*/
function canceltan(mode) {
    if (mode == 'right') {
        let a = document.getElementById('tanright');
        a.style.display = 'none';
        a.innerHTML = '';
    } else {
        let c = document.getElementById('tancuowu');
        c.style.display = 'none';
        c.innerHTML = '';
    }
}

/*加载信息弹窗*/
function tanjiazai() {
    let a = document.getElementById('tanjiazai');
    a.setAttribute('style', '!display:block');
}
/*关闭加载信息弹窗*/
function canceltanjiazai() {
    let a = document.getElementById('tanjiazai');
    a.style.display = 'none';
}

/*显示退出窗口*/
function openlogout() {
    let a = document.getElementById('tantuichu');
    a.style.display = 'block';
}

/*显示关闭退出窗口*/
function closelogout() {
    let a = document.getElementById('tantuichu');
    a.style.display = 'none';
}
/*退出登录*/
function exitlogout() {
    localStorage.clear();
    window.location.href = './index.html';
}

timer = null;
kaiguan();
function kaiguan() {
    let dom = document.getElementsByClassName('menutitle')[0];
    if (dom) {
        let b = document.getElementById('closemenu');
        let c = document.getElementById('openmenu');
        b.removeAttribute('onclick');
        c.removeAttribute('onclick');

        dom.addEventListener('click', dakaiguanbi);
        if (!timer) {
            clearTimeout(timer);
        }
    } else {
        timer = setTimeout(kaiguan, 0);
    }
}

function dakaiguanbi() {
    let b = document.getElementById('closemenu');
    if (b.style.display == 'block') {
        closemenu();
    } else {
        openmenu();
    }
}
