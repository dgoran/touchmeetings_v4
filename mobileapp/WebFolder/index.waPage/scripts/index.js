
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button11 = {};	// @button
	var button10 = {};	// @button
	var button5 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button11.click = function button11_click (event)// @startlock
	{// @endlock
		// Save edits
		sources.attendee.save
		
	};// @lock

	button10.click = function button10_click (event)// @startlock
	{// @endlock
		// Save edits
		sources.venue.save;
		
	};// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		// Save edits
		sources.speaker.save
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button11", "click", button11.click, "WAF");
	WAF.addListener("button10", "click", button10.click, "WAF");
	WAF.addListener("button5", "click", button5.click, "WAF");
// @endregion
};// @endlock
