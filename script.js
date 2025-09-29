// 獲取時針、分針、秒針元素
const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');
const minuteMarkersContainer = document.querySelector('.minute-markers');

// 生成60個分鐘標記
function createMinuteMarkers() {
    for (let i = 0; i < 60; i++) {
        const marker = document.createElement('div');
        marker.className = 'minute-marker';
        marker.style.transform = `rotate(${i * 6}deg)`;
        minuteMarkersContainer.appendChild(marker);
    }
}

// 更新時鐘
function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12; // 12小時制
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    // 計算角度
    // 秒針：每秒轉6度 (360/60 = 6)
    const secondAngle = seconds * 6;
    
    // 分針：每分鐘轉6度，每秒轉0.1度
    const minuteAngle = minutes * 6 + seconds * 0.1;
    
    // 時針：每小時轉30度 (360/12 = 30)，每分鐘轉0.5度
    const hourAngle = hours * 30 + minutes * 0.5;
    
    // 應用轉換
    secondHand.style.transform = `rotate(${secondAngle}deg)`;
    minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
    hourHand.style.transform = `rotate(${hourAngle}deg)`;
}

// 初始化
function init() {
    // 創建分鐘標記
    createMinuteMarkers();
    
    // 立即更新一次時鐘
    updateClock();
    
    // 每秒更新一次時鐘
    setInterval(updateClock, 1000);
}

// 當DOM載入完成時初始化
document.addEventListener('DOMContentLoaded', init);

// 添加一些互動效果
document.querySelector('.clock').addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05)';
    this.style.transition = 'transform 0.3s ease';
});

document.querySelector('.clock').addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});

// 數字時鐘顯示（可選功能）
function createDigitalTime() {
    const digitalDisplay = document.createElement('div');
    digitalDisplay.id = 'digital-time';
    digitalDisplay.style.cssText = `
        position: absolute;
        bottom: 80px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 10px 20px;
        border-radius: 25px;
        font-size: 18px;
        font-weight: bold;
        font-family: 'Courier New', monospace;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    `;
    document.querySelector('.clock-container').appendChild(digitalDisplay);
}

// 更新數字時鐘
function updateDigitalTime() {
    const digitalDisplay = document.getElementById('digital-time');
    if (digitalDisplay) {
        const now = new Date();
        const timeString = now.toLocaleTimeString('zh-TW', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        digitalDisplay.textContent = timeString;
    }
}

// 添加數字時鐘（註解掉，如需要可以取消註解）
// createDigitalTime();
// setInterval(updateDigitalTime, 1000);

// 當頁面可見性改變時確保時鐘準確
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        updateClock();
    }
});