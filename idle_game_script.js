// --- 遊戲狀態 ---
let gameState = {
    resources: {
        energy: { amount: 10, rate: 0.1 }, // Base rate, will be increased by facilities
        ore: { amount: 0, rate: 0 },
        metal: { amount: 0, rate: 0 },
        crystal: { amount: 0, rate: 0 },
        darkMatter: { amount: 0, rate: 0 }
    },
    facilities: {
        // Add energyBonusPerLevel to each facility
        miningBeam: { level: 0, baseCost: 10, costResource: 'energy', produces: 'ore', baseProduction: 0.5, costMultiplier: 1.15, energyBonusPerLevel: 0.05 }, // +0.05 Energy/s per level
        smelter: { level: 0, baseCost: 50, costResource: 'ore', produces: 'metal', baseProduction: 0.5, costMultiplier: 1.20, energyBonusPerLevel: 0.08 }, // +0.08 Energy/s per level
        crystalLab: { level: 0, baseCost: 200, costResource: 'metal', produces: 'crystal', baseProduction: 0.5, costMultiplier: 1.25, energyBonusPerLevel: 0.12 }, // +0.12 Energy/s per level
        darkMatterCollector: { level: 0, baseCost: 1000, costResource: 'crystal', produces: 'darkMatter', baseProduction: 0.5, costMultiplier: 1.30, energyBonusPerLevel: 0.20 } // +0.20 Energy/s per level
    },
    lastUpdate: Date.now()
};

// --- Canvas & Animation Variables ---
let canvas, ctx; // Canvas and context
let stars = []; // Array to hold star objects
let ship = { x: 50, y: 75, width: 30, height: 15 }; // Simple ship properties
const numStars = 200; // Number of stars

// --- DOM 元素參照 --- (在 DOMContentLoaded 後獲取)
let domRefs = {};

// --- 遊戲設定 ---
const SAVE_KEY = 'cosmicPioneerSave_v2'; // Use a new key if structure changed significantly
const TICK_INTERVAL_MS = 100; // 遊戲邏輯更新頻率 (毫秒)
const SAVE_INTERVAL_MS = 30000; // 自動儲存頻率 (毫秒)

// --- 輔助函數 ---
// 格式化數字顯示 (例如 K, M, B)
function formatNumber(num) {
    if (num === 0) return '0.0';
    if (num < 1e3 && num > -1e3) return num.toFixed(1); // Show one decimal for small numbers

    const tier = Math.floor(Math.log10(Math.abs(num)) / 3);
    if (tier === 0) return num.toFixed(1);

    const suffix = [' K', ' M', ' B', ' T', ' Qa', ' Qi', ' Sx', ' Sp', ' Oc', ' No'][tier - 1]; // Extend suffixes if needed
    const scale = Math.pow(10, tier * 3);
    const scaled = num / scale;

    return scaled.toFixed(2) + (suffix || ''); // Ensure suffix exists or show nothing
}


// 計算設施成本
function getFacilityCost(facilityKey) {
    const facility = gameState.facilities[facilityKey];
    // Prevent potential issues if facility somehow doesn't exist
    if (!facility) return Infinity;
    return Math.floor(facility.baseCost * Math.pow(facility.costMultiplier, facility.level));
}

// 計算設施產量
function getFacilityProduction(facilityKey) {
    const facility = gameState.facilities[facilityKey];
     if (!facility) return 0;
    return facility.level * facility.baseProduction;
}


// --- Canvas 動畫函數 ---
function initializeStars() {
    if (!canvas) return;
    stars = [];
    const currentWidth = canvas.width || canvas.offsetWidth; // Use actual canvas size
    const currentHeight = canvas.height || canvas.offsetHeight;
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * currentWidth,
            y: Math.random() * currentHeight,
            size: Math.random() * 1.5 + 0.5, // Star size
            speed: Math.random() * 0.5 + 0.1 // Star speed
        });
    }
}

