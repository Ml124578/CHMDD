document.addEventListener("DOMContentLoaded", function () {
    var searchBox = document.getElementById("searchBox");
    var ulList = document.querySelector(".ul_list");
    var lastScrollTop = 0;
    var delta = 200; // 调整滚动阈值为 5
    var searchHeight = searchBox.offsetHeight;

    // 初始化 scroll-margin-top
    updateSectionMargin();

    // 监听窗口大小变化，重新计算 scroll-margin-top
    window.addEventListener('resize', updateSectionMargin);

    // 更新 <section> 和 .result 元素的边距以适应 <nav> 和 .search_fixed 元素的高度
    function updateSectionMargin() {
        // 获取 <nav> 元素的高度
        var navHeight = document.querySelector('nav').offsetHeight;
        // 获取 .search_fixed 元素
        var searchBox = document.querySelector('.search_fixed');
            // 获取 <section> 元素
    var section = document.querySelector('section.search_fixed');
    // 设置 <section> 元素的顶部边距为 <nav> 元素的高度
    section.style.marginTop = navHeight  + 'px';
        // 获取 .container-fluid 元素
        var containerResult = document.querySelector('.result');
        // 获取 .ul_list 元素
        var ulList = document.querySelector('.ul_list');

        // 检查搜索栏是否隐藏
        if (searchBox.classList.contains('hidden')) {       
            // 搜索栏隐藏，margin-top 仅为 navHeight
            containerResult.style.marginTop = navHeight + 'px';
            // 调整 ul_list 的 top 为 navHeight
            ulList.style.top = (navHeight + searchHeight) + 'px';
        } else {
            // 搜索栏显示，margin-top 为 navHeight + searchHeight
            containerResult.style.marginTop = (navHeight + searchHeight) + 'px';
            // 调整 ul_list 的 top 为 navHeight + searchHeight
            ulList.style.top = (navHeight + searchHeight) + 'px';
        }
    }
    window.addEventListener("scroll", function () {
        var scrollTop = window.scrollY || document.documentElement.scrollTop;

        // 确保滚动超过阈值才触发隐藏/显示
        if (Math.abs(lastScrollTop - scrollTop) <= delta)
            return;

        if (scrollTop > lastScrollTop && scrollTop > searchHeight){
            // 向下滚动且超过搜索栏高度，隐藏搜索栏和 ul_list
            searchBox.classList.add("hidden");
            ulList.classList.add("hidden");
        } else {
            // 向上滚动，显示搜索栏和 ul_list
            if(scrollTop + window.innerHeight < document.body.scrollHeight) {
                searchBox.classList.remove("hidden");
                ulList.classList.remove("hidden");
            }
        }

        // 调用更新边距的函数
        updateSectionMargin();

        lastScrollTop = scrollTop;
    });
});





//===============================================================================sd_view_card
document.addEventListener("DOMContentLoaded", function () {
    // 获取所有的导航标签
    var tabs = document.querySelectorAll('.nav_3d .nav-link');

    // 添加点击事件监听器
    tabs.forEach(function (tab) {
        tab.addEventListener('click', function (e) {
            e.preventDefault();

            // 获取目标 card-body 的 ID
            var targetId = this.getAttribute('data-target');

            // 隐藏所有的 card-body
            document.querySelectorAll('.card-body_3d').forEach(function (body) {
                body.style.display = 'none';
            });

            // 显示目标 card-body
            document.getElementById(targetId).style.display = 'block';
        });
    });
});


//侧栏导航
$(document).ready(function () {
    var navbarHeight = $('.navbar').outerHeight();
    var searchHeight = $('.search_fixed').outerHeight();
    // Function to handle scroll to card
    function scrollToCard(cardId) {
        // 减去导航栏高度
        var targetOffset = $(cardId).offset().top - navbarHeight - searchHeight;

        $('html, body').scrollTop(targetOffset);
    }

    $('.list-group-item').on('click', function () {
        $('.list-group-item').removeClass('active_list');
        $(this).addClass('active_list');

        // 获取目标卡片的ID
        var targetCardId = $(this).data('target');

        // 滚动到选定的卡片
        scrollToCard(targetCardId);
    });
});

