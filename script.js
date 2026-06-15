const start = performance.now();
fetch(window.location.href, { method: 'HEAD', cache: 'no-cache' })
  .then(() => { document.getElementById('latency').textContent = Math.round(performance.now() - start) + 'ms'; })
  .catch(() => { document.getElementById('latency').textContent = '无法检测'; });
function updateTime() {
  document.getElementById('time').textContent = new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai', hour12: false });
}
updateTime();
setInterval(updateTime, 1000);