function updateStars() {
     if (!canvas) return;
     const currentWidth = canvas.width || canvas.offsetWidth;
     const currentHeight = canvas.height || canvas.offsetHeight;
    for (let i = 0; i < stars.length; i++) {
        stars[i].x -= stars[i].speed;
        if (stars[i].x < 0) {
            stars[i].x = currentWidth;
            stars[i].y = Math.random() * currentHeight; // Reset Y position too
        }
    }
}

function drawSpaceScene() {
    if (!ctx) return;
    const currentWidth = canvas.width;
    const currentHeight = canvas.height;

    // Clear canvas
    ctx.fillStyle = '#000010'; // Match CSS background
    ctx.fillRect(0, 0, currentWidth, currentHeight);

    // Draw stars
    ctx.fillStyle = '#FFFFFF';
    for (let i = 0; i < stars.length; i++) {
        ctx.beginPath();
        ctx.arc(stars[i].x, stars[i].y, stars[i].size, 0, Math.PI * 2);
        ctx.fill();
    }

    // Draw spaceship (simple triangle) - Ensure ship position is updated if needed
     ship.y = currentHeight / 2; // Keep centered vertically
    ctx.fillStyle = '#DDDDDD'; // Light grey ship
    ctx.beginPath();
    ctx.moveTo(ship.x, ship.y); // Nose
    ctx.lineTo(ship.x - ship.width, ship.y - ship.height / 2); // Top back
    ctx.lineTo(ship.x - ship.width, ship.y + ship.height / 2); // Bottom back
    ctx.closePath();
    ctx.fill();

    // Draw simple engine flame (yellow/orange triangle)
     ctx.fillStyle = '#FFA500'; // Orange
     ctx.beginPath();
     ctx.moveTo(ship.x - ship.width, ship.y - ship.height * 0.3);
     ctx.lineTo(ship.x - ship.width - 10, ship.y); // Flame point
     ctx.lineTo(ship.x - ship.width, ship.y + ship.height * 0.3);
     ctx.closePath();
     ctx.fill();
}

function animationLoop() {
    updateStars();
    drawSpaceScene();
    requestAnimationFrame(animationLoop); // Request next frame
}

// Adjust canvas size on resize
function resizeCanvas() {
     if (canvas && ctx) {
        // Set canvas internal size to match its display size
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        // Reinitialize stars for new dimensions
        initializeStars();
        // Redraw immediately after resize
        drawSpaceScene();
    }
}


// --- 核心遊戲邏輯 ---

// 更新所有資源的生產率
function calculateProductionRates() {
    // Reset rates for produced resources
    gameState.resources.ore.rate = 0;
    gameState.resources.metal.rate = 0;
    gameState.resources.crystal.rate = 0;
    gameState.resources.darkMatter.rate = 0;

    // Start with base energy rate
    let totalEnergyRate = 0.1; // Ship's base energy production

    // Calculate production rates AND sum energy bonuses
    for (const key in gameState.facilities) {
        const facility = gameState.facilities[key];
        // Check if facility data exists (robustness)
        if (!facility) continue;

        const production = getFacilityProduction(key);

        // Calculate production for the facility's primary resource
        if (facility.produces && gameState.resources[facility.produces]) {
            gameState.resources[facility.produces].rate += production;
        }

        // Add energy bonus from this facility's levels
        if (facility.energyBonusPerLevel) {
            totalEnergyRate += facility.level * facility.energyBonusPerLevel;
        }
    }

    // Set the final calculated energy rate
    gameState.resources.energy.rate = totalEnergyRate;
}

