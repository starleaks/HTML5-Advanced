var results[];

function messageHandler(e){
	if(e.data>0)
	{
		generateFibonacciSeries(e.data);
	}
}
function calculateNextFononacciValue(n)
{
	var s=0, returnValue;
	if(n==0)
	{
		return (s);
	}
	if(n==1)
	{
		s+=1
		return (s);
	}
	else
	{
		return (calculateNextFononacciValue(n-1)+  calculateNextFononacciValue(n-2));
	}
}

function generateFibonacciSeries(n)
{
	for (var i = 0; i < n -1; i++) {
		results.push(calculateNextFononacciValue(i));
	};
	postMessage(results);
}

addEventListener("message",messageHandler,true);