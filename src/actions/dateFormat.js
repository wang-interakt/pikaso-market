import moment from 'moment';

export function dateFormat(date, format) {
	
	if(date && date !=='' && format && format!==''){
		var cDate = moment(date).format(format);
    	return cDate;
	}else{
		return '-';
	}
}

export function SecondsToDay(value) {

	if(value && value !== ""){
		var dateNow = new Date(value);
		var dateFuture = new Date();

		var seconds = Math.floor((dateFuture - (dateNow))/1000);
		var minutes = Math.floor(seconds/60);
		var hours = Math.floor(minutes/60);
		var days = Math.floor(hours/24);

		hours = hours-(days*24);
		minutes = minutes-(days*24*60)-(hours*60);
		seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);

		var dDisplay = days > 0 ? days + (days === 1 ? " day, " : " days, ") : "";
		var hDisplay = hours > 0 ? hours + (hours === 1 ? " hour, " : " hours, ") : "";
		var mDisplay = minutes > 0 ? minutes + (minutes === 1 ? " minute, " : " minutes ") : "";
		seconds = seconds > 0 ? seconds + (seconds === 1 ? " second, " : " seconds ") : "";

		if(dDisplay === 0 && hDisplay === 0 && mDisplay === 0){
			return seconds;
		}else{
			return dDisplay + hDisplay + mDisplay;
		}

		

	}else{
		return '-';
	}
}