// 更新使用者介面
function updateUI() {
    if (!domRefs || Object.keys(domRefs).length === 0) return; // Don't run if refs aren't ready

    // Update資源顯示
    for (const key in gameState.resources) {
        if (domRefs[`${key}Amount`]) {
            domRefs[`${key}Amount`].textContent = formatNumber(gameState.resources[key].amount);
        }
         if (domRefs[`${key}Rate`]) {
            domRefs[`${key}Rate`].textContent = formatNumber(gameState.resources[key].rate);
        }
    }

    // Update設施顯示和按鈕狀態
    for (const key in gameState.facilities) {
         const facility = gameState.facilities[key];
         if (!facility) continue; // Skip if facility data missing

        const cost = getFacilityCost(key);
        const costResource = facility.costResource;
        const production = getFacilityProduction(key);
        // Check resource exists before accessing amount
        const canAfford = gameState.resources[costResource] && gameState.resources[costResource].amount >= cost;

        if (domRefs[`${key}Level`]) {
            domRefs[`${key}Level`].textContent = facility.level;
        }
         if (domRefs[`${key}Production`]) {
            // Include the resource name in production display for clarity
            domRefs[`${key}Production`].textContent = `${formatNumber(production)} ${facility.produces || 'N/A'}/s`;
        }
         if (domRefs[`${key}Cost`]) {
            // Include resource name in cost display
             domRefs[`${key}Cost`].textContent = `${formatNumber(cost)} ${costResource || 'N/A'}`;
        }
        if (domRefs[`build-${key}-btn`]) {
            domRefs[`build-${key}-btn`].disabled = !canAfford;
        }
    }
     // Update offline progress info if needed (usually done only on load)
     // domRefs.offlineProgressInfo might be updated here if needed continuously
}


// 處理購買/升級設施
function buyFacility(facilityKey) {
    const facility = gameState.facilities[facilityKey];
    if (!facility) return; // Safety check

    const cost = getFacilityCost(facilityKey);
    const costResource = facility.costResource;

    // Ensure the cost resource exists and amount is sufficient
    if (gameState.resources[costResource] && gameState.resources[costResource].amount >= cost) {
        gameState.resources[costResource].amount -= cost;
        facility.level++;
        calculateProductionRates(); // Recalculates ALL rates, including energy
        updateUI(); // Updates the display immediately
    } else {
        console.warn(`Cannot afford ${facilityKey}. Need ${cost} ${costResource}, have ${gameState.resources[costResource]?.amount ?? 0}`);
    }
}


// 遊戲主循環
function gameLoop() {
    const now = Date.now();
    // Prevent large time jumps if tab was inactive for a very long time without proper offline handling
    const deltaTime = Math.min((now - gameState.lastUpdate) / 1000, 3600); // Limit delta to 1 hour max

    // 生產資源
    for (const key in gameState.resources) {
        if (gameState.resources[key]) { // Ensure resource exists
             gameState.resources[key].amount += gameState.resources[key].rate * deltaTime;
        }
    }

    gameState.lastUpdate = now;

    // Update UI (can be throttled if performance becomes an issue)
    updateUI();
}


// --- 儲存與載入 ---
function saveGame() {
    try {
        // Add current timestamp to the saved state for accurate offline calculation
        gameState.lastUpdate = Date.now();
        localStorage.setItem(SAVE_KEY, JSON.stringify(gameState));
        // console.log("遊戲已儲存 at", new Date(gameState.lastUpdate).toLocaleTimeString()); // Optional detailed log
    } catch (e) {
        console.error("儲存失敗:", e);
        // Maybe alert the user or try fallback storage if critical
    }
}

