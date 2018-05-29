function dateBetween(fDate,tDate)
{
	var currentDate = new Date();
    
    var minDate = new Date(fDate);
    var maxDate =  new Date(tDate);

    if (currentDate >= minDate && currentDate <= maxDate ){
         return true;
    }
    else{
        return false;
    }
}

function getHolliday()
{
	var date = new Date();
	var year = date.getFullYear();
	
	var holliday = false;
	
	//Christmas 	= 1
	//Newyearseve 	= 2
	//Halloween 	= 3
	if(dateBetween("12/01/"+year, "12/26/"+year))
	{
		holliday = 1;
	} else if((date.getDate() == 1 && date.getMonth()+1 == 1) || (date.getDate() == 31 && date.getMonth()+1 == 12))
	{
		holliday = 2;
	}
	else if(dateBetween("10/27/"+year, "11/02/"+year))
	{
		holliday = 3;
	}
	
	return holliday;
}

/*
function Easter(Y) {
    var C = Math.floor(Y/100);
    var N = Y - 19*Math.floor(Y/19);
    var K = Math.floor((C - 17)/25);
    var I = C - Math.floor(C/4) - Math.floor((C - K)/3) + 19*N + 15;
    I = I - 30*Math.floor((I/30));
    I = I - Math.floor(I/28)*(1 - Math.floor(I/28)*Math.floor(29/(I + 1))*Math.floor((21 - N)/11));
    var J = Y + Math.floor(Y/4) + I + 2 - C + Math.floor(C/4);
    J = J - 7*Math.floor(J/7);
    var L = I - J;
    var M = 3 + Math.floor((L + 40)/44);
    var D = L + 28 - 31*Math.floor(M/4);

    return padout(M) + '-' + padout(D);
}

function padout(number) { return (number < 10) ? '0' + number : number; }
*/