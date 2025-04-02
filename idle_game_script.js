// --- 遊戲狀態 ---
let gameState = {
    resources: {
        energy: { amount: 10, rate: 0.1 }, // 初始給予10能量和基礎0.1/s產量
        ore: { amount: 0, rate: 0 },
        metal: { amount: 0, rate: 0 },
        crystal: { amount: 0, rate: 0 },
        darkMatter: { amount: 0, rate: 0 }
    },
    facilities: {
        miningBeam: { level: 0, baseCost: 10, costResource: 'energy', produces: 'ore', baseProduction: 0.5, costMultiplier: 1.15 },
        smelter: { level: 0, baseCost: 50, costResource: 'ore', produces: 'metal', baseProduction: 0.5, costMultiplier: 1.20 },
        crystalLab: { level: 0, baseCost: 200, costResource: 'metal', produces: 'crystal', baseProduction: 0.5, costMultiplier: 1.25 },
        darkMatterCollector: { level: 0, baseCost: 1000, costResource: 'crystal', produces: 'darkMatter', baseProduction: 0.5, costMultiplier: 1.30 }
    },
    lastUpdate: Date.now()
};

// --- DOM 元素參照 --- (在 DOMContentLoaded 後獲取)
let domRefs = {};

// --- 遊戲設定 ---
const SAVE_KEY = 'cosmicPioneerSave';
const TICK_INTERVAL_MS = 100; // 遊戲邏輯更新頻率 (毫秒)
const SAVE_INTERVAL_MS = 30000; // 自動儲存頻率 (毫秒)

// --- 輔助函數 ---
// 格式化數字顯示 (例如 K, M, B)
function formatNumber(num) {
    if (num < 1e3) return num.toFixed(1);
    if (num >= 1e3 && num < 1e6) return (num / 1e3).toFixed(2) + ' K';
    if (num >= 1e6 && num < 1e9) return (num / 1e6).toFixed(2) + ' M';
    if (num >= 1e9 && num < 1e12) return (num / 1e9).toFixed(2) + ' B';
    if (num >= 1e12 && num < 1e15) return (num / 1e12).toFixed(2) + ' T';
    return num.toExponential(2); // 更大的數字用科學記號
}

// 計算設施成本
function getFacilityCost(facilityKey) {
    const facility = gameState.facilities[facilityKey];
    return Math.floor(facility.baseCost * Math.pow(facility.costMultiplier, facility.level));
}

// 計算設施產量
function getFacilityProduction(facilityKey) {
    const facility = gameState.facilities[facilityKey];
    return facility.level * facility.baseProduction;
}


// --- 核心遊戲邏輯 ---

// 更新所有資源的生產率
function calculateProductionRates() {
    // 重設非基礎資源的速率
    gameState.resources.ore.rate = 0;
    gameState.resources.metal.rate = 0;
    gameState.resources.crystal.rate = 0;
    gameState.resources.darkMatter.rate = 0;
    // 注意：能量可能有基礎產量，所以不完全重設，或者有一個基礎值
     gameState.resources.energy.rate = 0.1; // 重設為基礎值

    // 根據設施等級計算產量
    for (const key in gameState.facilities) {
        const facility = gameState.facilities[key];
        const production = getFacilityProduction(key);
        if (facility.produces && gameState.resources[facility.produces]) {
            gameState.resources[facility.produces].rate += production;
        }
        // 如果設施消耗能量 (可選)，在這裡處理
        // gameState.resources.energy.rate -= facility.level * energyConsumptionPerLevel;
    }
}

// 更新使用者介面
function updateUI() {
    // 更新資源顯示
    for (const key in gameState.resources) {
        if (domRefs[`${key}Amount`]) {
            domRefs[`${key}Amount`].textContent = formatNumber(gameState.resources[key].amount);
        }
         if (domRefs[`${key}Rate`]) {
            domRefs[`${key}Rate`].textContent = formatNumber(gameState.resources[key].rate);
        }
    }

    // 更新設施顯示和按鈕狀態
    for (const key in gameState.facilities) {
        const facility = gameState.facilities[key];
        const cost = getFacilityCost(key);
        const costResource = facility.costResource;
        const production = getFacilityProduction(key);
        const canAfford = gameState.resources[costResource].amount >= cost;

        if (domRefs[`${key}Level`]) {
            domRefs[`${key}Level`].textContent = facility.level;
        }
         if (domRefs[`${key}Production`]) {
            domRefs[`${key}Production`].textContent = `${formatNumber(production)} ${facility.produces}/s`;
        }
         if (domRefs[`${key}Cost`]) {
            domRefs[`${key}Cost`].textContent = `${formatNumber(cost)} ${costResource}`;
        }
        if (domRefs[`build-${key}-btn`]) {
            domRefs[`build-${key}-btn`].disabled = !canAfford;
        }
    }
}