function loadGame() {
     if (!domRefs.offlineProgressInfo) return; // Wait for DOM refs
     domRefs.offlineProgressInfo.textContent = ''; // Clear old message
    const savedData = localStorage.getItem(SAVE_KEY);
    if (savedData) {
        try {
            const savedState = JSON.parse(savedData);

            // Carefully merge loaded state to prevent errors from old save structures
            // Restore amounts first
             if (savedState.resources) {
                 for(const key in gameState.resources) { // Iterate over current game state keys
                     if (savedState.resources[key] && savedState.resources[key].hasOwnProperty('amount')) {
                         // Only restore if the key exists in both and saved state has 'amount'
                         gameState.resources[key].amount = Number(savedState.resources[key].amount) || 0; // Ensure it's a number
                     }
                 }
             }
             // Restore facility levels
             if (savedState.facilities) {
                 for (const key in gameState.facilities) { // Iterate over current game state keys
                     if (savedState.facilities[key] && savedState.facilities[key].hasOwnProperty('level')) {
                        // Only restore if the key exists in both and saved state has 'level'
                         gameState.facilities[key].level = Number(savedState.facilities[key].level) || 0; // Ensure it's a number
                     }
                 }
             }

            const now = Date.now();
            // Use saved lastUpdate timestamp, default to 'now' if missing (treat as no offline time)
            const lastSaveTime = Number(savedState.lastUpdate) || now;
            const timeOffline = (now - lastSaveTime) / 1000; // Seconds

            // *** CRUCIAL: Calculate rates based on loaded levels BEFORE calculating offline gains ***
            calculateProductionRates();

            if (timeOffline > 5) { // Only calculate if offline for more than 5 seconds
                 console.log(`離線時間: ${timeOffline.toFixed(0)} 秒`);
                 let offlineGainsText = "離線收益: ";
                 let gainedSomething = false;
                 for (const key in gameState.resources) {
                     if (gameState.resources[key]) { // Check if resource exists
                         const gain = gameState.resources[key].rate * timeOffline; // Use the just-calculated rates
                         if (gain > 0.1) { // Show gain only if noticeable
                             gameState.resources[key].amount += gain;
                             offlineGainsText += `${formatNumber(gain)} ${key}, `;
                             gainedSomething = true;
                         }
                     }
                 }
                 if (gainedSomething) {
                    domRefs.offlineProgressInfo.textContent = offlineGainsText.slice(0, -2); // Remove trailing ", "
                 } else {
                      domRefs.offlineProgressInfo.textContent = "無明顯離線收益。";
                 }
            } else if (timeOffline < 0) {
                 console.warn("Detected time travel! (Negative offline time)");
                 // Don't calculate negative gains
            }

            // Set lastUpdate to now after calculating offline gains
            gameState.lastUpdate = now;
            console.log("遊戲已載入");

        } catch (e) {
            console.error("載入存檔失敗, 可能存檔已損壞或版本不相容. 將開始新遊戲:", e);
            localStorage.removeItem(SAVE_KEY); // Remove corrupted save
            initializeNewGame(true); // Force initialize new game
        }
    } else {
        console.log("未找到存檔, 開始新遊戲");
         initializeNewGame(); // Initialize if no save exists
    }
     // Ensure rates and UI are correct after load/init/reset
     calculateProductionRates();
     updateUI();
}


function resetGame() {
    if (confirm("確定要重設所有遊戲進度嗎？此操作無法復原！")) {
        localStorage.removeItem(SAVE_KEY);
        initializeNewGame(true); // Mark as forced reset
        // Recalculate and update UI immediately after reset
        calculateProductionRates();
        updateUI();
        domRefs.offlineProgressInfo.textContent = '遊戲已重設。';
        console.log("遊戲已重設");
        // Optionally reload page: location.reload();
        // But immediate update might feel smoother
    }
}

// Initialize or Reset game state
function initializeNewGame(forceReset = false) {
     // Only reset if forced or no valid save exists (loadGame handles save check)
     if (forceReset || !localStorage.getItem(SAVE_KEY)) {
          gameState = {
                resources: {
                    energy: { amount: 10, rate: 0.1 },
                    ore: { amount: 0, rate: 0 },
                    metal: { amount: 0, rate: 0 },
                    crystal: { amount: 0, rate: 0 },
                    darkMatter: { amount: 0, rate: 0 }
                },
                facilities: {
                    miningBeam: { level: 0, baseCost: 10, costResource: 'energy', produces: 'ore', baseProduction: 0.5, costMultiplier: 1.15, energyBonusPerLevel: 0.05 },
                    smelter: { level: 0, baseCost: 50, costResource: 'ore', produces: 'metal', baseProduction: 0.5, costMultiplier: 1.20, energyBonusPerLevel: 0.08 },
                    crystalLab: { level: 0, baseCost: 200, costResource: 'metal', produces: 'crystal', baseProduction: 0.5, costMultiplier: 1.25, energyBonusPerLevel: 0.12 },
                    darkMatterCollector: { level: 0, baseCost: 1000, costResource: 'crystal', produces: 'darkMatter', baseProduction: 0.5, costMultiplier: 1.30, energyBonusPerLevel: 0.20 }
                },
                lastUpdate: Date.now()
           };
           console.log("初始化新遊戲狀態 (含能源加成)");
     }
     // Ensure lastUpdate is always current after init
     gameState.lastUpdate = Date.now();
}


