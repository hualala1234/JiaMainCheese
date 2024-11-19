// Select all image containers
const imageContainers = document.querySelectorAll('.image-container');

// Add event listeners to each image container
imageContainers.forEach(container => {
    container.addEventListener('mouseenter', () => {
        container.classList.add('hovered'); // Add hovered class on mouse enter
    });

    container.addEventListener('mouseleave', () => {
        container.classList.remove('hovered'); // Remove hovered class on mouse leave
    });
});

// ja的
function pageLoad(){
    var slider = document.getElementById("myRange");
    var output = document.getElementById("sliderValue");
    // output.innerHTML = "$" + slider.value; // 顯示滑桿的默認值
    // 取得按鈕和容器的 DOM 元素
    const toggleButton = document.getElementById('toggleButton');
    console.log(toggleButton)
    const sliderContainer = document.getElementById('sliderContainer');
    // const slider = document.getElementById('myRange');
    // const sliderValue = document.getElementById('sliderValue');
    const closeButton = document.getElementById('closeButton');

    // 每次滑桿移動時更新顯示的滑桿值
    slider.oninput = function() {
        console.log('slider.onput')
        output.innerHTML = "$ " + this.value;

        // 每次滑桿移動時呼叫更新菜單顯示 
        updateMenuDisplay(this.value);
    }
    // 初始化菜單顯示
    updateMenuDisplay(this.value);

    // 當按下顯示/隱藏按鈕時，顯示 sliderContainer 並隱藏按鈕
    toggleButton.addEventListener('click', () => {
        sliderContainer.style.display = 'block';
        // toggleButton.style.display = 'none';
        console.log('button clicked');
    });

    // 當按下 X 按鈕時，隱藏 sliderContainer 並顯示按鈕
    closeButton.addEventListener('click', () => {
        sliderContainer.style.display = 'none';
        toggleButton.style.display = 'inline-block';
        console.log('x clicked');
    });

    // 2
    var slider2 = document.getElementById("myRange2");
    var output2 = document.getElementById("sliderValue2");
    // output.innerHTML = "$" + slider.value; // 顯示滑桿的默認值
    // 取得按鈕和容器的 DOM 元素
    const toggleButton2 = document.getElementById('toggleButton2');
    console.log(toggleButton)
    const sliderContainer2 = document.getElementById('sliderContainer2');
    // const slider = document.getElementById('myRange');
    // const sliderValue = document.getElementById('sliderValue');
    const closeButton2 = document.getElementById('closeButton2');

    // 每次滑桿移動時更新顯示的滑桿值
    slider2.oninput = function() {
        console.log('slider.onput')
        output2.innerHTML = "$ " + this.value;

        // 每次滑桿移動時呼叫更新菜單顯示 
        updateMenuDisplay(this.value);
    }
    // 初始化菜單顯示
    updateMenuDisplay(this.value);

    // 當按下顯示/隱藏按鈕時，顯示 sliderContainer 並隱藏按鈕
    toggleButton2.addEventListener('click', () => {
        const details = document.querySelector('details');
        // 收起 menu 并关闭 details
        if (details && details.hasAttribute('open')) {
            details.removeAttribute('open'); // 临时移除 open 属性
        }

        // 显示 sliderContainer2 并设置位置
        sliderContainer2.style.display = 'block';
        sliderContainer2.style.top = '10px';   // 设置到屏幕左上角
        sliderContainer2.style.left = '10px';
        console.log('toggleButton2 clicked');



        // sliderContainer2.style.display = 'float';
        // // toggleButton2.style.display = 'none';
        // console.log('button clicked');
    });

    // 當按下 X 按鈕時，隱藏 sliderContainer 並顯示按鈕
    closeButton2.addEventListener('click', () => {
        sliderContainer2.style.display = 'none';
        toggleButton2.style.display = 'inline-block';
        console.log('x clicked');
    });
   
}

function updateMenuDisplay(budget) {
    const prices = document.querySelectorAll('[data-value]'); // 使用 [data-value] 選取器抓取所有設有 data-value 的元素

    prices.forEach(price => {
        const itemValue = parseFloat(price.getAttribute('data-value'));

        // 檢查元素是否超出預算，並添加或移除 class
        if (itemValue > budget) {
            price.classList.add("word_color_change");
            console.log(itemValue)
            console.log(budget)
        } else {
            price.classList.remove("word_color_change");
        }
    });
}

$(document).ready(pageLoad);
// ja的
function toggleZoom(element){
    if (!element.classList.contains("zoomed")){
        element.classList.add("zoomed");
    }else{
        element.classList.remove("zoomed");
    }
}


// 由左至右動畫
window.addEventListener('load', function() {
    const blogs = document.querySelectorAll('.blog');
    blogs.forEach((blog, index) => {
        blog.style.animationDelay = `${index * 0.3}s`; // 每個元素延遲0.3秒
    });
});


//top
globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });
document.getElementById("title").scrollIntoView({ behavior: "smooth" });