//==================================================================================活性位点
$(document).ready(function () {
    let bodyPoint = document.body.getAttribute('point');
    let [mlr_style, id] = bodyPoint.split(',');
    let container = document.getElementById('Catalytic_mechanism_display');
    let link1 = document.getElementById('1th_line_dl1');
    link1.href = link1.href.replace('xxzx', id);

    let link2 = document.getElementById('1th_line_dl2');
    link2.href = link2.href.replace('xxzx', id);



    let svgString_MlrB = `<svg class="chemical-structure-MlrB" width="100%" height="100%" viewBox="0 0 1200 600">
    <rect x="0" y="-80" width="520" height="300" fill="#b1e6ca" />
    <rect x="0" y="225" width="250" height="110" fill="#fcfdb1" />
    <rect x="250" y="225" width="270" height="110" fill="#d1c0e0" />
    <text x="370" y="285" font-size="15" font-weight="bold" fill="black">Tetrapeptide</text>
    <g transform="rotate(10, 137.5, 147.5)">
        <line x1="250" y1="180" x2="195" y2="175" stroke="green" stroke-width="2" stroke-dasharray="5,5"/>
        <text x="173" y="176" font-size="18" font-weight="bold" fill="blue">N</text>
        <line x1="175" y1="180" x2="132" y2="215" stroke="black" stroke-width="2"/>
        <line x1="170" y1="177" x2="135" y2="205" stroke="black" stroke-width="2"/>
        <line x1="132" y1="215" x2="92" y2="181" stroke="black" stroke-width="2"/>
        <text x="65" y="178" font-size="18" font-weight="bold" fill="blue">HN</text>
        <line x1="180" y1="160" x2="165" y2="120" stroke="black" stroke-width="2"/>
        <line x1="165" y1="120" x2="105" y2="120" stroke="black" stroke-width="2"/>
        <line x1="105" y1="120" x2="88" y2="160" stroke="black" stroke-width="2"/>
        <line x1="160" y1="125" x2="110" y2="125" stroke="black" stroke-width="2"/>
        <line x1="105" y1="120" x2="68" y2="70" stroke="black" stroke-width="2"/>
        </g>
 <g transform="rotate(-60, 68, 52.5)">
        <line x1="68" y1="70" x2="72" y2="66" stroke="black" stroke-width="2"/>
        <line x1="72" y1="66" x2="76" y2="72" stroke="black" stroke-width="2"/>
        
        <line x1="76" y1="72" x2="82" y2="64" stroke="black" stroke-width="2"/>
        <line x1="82" y1="64" x2="88" y2="74" stroke="black" stroke-width="2"/>
        
        <line x1="88" y1="74" x2="94" y2="66" stroke="black" stroke-width="2"/>
        <line x1="94" y1="66" x2="100" y2="78" stroke="black" stroke-width="2"/>

        <line x1="100" y1="78" x2="106" y2="70" stroke="black" stroke-width="2"/>
        <line x1="106" y1="70" x2="112" y2="82" stroke="black" stroke-width="2"/>
        
        <line x1="112" y1="82" x2="118" y2="74" stroke="black" stroke-width="2"/>
    </g>
    <text x="248" y="205" font-size="18" font-weight="bold" fill="blue">H</text>
    <line x1="265" y1="197" x2="310" y2="197" stroke="black" stroke-width="2"/>
    <text x="313" y="205" font-size="18" font-weight="bold" fill="red">O</text>
    <line x1="320" y1="187" x2="325" y2="140" stroke="black" stroke-width="2"/>
    <g transform="rotate(-25, 325, 140)">
    <line x1="325" y1="140" x2="329" y2="136" stroke="black" stroke-width="2"/>
    <line x1="329" y1="136" x2="333" y2="142" stroke="black" stroke-width="2"/>
    
    <line x1="333" y1="142" x2="339" y2="134" stroke="black" stroke-width="2"/>
    <line x1="339" y1="134" x2="345" y2="144" stroke="black" stroke-width="2"/>
    
    <line x1="345" y1="144" x2="351" y2="136" stroke="black" stroke-width="2"/>
    <line x1="351" y1="136" x2="357" y2="148" stroke="black" stroke-width="2"/>
    
    <line x1="357" y1="148" x2="363" y2="140" stroke="black" stroke-width="2"/>
    <line x1="363" y1="140" x2="369" y2="152" stroke="black" stroke-width="2"/>
    
    <line x1="369" y1="152" x2="375" y2="144" stroke="black" stroke-width="2"/>
</g>
<text x="120" y="30" font-size="18" font-weight="bold" fill="blue" class="H3"></text>
<text x="380" y="132" font-size="18" font-weight="bold" fill="red" class="S"></text>
<text x="420" y="92" font-size="18" font-weight="bold" fill="red" class="K"></text>
<text x="470" y="130" font-size="18" font-weight="bold" fill="red" class="D1"></text>
<text x="450" y="165" font-size="18" font-weight="bold" fill="red" class="N1"></text>
<text x="370" y="170" font-size="18" font-weight="bold" fill="red" class="Y"></text>
<text x="160" y="250" font-size="18" font-weight="bold" fill="red">R1</text>
<text x="160" y="325" font-size="18" font-weight="bold" fill="red">H</text>
<text x="210" y="287" font-size="18" font-weight="bold" fill="red">N</text>
<line x1="185" y1="248" x2="210" y2="270" stroke="black" stroke-width="2"/>
<line x1="180" y1="310" x2="208" y2="290" stroke="black" stroke-width="2"/>
<text x="330" y="325" font-size="18" font-weight="bold" fill="red">O</text>
<text x="330" y="250" font-size="18" font-weight="bold" fill="red">R2</text>
<line x1="290" y1="280" x2="330" y2="250" stroke="black" stroke-width="2"/>
<line x1="285" y1="280" x2="327" y2="315" stroke="black" stroke-width="2"/>
<line x1="296" y1="275" x2="335" y2="307" stroke="black" stroke-width="2"/>
<line x1="225" y1="280" x2="290" y2="280" stroke="black" stroke-width="2"/>
<circle cx="290" cy="280" r="10" fill="green" fill-opacity="0.5" />
  <path d="M 185 170 C 200 130, 230 150, 245 175" stroke="red" stroke-width="2" fill="none" marker-end="url(#arrowhead1)" />
<defs>
        <marker id="arrowhead1" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="red" />
        </marker>
</defs>
 <path d="M 320 210 Q 260 230, 280 260" stroke="red" stroke-width="4" fill="none" marker-end="url(#arrowhead2)" />
<defs>
    <marker id="arrowhead2" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
        <polygon points="0 0, 6 2, 0 4" fill="red" stroke-width="1"/>
    </marker>
</defs>

 <path d="M 280 285 Q 250 300, 310 315" stroke="red" stroke-width="2" fill="none" marker-end="url(#arrowhead3)" />
    <defs>
        <marker id="arrowhead3" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="red" />
</marker>
</defs>
<text x="10" y="370" font-size="16" fill="black" font-weight="bold">
    <tspan x="10" dy="0" font-size="19">Acylation:</tspan>
    <tspan x="10" dy="30"><tspan fill="blue" class="H3"></tspan> abstracts the hydroxyl hydrogen from <tspan fill="red" class="S"></tspan>,</tspan>
    <tspan x="10" dy="20">enabling the hydroxyl group of <tspan fill="red" class="S"></tspan> to act as a nucleophile</tspan>
    <tspan x="10" dy="20">that attacks the carbonyl carbon of the peptide bond in microcystins</tspan>
    <tspan x="10" dy="20">(Ala-Leu in MC-LR or Ala-Arg in MC-RR),</tspan>
    <tspan x="10" dy="20">forming a tetrahedral intermediate.</tspan>
</text>




<rect x="680" y="-80" width="520" height="300" fill="#b1e6ca" />

<rect x="990" y="225" width="270" height="110" fill="#d1c0e0" />
<text x="1070" y="285" font-size="15" font-weight="bold" fill="black">Tetrapeptide</text>
<g transform="rotate(10, 817.5, 147.5)">
    <line x1="875" y1="230" x2="863" y2="180" stroke="green" stroke-width="2" stroke-dasharray="5,5"/>
    <text x="853" y="176" font-size="18" font-weight="bold" fill="blue">N</text>
    <line x1="855" y1="180" x2="812" y2="215" stroke="black" stroke-width="2"/>
    <line x1="850" y1="177" x2="815" y2="205" stroke="black" stroke-width="2"/>
    <line x1="812" y1="215" x2="772" y2="181" stroke="black" stroke-width="2"/>
    <text x="745" y="178" font-size="18" font-weight="bold" fill="blue">HN</text>
    <line x1="860" y1="160" x2="845" y2="120" stroke="black" stroke-width="2"/>
    <line x1="845" y1="120" x2="785" y2="120" stroke="black" stroke-width="2"/>
    <line x1="785" y1="120" x2="768" y2="160" stroke="black" stroke-width="2"/>
    <line x1="840" y1="125" x2="790" y2="125" stroke="black" stroke-width="2"/>
    <line x1="785" y1="120" x2="748" y2="70" stroke="black" stroke-width="2"/>
</g>

<g transform="rotate(-60, 748, 52.5)">
    <line x1="748" y1="70" x2="752" y2="66" stroke="black" stroke-width="2"/>
    <line x1="752" y1="66" x2="756" y2="72" stroke="black" stroke-width="2"/>
    <line x1="756" y1="72" x2="762" y2="64" stroke="black" stroke-width="2"/>
    <line x1="762" y1="64" x2="768" y2="74" stroke="black" stroke-width="2"/>
    <line x1="768" y1="74" x2="774" y2="66" stroke="black" stroke-width="2"/>
    <line x1="774" y1="66" x2="780" y2="78" stroke="black" stroke-width="2"/>
    <line x1="780" y1="78" x2="786" y2="70" stroke="black" stroke-width="2"/>
    <line x1="786" y1="70" x2="792" y2="82" stroke="black" stroke-width="2"/>
    <line x1="792" y1="82" x2="798" y2="74" stroke="black" stroke-width="2"/>
</g>

<text x="853" y="255" font-size="18" font-weight="bold" fill="black">H</text>
<text x="993" y="205" font-size="18" font-weight="bold" fill="red">O</text>
<line x1="1000" y1="187" x2="1005" y2="140" stroke="black" stroke-width="2"/>
<line x1="1000" y1="210" x2="998" y2="280" stroke="black" stroke-width="2"/>
<g transform="rotate(-25, 1005, 140)">
    <line x1="1005" y1="140" x2="1009" y2="136" stroke="black" stroke-width="2"/>
    <line x1="1009" y1="136" x2="1013" y2="142" stroke="black" stroke-width="2"/>
    <line x1="1013" y1="142" x2="1019" y2="134" stroke="black" stroke-width="2"/>
    <line x1="1019" y1="134" x2="1025" y2="144" stroke="black" stroke-width="2"/>
    <line x1="1025" y1="144" x2="1031" y2="136" stroke="black" stroke-width="2"/>
    <line x1="1031" y1="136" x2="1037" y2="148" stroke="black" stroke-width="2"/>
    <line x1="1037" y1="148" x2="1043" y2="140" stroke="black" stroke-width="2"/>
    <line x1="1043" y1="140" x2="1049" y2="152" stroke="black" stroke-width="2"/>
    <line x1="1049" y1="152" x2="1055" y2="144" stroke="black" stroke-width="2"/>
</g>
<text x="800" y="30" font-size="18" font-weight="bold" fill="blue" class="H3"></text>
<text x="1060" y="132" font-size="18" font-weight="bold" fill="red" class="S"></text>
<text x="1100" y="92" font-size="18" font-weight="bold" fill="red" class="K"></text>
<text x="1150" y="130" font-size="18" font-weight="bold" fill="red" class="D1"></text>
<text x="1130" y="165" font-size="18" font-weight="bold" fill="red" class="N1"></text>
<text x="1050" y="170" font-size="18" font-weight="bold" fill="red" class="Y"></text>
<text x="890" y="340" font-size="18" font-weight="bold" fill="black">H</text>
<text x="900" y="290" font-size="18" font-weight="bold" fill="red">O</text>
<line x1="870" y1="255" x2="903" y2="275" stroke="black" stroke-width="2"/>
<line x1="897" y1="325" x2="906" y2="292" stroke="black" stroke-width="2"/>
<g transform="translate(30, 0)">
<text x="1010" y="325" font-size="18" font-weight="bold" fill="red">O</text>
<text x="1010" y="250" font-size="18" font-weight="bold" fill="red">R2</text>
<line x1="970" y1="280" x2="1010" y2="250" stroke="black" stroke-width="2"/>
<line x1="968" y1="280" x2="1010" y2="314" stroke="black" stroke-width="2"/>
<line x1="976" y1="275" x2="1015" y2="307" stroke="black" stroke-width="2"/>
<circle cx="970" cy="280" r="10" fill="green" fill-opacity="0.5" />
</g>
 <g transform="translate(680, 0)">
  <path d="M 185 180 C 190 182, 220 190, 200 225" stroke="red" stroke-width="2" fill="none" marker-end="url(#arrowhead4)" />
<defs>
        <marker id="arrowhead4" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="red" />
        </marker>
</defs>
 <path d="M 310 285 Q 280 300, 335 317" stroke="red" stroke-width="2" fill="none" marker-end="url(#arrowhead5)" />
    <defs>
        <marker id="arrowhead5" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="red" />
</marker>
</defs>
 <path d="M 240 280 Q 280 280, 285 280" stroke="red" stroke-width="3" fill="none" marker-end="url(#arrowhead6)" />
    <defs>
        <marker id="arrowhead6" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto" >
            <polygon points="0 0, 10 3.5, 0 7" fill="red" stroke-width="1"/>
</marker>
</defs>
 </g>
<text x="600" y="200" font-size="18" font-weight="bold" fill="red">H<tspan font-size="12" >2</tspan>O</text>
  <polyline points="620,205 620,280 800,280" stroke="red" stroke-width="1.5" fill="none" marker-end="url(#arrowhead7)" stroke-dasharray="5,5" />
    <defs>
        <marker id="arrowhead7" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto" >
            <polygon points="0 0, 10 3.5, 0 7" fill="red" stroke-width="1"/>
</marker>
</defs>
<circle cx="885" cy="290" r="55" fill="none" stroke="red" stroke-dasharray="5,5" stroke-width="1.5"/>
<text x="620" y="370" font-size="16" fill="black" font-weight="bold">
    <tspan x="620" dy="0" font-size="19">Deacylation:</tspan>
    <tspan x="620" dy="30">A water molecule(<tspan fill="red" class="">H<tspan font-size="12" >2</tspan>0</tspan>) enters the reaction, where <tspan fill="blue" class="H3"></tspan> abstracts a</tspan>
    <tspan x="620" dy="20">proton, generating a hydroxyl ion that attacks the carbonyl carbon of</tspan>
    <tspan x="620" dy="20">the acyl-enzyme complex, forming a second tetrahedral intermediate,</tspan>
    <tspan x="620" dy="20">followed by proton transfer to <tspan fill="red" class="S"></tspan>, releasing the tetrapeptide product.</tspan>
</text>
</svg>`;


    let svgString_MlrA = `
    <svg class="chemical-structure-MlrA" width="100%" height="100%" viewBox="0 0 1400 570">
    <text x="150" y="100" font-size="18" font-weight="bold">MC</text>
    <line x1="210" y1="120" x2="230" y2="70" stroke="black" stroke-width="2"/>
    <line x1="230" y1="70" x2="280" y2="70" stroke="black" stroke-width="2"/>
    <path d="M 180 80
           Q 183.3 60, 186.6 70 
           T 193.3 70 
           Q 196.6 60, 200 70 
           T 206.6 70 
           Q 210 60, 213.3 70 
           T 220 70
           Q 223.3 60, 230 70"
        stroke="black" fill="transparent" stroke-width="2"
        transform="rotate(50, 230, 70)" />
    <text x="285" y="75" font-size="18" font-weight="bold" fill="blue">Arg</text>
    <text x="198" y="135" font-size="18" font-weight="bold">C</text>
    <line x1="127" y1="140" x2="195" y2="130" stroke="black" stroke-width="2" />
    <line x1="217" y1="132" x2="268" y2="170" stroke="black" stroke-width="2"/>
    <line x1="212" y1="140" x2="262" y2="179" stroke="black" stroke-width="2"/>
    <text x="110" y="148" font-size="18" font-weight="bold" fill="blue">N</text>
    <line x1="115" y1="130" x2="95" y2="90" stroke="black" stroke-width="2"/>
    <text x="90" y="95" font-size="18" font-weight="bold"  transform="rotate(340, 80, 100)">H</text>
    <line x1="110" y1="148" x2="80" y2="179" stroke="black" stroke-width="2"/>
    <line x1="80" y1="179" x2="80" y2="229" stroke="black" stroke-width="2"/>
    <path d="M 180 80
           Q 183.3 60, 186.6 70 
           T 193.3 70 
           Q 196.6 60, 200 70 
           T 206.6 70 
           Q 210 60, 213.3 70 
           T 220 70
           Q 223.3 60, 230 70"
        stroke="black" fill="transparent" stroke-width="2"
        transform="rotate(50, 38, -38)" />
        <text x="55" y="250" font-size="18" font-weight="bold" fill="#FFCC00">Adda</text>
        <text x="265" y="185" font-size="18" font-weight="bold" fill="red">O</text>
        <line x1="285" y1="178" x2="340" y2="178" stroke="green" stroke-width="2" stroke-dasharray="5,5"/>
        <text x="340" y="185" font-size="18" font-weight="bold">H</text>
        <line x1="357" y1="178" x2="392" y2="195" stroke="black" stroke-width="2"/>
        <text x="395" y="205" font-size="18" font-weight="bold" fill="blue">N</text>
        <line x1="357" y1="178" x2="392" y2="195" stroke="black" stroke-width="2"/>
        <line x1="415" y1="195" x2="458" y2="178" stroke="black" stroke-width="2"/>
        <line x1="403" y1="208" x2="403" y2="255" stroke="black" stroke-width="2"/>
        <text x="395" y="270" font-size="18" font-weight="bold">H</text>
        <text x="380" y="180" font-size="18" font-weight="bold">(ND2)</text>
        <line x1="458" y1="178" x2="478" y2="135" stroke="black" stroke-width="2"/>
        <line x1="478" y1="135" x2="518" y2="125" stroke="black" stroke-width="2"/>
        <line x1="456" y1="178" x2="490" y2="205" stroke="black" stroke-width="2"/>
        <line x1="460" y1="171" x2="496" y2="199" stroke="black" stroke-width="2"/>
        <text x="493" y="215" font-size="18" font-weight="bold" fill="red">O</text>
        <text x="423" y="250" font-size="18" font-weight="bold" fill="#db029a" class='N'>(Oxy)</text>
        <text x="423" y="280" font-size="18" font-weight="bold" fill="#db029a" class='H1'>(Oxy)</text>
        <path d="M 195 152 Q 150 270 255 305" stroke="black" fill="none" stroke-width="2" />
        <text x="258" y="310" font-size="18" font-weight="bold" fill="red">O</text>
        <polygon points="202,138 197,163 185,158" fill="black" />
        <line x1="258" y1="310" x2="220" y2="345" stroke="black" stroke-width="2"/>
        <text x="205" y="360" font-size="18" font-weight="bold">H</text>
        <line x1="205" y1="360" x2="160" y2="390" stroke="green" stroke-width="2" stroke-dasharray="5,5"/>
        <text x="130" y="402" font-size="18" font-weight="bold" fill="red">HO</text>
        <line x1="155" y1="405" x2="175" y2="450" stroke="black" stroke-width="2"/>
        <line x1="173" y1="445" x2="210" y2="445" stroke="black" stroke-width="2"/>
        <line x1="175" y1="450" x2="210" y2="450" stroke="black" stroke-width="2"/>
        <line x1="175" y1="450" x2="135" y2="480" stroke="black" stroke-width="2"/>
        <text x="210" y="455" font-size="18" font-weight="bold" fill="red">O</text>
        <text x="230" y="435" font-size="18" font-weight="bold" fill="#db029a" class='W1'></text>
        <text x="190" y="485" font-size="18" font-weight="bold" fill="#db029a" class='W2'></text>
        <line x1="135" y1="480" x2="95" y2="480" stroke="black" stroke-width="2"/>
        <line x1="95" y1="480" x2="70" y2="450" stroke="black" stroke-width="2"/>
        <text x="100" y="460" font-size="18" font-weight="bold" fill="#db029a" class='E'></text>
        <line x1="272" y1="310" x2="310" y2="345" stroke="black" stroke-width="2"/>
        <text x="310" y="360" font-size="18" font-weight="bold">H</text>
        <line x1="325" y1="360" x2="370" y2="390" stroke="green" stroke-width="2" stroke-dasharray="5,5"/>
        <text x="372" y="400" font-size="18" font-weight="bold" fill="blue">N</text>
        <line x1="390" y1="385" x2="433" y2="350" stroke="black" stroke-width="2"/>
        <line x1="395" y1="388" x2="430" y2="360" stroke="black" stroke-width="2"/>
        <line x1="433" y1="350" x2="475" y2="384" stroke="black" stroke-width="2"/>
        <text x="477" y="400" font-size="18" font-weight="bold" fill="blue">NH</text>
        <line x1="385" y1="405" x2="400" y2="445" stroke="black" stroke-width="2"/>
        <line x1="400" y1="445" x2="460" y2="445" stroke="black" stroke-width="2"/>
        <line x1="460" y1="445" x2="480" y2="405" stroke="black" stroke-width="2"/>
        <line x1="405" y1="440" x2="455" y2="440 " stroke="black" stroke-width="2"/>
        <line x1="460" y1="445" x2="480" y2="485" stroke="black" stroke-width="2"/>
        <line x1="480" y1="485" x2="530" y2="485" stroke="black" stroke-width="2"/>
        <text x="485" y="475" font-size="18" font-weight="bold" fill="#db029a" class='H2'></text>
    <circle cx="590" cy="100" r="4" fill="black" />  
    <circle cx="590" cy="150" r="4" fill="black" /> 
    <circle cx="590" cy="200" r="4" fill="black" /> 
<text x="600" y="105" font-size="16" fill="black" font-weight="bold">
    <tspan x="600" dy="0"><tspan fill="#db029a" class="E"></tspan>and <tspan fill="#db029a" class="H2"></tspan> activate a water molecule facilitating a nucleophilic</tspan>
    <tspan x="600" dy="20"> attack on the Adda-Arg peptide bond of MC-LR.</tspan>
    <tspan x="600" dy="30"><tspan fill="#db029a" class="H1"></tspan>and <tspan fill="#db029a" class="N"></tspan> help stabilize the transition state by forming an oxyanion</tspan>
    <tspan x="600" dy="20"> hole, ensuring the efficient progression of the reaction.</tspan>
    <tspan x="600" dy="30"><tspan fill="#db029a" class="W2"></tspan>and <tspan fill="#db029a" class="W1"></tspan> may further accelerate the reaction rate by influencing</tspan>
    <tspan x="600" dy="20"> the pKa of <tspan fill="#db029a" class="E"></tspan>.</tspan>
</text>
</svg>`;
    let svgString_MlrC = `
    <svg class="chemical-structure-MlrC" width="100%" height="100%" viewBox="100 40 900 210">
    <text x="260" y="75" font-size="12" fill="#db029a" font-weight="bold" class="E1"></text>
    <text x="290" y="75" font-size="12" fill="#db029a" font-weight="bold">(Oxy)</text>
    <text x="180" y="70" font-size="12" fill="#db029a" font-weight="bold" class="H1"></text>
    <text x="130" y="120" font-size="12" fill="#db029a" font-weight="bold" class="D"></text>
    <text x="150" y="180" font-size="12" fill="#db029a" font-weight="bold" class="H2"></text>
    <text x="441" y="152" font-size="12" fill="#db029a" font-weight="bold" class="E2"></text>

 
    <line x1="260" y1="75" x2="230" y2="110" stroke="black" stroke-width="2" stroke-dasharray="2,5" />
    <line x1="195" y1="70" x2="210" y2="105" stroke="black" stroke-width="2" stroke-dasharray="2,5" />
    <line x1="170" y1="170" x2="210" y2="135" stroke="black" stroke-width="2" stroke-dasharray="2,5" />
    <line x1="160" y1="115" x2="205" y2="120" stroke="black" stroke-width="2" stroke-dasharray="2,5" />
    <defs>
        <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style="stop-color:rgb(255, 255, 255); stop-opacity:0" />
          <stop offset="70%" style="stop-color:rgba(255, 0, 212, 0.776); stop-opacity:1" />
        </radialGradient>
    </defs>
    <circle cx="220" cy="120" r="15" fill="url(#grad1)" />
    <text x="211" y="125" font-size="12" fill="black" font-weight="bold">ZN</text>
    <text x="411" y="109" font-size="12" fill="black" font-weight="bold">O</text>
    <text x="385" y="152" font-size="12" fill="black" font-weight="bold">O</text>
    <text x="411" y="135" font-size="12" fill="black" font-weight="bold">C</text>
    <line x1="414" y1="110" x2="414" y2="125" stroke="black" stroke-width="2" />
    <line x1="418" y1="110" x2="418" y2="125" stroke="black" stroke-width="2" />
    <line x1="411" y1="135" x2="395" y2="145" stroke="black" stroke-width="2" />
    <line x1="421" y1="135" x2="435" y2="145" stroke="black" stroke-width="2" />
    <text x="290" y="150" font-size="12" fill="black" font-weight="bold">O</text>
    <text x="300" y="121" font-size="12" fill="black" font-weight="bold">H</text>
    <text x="321" y="148" font-size="12" fill="black" font-weight="bold">H</text>
    <line x1="296" y1="139" x2="301" y2="122" stroke="black" stroke-width="2" />
    <line x1="301" y1="145" x2="320" y2="144" stroke="black" stroke-width="2" />
    <text x="270" y="210" font-size="12" fill="red" font-weight="bold">C</text>
    <text x="270" y="180" font-size="12" fill="red" font-weight="bold">O</text>
    <text x="300" y="210" font-size="12" fill="red" font-weight="bold">N</text>
    <text x="300" y="180" font-size="12" fill="red" font-weight="bold">H</text>
    <line x1="272" y1="199" x2="272" y2="182" stroke="red" stroke-width="2" />
    <line x1="277" y1="199" x2="277" y2="182" stroke="red" stroke-width="2" />
    <line x1="280" y1="206" x2="299" y2="206" stroke="red" stroke-width="2" />
    <line x1="305" y1="199" x2="305" y2="182" stroke="red" stroke-width="2" />
    <line x1="270" y1="210" x2="255" y2="220" stroke="black" stroke-width="2" />
    <text x="220" y="225" font-size="12" fill="#FFCC00" font-weight="bold">Adda</text>
    <line x1="311" y1="210" x2="325" y2="221" stroke="black" stroke-width="2" />
    <text x="328" y="225" font-size="12" fill="#0071b6" font-weight="bold">N-terminal product</text>
    <path d="M 270 190 Q 230 190 226 150" stroke="black" fill="none" stroke-width="2" />
    <polygon points="221,150 231,150 226,135" fill="black" />
    <path d="M 294 152 Q 300 170 288 192" stroke="black" fill="none" stroke-width="2" />
    <polygon points="285,185 295,190 283,200" fill="black" />
    <path d="M 385 152 Q 360 180 340 155" stroke="black" fill="none" stroke-width="2" />
    <polygon points="346,153 339,163 330,148" fill="black" />
<text x="550" y="70" font-size="11" fill="black" font-weight="bold">
    <tspan x="550" dy="0">Active Center: consists of a <tspan fill="red">zinc ion</tspan> coordinated by four key residues</tspan>
    <tspan x="623" dy="15">(<tspan fill="#db029a" class="E1"></tspan>, <tspan fill="#db029a" class="D"></tspan>, <tspan fill="#db029a" class="H1"></tspan>, <tspan fill="#db029a" class="H1"></tspan>) and <tspan fill="red">one water molecule.</tspan></tspan>
</text>
<text x="550" y="110" font-size="11" fill="black" font-weight="bold">①
    <tspan fill="#db029a" class="E2"></tspan> acts as a base catalyst, removing a proton from the water molecule
    <tspan x="550" dy="15">bound to the zinc ion. This creates a zinc-hydroxyl nucleophile that attacks the</tspan>
    <tspan x="550" dy="15">carbonyl carbon of the substrate's peptide bond, leading to cleavage and</tspan>
    <tspan x="550" dy="15">forming a tetrahedral intermediate.</tspan>
</text>

<text x="550" y="180" font-size="11" fill="black" font-weight="bold">②
    <tspan fill="#db029a" class="E2"></tspan> serves as an acid catalyst, donating a proton to the leaving amine group.
    <tspan x="550" dy="15">This proton transfer aids in the breakdown of the tetrahedral intermediate,</tspan>
    <tspan x="550" dy="15">ultimately completing the hydrolysis of the peptide bond.</tspan>
</text>



</svg>`;
    let svgString_MlrD = `<svg class="chemical-structure-MlrD" width="100%" height="100%" viewBox="0 0 1000 70">
                    <text x="10" y="30" font-size="15" font-weight="bold" fill="red">MlrD is proposed to function as a transporter enzyme.</text>   
                    <text></text>
                </svg> `;
    const svgMappings = {
        MlrA: svgString_MlrA,
        MlrB: svgString_MlrB,
        MlrC: svgString_MlrC,
        MlrD: svgString_MlrD
    };
    let svgString = svgMappings[mlr_style];
    if (svgString) {
        container.innerHTML = svgString;
    } else {
        console.error('Invalid mlr_style:', mlr_style);
    }





    // 构建 JSON 文件路径
    let jsonFilePath1 = `../asset/json/${mlr_style}_CM.json`;
    let jsonFilePath2 = `../asset/json/${mlr_style}_IF.json`;
    // 使用jQuery的$.getJSON方法获取JSON文件
    $.getJSON(jsonFilePath1, function (data) {
        let entry = data.find(item => item.UniProt_id === id);
        if (entry) {
            $('.E1').text(entry.E1);
            $('.E2').text(entry.E2);
            $('.D').text(entry.D);
            $('.H1').text(entry.H1);
            $('.H2').text(entry.H2);
            $('.N').text(entry.N);
            $('.W1').text(entry.W1);
            $('.W2').text(entry.W2);
            $('.E').text(entry.E);
            $('.S').text(entry.S);
            $('.K').text(entry.K);
            $('.Y').text(entry.Y);
            $('.N1').text(entry.N1);
            $('.D1').text(entry.D1);
            $('.H3').text(entry.H3);


            // 假设 entry 是从 JSON 文件中获取的当前对象
            if (entry.key_residues && entry.key_residues.length > 0) {
                let tableHtml = '<table class="table residues-table">';
            
                // 添加表头（如果不想显示表头，可以通过 CSS 隐藏）
                tableHtml += '<thead><tr><th>Residues</th><th>Describe</th><th>Reference</th></tr></thead><tbody>';
            
                // 遍历 key_residues 数组
                entry.key_residues.forEach(function (residue) {
                    let position = residue.position || '<i>NA</i>';  // 如果没有获取到位置，则显示斜体的 "NA"
                    let description = residue.description || '<i>NA</i>';  // 如果没有获取到描述，则显示斜体的 "NA"
                    let reference = residue.reference || '<i>NA</i>';  // 如果没有获取到参考文献，则显示斜体的 "NA"
            
                    // 处理参考文献 ID，去除方括号和特殊字符
                    let referenceId = reference.replace(/[\[\]]/g, '').replace(/[\W_]+/g, '').trim();
            
                    // 创建参考文献链接
                    let referenceLink = referenceId && referenceId !== 'NA' ? '<a href="#' + referenceId + '">' + reference + '</a>' : '<i>NA</i>';
            
                    // 创建表格行
                    tableHtml += '<tr><td>' + position + '</td><td>' + description + '</td><td>' + referenceLink + '</td></tr>';
                });
            
                tableHtml += '</tbody></table>';
            
                $('#key_residues_display').html(tableHtml);
            } else {
                // 如果没有获取到内容，则显示包含斜体"NA"的表格行
                let tableHtml = '<table class="table residues-table">';
                tableHtml += '<thead><tr><th>Residues</th><th>Describe</th><th>Reference</th></tr></thead>';
                tableHtml += '<tbody><tr><td><i>NA</i></td><td><i>NA</i></td><td><i>NA</i></td></tr></tbody></table>';
                $('#key_residues_display').html(tableHtml);
            }
            

        }
    }).fail(function (jqxhr, textStatus, error) {
        var err = textStatus + ", " + error;
        console.error("Request Failed: " + err);
    });
    //信息展示======================================================================================
$.getJSON(jsonFilePath2, function (data) {
    let entry1 = data.IF.find(entry => entry.UniProt_id === id);
    if (entry1) {
        // 构建 NCBI Accession 的链接
        let ncbiAccessionLink = `<a href="https://www.ncbi.nlm.nih.gov/protein/${entry1.id}" target="_blank">${entry1.id}</a>`;
        $('#NCBI_Accession').html(ncbiAccessionLink);

        // 构建 UniProt id 的链接
        let uniprotIdLink = `<a href="https://www.uniprot.org/uniprotkb/${entry1.UniProt_id}" target="_blank">${entry1.UniProt_id}</a>`;
        $('#UniProtId').html(uniprotIdLink);

        // 其他信息保持不变
        $('#Protein').text(entry1.Protein);
        let organism = entry1.Source_Organism || "";
        let parts = organism.split(' ');
        if (parts.length > 1) {
            let italicPart = parts.slice(0, parts.length - 1).join(' ');
            let normalPart = ' ' + parts[parts.length - 1];
            $('#sourceOrganism').html(`<em>${italicPart}</em>${normalPart}`);
        } else {
            $('#sourceOrganism').text(organism);
        }
        $('#Gene').text(entry1.Gene);
        $('#Amino_acids').text(entry1.Amino_acids);

        // 显示参考文献
        displayReferences(entry1.Source_Organism, mlr_style);
    }
})
})

