!function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";i.r(t);var n=function(){function e(){}return e.abortClickDistance=3,e.autoPlaySlideDuration=5e3,e.bodyOverflow=document.body.style.overflow,e.consentCookieName="consent",e.consentMaxAge=2592e3,e.expanderMinHeight=5.5,e.dragSlideThreshold=.2,e.galleryPreviewHeight=400,e.galleryPreviewWidth=711,e.headerDivMaxPaddingBottom=2,e.headerDivMinPaddingBottom=.75,e.headerMaxHeightDesktop=11.75,e.headerMaxHeightMobile=7,e.headerMenuWidthThreshold=899,e.headerMinHeight=4,e}(),r=function(){function e(){}return e.mod=function(e,t){return(e%t+t)%t},e.modNeg=function(e,t){return(e%t-t)%t},e.nthIndex=function(e,t,i){for(var n=e.length,r=-1;i--&&r++<n&&!((r=e.indexOf(t,r))<0););return r},e.remToPx=function(e){return e*parseInt(getComputedStyle(document.documentElement).fontSize)},e}(),a=function(){return(a=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},o={isCyclic:!1,showNavDots:!1,slideDuration:0,snapItems:!0},s=function(){function e(e,t){var i=this;this.slider=e,this.abortClick=!1,this.contentWidth=0,this.contentWidthMod=0,this.currentIndex=0,this.isGrabbing=!1,this.isTimerSet=!1,this.isTimerStopped=!1,this.itemWidthWithGap=0,this.lastIndex=0,this.lastItemOverflow=0,this.minMarginLeft=0,this.nAddedCopiesLeft=0,this.nAddedCopiesRight=0,this.previousItemWidthWithGap=0,this.previousOffset=0,this.realCurrentIndex=0,this.sliding=!1,this.startMarginLeft=0,this.startX=0,this.autoSlide=function(){i.slideRight(1)},this.beforeSlide=function(e){i.updateNavDots(e),i.currentIndex=e,i.options.slideDuration>0&&(clearTimeout(i.timer),i.isTimerSet=!1)},this.calculateContentWidth=function(e){return i.firstItem.clientWidth+e*(i.items.childElementCount-1)},this.calculateItemWidthWithGap=function(){var e=parseFloat(getComputedStyle(i.secondItem).marginLeft);return i.firstItem.clientWidth+e},this.calculateLastIndex=function(e,t){return Math.ceil(-t/e)},this.calculateLastItemOverflow=function(e){return e-(i.items.clientWidth-i.firstItem.clientWidth)%e},this.calculateMinMarginLeft=function(e){var t=i.items.clientWidth-e;return t>0?0:t},this.calculateIndex=function(e){return i.calculateRealIndex(e)%i.nItems},this.calculateRealIndex=function(e,t){return void 0===t&&(t=0),!i.options.isCyclic&&e-i.minMarginLeft<i.lastItemOverflow/2?~~(-e/i.itemWidthWithGap+t+1-i.lastItemOverflow/i.itemWidthWithGap/2):~~(-e/i.itemWidthWithGap+t+.5)},this.changeMarginLeftWithoutTransition=function(e){i.items.classList.add("notransition"),i.items.style.marginLeft=e+"px",getComputedStyle(i.items).marginLeft,i.items.classList.remove("notransition")},this.drag=function(e){i.previousOffset=e;var t=i.startMarginLeft+e;i.options.isCyclic?t=r.modNeg(t,i.contentWidthMod):(t<i.minMarginLeft?t=i.minMarginLeft:t>0&&(t=0),i.updateArrows(t)),i.items.style.marginLeft=t+"px";var n=i.calculateIndex(t);i.updateNavDots(n),i.currentIndex=n},this.dragEnd=function(e){if(i.previousOffset=0,i.isGrabbing=!1,i.items.classList.remove("notransition"),i.items.style.transitionTimingFunction="ease-out",i.options.snapItems){var t=n.dragSlideThreshold,a=.5,o=i.startMarginLeft+e;if(i.options.isCyclic)o=r.modNeg(o,i.contentWidthMod);else if(o<i.minMarginLeft?o=i.minMarginLeft:o>0&&(o=0),o-i.itemWidthWithGap<i.minMarginLeft){var s=i.lastItemOverflow/i.itemWidthWithGap;(a=s/2)<n.dragSlideThreshold&&(t=a)}var l=-o/i.itemWidthWithGap,d=e/i.itemWidthWithGap,h=0;d>t?h=-.5:d<-t&&(h=.5),i.realCurrentIndex=i.calculateRealIndex(o);var c=i.calculateRealIndex(o,h);setTimeout((function(){i.realCurrentIndex>c?i.slideLeft(1):i.realCurrentIndex<c?i.slideRight(1):l-~~l>a?i.slideRight(0):i.slideLeft(0),i.items.addEventListener("transitionend",i.handleTransitionEnd)}))}},this.dragStart=function(){if(i.contentWidthMod=i.nItems*i.itemWidthWithGap,i.isGrabbing=!0,i.sliding=!0,i.startMarginLeft=parseFloat(getComputedStyle(i.items).marginLeft),i.options.isCyclic){i.startMarginLeft+=i.nAddedCopiesLeft*i.itemWidthWithGap,i.startMarginLeft=r.modNeg(i.startMarginLeft,i.contentWidthMod),i.removeCopies();var e=i.firstItem.cloneNode(!0);i.items.insertBefore(e,null),i.nAddedCopiesRight++}else i.updateArrows(i.startMarginLeft),i.handleFirstPictureTransitionEnd();var t=i.calculateIndex(i.startMarginLeft);i.updateNavDots(t),i.currentIndex=t,i.items.style.marginLeft=i.startMarginLeft+"px",i.items.classList.add("notransition")},this.handleClick=function(e){i.abortClick&&(e.stopPropagation(),e.preventDefault())},this.handleDragEnd=function(e){var t;i.wrapper.classList.remove("dragging"),e.target.releasePointerCapture(e.pointerId),i.wrapper.removeEventListener("pointermove",i.handlePointerMove,!0),i.wrapper.removeEventListener("pointerup",i.handleDragEnd,!0),i.wrapper.removeEventListener("lostpointercapture",i.handleDragEnd,!0),t="lostpointercapture"===e.type?i.previousOffset:e.x-i.startX,i.dragEnd(t)},this.handleNavDotClick=function(e){var t=Number(e.dataset.index);if(t!==i.currentIndex){var n=t-i.currentIndex;n<0?i.slideLeft(-n):i.slideRight(n)}},this.handlePointerDown=function(e){i.abortClick=!1,i.startX=e.x,e.target.setPointerCapture(e.pointerId),i.wrapper.addEventListener("pointermove",i.handlePointerMove,!0),i.wrapper.addEventListener("pointerup",i.handleDragEnd,!0),i.wrapper.addEventListener("lostpointercapture",i.handleDragEnd,!0),i.dragStart()},this.handlePointerEnter=function(){clearTimeout(i.timer),i.isTimerSet=!1,i.isTimerStopped=!0},this.handlePointerMove=function(e){var t=e.x-i.startX;Math.abs(t)>n.abortClickDistance&&(i.abortClick=!0,i.wrapper.classList.add("dragging"),e.stopPropagation(),e.preventDefault()),i.drag(t)},this.handlePointerLeave=function(){i.isGrabbing||(i.timer=window.setTimeout(i.autoSlide,i.options.slideDuration),i.isTimerSet=!0,i.isTimerStopped=!1)},this.handleFirstPictureTransitionEnd=function(){i.items.style.transitionTimingFunction="ease",i.sliding=!1,i.options.slideDuration>0&&!i.isTimerSet&&!i.isTimerStopped&&(i.timer=window.setTimeout(i.autoSlide,i.options.slideDuration),i.isTimerSet=!0)},this.handleTransitionEnd=function(){if(i.items.removeEventListener("transitionend",i.handleTransitionEnd),i.removeCopies(),!i.isGrabbing){var e=-i.currentIndex*i.itemWidthWithGap;!i.options.isCyclic&&e<i.minMarginLeft&&(e=i.minMarginLeft),i.realCurrentIndex=i.currentIndex,i.changeMarginLeftWithoutTransition(e),i.handleFirstPictureTransitionEnd()}},this.handleWindowResize=function(){var e;if(i.itemWidthWithGap=i.calculateItemWidthWithGap(),i.contentWidth=i.calculateContentWidth(i.itemWidthWithGap),i.minMarginLeft=i.calculateMinMarginLeft(i.contentWidth),i.lastItemOverflow=i.calculateLastItemOverflow(i.itemWidthWithGap),i.lastIndex=i.calculateLastIndex(i.itemWidthWithGap,i.minMarginLeft),i.contentWidth<i.items.clientWidth?(e=0,i.wrapper.classList.add("center"),i.wrapper.removeEventListener("pointerdown",i.handlePointerDown,!0),i.items.removeEventListener("click",i.handleClick,!0)):(e=-i.realCurrentIndex*i.itemWidthWithGap,i.wrapper.classList.remove("center"),i.wrapper.addEventListener("pointerdown",i.handlePointerDown,!0),i.items.addEventListener("click",i.handleClick,!0)),i.sliding){var t=parseFloat(getComputedStyle(i.items).marginLeft)*i.itemWidthWithGap/i.previousItemWidthWithGap;i.changeMarginLeftWithoutTransition(t),e===t?i.handleTransitionEnd():(i.items.style.marginLeft=e+"px",i.items.style.transitionTimingFunction="ease-out")}else i.changeMarginLeftWithoutTransition(e);i.options.isCyclic||i.updateArrows(e),i.previousItemWidthWithGap=i.itemWidthWithGap},this.overflowLeft=function(e,t){var n,r=parseFloat(getComputedStyle(i.items).marginLeft);r-=i.itemWidthWithGap;for(var a=t;a>1;a--)n=i.items.children[i.nAddedCopiesLeft+e+t-1].cloneNode(!0),i.items.insertBefore(n,i.items.firstChild),r-=i.itemWidthWithGap;n=i.items.children[i.nAddedCopiesLeft+e+t-1].cloneNode(!0),i.nAddedCopiesLeft>0&&(i.items.style.transitionTimingFunction="ease-out"),i.items.insertBefore(n,i.items.firstChild),i.changeMarginLeftWithoutTransition(r),i.items.style.marginLeft="0",i.nAddedCopiesLeft+=t,i.items.addEventListener("transitionend",i.handleTransitionEnd)},this.overflowRight=function(e,t){for(var n=t-1;n>=0;n--){var r=i.items.children[i.nAddedCopiesLeft+e-n].cloneNode(!0);i.items.insertBefore(r,null)}i.items.style.marginLeft=-i.realCurrentIndex*i.itemWidthWithGap+"px",i.nAddedCopiesRight>0&&(i.items.style.transitionTimingFunction="ease-out"),i.nAddedCopiesRight+=t,i.items.addEventListener("transitionend",i.handleTransitionEnd)},this.setUpArrows=function(){var e,t;null===(e=i.leftArrow)||void 0===e||e.addEventListener("click",(function(){i.slideLeft(1),i.items.style.transitionTimingFunction="ease-out"})),null===(t=i.rightArrow)||void 0===t||t.addEventListener("click",(function(){i.slideRight(1),i.items.style.transitionTimingFunction="ease-out"})),i.options.isCyclic||(i.leftArrow&&(i.leftArrow.style.display="none"),i.rightArrow&&0===i.minMarginLeft&&(i.rightArrow.style.display="none"))},this.setUpNavDots=function(){var e,t,n=i,r=document.createElement("li");r.className="circle current",r.dataset.index="0",r.addEventListener("click",(function(){n.handleNavDotClick(this)})),null===(e=i.navDots)||void 0===e||e.appendChild(r);for(var a=1;a<i.nItems;a++)(r=document.createElement("li")).className="circle",r.dataset.index=a.toString(),r.addEventListener("click",(function(){n.handleNavDotClick(this)})),null===(t=i.navDots)||void 0===t||t.appendChild(r)},this.removeCopies=function(){for(;i.nAddedCopiesLeft>0;)i.items.removeChild(i.items.children[0]),i.nAddedCopiesLeft--;for(;i.nAddedCopiesRight>0;)i.items.removeChild(i.items.lastChild),i.nAddedCopiesRight--},this.slide=function(){var e=-i.realCurrentIndex*i.itemWidthWithGap;i.options.isCyclic||(e<i.minMarginLeft&&(e=i.minMarginLeft),i.updateArrows(e)),i.items.style.marginLeft=e+"px",i.sliding&&(i.items.style.transitionTimingFunction="ease-out")},this.slideLeft=function(e){var t=(i.currentIndex-e+i.nItems)%i.nItems;i.beforeSlide(t),i.realCurrentIndex<e?i.overflowLeft(t,e):(i.realCurrentIndex-=e,i.slide()),i.sliding=!0},this.slideRight=function(e){var t=(i.currentIndex+e)%i.nItems;i.realCurrentIndex+=e,i.beforeSlide(t),i.realCurrentIndex>=i.items.childElementCount?i.overflowRight(t,e):i.slide(),i.sliding=!0},this.updateArrows=function(e){i.leftArrow&&(0===i.calculateIndex(e)?i.leftArrow.style.display="none":i.leftArrow.style.removeProperty("display")),i.rightArrow&&(i.calculateIndex(e)===i.lastIndex?i.rightArrow.style.display="none":i.rightArrow.style.removeProperty("display"))},this.updateNavDots=function(e){var t,n;i.options.showNavDots&&(null===(t=i.navDots)||void 0===t||t.children[i.currentIndex].classList.remove("current"),null===(n=i.navDots)||void 0===n||n.children[e].classList.add("current"))},this.options=a(a({},o),t),this.wrapper=e.querySelector(".wrapper"),this.items=this.wrapper.querySelector(".items"),this.leftArrow=e.querySelector(".left"),this.rightArrow=e.querySelector(".right"),this.nItems=this.items.childElementCount,this.firstItem=this.items.children[0],this.secondItem=this.items.children[1],this.slider=e,this.handleWindowResize(),this.options.slideDuration>0&&(this.timer=window.setTimeout(this.autoSlide,this.options.slideDuration),this.isTimerSet=!0,e.addEventListener("pointerenter",this.handlePointerEnter),e.addEventListener("pointerleave",this.handlePointerLeave)),this.options.showNavDots&&(this.navDots=e.querySelector("ul"),this.setUpNavDots()),this.setUpArrows(),this.items.addEventListener("transitionend",this.handleFirstPictureTransitionEnd),this.items.addEventListener("dragstart",(function(e){e.preventDefault()})),addEventListener("resize",this.handleWindowResize)}return e.prototype.update=function(){this.handleWindowResize()},e}(),l=function(e){var t=this;this.nLoadedThumbs=0,this.handleThumbLoad=function(e){var i;t.nLoadedThumbs++,t.nLoadedThumbs===t.nThumbs&&(null===(i=t.slider)||void 0===i||i.update())};var i=e.querySelector(".slider");if(i){this.slider=new s(i,{isCyclic:!0,showNavDots:!0,slideDuration:n.autoPlaySlideDuration});var r=i.querySelector(".items");if(r){this.nThumbs=r.childElementCount;for(var a=function(e){var i=r.children[e];i.addEventListener("load",(function(){return t.handleThumbLoad(i)}),{once:!0})},o=0;o<this.nThumbs;o++)a(o)}}},d=function(){function e(e){var t=this;this.isExpanded=!1,this.toggle=function(){t.isExpanded=!t.isExpanded,t.isExpanded?(t.list.style.height=t.list.scrollHeight+"px",t.dropArrow.href.baseVal="#icon-arrow-drop-up"):(t.list.style.height="0",t.dropArrow.href.baseVal="#icon-arrow-drop-down")};var i=e.querySelector("button");this.dropArrow=i.querySelector(".arrow use"),this.list=e.querySelector(".list"),i.addEventListener("click",this.toggle);for(var n=function(e){var i=r.list.children[e],n=i.dataset.lang;i.addEventListener("click",(function(){return t.changeLanguage(n)}))},r=this,a=0;a<this.list.childElementCount;a++)n(a)}return e.getLanguage=function(){return"/en-gb/"===location.pathname.substr(0,7)?"en-gb":"/de/"===location.pathname.substr(0,4)?"de":"pl"},e.prototype.changeLanguage=function(t){var i;if("pl"===t){var n=r.nthIndex(window.location.pathname,"/",2);i=window.location.pathname.substr(n)}else if("pl"==e.getLanguage())i="/"+t+window.location.pathname;else{n=r.nthIndex(window.location.pathname,"/",2);i="/"+t+window.location.pathname.substr(n)}window.location.href=i+window.location.search},e}(),h=function(e,t,i,n,r,a){var o=this;void 0===a&&(a=!1),this.container=e,this.priceWith=t,this.priceWithout=i,this.priceWithEn=n,this.priceWithoutEn=r,this.isChecked=a,this.toggle=function(){o.isChecked=!o.isChecked,o.isChecked?o.svgUse.href.baseVal="#icon-check-square":o.svgUse.href.baseVal="#icon-square",o.setPrice()},this.setPrice=function(){var e=o.container.closest(".product-details"),t=null==e?void 0:e.querySelector(".price .value");o.isChecked?"pl"===d.getLanguage()?t.innerHTML=o.priceWith.toString():t.innerHTML=o.priceWithEn.toString():"pl"===d.getLanguage()?t.innerHTML=o.priceWithout.toString():t.innerHTML=o.priceWithoutEn.toString()};var s=e.querySelector("svg.icon");this.svgUse=s.querySelector("use"),s.addEventListener("click",this.toggle),this.isChecked?this.svgUse.href.baseVal="#icon-check-square":this.svgUse.href.baseVal="#icon-square"};window.dataLayer=window.dataLayer||[];for(var c=function(){window.dataLayer.push(arguments)},u=function(){function e(t){var i=this;this.template=t,this.accept=function(){e.setCookie(n.consentCookieName,"1",n.consentMaxAge,"/"),i.updateConsent(!0),i.container.remove()},this.reject=function(){e.setCookie(n.consentCookieName,"0",n.consentMaxAge,"/"),i.updateConsent(!1),i.container.remove()},this.container=t.content.firstChild,this.acceptButton=this.container.querySelector(".accept"),this.rejectButton=this.container.querySelector(".reject");var r=e.getCookie(n.consentCookieName);this.initAnalytics("1"===r),r||(this.acceptButton.addEventListener("click",this.accept),this.rejectButton.addEventListener("click",this.reject),document.body.append(t.content))}return e.getCookie=function(e){var t=document.cookie,i=e+"=",n=t.indexOf("; "+i);if(-1!==n)n+="; ".length;else if(0!==(n=t.indexOf(i)))return null;var r=t.indexOf(";",n);return-1===r&&(r=t.length),decodeURIComponent(t.substring(n+i.length,r))},e.removeCookie=function(t,i){e.setCookie(t,"",0,i)},e.setCookie=function(e,t,i,n){document.cookie=e+"="+t+"; Max-Age="+i+"; Path="+n+"; SameSite=Strict; Secure"},e.prototype.initAnalytics=function(e){var t=e?"granted":"denied";c("js",new Date),c("consent","default",{analytics_storage:t,ad_storage:t}),c("config","UA-165608042-1",{anonymize_ip:!0})},e.prototype.updateConsent=function(e){var t=e?"granted":"denied";c("consent","update",{analytics_storage:t,ad_storage:t})},e}(),m=function(e){var t=this;this.expander=e,this.isExpanded=!1,this.toggle=function(){t.isExpanded=!t.isExpanded,t.isExpanded?(t.button.setAttribute("aria-label","Show less"),t.container.style.height=t.container.scrollHeight+"px",t.svgUse.href.baseVal="#icon-chevron-up"):(t.button.setAttribute("aria-label","Show more"),t.container.style.height=n.expanderMinHeight+"rem",t.svgUse.href.baseVal="#icon-chevron-down",window.scrollY>t.expander.offsetTop&&window.scrollTo(window.scrollX,t.expander.offsetTop-r.remToPx(n.headerMinHeight)))},this.handleWindowResize=function(){t.isExpanded&&(t.container.style.height="auto",t.container.style.height=t.container.scrollHeight+"px")},this.button=e.querySelector("button"),this.container=e.querySelector(".container"),this.svgUse=e.querySelector("use"),this.button.setAttribute("aria-label","Show more"),this.button.addEventListener("click",this.toggle),addEventListener("resize",this.handleWindowResize)},p=function(e){var t=this;this.gallery=e,this.previewAspectRatio=.5625,this.abortClick=!1,this.isGrabbing=!1,this.nLoadedThumbs=0,this.startLeft=0,this.startTop=0,this.startX=0,this.startY=0,this.showPreview=function(e){var i,r;e.dataset.ratio?(i=parseFloat(e.dataset.ratio)/100,r=Math.round(n.galleryPreviewHeight/i)):(i=t.previewAspectRatio,r=n.galleryPreviewWidth);var a=e.src.slice(0,-"h100.jpg".length),o=t.previewAspectRatio/i;t.previewImg.sizes="(max-width: 768px) calc((100vw - 2rem) * "+o+"),(max-width: 70em) calc((100vw - 4.5em) * 3 / 5 * "+o+"),calc(65.5em * 3 / 5 * "+o+")",t.previewImg.src=a+"h400.jpg",t.previewImg.srcset=a+"h"+n.galleryPreviewHeight+".jpg "+r+"w,"+a+"w"+2*r+".jpg "+2*r+"w,"+a+"w"+3*r+".jpg "+3*r+"w,"+a+"w"+4*r+".jpg "+4*r+"w",t.previewImgOverlay.classList.add("spinner"),t.previewImg.addEventListener("load",(function(){t.previewImgWrapper.style.paddingTop=100*i+"%",t.preview.style.maxWidth=t.previewAspectRatio/i*100+"%",t.previewImgOverlay.classList.remove("spinner")}),{once:!0})},this.handleThumbLoad=function(e){var i;t.nLoadedThumbs++,t.nLoadedThumbs===t.nThumbs&&(null===(i=t.slider)||void 0===i||i.update())},this.handlePointerMove=function(e){if(t.isGrabbing){e.preventDefault();var i=e.x-t.startX,r=e.y-t.startY;(Math.abs(i)>n.abortClickDistance||Math.abs(r)>n.abortClickDistance)&&(t.abortClick=!0,t.fullImg.classList.add("dragging"));var a=t.startLeft+i,o=t.startTop+r,s=t.full.clientWidth/2,l=t.full.clientHeight/2,d=s-t.fullImg.naturalWidth,h=l-t.fullImg.naturalHeight;a=Math.min(Math.max(a,d),s),o=Math.min(Math.max(o,h),l),t.fullImg.style.left=a+"px",t.fullImg.style.top=o+"px"}},this.handleDragEnd=function(e){t.isGrabbing=!1,t.fullImg.classList.remove("dragging"),t.fullImg.releasePointerCapture(e.pointerId),t.fullImg.removeEventListener("pointermove",t.handlePointerMove),t.fullImg.removeEventListener("pointerup",t.handleDragEnd),t.fullImg.removeEventListener("lostpointercapture",t.handleDragEnd)},this.handlePointerDown=function(e){e.stopPropagation(),t.abortClick=!1,t.isGrabbing=!0,t.startX=e.x,t.startY=e.y,t.startLeft=parseFloat(t.fullImg.style.left),t.startTop=parseFloat(t.fullImg.style.top),t.fullImg.setPointerCapture(e.pointerId),t.fullImg.addEventListener("pointermove",t.handlePointerMove),t.fullImg.addEventListener("pointerup",t.handleDragEnd),t.fullImg.addEventListener("lostpointercapture",t.handleDragEnd)},this.showFullImage=function(){t.fullImg.src=t.previewImg.src.replace("-h400.jpg",".jpg"),t.fullContainer.classList.add("spinner"),t.full.style.display="block",document.body.style.overflow="hidden",t.fullImg.addEventListener("load",(function(){t.fullContainer.classList.remove("spinner")}),{once:!0})},this.setUpZoom=function(){t.full.addEventListener("click",(function(){document.body.style.overflow=n.bodyOverflow,t.full.style.display="none",t.zoomOut()})),t.fullImg.addEventListener("click",(function(e){if(e.stopPropagation(),t.full.classList.contains("zoom")){if(t.abortClick)return;var i=e.x-t.startX,r=e.y-t.startY;if(Math.abs(i)>n.abortClickDistance||Math.abs(r)>n.abortClickDistance)return;t.zoomOut()}else t.zoomIn(e)}))},this.zoomIn=function(e){var i=e.offsetX/t.fullImg.width,n=e.offsetY/t.fullImg.height,r=-i*t.fullImg.naturalWidth+e.x,a=-n*t.fullImg.naturalHeight+e.y;t.fullImg.style.left=r+"px",t.fullImg.style.top=a+"px",t.fullImg.style.bottom="auto",t.fullImg.style.right="auto",t.full.classList.add("zoom"),t.fullImg.addEventListener("pointerdown",t.handlePointerDown)},this.zoomOut=function(){t.full.classList.remove("zoom"),t.fullImg.style.left="0",t.fullImg.style.top="0",t.fullImg.style.bottom="0",t.fullImg.style.right="0",t.fullImg.removeEventListener("pointerdown",t.handlePointerDown)},this.full=e.querySelector(".full"),this.fullContainer=this.full.querySelector(".container"),this.fullImg=this.fullContainer.querySelector("img"),this.closeButton=this.full.querySelector(".close"),this.preview=e.querySelector(".preview"),this.previewImgWrapper=this.preview.querySelector(".image-loading"),this.previewImgOverlay=this.previewImgWrapper.querySelector(".overlay"),this.previewImg=this.previewImgWrapper.querySelector("img"),this.previewImg.addEventListener("click",this.showFullImage),this.fullImg.addEventListener("dragstart",(function(e){e.preventDefault()})),this.setUpZoom();var i=e.querySelector(".slider");if(i){this.slider=new s(i);var r=i.querySelector(".items");if(r){this.nThumbs=r.childElementCount;for(var a=function(e){var i=r.children[e];i.addEventListener("click",(function(){return t.showPreview(i)})),i.addEventListener("load",(function(){return t.handleThumbLoad(i)}),{once:!0})},o=0;o<this.nThumbs;o++)a(o)}}},g=function(e){var t=this;this.header=e,this.isMenuHorizontal=!1,this.isOpen=!1,this.getInitialHeaderHeight=function(){var e,i=r.remToPx(1);return e=t.mediaQuery.matches?n.headerMaxHeightMobile:n.headerMaxHeightDesktop,Math.max(e*i-window.pageYOffset,n.headerMinHeight*i)},this.handleAnchorClick=function(){t.mediaQuery.matches&&t.toggle()},this.handleMediaQueryChange=function(){t.header.classList.remove("animate"),t.handleHeaderHeightChange(),getComputedStyle(t.navigation).transition,t.header.classList.add("animate")},this.handleHeaderHeightChange=function(){var e,i=r.remToPx(1),a=n.headerMinHeight*i;e=t.mediaQuery.matches?n.headerMaxHeightMobile:n.headerMaxHeightDesktop,t.headerHeight=Math.max(e*i-window.pageYOffset,a),t.headerHeight<=a?(t.wrapper.style.removeProperty("padding-bottom"),t.mediaQuery.matches?(t.isMenuHorizontal=!1,t.header.classList.remove("horizontal")):t.isMenuHorizontal||(t.isMenuHorizontal=!0,t.header.classList.add("horizontal"))):(t.isMenuHorizontal=!1,t.header.classList.remove("horizontal"),t.mediaQuery.matches||(t.wrapper.style.paddingBottom=(n.headerDivMaxPaddingBottom-n.headerDivMinPaddingBottom)*(t.headerHeight-a)/((n.headerMaxHeightDesktop-n.headerMinHeight)*i)+n.headerDivMinPaddingBottom+"rem")),t.header.style.height=t.headerHeight+"px"},this.onToggled=function(){t.isOpen&&(t.navigation.style.overflow="auto",t.navigation.classList.add("opened"))},this.toggle=function(){document.body.classList.toggle("hide-overflow"),t.menu.classList.toggle("open"),t.navigation.style.removeProperty("overflow"),t.isOpen=!t.isOpen,t.isOpen?t.navigation.style.height="calc((100vh - "+t.headerHeight+"px)":(t.navigation.style.removeProperty("height"),t.navigation.classList.remove("opened"))},this.wrapper=e.querySelector("div"),this.menu=this.wrapper.querySelector(".menu"),this.navigation=this.menu.querySelector("nav");var i=this.menu.querySelector(".menu-button"),a=this.navigation.querySelectorAll("a");this.mediaQuery=window.matchMedia("(max-width: "+n.headerMenuWidthThreshold+"px)"),this.headerHeight=this.getInitialHeaderHeight(),this.navigation.addEventListener("transitionend",this.onToggled),i.addEventListener("click",this.toggle);for(var o=0;o<a.length;o++)a[o].addEventListener("click",this.handleAnchorClick);this.handleHeaderHeightChange(),setTimeout((function(){t.mediaQuery.addEventListener("change",t.handleMediaQueryChange),document.addEventListener("scroll",t.handleHeaderHeightChange),setTimeout((function(){return e.classList.add("animate")}))}))},f=function(e){var t=this;this.container=e,this.toggle=function(){t.container.classList.toggle("hold")},e.addEventListener("click",this.toggle)},v=document.getElementsByClassName("banner"),w=0;w<v.length;w++)new l(v[w]);var y=document.querySelector("#super-booster-2000 .checkbox");y&&new h(y,689,599,155,139,!0);var L=document.getElementById("cookies-notice-template");L&&new u(L);var I=document.getElementsByClassName("regular slider");for(w=0;w<I.length;w++)new s(I[w]);var C=document.getElementsByClassName("gallery");for(w=0;w<C.length;w++)new p(C[w]);var b=document.getElementsByClassName("expander");for(w=0;w<b.length;w++)new m(b[w]);var x=document.querySelector("body > header");x&&new g(x);var E=document.querySelector(".hold-on-click");E&&new f(E);var W=document.getElementsByClassName("language-dropdown");for(w=0;w<W.length;w++)new d(W[w])}]);