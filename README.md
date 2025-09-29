# 類比時鐘 (Analog Clock)

一個使用HTML、CSS和JavaScript建立的美觀類比時鐘網頁。

## 功能特色

✅ **完整的時鐘功能**
- 顯示準確的實時時間
- 時針、分針、秒針同步運行
- 12小時制顯示

✅ **精確的刻度標記**
- 60個分鐘小刻度
- 12個小時大刻度（1-12數字顯示）
- 清晰的視覺層次

✅ **優美的設計**
- 漸層背景
- 圓形時鐘面板
- 陰影效果
- 響應式設計（支援手機和平板）

✅ **互動效果**
- 滑鼠懸停縮放效果
- 光暢的動畫過渡

## 檔案結構

```
AnalogClock/
├── index.html      # 主要HTML檔案
├── style.css       # CSS樣式檔案
├── script.js       # JavaScript功能檔案
├── README.md       # 專案說明文件
└── LICENSE         # MIT授權條款
```

## 使用方法

### 方法一：直接開啟檔案
1. 下載或複製所有檔案到同一個資料夾
2. 用瀏覽器開啟 `index.html` 檔案

### 方法二：使用本地伺服器
1. 在專案資料夾中開啟終端機
2. 執行以下指令之一：
   ```bash
   # 使用Python 3
   python3 -m http.server 8000
   
   # 使用Node.js (需先安裝)
   npx serve .
   ```
3. 在瀏覽器中開啟 `http://localhost:8000`

## 技術實作

### HTML結構
- 使用語義化標籤構建時鐘元件
- 分別處理小時標記、分鐘標記和指針

### CSS樣式
- 使用CSS轉換 (`transform`) 來定位刻度和旋轉指針
- 響應式設計適應不同螢幕尺寸
- 使用CSS動畫添加視覺效果

### JavaScript功能
- `setInterval()` 每秒更新時鐘
- 精確計算時針、分針、秒針的角度
- 動態生成60個分鐘刻度標記

## 瀏覽器支援

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 授權條款

MIT License - 請參閱 [LICENSE](LICENSE) 檔案了解詳情。

## 開發者

建立者：[wengct](https://github.com/wengct)

---

*這個專案示範如何使用純粹的web技術（HTML、CSS、JavaScript）來建立一個功能完整的類比時鐘。*