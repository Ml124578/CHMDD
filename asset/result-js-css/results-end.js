

		// 用于禁用无效字段的示例 JavaScript，如果存在无效字段，则禁止表单提交
		(function () {
			'use strict'

			// 获取所有需要应用自定义 Bootstrap 验证样式的表单
			var forms = document.querySelectorAll('.needs-validation')

			// 遍历表单并阻止提交
			Array.prototype.slice.call(forms)
				.forEach(function (form) {
					form.addEventListener('submit', function (event) {
						if (!form.checkValidity()) {
							event.preventDefault()
							event.stopPropagation()
						}

						form.classList.add('was-validated')
					}, false)
				})
		})()

		window.addEventListener('DOMContentLoaded', function () {
			var searchResultElement = document.getElementById('search-result');
			var geneName = extractGeneNameFromURL();
			searchResultElement.textContent = geneName;
		});

		// 从 URL 中提取基因名
		function extractGeneNameFromURL() {
			var pathname = window.location.pathname;
			var filename = pathname.split('/').pop(); // 获取文件名部分
			var geneName = filename.replace('.html', ''); // 移除文件扩展名
			return geneName;
		}

		function showImage(link) {
			var image = link.dataset.image;
			var popupImage = document.getElementById("popupImage");
			popupImage.src = image;
			document.getElementById("imagePopup").style.display = "block";
		  }
		  function hideImage() {
			document.getElementById("imagePopup").style.display = "none";
		  }
		  

		  function showActiveImage(imageId, button) {
			var imageContainers = document.querySelectorAll('.image-container img');
			imageContainers.forEach(function(image) {
			  image.classList.remove('active');
			});
	  
			var targetImage = document.getElementById(imageId);
			targetImage.classList.add('active');
	  
			var buttons = document.querySelectorAll('.nav-item .btn');
			buttons.forEach(function(btn) {
			  btn.classList.remove('active');
			});
	  
			button.classList.add('active');
		  }
  
		  //survival 四个按钮的折叠面板冲突消除 action
				  $(document).ready(function() {
		  $('.btn').click(function() {
			  var btnId = $(this).attr('href');
			  var collapseId = $(this).attr('aria-controls');
			  $('.collapse.show').collapse('hide');
			  $(collapseId).collapse('show');
		  });
		  });
		  //end

			// 在DOM加载完成后执行操作
			document.addEventListener("DOMContentLoaded", function() {
				// 获取所有的按钮元素
				var buttons = document.querySelectorAll(".white-button");

				// 为每个按钮添加点击事件处理程序
				buttons.forEach(function(button) {
					button.addEventListener("click", function() {
						if (this.classList.contains("active")) {
							// 如果按钮已经处于激活状态，则取消激活
							this.classList.remove("active");
						} else {
							// 否则，将其设置为激活状态
							buttons.forEach(function(btn) {
								btn.classList.remove("active");
							});
							this.classList.add("active");
						}
					});
				});
			});