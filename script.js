// 机场自助终端交互脚本
// 开发者：段琼馨

// 等待页面完全加载
document.addEventListener('DOMContentLoaded', function() {
    console.log('页面加载完成，开始初始化交互功能...');
    
    // 获取DOM元素
    const colorBtn = document.getElementById('colorBtn');
    const toggleBtn = document.getElementById('toggleBtn');
    const countBtn = document.getElementById('countBtn');
    const speechBtn = document.getElementById('speechBtn');
    const colorBox = document.getElementById('colorBox');
    const welcomeText = document.getElementById('welcomeText');
    const counter = document.getElementById('counter');
    
    // 初始化计数器
    let clickCount = 0;
    
    // 1. 随机颜色按钮功能
    colorBtn.addEventListener('click', function() {
        console.log('点击了颜色按钮');
        
        // 生成随机颜色
        const colors = [
            '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', 
            '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F'
        ];
        
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        // 应用颜色到色块
        colorBox.style.backgroundColor = randomColor;
        colorBox.style.borderColor = randomColor;
        
        // 添加动画效果
        colorBox.style.transform = 'scale(1.1)';
        setTimeout(() => {
            colorBox.style.transform = 'scale(1)';
        }, 300);
        
        // 更新按钮文本
        colorBtn.innerHTML = `🎨 当前颜色: ${randomColor}`;
        
        console.log('应用颜色:', randomColor);
    });
    
    // 2. 显示/隐藏按钮功能
    let isTextVisible = false;
    
    toggleBtn.addEventListener('click', function() {
        console.log('点击了显示/隐藏按钮');
        
        if (isTextVisible) {
            // 隐藏文本
            welcomeText.classList.remove('show');
            toggleBtn.innerHTML = '👁️ 显示欢迎信息';
            console.log('隐藏欢迎信息');
        } else {
            // 显示文本
            welcomeText.classList.add('show');
            toggleBtn.innerHTML = '🙈 隐藏欢迎信息';
            console.log('显示欢迎信息');
        }
        
        isTextVisible = !isTextVisible;
    });
    
    // 3. 计数器按钮功能
    countBtn.addEventListener('click', function() {
        clickCount++;
        console.log('点击了计数器，当前次数:', clickCount);
        
        // 更新计数器显示
        counter.textContent = clickCount;
        
        // 添加动画效果
        counter.style.transform = 'scale(1.5)';
        countBtn.style.background = 'linear-gradient(90deg, #FF6B6B, #FF8E53)';
        
        setTimeout(() => {
            counter.style.transform = 'scale(1)';
            countBtn.style.background = 'linear-gradient(90deg, #667eea, #764ba2)';
        }, 300);
        
        // 更新按钮文本
        countBtn.innerHTML = `🔢 点击计数器：<span id="counter">${clickCount}</span>`;
        
        // 每5次显示特别消息
        if (clickCount % 5 === 0) {
            alert(`恭喜！您已点击 ${clickCount} 次！`);
        }
    });
    
    // 4. 语音播报按钮功能（Web Speech API）
    speechBtn.addEventListener('click', function() {
        console.log('点击了语音播报按钮');
        
        // 检查浏览器是否支持Web Speech API
        if ('speechSynthesis' in window) {
            // 创建语音实例
            const speech = new SpeechSynthesisUtterance();
            
            // 设置语音内容
            speech.text = '欢迎使用机场自助服务终端，请选择您需要的服务。';
            speech.lang = 'zh-CN';
            speech.rate = 1.0;  // 语速
            speech.pitch = 1.0; // 音高
            speech.volume = 1.0; // 音量
            
            // 语音开始时的效果
            speechBtn.innerHTML = '🔊 播报中...';
            speechBtn.disabled = true;
            speechBtn.style.opacity = '0.7';
            
            // 语音结束时的回调
            speech.onend = function() {
                console.log('语音播报结束');
                speechBtn.innerHTML = '🎤 语音播报完成';
                setTimeout(() => {
                    speechBtn.innerHTML = '🎤 语音播报（Web Speech API）';
                    speechBtn.disabled = false;
                    speechBtn.style.opacity = '1';
                }, 2000);
            };
            
            // 开始播报
            window.speechSynthesis.speak(speech);
            console.log('开始语音播报:', speech.text);
            
        } else {
            // 浏览器不支持语音API
            alert('您的浏览器不支持语音播报功能，请使用Chrome或Edge浏览器。');
            console.warn('浏览器不支持Web Speech API');
        }
    });
    
    // 初始化颜色
    colorBox.style.backgroundColor = '#f0f0f0';
    
    // 页面加载完成提示
    console.log('所有交互功能已初始化完成！');
    console.log('团队成员：段琼馨');
});