//序列展示======================================================================================
$(document).ready(function () {
    var points = $('body').attr('point');
    var sequenceIds = points.split(',');

    function updateHighlight() {
        $('.sequence_chunk').each(function () {
            var chunkHTML = '';
            var chunkText = $(this).text();
    
            for (var char of chunkText) {
                // 定义氨基酸分类
                var isAcidic = 'DE'.includes(char);
                var isBasic = 'HKR'.includes(char);
                var isPolarUncharged = 'NQSTYC'.includes(char);
                var isHydrophobic = 'AILMFPWV'.includes(char);
    
                // 检查对应的复选框是否被选中
                var addAcidicHighlight = isAcidic && $('#highlightOptions .highlightCheckbox[data-value="acidic"]').is(':checked');
                var addBasicHighlight = isBasic && $('#highlightOptions .highlightCheckbox[data-value="basic"]').is(':checked');
                var addPolarUnchargedHighlight = isPolarUncharged && $('#highlightOptions .highlightCheckbox[data-value="polarUncharged"]').is(':checked');
                var addHydrophobicHighlight = isHydrophobic && $('#highlightOptions .highlightCheckbox[data-value="hydrophobic"]').is(':checked');
    
                // 根据分类添加高亮样式
                if (addAcidicHighlight) {
                    // 酸性氨基酸 - 红色下划线
                    chunkHTML += '<span style="border-bottom: 3px solid red;">' + char + '</span>';
                } else if (addBasicHighlight) {
                    // 碱性氨基酸 - 蓝色下划线
                    chunkHTML += '<span style="border-bottom: 3px solid blue;">' + char + '</span>';
                } else if (addPolarUnchargedHighlight) {
                    // 极性未带电氨基酸 - 黄色下划线
                    chunkHTML += '<span style="border-bottom: 3px solid yellow;">' + char + '</span>';
                } else if (addHydrophobicHighlight) {
                    // 疏水性氨基酸 - 绿色下划线
                    chunkHTML += '<span style="border-bottom: 3px solid green;">' + char + '</span>';
                } else {
                    // 不符合任何高亮条件的氨基酸，保持原样
                    chunkHTML += char;
                }
            }
    
            $(this).html(chunkHTML);
        });
    }

    if (sequenceIds.length > 1) {
        var jsonFilePath = './asset/json/' + sequenceIds[0] + '_seq.json';
        var sequenceId = sequenceIds[1];

        $.getJSON(jsonFilePath, function (data) {
            var sequenceData = data.sequences.find(seq => seq.UniProt_id === sequenceId);

            if (sequenceData) {
                var sequence = sequenceData.sequence.replace(/-/g, '');
                var chunks = [];

                for (var i = 0; i < sequence.length; i += 10) {
                    chunks.push(sequence.slice(i, i + 10));
                }

                var sequenceHTML = chunks.map(function (chunk, index) {
                    return '<span class="sequence_chunk" data-number="' + (index * 10 + chunk.length) + '">' + chunk + '</span>';
                }).join('');

                $('#seq_display_by-10').html(sequenceHTML);
            } else {
                console.error('未找到序列ID为：' + sequenceId + ' 的数据');
            }
        });
    } else {
        console.error('点属性至少需要包含两个序列ID');
    }

    $('.highlightCheckbox').change(updateHighlight);
});