// 處理購買/升級設施
function buyFacility(facilityKey) {
    const facility = gameState.facilities[facilityKey];
    const cost = getFacilityCost(facilityKey);
    const costResource = facility.costResource;

    if (gameState.resources[costResource].amount >= cost) {
        gameState.resources[costResource].amount -= cost;
        facility.level++;
        calculateProductionRates(); // 立即重新計算產率
        updateUI(); // 立即更新UI
    }
}

// 遊戲主循環
function gameLoop() {
    const now = Date.now();
    const deltaTime = (now - gameState.lastUpdate) / 1000; // 秒

    // 生產資源
    for (const key in gameState.resources) {
        gameState.resources[key].amount += gameState.resources[key].rate * deltaTime;
    }

    gameState.lastUpdate = now;

    // 更新UI (不必每次邏輯tick都更新，可以降低頻率，但這裡為了簡單先這樣)
    updateUI();
}

// --- 儲存與載入 ---
function saveGame() {
    try {
        localStorage.setItem(SAVE_KEY, JSON.stringify(gameState));
        console.log("遊戲已儲存");
    } catch (e) {
        console.error("儲存失敗:", e);
    }
}

function loadGame() {
     domRefs.offlineProgressInfo.textContent = ''; // 清除舊訊息
    const savedData = localStorage.getItem(SAVE_KEY);
    if (savedData) {
        try {
            const savedState = JSON.parse(savedData);
            // 簡單合併，防止未來增加新屬性時舊存檔出錯
             // 只恢復核心數據，防止存檔結構變化導致的錯誤
            if (savedState.resources) {
                 Object.assign(gameState.resources, savedState.resources);
            }
            if (savedState.facilities) {
                 Object.assign(gameState.facilities, savedState.facilities);
            }

            const now = Date.now();
            const timeOffline = (now - (savedState.lastUpdate || now)) / 1000; // 秒, 提供預設值

            if (timeOffline > 1) { // 至少離線1秒才計算
                 console.log(`離線時間: ${timeOffline.toFixed(0)} 秒`);
                 // 計算離線收益 (基於載入時的設施等級計算收益率)
                 calculateProductionRates(); // 根據載入的等級計算正確的速率
                 let offlineGainsText = "離線收益: ";
                 let gainedSomething = false;
                 for (const key in gameState.resources) {
                    const gain = gameState.resources[key].rate * timeOffline;
                    if (gain > 0.1) { // 只有顯著的收益才顯示
                         gameState.resources[key].amount += gain;
                         offlineGainsText += `${formatNumber(gain)} ${key}, `;
                         gainedSomething = true;
                    }
                 }
                 if (gainedSomething) {
                    domRefs.offlineProgressInfo.textContent = offlineGainsText.slice(0, -2); // 去掉最後的 ", "
                 } else {
                      domRefs.offlineProgressInfo.textContent = "離線時間短或無產量，無明顯離線收益。";
                 }

            }
            gameState.lastUpdate = now; // 將上次更新時間設為當前
             console.log("遊戲已載入");
        } catch (e) {
            console.error("載入失敗, 使用預設狀態:", e);
            initializeNewGame(); // 如果解析失敗，則初始化新遊戲
        }
    } else {
        console.log("未找到存檔, 開始新遊戲");
         initializeNewGame(); // 沒有存檔則初始化
    }
     calculateProductionRates(); // 確保初始產率正確
     updateUI(); // 更新UI以顯示載入或初始狀態
}

