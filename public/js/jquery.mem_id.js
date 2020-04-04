	function validatePID(xx,xx2){
			//alert(xx2);
			pid = xx.toString().replace(/\D/g,'');
			if(pid.length == 13){
				var sum = 0;
				for(var i = 0; i < pid.length-1; i++){
					sum += Number(pid.charAt(i))*(pid.length-i);
				}
				var last_digit = (11 - sum % 11) % 10;
				if(pid.charAt(12) != last_digit){
					return "NO";
				}else{
					return xx2;
				}
			}
		}