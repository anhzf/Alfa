let
	scrollSpyItem = [],
	docScroll = {
		X: document.scrollingElement.scrollLeft,
		Y: document.scrollingElement.scrollTop
	};
window.addEventListener("scroll",function () {
	docScroll = {X: window.pageXOffset, Y: window.pageYOffset};
	for (i in scrollSpyItem) {
		scrollSpyItem[i].addClass();
	}
});
document.querySelectorAll('.slider').forEach(function (sldr) {
	let crntSd = 0;
	document.querySelectorAll('[data-slide]').forEach(function (nvbtn) {
		nvbtn.addEventListener("click", function (e) {
			var elmt = document.getElementById(e.target.getAttribute('data-slide')), cnumb = elmt.children.length;
			if (nvbtn.getAttribute('data-slbtn') == "incr") {
				if (crntSd < (cnumb - 1)) {
					crntSd++;
				} else {
					crntSd = 0;
				}
			} else if (nvbtn.getAttribute('data-slbtn') == "dcr") {
				if (crntSd > 0) {
					crntSd--;
				} else {
					crntSd = (cnumb - 1);
				}
			}
			elmt.children[crntSd].scrollIntoView();
		});
	});
});
function scrollspy(lmt, topOffset = 0, bottomOffset = 0) {
	this.lmt = lmt,
	this.offsetY = window.scrollY + this.lmt.getBoundingClientRect().top,
	this.lmtHeight = this.lmt.getBoundingClientRect().height,
	this.topOffset = topOffset,
	this.bottomOffset = bottomOffset;
	this.addClass = function () {
		if (docScroll.Y >= (this.offsetY + this.topOffset) && docScroll.Y <= (this.offsetY + this.lmtHeight - this.bottomOffset)) {
			this.lmt.classList.add(this.lmt.getAttribute("data-scrollspy"));
		} else {
			this.lmt.classList.remove(this.lmt.getAttribute("data-scrollspy"));
		}
	}
	this.addClass();
}

function modal(elmt) {
	this.elmt = elmt;
	this.open = function () {
		document.querySelectorAll('div.modal').forEach(function (modal) {
			modal.classList.remove('close');
		});
		this.elmt.classList.add('open');
	}
}
function closeModal() {
	location.replace(location.origin+location.pathname);
	document.querySelectorAll('div.modal').forEach(function (modal) {
		modal.classList.add('close');
	});
}

// AUTO INIT
	// get parameter 
		const param = (new URL(document.location)).searchParams;
		console.log(param);
	// data tooltips
	document.querySelectorAll('[data-tooltips]').forEach(function (lmt) {
		lmt.onmouseover = function (e) {
			document.body.insertAdjacentHTML("beforeend","<div class='tooltips'>"+lmt.getAttribute("data-tooltips")+"</div>");
			document.querySelector('.tooltips').style.top = e.clientY+"px";
			document.querySelector('.tooltips').style.left = e.clientX+"px";
		}
		lmt.onmouseout = function (e) {
			document.querySelectorAll('.tooltips').forEach(function (ttips) {
				ttips.remove();
			});
		}
	});

	// scrollspy element init
	document.querySelectorAll('[data-scrollspy]').forEach(function (lmt) {
		scrollSpyItem.push(new scrollspy(lmt, -360, -360));
		// scrollSpyItem.push(new scrollspy(lmt.nextElementSibling, (-180 - lmt.getBoundingClientRect().height), (3 * (-lmt.nextElementSibling.getBoundingClientRect().height))));
	});

	// modal
	// var mods = [], numb = 0;
	// document.querySelectorAll('div.modals').forEach(function (item) {
	// 	const modID = item.getAttribute('data-modal-id');
	// 	mods.push(new modal(item));
	// 	if (param.get('productID') == modID) {
	// 		mods[numb].open();
	// 	}
	// 	numb++;
	// });
