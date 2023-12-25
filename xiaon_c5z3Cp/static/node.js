/*启动检测与页面初始化localStorage*/
function bootcheck() {
  let a = localStorage.getItem('authorization');
  if (a) {
    getinfo();
    getserver();
  }
  else {
    exitlogout();
  }
}

function toggleView() {
  const nodeDown = document.getElementById('node_down');
  const wrapper = document.getElementById('wrapper');

  if (nodeDown.style.display !== 'none') {
    nodeDown.style.display = 'none';
    wrapper.style.display = 'block';
  } else {
    nodeDown.style.display = 'block';
    wrapper.style.display = 'none';
  }
}

const domain = "";

// 封装通用的网络请求函数
async function jsonlink(mode, link, params, callback) {
  try {
    const auth = localStorage.getItem('authorization');
    const response = await fetch(`${domain}${link}`, {
      method: mode,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': auth
      },
      body: mode === 'POST' ? JSON.stringify(params) : undefined
    });

    const data = await response.json();
    callback(response.status, data);
  } catch (error) {
    console.error(error);
    callback(500, 'Error occurred during the request');
  }
}

// 请求个人信息接口
async function getinfo() {
  const mode = 'GET';
  const link = 'https://ovc.xiaon.life/api/v1/user/info';
  tanjiazai();
  jsonlink(mode, link, null, responseinfo);
}

// 处理个人信息响应
function responseinfo(code, data) {
  const logoutWords = document.getElementById('logout_words');
  if (code === 200) {
    logoutWords.innerHTML = data.data.email;
  } else {
    tan('cuowu', '当前网络不稳定，请刷新页面重试');
  }
  canceltanjiazai();
}

// 请求节点信息接口
async function getserver() {
  const mode = 'GET';
  const link = 'https://ovc.xiaon.life/api/v1/user/server/fetch';
  tanjiazai();
  jsonlink(mode, link, null, responseserver);
}

// 处理节点信息响应
function responseserver(code, data) {
  const nodeDown = document.getElementById('node_down');
  nodeDown.innerHTML = '';

  if (code === 200) {
    const servers = data.data;

    if (!servers || servers.length === 0) {
      const queshengbox = document.createElement('div');
      const queshengtu = document.createElement('img');
      queshengbox.classList.add('queshengtu-box');
      queshengtu.src = './img/queshengtu.png';
      queshengtu.classList.add('queshengtu');
      queshengbox.appendChild(queshengtu);
      nodeDown.appendChild(queshengbox);
    } else {
      const fragment = document.createDocumentFragment();

      servers.forEach(server => {
        const b = document.createElement('div');
        b.classList.add('node_box');
        const c = document.createElement('p');
        c.classList.add('node_box_title');
        const d = document.createElement('img');
        d.classList.add('node_box_status');
        const e = document.createElement('p');
        e.classList.add('node_box_rate');
        const f = document.createElement('p');
        f.classList.add('node_box_tag');
        c.innerHTML = server.name;
        e.innerHTML = `${server.rate}X`;
        f.innerHTML = server.tags;

        const ts = Math.round(new Date().getTime() / 1000);
        if (ts - server.last_check_at < 300) {
          d.src = `./img/zhengchang.svg`;
        } else {
          d.src = './img/cuowu.svg';
        }

        b.appendChild(c);
        b.appendChild(d);
        b.appendChild(e);
        b.appendChild(f);
        fragment.appendChild(b);
      });

      nodeDown.appendChild(fragment);
    }
    canceltanjiazai();
  } else {
    tan('cuowu', '当前网络不稳定，请刷新页面重试');
    canceltanjiazai();
  }
}

