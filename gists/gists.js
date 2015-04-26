var settings = null;
var responses;
var html_list = [];
var fav_list = [];
var gistList = document.getElementById('gists-list')

var httpRequest;
if(window.XMLRequest)
  httpRequest = new XMLRequest();
else if(window.ActiveObject)
  httpRequest = new ActiveObject("MicrosoftXMLHTTP");

httpRequest.onreadystatechange = function()
{
	if (httpRequest.readyState === 4 && httpRequest.status === 200)
	{
		console.log(httpRequest.responseText);
		var requestsRetrieved = []; 
		requestsRetrieved = JSON.parse(httpRequest.responseText);
		var gistURL = [];
		var gistDesc = [];
		var gistLang = [];
		for(var i = 0; i < requestsRetrieved.length; i++)
		{
			gistURL[i] = requestsRetrived[i].url;
			gistDesc[i] = requestsRetrieved[i].description;
			gistLang[i] = requestsRetrieved[i].language;
		}
	}
}


httpRequest.open('GET', 'https://api.github.com/gists', true);
httpRequest.send(null);


//following code from piazza discussion https://piazza.com/class/i7nxjgezs1b2wt?cid=184 typed manually.
var fbutton = document.createElement("button");
fbutton.innerHTML = "+";
fbutton.setAttribute("gistID", gist.id);
fbutton.onclick = function()
{
	var gistID = this.getAttribute("gistID");
	var toBeFavoredGist = findByID(gistID);
	fav_list.push(toBeFavoredGist);
}

//following code from piazza discussion https://piazza.com/class/i7nxjgezs1b2wt?cid=184 typed manually.
var generateGistHtml = function(gist)
{}

var findByID = function(id);

function generateTable(gistURL, gistDesc, gistLang)
{
	var body = document.getElementsByTagName("body");
	var gistList = document.createElement("dl");
	
	for(var j = 0; j < gistDesc.length, j++)
	{
		var listTitle = document.createElement("dt");
		var listDesc = document.createElement("dd");
		listDesc.appendChild(gistURL[j]);
		listTitle.appendChild(gistDesc[j];
		listTitle.appendChild(listDesc);
		gistList.appendChild(listTitle);
	}
}