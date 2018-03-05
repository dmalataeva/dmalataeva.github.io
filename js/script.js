$("#link-about").hover(
	function() {
		$("#rect-about").animate({
			height: "1.2vw",
			bottom: "1.2vw"
		}, "fast");
	}, 
	function() {
		$("#rect-about").animate({
			height: "0.5vw",
			bottom: "0.5vw"
		}, "fast");
	}
);

$("#link-resume").hover(
	function() {
		$("#rect-resume").animate({
			height: "1.2vw",
			bottom: "1.2vw"
		}, "fast");
	}, 
	function() {
		$("#rect-resume").animate({
			height: "0.5vw",
			bottom: "0.5vw"
		}, "fast");
	}
);