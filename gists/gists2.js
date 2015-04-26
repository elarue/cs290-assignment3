function fetchGists()
{
  var xmlhttp;
  if(window.XMLHttpRequest)
    {
      xmlhttp = new XMLHttpRequest();
    }
  else
    {
      xmlhttp = new ActiveXObject("MicrosoftXMLHTTP");
    }
  
  xmlhttp.onreadystatechange = function()
  {
    if(xmlhttp.readyState === 4 && xmlhttp.status === 200)
      {
        var response = xmlhttp.responseText;
        localStorage.setItem('localGists', response);
        loadGists();
      }
  };
  
  xmlhttp.open("GET", 'https://api.github.com/gists', true);
  xmlhttp.send();
}

function gistSearch()
{
  var gistLang = document.getElementsByName('gistLang');
  localStorage.setItem('localLang', gistLang);
  var gistParam = document.getElementById('gistParam');
  localStorage.setItem('localParam', gistParam);
  fetchGists();
}

function loadGists()
{
  var requestsRetrieved = [];
  requestsRetrieved = JSON.parse(localStorage.getItem('localGists'));
  
  /*var obj = { id: gist.id,
  				title: gist.description
  				language: gist.language
  				url: gist.url }*/
  
  var gistURL = [];
  var gistDesc = [];
  var gistLang = [];
  
  for(var i = 0; i < requestsRetrieved.length; i++)
    {
      gistURL[i] = requestsRetrieved[i].url;
      gistDesc[i] = requestsRetrieved[i].description;
      gistLang[i] = requestsRetrieved[i].language;
    }
  
  var gistList = document.createElement('ul');
  
  for (var j = 0; j < gistDesc.length; j++)
    {
      /* var listTitle = document.createElement('dt');
      var listDesc = document.createElement('dd');
      listDesc.innerText = gistURL[j] + ' ' + gistLang[j];
      listTitle.innerText = gistDesc[j];
      listTitle.appendChild(listDesc);
      gistList.appendChild(listTitle); */
      
      var listDesc = document.createElement('li');
      listDesc.innerText = gistDesc[j] + '\n' + gistURL[j] + ' ' + gistLang[j];
      gistList.appendChild(listDesc);
      
    }
  
  var listOfGists = document.getElementById('gists');
  listOfGists.appendChild(gistList);
}