//copysequence


function copySequenceToClipboard() {
    var sequenceText = $('#seq_display_by-10').text();
    console.log(sequenceText);
    var tempInput = $('<input>');
    $('body').append(tempInput);
    tempInput.val(sequenceText).select();
    navigator.clipboard.writeText(sequenceText)
        .then(() => {
            // Change the text of the div to 'copied' after successful copy
            $('#copySeqButton').text('copied');
        })
        .catch(err => {
            console.error('Error copying text: ', err);
        });
    tempInput.remove();
}

$('#copySeqButton').on('click', function () {
    copySequenceToClipboard(

    );

});



//==========================================================================================一级结构预测
function parseChemicalFormula(formula) {
    var regex = /([A-Z][a-z]*)(\d*)/g;
    var result = '';
    var match;

    while ((match = regex.exec(formula)) !== null) {
        var element = match[1];
        var count = match[2] === '' ? 1 : parseInt(match[2]);
        result += element;

        if (count > 1) {
            result += '<sub>' + count + '</sub>';
        }
    }

    return result;
}
// 格式化氨基酸组成数据为表格
function formatAminoAcidComposition(composition) {
    var table = '<table class="Composition_display" style="display: none;">'; // 默认不显示表格
    table += '<tr><th>Amino Acid</th><th>Count</th><th>Percentage</th></tr>';
    for (var key in composition) {
        var aminoacid = key;
        var count = composition[key].count;
        var percentage = composition[key].percentage;
        table += '<tr><td>' + aminoacid + '</td><td>' + count + '</td><td>' + percentage + '%</td></tr>';
    }
    table += '</table>';
    return table;

}
$(document).ready(function () {
    $('#psp_display').on('click', '#dropdownToggle', function () {
        // 这里我们直接切换表格显示，假设表格已经在htmlContent中生成
        $('.Composition_display').toggle(); // 切换表格的显示状态
    });
});

