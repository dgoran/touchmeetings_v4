

model.Venue.fullAddress.onGet = function() {
	// Add your code here;
	if ((this.street != null) & (this.street > 0 ))
		return this.street + ' ' + this.street;
	else
		return this.streetName;
	
};
