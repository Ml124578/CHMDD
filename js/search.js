var enzymeData = {}; // 存储酶的名称数据

// 使用XMLHttpRequest加载JSON数据
function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', '../asset/json/enzymes.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState === 4 && xobj.status === 200) {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

// 处理加载的JSON数据
function processData(data) {
    enzymeData = JSON.parse(data);
    populateEnzymeSelect(); // 初始化酶选择下拉框
}

loadJSON(function (response) {
    processData(response);
});

function populateEnzymeSelect() {
    var enzymeSelect = document.getElementById("enzyme-select");
    enzymeSelect.innerHTML = ""; 

    // 添加默认选项
    var defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.text = "Select Bacterium";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    enzymeSelect.add(defaultOption);

    for (var enzyme in enzymeData) {
        var option = document.createElement("option");
        option.value = enzyme;
        option.text = enzyme;
        enzymeSelect.add(option);
    }

    // 添加事件监听器，当选择改变时更新相关酶下拉框
    enzymeSelect.addEventListener('change', populateRelatedEnzymes);
}

function populateRelatedEnzymes() {
    var enzymeSelect = document.getElementById("enzyme-select");
    var relatedEnzymeSelect = document.getElementById("related-enzyme-select");

    // 获取用户选择的细菌
    var selectedEnzyme = enzymeSelect.value;

    // 清空相关酶名称选择框
    relatedEnzymeSelect.innerHTML = "";

    // 添加默认选项
    var defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.text = "Select Enzyme";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    relatedEnzymeSelect.add(defaultOption);

    if (selectedEnzyme) {
        // 生成相关酶名称选项
        var relatedEnzymes = enzymeData[selectedEnzyme];
        for (var i = 0; i < relatedEnzymes.length; i++) {
            var enzymeDetails = relatedEnzymes[i].split(","); // 分割酶名称和PDB ID
            var enzymeName = enzymeDetails[0]; // 获取酶名称
            var option = document.createElement("option");
            option.value = enzymeName;
            option.text = enzymeName;
            relatedEnzymeSelect.add(option);
        }
    }
}

function searchGene() {
    var enzymeSelect = document.getElementById("enzyme-select");
    var relatedEnzymeSelect = document.getElementById("related-enzyme-select");

    // 获取用户选择的酶和相关酶名称
    var selectedEnzyme = enzymeSelect.value;
    var selectedRelatedEnzyme = relatedEnzymeSelect.value;

    // 检查是否选择了有效的选项
    if (!selectedEnzyme || !selectedRelatedEnzyme) {
        alert("Please select bacterium and enzyme");
        return;
    }

    var selectedPdbId = enzymeData[selectedEnzyme].find(function(item) {
        return item.startsWith(selectedRelatedEnzyme);
    }).split(',')[1]; // 获取PDB ID

    // 构建跳转链接，包含酶名称和PDB ID
    var redirectUrl = "./Enzyme.html?point=" + encodeURIComponent(selectedRelatedEnzyme + "," + selectedPdbId);

    // 执行页面跳转
    window.location.href = redirectUrl;
}

document.addEventListener("DOMContentLoaded", function() {
    // 等待数据加载完成后，populateEnzymeSelect会被调用
});