function formatAtomicComposition(atomicComposition) {
    var table = '<table class="atomic_composition_table">';
    table += '<tr><th>Element</th><th>Count</th></tr>';
    for (var element in atomicComposition) {
        table += '<tr><td>' + element + '</td><td>' + atomicComposition[element] + '</td></tr>';
    }
    table += '</table>';
    return table;
}
function formatEstimatedhalflife(estimatedhalflife) {
    var table = '<table class="Estimated_half_life">';
    table += '<tr><th>Organism</th><th>Half-Life Time</th></tr>';
    for (var element in estimatedhalflife) {
        table += '<tr><td>' + element + '</td><td>' + estimatedhalflife[element] + '</td></tr>';
    }
    table += '</table>';
    return table;
}
$(document).ready(function () {
    var points = $('body').attr('point');
    var sequenceIds = points.split(',');

    if (sequenceIds.length > 1) {
        var sequenceId = sequenceIds[1]; // 获取第二个序列ID
        console.log("Sequence Div ID: " + sequenceId); // 打印用于调试

        var dataUrl = './asset/json/' + sequenceIds[0] + '_seq.json'; // 构建 JSON 文件的 URL

        // 获取 JSON 数据并处理
        $.getJSON(dataUrl, function (data) {
            var htmlContent = '';

            // 确保数据结构正确
            if (data && data.sequences) {
                data.sequences.forEach(function (item) {
                    if (item.UniProt_id === sequenceId) {
                        // 获取序列
                        var sequence = item.sequence.replace(/-/g, '');
                        // 创建 ProteinAnalysis 对象
                        var analysis = new ProteinAnalysis(sequence);

                        // 获取分析结果
                        var numberOfAminoAcids = analysis.length;
                        var molecularWeight = analysis.molecularWeight();
                        var theoreticalPI = analysis.isoelectricPoint();
                        var instabilityIndex = analysis.instabilityIndex();
                        var aliphaticIndex = analysis.aliphaticIndex();
                        var gravy = analysis.gravy();
                        var aminoAcidComposition = analysis.aminoAcidCounts;
                        var formula = analysis.formula();
                        var totalNumberOfAtoms = analysis.totalNumberOfAtoms();
                        var totalNegativeResidues = analysis.totalNegativelyCharged();
                        var totalPositiveResidues = analysis.totalPositivelyCharged();
                        var atomicComposition = analysis.atomicComposition();
                        var extinctionCoefficients = analysis.extinctionCoefficients();
                        var csvContent = generateAminoAcidCompositionCSV(aminoAcidComposition);
                        // 构建 HTML 内容
                        htmlContent += '<div class=""><h5><b>Physicochemical Property Prediction</b></h5><div class="px-3 pt-4">';
                        htmlContent += '<div class="row"><p class="col-4"><b>Number of amino acids</b>: ' + numberOfAminoAcids + '</p>';
                        htmlContent += '<p class="col-4"><b>Molecular weight</b>: ' + (parseFloat(molecularWeight) / 1000).toFixed(2) + ' KDa</p>';
                        htmlContent += '<p class="col-4"><b>Theoretical pI</b>: ' + theoreticalPI + '</p></div>';
                        htmlContent += '<div class="row"><p class="col-4"><b>Instability index:</b> ' + instabilityIndex + '&nbsp;&nbsp;(Less than 40 is considered to be stable.)</p>';
                        htmlContent += '<p class="col-4"><b>Aliphatic index:</b> ' + aliphaticIndex + '</p>';
                        htmlContent += '<p class="col-4"><b>Grand average of hydropathicity (GRAVY):</b> ' + gravy + '</p></div>';
                        htmlContent += '<div class="row"><div class="col-4"><p><b id="dropdownToggle" style="cursor: pointer;">Amino acid composition ▼</b><button onclick="downloadAminoAcidCompositionCSV()" style="font-size:10px;">CSV</button>' + formatAminoAcidComposition(aminoAcidComposition) + '</p></div>';
                        htmlContent += '<p class="col-4"><b>Formula</b>: ' + parseChemicalFormula(formula) + '</p>';
                        htmlContent += '<p class="col-4"><b>Total number of atoms</b>: ' + totalNumberOfAtoms + '</p></div>';
                        htmlContent += '<div class="row"><p class="col-6"><b>Total number of negatively charged residues (Asp + Glu)</b>: ' + totalNegativeResidues + '</p>';
                        htmlContent += '<p class="col-6"><b>Total number of positively charged residues (Arg + Lys)</b>: ' + totalPositiveResidues + '</p></div>';
                        htmlContent += '<div class="row"><div class="col-6"><p><b>Atomic composition</b>: ' + formatAtomicComposition(atomicComposition) + '</p></div>';
                        htmlContent += '<div class="col-6"><p><b>Extinction coefficients:</b><br>';
                        htmlContent += '<span style="font-size:14px;line-height: 2.0;">Extinction coefficients are in units of  M-1 cm-1, at 280 nm measured in water.</span><br>';
                        htmlContent += 'assuming all Cys residues are reduced: ' + extinctionCoefficients.reduced + '<br>';
                        htmlContent += 'assuming all pairs of Cys residues form cystines: ' + extinctionCoefficients.oxidized + '</p></div>';
                        htmlContent += '</div></div>';
                        window.csvContentForDownload = csvContent;
                    }

                });

                // 检查并更新 HTML 元素
                if (htmlContent) {
                    $('#psp_display').html(htmlContent);
                    console.log("Content set on page"); // 确认内容已设置
                } else {
                    console.log("No matching ID found, no content to display"); // 没有匹配的 ID，无内容显示
                }
            } else {
                console.error('Primary_structure_prediction is not found in the JSON data');
            }
        });
    } else {
        console.error('The point attribute must contain at least two sequence IDs');
    }

    // 辅助函数定义
    function formatAminoAcidComposition(aminoAcidCounts) {
        let total = 0;
        for (let aa in aminoAcidCounts) {
            total += aminoAcidCounts[aa]; // 计算总氨基酸数量
        }

        let html = '<table id="aac_list" style="display:none;" style="width: 100%; text-align: left;">';
        html += '<tr><th>Amino Acid</th><th>Count</th><th>Percent</th></tr>';
        for (let aa in aminoAcidCounts) {
            const count = aminoAcidCounts[aa];
            const percent = ((count / total) * 100).toFixed(1);
            const fullName = aminoAcids[aa]?.fullName || "Unknown";
            const name = aminoAcids[aa]?.name || aa;

            // 使用表格布局对齐
            html += `
                <tr>
                    <td>${fullName} (${name})</td>
                    <td>${count}</td>
                    <td>${percent}%</td>
                </tr>
            `;
        }
        html += '</table>';
        $(document).on('click', '#dropdownToggle', function () {
            $('#aac_list').toggle();
        });
        return html;
    }
    function parseChemicalFormula(formula) {
        // 将化学式中的数字用下标表示
        return formula.replace(/([A-Z])(\d+)/g, function (match, p1, p2) {
            return p1 + '<sub>' + p2 + '</sub>';
        });
    }

    const atomNames = {
        'C': 'Carbon',
        'H': 'Hydrogen',
        'N': 'Nitrogen',
        'O': 'Oxygen',
        'S': 'Sulfur'
    };

function formatAtomicComposition(atomicComposition) {
    const elements = ['C', 'H', 'N', 'O', 'S'];
    let total = 0;
    for (let atom of elements) {
        total += atomicComposition[atom];
    }
    let content = '<pre style="font-size:18px;">';
    for (let atom of elements) {
        let count = atomicComposition[atom];
        if (count > 0) {
            let percentage = ((count / total) * 100).toFixed(2); 
            content += `${atom}\t${count}\t${percentage}%\n`;
        }
    }
    content += '</pre>';
    return content;
}


});