// --- 初始化 ---
document.addEventListener('DOMContentLoaded', () => {
    // --- Get DOM References ---
    domRefs = {
        // Resources
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

        // Facilities - Levels
        miningBeamLevel: document.getElementById('miningBeam-level'),
        smelterLevel: document.getElementById('smelter-level'),
        crystalLabLevel: document.getElementById('crystalLab-level'),
        darkMatterCollectorLevel: document.getElementById('darkMatterCollector-level'),

        // Facilities - Production Displays
        miningBeamProduction: document.getElementById('miningBeam-production'),
        smelterProduction: document.getElementById('smelter-production'),
        crystalLabProduction: document.getElementById('crystalLab-production'),
        darkMatterCollectorProduction: document.getElementById('darkMatterCollector-production'),

        // Facilities - Cost Displays
        miningBeamCost: document.getElementById('miningBeam-cost'),
        smelterCost: document.getElementById('smelter-cost'),
        crystalLabCost: document.getElementById('crystalLab-cost'),
        darkMatterCollectorCost: document.getElementById('darkMatterCollector-cost'),

        // Facilities - Buttons
        'build-miningBeam-btn': document.getElementById('build-miningBeam-btn'),
        'build-smelter-btn': document.getElementById('build-smelter-btn'),
        'build-crystalLab-btn': document.getElementById('build-crystalLab-btn'),
        'build-darkMatterCollector-btn': document.getElementById('build-darkMatterCollector-btn'),

        // Control Buttons
         saveBtn: document.getElementById('save-btn'),
         resetBtn: document.getElementById('reset-btn')
    };

    // --- Initialize Canvas ---
    canvas = document.getElementById('space-canvas');
    if (canvas && canvas.getContext) {
        ctx = canvas.getContext('2d');
        // Set initial size and start animation
        resizeCanvas(); // Use resize function to set initial size correctly
        initializeStars();
        animationLoop(); // Start the animation loop
        window.addEventListener('resize', resizeCanvas); // Add resize listener
    } else {
        console.warn("Canvas not supported or element not found!");
        const canvasElement = document.getElementById('space-canvas');
        if (canvasElement) canvasElement.style.display = 'none'; // Hide canvas area if unusable
    }

    // --- Bind Event Listeners ---
    // Facility Buttons
    if (domRefs['build-miningBeam-btn']) domRefs['build-miningBeam-btn'].addEventListener('click', () => buyFacility('miningBeam'));
    if (domRefs['build-smelter-btn']) domRefs['build-smelter-btn'].addEventListener('click', () => buyFacility('smelter'));
    if (domRefs['build-crystalLab-btn']) domRefs['build-crystalLab-btn'].addEventListener('click', () => buyFacility('crystalLab'));
    if (domRefs['build-darkMatterCollector-btn']) domRefs['build-darkMatterCollector-btn'].addEventListener('click', () => buyFacility('darkMatterCollector'));

    // Control Buttons
    if (domRefs.saveBtn) domRefs.saveBtn.addEventListener('click', saveGame);
    if (domRefs.resetBtn) domRefs.resetBtn.addEventListener('click', resetGame);

    // --- Load Game State & Start Tickers ---
    loadGame(); // Load existing save or initialize new game
                 // loadGame now calls calculateProductionRates and updateUI

    // Start the main game loop AFTER loading/initialization
    setInterval(gameLoop, TICK_INTERVAL_MS);

    // Start automatic saving
    setInterval(saveGame, SAVE_INTERVAL_MS);

    // Save before unloading the page (best effort)
    window.addEventListener('beforeunload', saveGame);

    console.log("星際拓荒者 遊戲初始化完成。");
});
