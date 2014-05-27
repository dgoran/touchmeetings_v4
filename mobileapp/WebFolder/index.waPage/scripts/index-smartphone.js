
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var Submit = {};	// @button
	var register_button = {};	// @button
	var image3 = {};	// @image
	var row4 = {};	// @container
	var icon4 = {};	// @icon
	var icon6 = {};	// @icon
	var icon5 = {};	// @icon
	var icon3 = {};	// @icon
	var icon2 = {};	// @icon
	var icon1 = {};	// @icon
	var map_icon = {};	// @icon
	var about_icon = {};	// @icon
	var tweets_icon = {};	// @icon
	var agenda_icon = {};	// @icon
	var vote_icon = {};	// @icon
	var backButton1 = {};	// @button
	var speaker_icon = {};	// @icon
	var dataGrid1 = {};	// @dataGrid
// @endregion// @endlock

// eventHandlers// @lock

	Submit.touchstart = function Submit_touchstart (event)// @startlock
	{// @endlock
		// Add your code here
		$$('Submit').setBackgroundColor("#DDDDDD");
	};// @lock

	Submit.touchend = function Submit_touchend (event)// @startlock
	{// @endlock
		// Add your code here
//		$$('Submit').setTextColor('red');
//		sources.attendee.save({onSuccess:function(event) //save the current entity
//		{
//			sources.attendee.addEntity(sources.attendee.getCurrentElement());//put current entity in the datasource's entity collection
//		} });
	};// @lock

	register_button.touchcancel = function register_button_touchcancel (event)// @startlock
	{// @endlock
		// Add your code here
		$$('register_button').setBackgroundColor("transparent");
	};// @lock

	register_button.touchend = function register_button_touchend (event)// @startlock
	{// @endlock
		// navigate to registration page
		$$('register_button').setBackgroundColor("transparent");
		$$('navigationView1').goToView(10);
	};// @lock

	register_button.touchstart = function register_button_touchstart (event)// @startlock
	{// @endlock
		// make it highlight on touch start
		$$('register_button').setBackgroundColor("#FFAAAA");
	};// @lock

	image3.touchend = function image3_touchend (event)// @startlock
	{// @endlock
		// Add your code here
		$$('navigationView1').goToView(5);
	};// @lock

	row4.touchcancel = function row4_touchcancel (event)// @startlock
	{// @endlock
		// Add your code here
		$$('row4').setBackgroundColor("transparent");
	};// @lock

	row4.touchend = function row4_touchend (event)// @startlock
	{// @endlock
		// Add your code here
		$$('navigationView1').goToNextView();
		
	};// @lock

	row4.touchstart = function row4_touchstart (event)// @startlock
	{// @endlock

		// make it highlight on touch start
		$$('row4').setBackgroundColor("#FFAAAA");
		
	};// @lock

	icon4.touchcancel = function icon4_touchcancel (event)// @startlock
	{// @endlock

	};// @lock

	icon4.touchend = function icon4_touchend (event)// @startlock
	{// @endlock

	};// @lock

	icon4.touchstart = function icon4_touchstart (event)// @startlock
	{// @endlock

	};// @lock

	icon4.click = function icon4_click (event)// @startlock
	{// @endlock

	};// @lock

	icon6.touchcancel = function icon6_touchcancel (event)// @startlock
	{// @endlock

	};// @lock

	icon6.touchend = function icon6_touchend (event)// @startlock
	{// @endlock

	};// @lock

	icon6.touchstart = function icon6_touchstart (event)// @startlock
	{// @endlock

	};// @lock

	icon6.click = function icon6_click (event)// @startlock
	{// @endlock

	};// @lock

	icon5.touchcancel = function icon5_touchcancel (event)// @startlock
	{// @endlock

	};// @lock

	icon5.touchend = function icon5_touchend (event)// @startlock
	{// @endlock

	};// @lock

	icon5.touchstart = function icon5_touchstart (event)// @startlock
	{// @endlock

	};// @lock

	icon5.click = function icon5_click (event)// @startlock
	{// @endlock

	};// @lock

	icon3.touchcancel = function icon3_touchcancel (event)// @startlock
	{// @endlock

	};// @lock

	icon3.touchend = function icon3_touchend (event)// @startlock
	{// @endlock

	};// @lock

	icon3.touchstart = function icon3_touchstart (event)// @startlock
	{// @endlock

	};// @lock

	icon2.touchcancel = function icon2_touchcancel (event)// @startlock
	{// @endlock

	};// @lock

	icon2.touchend = function icon2_touchend (event)// @startlock
	{// @endlock

	};// @lock

	icon2.touchstart = function icon2_touchstart (event)// @startlock
	{// @endlock

	};// @lock

	icon2.click = function icon2_click (event)// @startlock
	{// @endlock

	};// @lock

	icon1.touchcancel = function icon1_touchcancel (event)// @startlock
	{// @endlock

	};// @lock

	icon1.touchend = function icon1_touchend (event)// @startlock
	{// @endlock

	};// @lock

	icon1.touchstart = function icon1_touchstart (event)// @startlock
	{// @endlock

	};// @lock

	icon1.click = function icon1_click (event)// @startlock
	{// @endlock

	};// @lock

	map_icon.touchcancel = function map_icon_touchcancel (event)// @startlock
	{// @endlock
		// Add your code here
		$$('map_icon').setBackgroundColor("transparent");
	};// @lock

	map_icon.touchend = function map_icon_touchend (event)// @startlock
	{// @endlock
		// On end of touch make it transparent and go to next view 8 (map details)
		$$('map_icon').setBackgroundColor("transparent");
		$$('navigationView1').goToView(8);
	};// @lock

	map_icon.touchstart = function map_icon_touchstart (event)// @startlock
	{// @endlock
		// make it highlight on touch start
		$$('map_icon').setBackgroundColor("#FFAAAA");
	};// @lock

	about_icon.touchcancel = function about_icon_touchcancel (event)// @startlock
	{// @endlock
		// Add your code here
		$$('about_icons').setBackgroundColor("transparent");
	};// @lock

	about_icon.touchend = function about_icon_touchend (event)// @startlock
	{// @endlock
		// On end of touch make it transparent and go to next view 4 (speaker details)
		$$('about_icon').setBackgroundColor("transparent");
		$$('navigationView1').goToView(7);
	};// @lock

	about_icon.touchstart = function about_icon_touchstart (event)// @startlock
	{// @endlock
		// make it highlight on touch start
		$$('about_icon').setBackgroundColor("#FFAAAA");
	};// @lock

	tweets_icon.touchcancel = function tweets_icon_touchcancel (event)// @startlock
	{// @endlock
		// Add your code here
		$$('tweets_icon').setBackgroundColor("transparent");
	};// @lock

	tweets_icon.touchend = function tweets_icon_touchend (event)// @startlock
	{// @endlock
		// On end of touch make it transparent and go to next view 4 (speaker details)
		$$('tweets_icon').setBackgroundColor("transparent");
		$$('navigationView1').goToView(9);
	};// @lock

	tweets_icon.touchstart = function tweets_icon_touchstart (event)// @startlock
	{// @endlock
		// make it highlight on touch start
		$$('tweets_icon').setBackgroundColor("#FFAAAA");
	};// @lock

	agenda_icon.touchcancel = function agenda_icon_touchcancel (event)// @startlock
	{// @endlock
		// Add your code here
		$$('agenda_icon').setBackgroundColor("transparent");
	};// @lock

	agenda_icon.touchend = function agenda_icon_touchend (event)// @startlock
	{// @endlock
		// On end of touch make it transparent and go to next view 4 (speaker details)
		$$('agenda_icon').setBackgroundColor("transparent");
		$$('navigationView1').goToView(2);
	};// @lock

	agenda_icon.touchstart = function agenda_icon_touchstart (event)// @startlock
	{// @endlock
		// make it highlight on touch start
		$$('agenda_icon').setBackgroundColor("#FFAAAA");
	};// @lock

	vote_icon.touchcancel = function vote_icon_touchcancel (event)// @startlock
	{// @endlock
		// Add your code here
		$$('vote_icon').setBackgroundColor("transparent");
	};// @lock

	vote_icon.touchend = function vote_icon_touchend (event)// @startlock
	{// @endlock
		// On end of touch make it transparent and go to next view 4 (speaker details)
		$$('vote_icon').setBackgroundColor("transparent");
		$$('navigationView1').goToView(6);
	};// @lock

	vote_icon.touchstart = function vote_icon_touchstart (event)// @startlock
	{// @endlock
		// make it highlight on touch start
		$$('vote_icon').setBackgroundColor("#FFAAAA");
	};// @lock

	vote_icon.click = function vote_icon_click (event)// @startlock
	{// @endlock
		// go to nextview(Agenda)
		$$('navigationView1').goToView(6);
	};// @lock

	backButton1.touchstart = function backButton1_touchstart (event)// @startlock
	{// @endlock
		// Add your code here
		$$('backButton1').setBackgroundColor("#FFAAAA");
	};// @lock

	backButton1.touchend = function backButton1_touchend (event)// @startlock
	{// @endlock
		// Add your code here
		$$('backButton1').setBackgroundColor("transparent");
		
	};// @lock

	speaker_icon.touchcancel = function speaker_icon_touchcancel (event)// @startlock
	{// @endlock
		// Add your code here
		$$('speaker_icon').setBackgroundColor("transparent");
	};// @lock

	speaker_icon.touchend = function speaker_icon_touchend (event)// @startlock
	{// @endlock
		// On end of touch make it transparent and go to next view 4 (speaker details)
		$$('speaker_icon').setBackgroundColor("transparent");
		$$('navigationView1').goToView(4);
	};// @lock

	speaker_icon.touchstart = function speaker_icon_touchstart (event)// @startlock
	{// @endlock
		// make it highlight on touch start
		$$('speaker_icon').setBackgroundColor("#FFAAAA");
	};// @lock

	dataGrid1.onRowClick = function dataGrid1_onRowClick (event)// @startlock
	{// @endlock
		// drilldown to details of each presentation
		$$('navigationView1').goToNextView();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("Submit", "touchstart", Submit.touchstart, "WAF");
	WAF.addListener("Submit", "touchend", Submit.touchend, "WAF");
	WAF.addListener("register_button", "touchcancel", register_button.touchcancel, "WAF");
	WAF.addListener("register_button", "touchend", register_button.touchend, "WAF");
	WAF.addListener("register_button", "touchstart", register_button.touchstart, "WAF");
	WAF.addListener("image3", "touchend", image3.touchend, "WAF");
	WAF.addListener("row4", "touchcancel", row4.touchcancel, "WAF");
	WAF.addListener("row4", "touchend", row4.touchend, "WAF");
	WAF.addListener("row4", "touchstart", row4.touchstart, "WAF");
	WAF.addListener("icon4", "touchcancel", icon4.touchcancel, "WAF");
	WAF.addListener("icon4", "touchend", icon4.touchend, "WAF");
	WAF.addListener("icon4", "touchstart", icon4.touchstart, "WAF");
	WAF.addListener("icon4", "click", icon4.click, "WAF");
	WAF.addListener("icon6", "touchcancel", icon6.touchcancel, "WAF");
	WAF.addListener("icon6", "touchend", icon6.touchend, "WAF");
	WAF.addListener("icon6", "touchstart", icon6.touchstart, "WAF");
	WAF.addListener("icon6", "click", icon6.click, "WAF");
	WAF.addListener("icon5", "touchcancel", icon5.touchcancel, "WAF");
	WAF.addListener("icon5", "touchend", icon5.touchend, "WAF");
	WAF.addListener("icon5", "touchstart", icon5.touchstart, "WAF");
	WAF.addListener("icon5", "click", icon5.click, "WAF");
	WAF.addListener("icon3", "touchcancel", icon3.touchcancel, "WAF");
	WAF.addListener("icon3", "touchend", icon3.touchend, "WAF");
	WAF.addListener("icon3", "touchstart", icon3.touchstart, "WAF");
	WAF.addListener("icon2", "touchcancel", icon2.touchcancel, "WAF");
	WAF.addListener("icon2", "touchend", icon2.touchend, "WAF");
	WAF.addListener("icon2", "touchstart", icon2.touchstart, "WAF");
	WAF.addListener("icon2", "click", icon2.click, "WAF");
	WAF.addListener("icon1", "touchcancel", icon1.touchcancel, "WAF");
	WAF.addListener("icon1", "touchend", icon1.touchend, "WAF");
	WAF.addListener("icon1", "touchstart", icon1.touchstart, "WAF");
	WAF.addListener("icon1", "click", icon1.click, "WAF");
	WAF.addListener("map_icon", "touchcancel", map_icon.touchcancel, "WAF");
	WAF.addListener("map_icon", "touchend", map_icon.touchend, "WAF");
	WAF.addListener("map_icon", "touchstart", map_icon.touchstart, "WAF");
	WAF.addListener("about_icon", "touchcancel", about_icon.touchcancel, "WAF");
	WAF.addListener("about_icon", "touchend", about_icon.touchend, "WAF");
	WAF.addListener("about_icon", "touchstart", about_icon.touchstart, "WAF");
	WAF.addListener("tweets_icon", "touchcancel", tweets_icon.touchcancel, "WAF");
	WAF.addListener("tweets_icon", "touchend", tweets_icon.touchend, "WAF");
	WAF.addListener("tweets_icon", "touchstart", tweets_icon.touchstart, "WAF");
	WAF.addListener("agenda_icon", "touchcancel", agenda_icon.touchcancel, "WAF");
	WAF.addListener("agenda_icon", "touchend", agenda_icon.touchend, "WAF");
	WAF.addListener("agenda_icon", "touchstart", agenda_icon.touchstart, "WAF");
	WAF.addListener("vote_icon", "touchcancel", vote_icon.touchcancel, "WAF");
	WAF.addListener("vote_icon", "touchend", vote_icon.touchend, "WAF");
	WAF.addListener("vote_icon", "touchstart", vote_icon.touchstart, "WAF");
	WAF.addListener("vote_icon", "click", vote_icon.click, "WAF");
	WAF.addListener("backButton1", "touchstart", backButton1.touchstart, "WAF");
	WAF.addListener("backButton1", "touchend", backButton1.touchend, "WAF");
	WAF.addListener("speaker_icon", "touchcancel", speaker_icon.touchcancel, "WAF");
	WAF.addListener("speaker_icon", "touchend", speaker_icon.touchend, "WAF");
	WAF.addListener("speaker_icon", "touchstart", speaker_icon.touchstart, "WAF");
	WAF.addListener("dataGrid1", "onRowClick", dataGrid1.onRowClick, "WAF");
// @endregion
};// @endlock
