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
    var output = document.getElementById("value");
    output.innerHTML = "$" + slider.value; // 顯示滑桿的默認值

    // 每次滑桿移動時更新顯示的滑桿值
    slider.oninput = function() {
        output.innerHTML = "$" + this.value;

        // 每次滑桿移動時呼叫更新菜單顯示 
        updateMenuDisplay(this.value);
    }
    // 初始化菜單顯示
    updateMenuDisplay(slider.value);

   
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
    if (!element.classList.contains("zoomed")) {
        element.classList.add("zoomed");
        
    }else {
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