//==============================================================================================structure view
var stage;
var currentProteinStyle = "cartoon";
var currentLigandStyle = "ball+stick";
var currentProteinColorScheme = "residueindex";
var currentLigandColorScheme = "element";
var proteinOpacity = 1.0;
var ligandOpacity = 1.0;
var showProtein = true;
var showLigand = true;

$(document).ready(function () {
    var points = $('body').attr('point');
    var sequenceIds = points.split(',');

    if (sequenceIds.length > 1) {
        var pdbId = sequenceIds[1]; // 获取数组的第二个元素作为PDB ID
        var pdbFile = "./asset/PDB/" + pdbId + ".pdb"; // 构建文件路径
        stage = new NGL.Stage("viewport");
        stage.loadFile(pdbFile).then(function (component) {
            stage.addComponent(component);
            setWhiteBackground();
            updateStylesAndColor();
            stage.autoView();
        }).catch(function (error) {
            console.error("加载PDB文件失败:", error);
        });
    } else {
        console.error('点属性至少需要包含两个序列ID');
    }  
});

var isSpinning = false;

function toggleSpin() {
    isSpinning = !isSpinning;
    stage.setSpin(isSpinning);
}

function resetView() {
    stage.autoView();
}

function toggleFullscreen() {
    var element = document.getElementById('structureCard');

    if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.mozFullScreenElement && !document.msFullscreenElement) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) { /* Firefox */
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) { /* IE/Edge */
            element.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { /* Firefox */
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE/Edge */
            document.msExitFullscreen();
        }
    }

    // 延迟调用 handleResize 以确保全屏状态已经切换
    setTimeout(function() {
        if (stage) {
            stage.handleResize();
        }
    }, 100);
}