function resetGame() {
    if (confirm("確定要重設所有遊戲進度嗎？此操作無法復原！")) {
        localStorage.removeItem(SAVE_KEY);
        initializeNewGame(true); // 標記為強制重設
         location.reload(); // 重新整理頁面以應用更改
        console.log("遊戲已重設");
    }
}
function initializeNewGame(forceReset = false) {
     if (forceReset || !localStorage.getItem(SAVE_KEY)) { // 只有強制重設或真的沒存檔時才執行
          gameState = { // 重設為初始狀態
                resources: {
                    energy: { amount: 10, rate: 0.1 },
                    ore: { amount: 0, rate: 0 },
                    metal: { amount: 0, rate: 0 },
                    crystal: { amount: 0, rate: 0 },
                    darkMatter: { amount: 0, rate: 0 }
                },
                facilities: {
                    miningBeam: { level: 0, baseCost: 10, costResource: 'energy', produces: 'ore', baseProduction: 0.5, costMultiplier: 1.15 },
                    smelter: { level: 0, baseCost: 50, costResource: 'ore', produces: 'metal', baseProduction: 0.5, costMultiplier: 1.20 },
                    crystalLab: { level: 0, baseCost: 200, costResource: 'metal', produces: 'crystal', baseProduction: 0.5, costMultiplier: 1.25 },
                    darkMatterCollector: { level: 0, baseCost: 1000, costResource: 'crystal', produces: 'darkMatter', baseProduction: 0.5, costMultiplier: 1.30 }
                },
                lastUpdate: Date.now()
           };
           console.log("初始化新遊戲狀態");
     }
}

// --- 初始化 ---
document.addEventListener('DOMContentLoaded', () => {
    // 獲取所有需要操作的 DOM 元素
    domRefs = {
        energyAmount: document.getElementById('energy-amount'),
        energyRate: document.getElementById('energy-rate'),
        oreAmount: document.getElementById('ore-amount'),
        oreRate: document.getElementById('ore-rate'),
        metalAmount: document.getElementById('metal-amount'),
        metalRate: document.getElementById('metal-rate'),
        crystalAmount: document.getElementById('crystal-amount'),
        crystalRate: document.getElementById('crystal-rate'),
        darkMatterAmount: document.getElementById('darkMatter-amount'),
        darkMatterRate: document.getElementById('darkMatter-rate'),
        offlineProgressInfo: document.getElementById('offline-progress-info'),

        miningBeamLevel: document.getElementById('miningBeam-level'),
        miningBeamProduction: document.getElementById('miningBeam-production'),
        miningBeamCost: document.getElementById('miningBeam-cost'),
        'build-miningBeam-btn': document.getElementById('build-miningBeam-btn'),

        smelterLevel: document.getElementById('smelter-level'),
        smelterProduction: document.getElementById('smelter-production'),
        smelterCost: document.getElementById('smelter-cost'),
        'build-smelter-btn': document.getElementById('build-smelter-btn'),

        crystalLabLevel: document.getElementById('crystalLab-level'),
        crystalLabProduction: document.getElementById('crystalLab-production'),
        crystalLabCost: document.getElementById('crystalLab-cost'),
        'build-crystalLab-btn': document.getElementById('build-crystalLab-btn'),

        darkMatterCollectorLevel: document.getElementById('darkMatterCollector-level'),
        darkMatterCollectorProduction: document.getElementById('darkMatterCollector-production'),
        darkMatterCollectorCost: document.getElementById('darkMatterCollector-cost'),
        'build-darkMatterCollector-btn': document.getElementById('build-darkMatterCollector-btn'),

         saveBtn: document.getElementById('save-btn'),
         resetBtn: document.getElementById('reset-btn')
    };

    // 綁定設施按鈕事件
    domRefs['build-miningBeam-btn'].addEventListener('click', () => buyFacility('miningBeam'));
    domRefs['build-smelter-btn'].addEventListener('click', () => buyFacility('smelter'));
    domRefs['build-crystalLab-btn'].addEventListener('click', () => buyFacility('crystalLab'));
    domRefs['build-darkMatterCollector-btn'].addEventListener('click', () => buyFacility('darkMatterCollector'));

     // 綁定儲存和重設按鈕
    domRefs.saveBtn.addEventListener('click', saveGame);
    domRefs.resetBtn.addEventListener('click', resetGame);

    // 載入遊戲或初始化
    loadGame();

    // 啟動遊戲主循環
    setInterval(gameLoop, TICK_INTERVAL_MS);

    // 啟動自動儲存
    setInterval(saveGame, SAVE_INTERVAL_MS);

    // (可選) 頁面關閉前儲存
    window.addEventListener('beforeunload', saveGame);

    console.log("遊戲初始化完成");
});
