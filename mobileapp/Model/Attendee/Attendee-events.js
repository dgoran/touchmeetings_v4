

model.Attendee.fullAddress.onGet = function() {
	// Add your code here;
	if ((this.streetNumber != null) & (this.streetNumber > 0 ))
		return this.streetNumber + ' ' + this.streetName;
	else
		return this.streetName;
};