function openScreenshotOptions() {
    document.getElementById('screenshotOptions').style.display = 'block';
}

function closeScreenshotOptions() {
    document.getElementById('screenshotOptions').style.display = 'none';
}

function takeScreenshot() {
    var transparentBackground = document.getElementById('transparentBackground').checked;
    var trimEdges = document.getElementById('trimEdges').checked;
    var resolutionMultiplier = parseInt(document.getElementById('resolutionMultiplier').value, 10);

    // 假设 stage 是您的 3D 视图对象
    stage.makeImage({
        factor: resolutionMultiplier,  // 分辨率倍数
        antialias: true,               // 抗锯齿设置
        trim: trimEdges,               // 是否剪裁空白边缘
        transparent: transparentBackground  // 背景是否透明
    }).then(function (blob) {
        // 创建一个链接并点击它以下载图像
        var link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = "screenshot.png";  // 定义下载的文件名
        document.body.appendChild(link);  // 添加到文档中才能触发点击
        link.click();                     // 模拟点击链接以触发下载
        document.body.removeChild(link);  // 下载后从文档中移除链接

        closeScreenshotOptions();  // 关闭对话框
    }).catch(function (error) {
        console.error('Error taking screenshot:', error);
    });
}

function focusView(value) {
    var clipValue = parseInt(value, 10);
    stage.setParameters({ clipNear: clipValue });
}

// 添加黑色背景
function setBlackBackground() {
    stage.setParameters({ backgroundColor: "black" });
}

// 添加白色背景
function setWhiteBackground() {
    stage.setParameters({ backgroundColor: "white" });
}

// 添加灰色背景
function setGrayBackground() {
    stage.setParameters({ backgroundColor: "gray" });
}

// 更新分子的显示样式和颜色
function updateStylesAndColor() {
    stage.eachComponent(function (component) {
        component.removeAllRepresentations();

        if (showProtein) {
            var representationParams = {
                colorScheme: currentProteinColorScheme,
                sele: "protein",
                opacity: proteinOpacity
            };
            if (currentProteinColorScheme === "ball+stick") {
                // 你可以在这里添加特定的参数
            }
            if (currentProteinColorScheme === "hydrophobicity") {
                representationParams.colorScale = "RdYlGn";
                representationParams.colorReverse = true;
            }
            if (currentProteinColorScheme === "residueindex") {
                representationParams.colorScale = "RdYlBu";
                representationParams.colorReverse = true;
                representationParams.quality = 'high';
            }
            if (currentProteinColorScheme === "bfactor") {
                representationParams.colorScale = [
                    [127, 0, 0],        // #7f0000 -> RGB(127, 0, 0)
                    [179, 0, 0],        // #b30000 -> RGB(179, 0, 0)
                    [215, 48, 31],      // #d7301f -> RGB(215, 48, 31)
                    [239, 101, 72],     // #ef6548 -> RGB(239, 101, 72)
                    [252, 141, 89],     // #fc8d59 -> RGB(252, 141, 89)
                    [253, 187, 132],    // #fdbb84 -> RGB(253, 187, 132)
                    [253, 212, 158],    // #fdd49e -> RGB(253, 212, 158)
                    [254, 232, 200],    // #fee8c8 -> RGB(254, 232, 200)
                    [255, 247, 236]
                ];
                representationParams.colorReverse = true;
            }
            component.addRepresentation(currentProteinStyle, representationParams);
        }

        if (showLigand) {
            component.addRepresentation(currentLigandStyle, { colorScheme: currentLigandColorScheme, calculateBonds: true, sele: "not(protein) and not HOH", opacity: ligandOpacity });
        }
    });
}

function toggleProteinStyle() {
    showProtein = !showProtein;
    updateStylesAndColor();
}

function toggleLigandStyle() {
    showLigand = !showLigand;
    updateStylesAndColor();
}

function selectProteinStyle(style) {
    currentProteinStyle = style;
    updateStylesAndColor();
}

function selectLigandStyle(style) {
    currentLigandStyle = style;
    updateStylesAndColor();
}

function selectProteinColorScheme(schemeName) {
    currentProteinColorScheme = schemeName;
    updateStylesAndColor();
}

function selectLigandColorScheme(schemeName) {
    currentLigandColorScheme = schemeName;
    updateStylesAndColor();
}

function setProteinOpacity(opacity) {
    proteinOpacity = parseFloat(opacity);
    updateStylesAndColor();
}

function setLigandOpacity(opacity) {
    ligandOpacity = parseFloat(opacity);
    updateStylesAndColor();
}

//============================================================================ligand view
var proligopacity = 1.0;
var stage_1;
var representations = {};
var labelsVisible = true;
var r = 5;
var o; // 用于存储加载的结构对象

document.addEventListener("DOMContentLoaded", function () {
    var points = $('body').attr('point');
    var sequenceIds = points.split(',');

    if (sequenceIds.length > 1) {
        var pdbId = sequenceIds[1]; // 获取第二个元素作为PDB ID
        var pdbFile = "./asset/PDB/" + pdbId + ".pdb"; // 构建文件路径

        document.getElementById("lig_View").style.display = "block";
        stage_1 = new NGL.Stage("viewport_ligand", { backgroundColor: "white" });

        stage_1.loadFile(pdbFile).then(function (loadedO) {
            o = loadedO; // 全局存储加载的对象
            o.autoView("hetero");
            initializeRepresentations(); // 初始化表示形式
            document.getElementById("lig_View").style.display = "none";
        });
    } else {
        console.error('error');
    }
});

// 初始化表示形式的函数
function initializeRepresentations() {
    var selection = new NGL.Selection("hetero");
    var radius_1 = r;
    var atomSet = o.structure.getAtomSetWithinSelection(selection, radius_1);
    var resset = o.structure.getAtomSetWithinGroup(atomSet);
    var proteinSelection = " (" + resset.toSeleString() + ") and not ligand";

    // 获取配体的中心坐标
    var ligandSelection = resset.toSeleString();
    var ligandView = o.structure.getView(new NGL.Selection(ligandSelection));
    var ligandCenter = ligandView.boundingBox.getCenter(new NGL.Vector3());

    // 添加表示形式并存储引用
    
    representations.ligandLicorice = o.addRepresentation("licorice", { sele: ligandSelection, radius: 0.15, multipleBond: 'symmetric' });
    representations.proteinLicorice = o.addRepresentation("licorice", { sele: proteinSelection, radius: 0.15, multipleBond: 'symmetric', colorValue: 'white' });
    representations.contact = o.addRepresentation("contact", { sele: atomSet.toSeleString(), hydrogenBond: true, halogenBond: true, hydrophobic: true, piStacking: true, metalCoordination: true, ionicInteraction: true });
    representations.label = o.addRepresentation("label", { sele: ligandSelection, color: '#333333', yOffset: 0.2, zOffset: 2, attachment: 'bottom-center', showBackground: true, backgroundColor: 'white', backgroundOpacity: 0.5, disablePicking: true, radiusType: 'size', radiusSize: 1, labelType: 'residue', labelGrouping: 'residue' });

    // 添加配体口袋表面表示形式
    representations.surface = o.addRepresentation("surface", {
        sele: proteinSelection,
        surfaceType: 'av',
        visible: true,
        opaqueBack: false,
        roughness: 1,
        probeRadius: 1,
        color: "Hydrophobicity",
        opacity: 0, // 初始不透明度为0
        colorReverse: true,
        clipCenter: ligandCenter, // 设置裁剪中心为配体中心
        clipRadius: 10, // 初始裁剪半径
        clipNear: 0, // 初始近裁剪值
    });
    representations.zinc = o.addRepresentation("ball+stick", {
        sele: "ZN", 
        colorScheme: "uniform",
        colorValue: "rgb(255, 0, 234)", 
        radius: 0.2, 
        multipleBond: "symmetric" 
    });
}

// 更新配体口袋表示形式的函数
function updatePocketRepresentation() {
    var selection = new NGL.Selection("hetero");
    var radius_1 = r;
    var atomSet = o.structure.getAtomSetWithinSelection(selection, radius_1);
    var resset = o.structure.getAtomSetWithinGroup(atomSet);
    var proteinSelection = " (" + resset.toSeleString() + ") and not ligand";

    var ligandSelection = resset.toSeleString();
    var ligandView = o.structure.getView(new NGL.Selection(ligandSelection));
    var ligandCenter = ligandView.boundingBox.getCenter(new NGL.Vector3());

    // 更新各个表示形式的选择
    representations.ligandLicorice.setSelection(ligandSelection);
    representations.proteinLicorice.setSelection(proteinSelection);
    representations.contact.setSelection(atomSet.toSeleString());
    representations.label.setSelection(ligandSelection);
    representations.surface.setSelection(proteinSelection);

    // 更新口袋表面的裁剪中心
    representations.surface.setParameters({ clipCenter: ligandCenter });
}

