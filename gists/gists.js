var httpRequest;
if(window.XMLRequest)
  httpRequest = new XMLRequest();
else if(window.ActiveObject)
  httpRequest = new ActiveObject("MicrosoftXMLHTTP");

httpRequest.OnReadyStateChange = InsertNameofFunctionHere;

httpRequest.open('GET', 'https://api.github.com/gists', true);
httpRequest.send(null);

if (httpRequest.readyState === 4)
  {
  	var requestsRetrieved = []; 
  	requestsRetrieved = JSON.parse(httpRequest.responseText);
  	var gistURL = [];
  	var gistDesc = []
  	for(var i = 0; i < requestsRetrieved.length; i++)
  	{
  		gistURL[i] = requestsRetrived.list[i].url;
  		gistDesc[i] = requestsRetrieved.list[i].description;
  	}
  }


//following code from piazza discussion https://piazza.com/class/i7nxjgezs1b2wt?cid=184 typed manually.
var fbutton = document.createElement("button");
fbutton.innerHTML = "+";
fbutton.setAttribute("gistID", gist.id);
fbutton.onclick = function()
{
	var gistID = this.getAttribute("gistID");
	var toBeFavoredGist = findByID(gistID);
}

//following code from piazza discussion https://piazza.com/class/i7nxjgezs1b2wt?cid=184 typed manually.
var generateGistHtml = function(gist)
{}

var findByID = function(id)