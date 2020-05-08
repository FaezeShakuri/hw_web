function minjQuery(selector){
	/*Selecting element*/
	let self = {};
	self.element = document.querySelector(selector);
	self.elementId = document.getElementById(selector);

	self.html = function(){
		return self.element;
	}

	/* Add Class To Element */
	self.addClass = function (className, ...args){
		if(!className) return;
		self.element.classList.add(className, ...args);
	}

	/* Add attribute to The Element */
	self.attr = function (name, value){
		if(!value) return self.element.getAttribute(name);
		self.element.setAttribute(name, value);
		return self;
	}

	/* Get Children of an Element */
	self.children = function (){
		if(self.element.hasChildNodes()){
			return self.element.childNodes;
		}
		console.log(self.element.length);
	}

	/* Handel Click Event */
	self.click = function (callBack) {
		self.elementId.addEventListener('click', callBack);
	}

	/* Remove Children Of The Element */
	self.empty = function() {
		while (self.element.firstChild) {
  			self.element.removeChild(self.element.lastChild);
		}
	}

	/* Check The Element Has Class Or Not */
	self.hasClass = function(className){
		if(self.element.classList.contains(className)){
			console.log(className+" exist");
			return true;
		}else{
			console.log(className+" dose not exist");
			return false;
		}
	}

	/* Add Or Remove Class */
	self.toggleClass = function (className) {
		self.element.classList.toggle(className);
	}
	
	/* Remove Attribute From An Element */
	self.removeAttr = function (attributeName){
		self.element.removeAttribute(attributeName);
	}

	/* Fade Toggle By Duration */
	self.fadeToggle = function (duration){
		self.elementId.style.transition = 'opacity '+(duration/1000)+'s';

		const { opacity } = self.elementId.ownerDocument.defaultView.getComputedStyle(self.elementId, null);

		(opacity === '1') 
		? self.elementId.style.opacity = 0 
		: self.elementId.style.opacity = 1;
	}

	/* Hover */
	self.hover = function (callback) {
		self.elementId.addEventListener("mouseenter", callback, false);
	}
	
	return self;
}