// 更改口袋不透明度的函数
function changePocketOpacity(value) {
    var opacity = parseFloat(value);
    document.getElementById("pocketOpacityValue").textContent = opacity.toFixed(1);
    representations.surface.setParameters({ opacity: opacity });
}

// 更改口袋近裁剪的函数
function changePocketNearClipping(value) {
    var clipNear = parseFloat(value);
    document.getElementById("pocketNearClippingValue").textContent = clipNear.toFixed(1);
    representations.surface.setParameters({ clipNear: clipNear });
}

// 更改口袋半径裁剪的函数
function changePocketRadiusClipping(value) {
    var clipRadius = parseFloat(value);
    document.getElementById("pocketRadiusClippingValue").textContent = clipRadius.toFixed(1);
    representations.surface.setParameters({ clipRadius: clipRadius });
}
function toggleHydrogenBond() {
    var checkbox = document.getElementById("checkbox-hydrogenBond");
    representations.contact.setParameters({ hydrogenBond: checkbox.checked });
}

function toggleHalogenBond() {
    var checkbox = document.getElementById("checkbox-halogenBond");
    representations.contact.setParameters({ halogenBond: checkbox.checked });
}

function toggleHydrophobic() {
    var checkbox = document.getElementById("checkbox-hydrophobic");
    representations.contact.setParameters({ hydrophobic: checkbox.checked });
}

function togglePiInteraction() {
    var checkbox = document.getElementById("checkbox-piInteraction");
    representations.contact.setParameters({ piStacking: checkbox.checked, cationPi: checkbox.checked });
}

function toggleMetalCoordination() {
    var checkbox = document.getElementById("checkbox-metalCoordination");
    representations.contact.setParameters({ metalCoordination: checkbox.checked });
}

function toggleionicInteraction() {
    var checkbox = document.getElementById("checkbox-ionicInteraction");
    representations.contact.setParameters({ ionicInteraction: checkbox.checked });
}
function toggleLabels() {
    labelsVisible = !labelsVisible;
    representations.label.setVisibility(labelsVisible);
}
// 添加黑色背景
function setBlackBackground_1() {
    stage_1.setParameters({ backgroundColor: "black" });
}
// 添加白色背景
function setWhiteBackground_1() {
    stage_1.setParameters({ backgroundColor: "white" });
}
// 添加灰色背景
function setGrayBackground_1() {
    stage_1.setParameters({ backgroundColor: "gray" });
}
function changeSurfaceType() {
    var select = document.getElementById("surfaceTypeSelect");
    var surfaceType = select.value;
    representations.surface.setParameters({ surfaceType: surfaceType });
}
function changeSurfaceColor() {
    var select = document.getElementById("colorSelect");
    var colorScheme = select.value;
    representations.surface.setParameters({ color: colorScheme, colorReverse: true });
}

var isSpinning = false;

function toggleSpin_1() {
    isSpinning = !isSpinning;
    stage_1.setSpin(isSpinning);
}


function resetView_1() {
    stage_1.autoView();
}
function toggleFullscreen_1() {
    var element = document.getElementById('structureCard');

    if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.mozFullScreenElement && !document.msFullscreenElement) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) { /* Firefox */
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) { /* IE/Edge */
            element.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { /* Firefox */
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE/Edge */
            document.msExitFullscreen();
        }
    }

    // 延迟调用 handleResize 以确保全屏状态已经切换
    setTimeout(function() {
        if (stage_1) {
            stage_1.handleResize();
        }
    }, 100);
}

function openScreenshotOptions_1() {
    document.getElementById('screenshotOptions_1').style.display = 'block';
}

function closeScreenshotOptions_1() {
    document.getElementById('screenshotOptions_1').style.display = 'none';
}

function takeScreenshot_1() {
    var transparentBackground = document.getElementById('transparentBackground_1').checked;
    var trimEdges = document.getElementById('trimEdges_1').checked;
    var resolutionMultiplier = parseInt(document.getElementById('resolutionMultiplier_1').value, 10);

    stage_1.makeImage({
        factor: resolutionMultiplier,  // 分辨率倍数
        antialias: true,               // 抗锯齿设置
        trim: trimEdges,               // 是否剪裁空白边缘
        transparent: transparentBackground  // 背景是否透明
    }).then(function (blob) {
        // 创建一个链接并点击它以下载图像
        var link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = "screenshot.png";  // 定义下载的文件名
        document.body.appendChild(link);  // 添加到文档中才能触发点击
        link.click();                     // 模拟点击链接以触发下载
        document.body.removeChild(link);  // 下载后从文档中移除链接

        closeScreenshotOptions_1();  // 关闭对话框
    }).catch(function (error) {
        console.error('Error taking screenshot:', error);
    });
}



function focusView_1(value) {
    var clipValue = parseInt(value, 10);
    stage_1.setParameters({ clipNear: clipValue });
}
function initializeControls() {
    document.getElementById("pocketOpacity").value = 0;
    document.getElementById("pocketOpacityValue").textContent = "0";
    document.getElementById("pocketNearClipping").value = 0;
    document.getElementById("pocketNearClippingValue").textContent = "0";
    document.getElementById("pocketRadiusClipping").value = 10;
    document.getElementById("pocketRadiusClippingValue").textContent = "10";
}

initializeControls();
//全屏大小==================================================================================================================
document.addEventListener("DOMContentLoaded", function () {
    // 获取所有的导航标签
    var tabs = document.querySelectorAll('.nav_3d .nav-link');

    // 添加点击事件监听器
    tabs.forEach(function (tab) {
        tab.addEventListener('click', function (e) {
            e.preventDefault();

            // 获取目标 card-body 的 ID
            var targetId = this.getAttribute('data-target');

            // 隐藏所有的 card-body
            document.querySelectorAll('.card-body_3d').forEach(function (body) {
                body.style.display = 'none';
            });

            // 显示目标 card-body
            document.getElementById(targetId).style.display = 'block';

            // 延迟调用 handleResize 以确保视图已经切换
            setTimeout(function () {
                if (targetId === 'str_View') {
                    if (stage) {
                        stage.handleResize();
                    }
                } else if (targetId === 'lig_View') {
                    if (stage_1) {
                        stage_1.handleResize();
                    }
                }
            }, 100); // 延迟时间可以根据需要调整
        });
    });
});

document.addEventListener('fullscreenchange', onFullscreenChange);
document.addEventListener('webkitfullscreenchange', onFullscreenChange); // Safari
document.addEventListener('mozfullscreenchange', onFullscreenChange); // Firefox
document.addEventListener('MSFullscreenChange', onFullscreenChange); // IE/Edge

function onFullscreenChange() {
    if (stage) {
        stage.handleResize();
    }
    if (stage_1) {
        stage_1.handleResize();
    }
}
//更新文献==================================================================================================================
function displayReferences(sourceOrganism, enzyme) {
    fetch('./asset/json/reference.json')
        .then(response => response.json())
        .then(references => {
            const container = document.getElementById('reference-container');
            console.log(`Searching for enzyme: ${enzyme}`);
            console.log(`Searching for organism: ${sourceOrganism}`);
            const ul = document.createElement('ul');
            ul.classList.add('references');
            references.forEach(reference => {
                if (reference.strain === sourceOrganism && reference.enzyme === enzyme) {
                    const li = document.createElement('li');
                    // 处理引用的 ID，去除方括号和特殊字符
                    let referenceId = reference.citation.replace(/[\[\]]/g, '').replace(/[\W_]+/g, '').trim();
                    li.id = referenceId;
                    li.innerHTML = `<b>${reference.citation}</b> ${reference.authors}. ${reference.title}. ${reference.journal}, ${reference.year}. <a href="${reference.doi.link}" class="doi-link">DOI:${reference.doi.text}</a>`;
                    ul.appendChild(li);
                }
            });

            container.appendChild(ul);
        })
        .catch(error => console.error('Error loading references:', error));
}
function generateAminoAcidCompositionCSV(aminoAcidCounts) {
    let total = 0;
    for (let aa in aminoAcidCounts) {
        total += aminoAcidCounts[aa]; // 计算总氨基酸数量
    }

    let csvRows = [];
    csvRows.push('Amino Acid,Count,Percent');

    for (let aa in aminoAcidCounts) {
        const count = aminoAcidCounts[aa];
        if (count > 0) {
            const percent = ((count / total) * 100).toFixed(1);
            const fullName = aminoAcids[aa]?.fullName || "Unknown";
            const name = aminoAcids[aa]?.name || aa;

            csvRows.push(`"${fullName} (${name})",${count},${percent}%`);
        }
    }

    return csvRows.join('\n');
}

// **下载 CSV 文件的函数**
function downloadAminoAcidCompositionCSV() {
    const csvContent = window.csvContentForDownload;
    if (!csvContent) {
        alert('CSV content is not available.');
        return;
    }

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'AminoAcidComposition.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

