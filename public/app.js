// API 基础路径
const API_BASE = '/v1/api';

// DOM 元素
const welcomeMessageEl = document.getElementById('welcome-message');
const usersListEl = document.getElementById('users-list');
const systemStatusEl = document.getElementById('system-status');

// 获取欢迎信息
async function fetchWelcomeMessage() {
  try {
    const response = await fetch(`${API_BASE}/hello`);
    const message = await response.text();
    welcomeMessageEl.textContent = message;
    welcomeMessageEl.classList.remove('loading');
  } catch (error) {
    welcomeMessageEl.textContent = '获取数据失败';
    welcomeMessageEl.classList.add('error');
    console.error('获取欢迎信息失败:', error);
  }
}

// 获取用户列表
async function fetchUsers() {
  try {
    const response = await fetch(`${API_BASE}/users`);
    const users = await response.json();

    usersListEl.innerHTML = '';
    usersListEl.classList.remove('loading');

    users.forEach((user) => {
      const userEl = document.createElement('div');
      userEl.className = 'user-item';
      userEl.innerHTML = `
                <div class="user-name">${user.name}</div>
                <div class="user-email">${user.email}</div>
            `;
      usersListEl.appendChild(userEl);
    });
  } catch (error) {
    usersListEl.textContent = '获取数据失败';
    usersListEl.classList.add('error');
    console.error('获取用户列表失败:', error);
  }
}

// 获取系统状态
async function fetchSystemStatus() {
  try {
    const response = await fetch(`${API_BASE}/status`);
    const status = await response.json();

    systemStatusEl.innerHTML = '';
    systemStatusEl.classList.remove('loading');

    const statusEl = document.createElement('div');
    statusEl.innerHTML = `
            <div class="status-item">
                <span class="status-label">状态:</span> ${status.status}
            </div>
            <div class="status-item">
                <span class="status-label">时间:</span> ${new Date(status.timestamp).toLocaleString()}
            </div>
            <div class="status-item">
                <span class="status-label">版本:</span> ${status.version}
            </div>
        `;
    systemStatusEl.appendChild(statusEl);
  } catch (error) {
    systemStatusEl.textContent = '获取数据失败';
    systemStatusEl.classList.add('error');
    console.error('获取系统状态失败:', error);
  }
}

// 页面加载完成后获取数据
document.addEventListener('DOMContentLoaded', () => {
  fetchWelcomeMessage();
  fetchUsers();
  fetchSystemStatus();
});
