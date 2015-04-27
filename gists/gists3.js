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

//TODO: defined the hash here
var gistMapping = {};
var favList = [];
localStorage.setItem('localFavs', favList);
var favMapping = {};

function loadGists()
{
  var requestsRetrieved = [];
  requestsRetrieved = JSON.parse(localStorage.getItem('localGists'));
  
  /*var obj = { id: gist.id,
  				title: gist.description
  				language: gist.language
  				url: gist.url }*/
  var gistListDoms = document.getElementById("ul-gists");  
  var favListDoms = document.getElementById("ul-favs");
  
  for(var i = 0; i < requestsRetrieved.length; i++)
    {
      var gist = requestsRetrieved[i];
      //TODO:hash table to lookup gists fast!
      gistMapping[gist.id] = gist;
      
      /* var listTitle = document.createElement('dt');
      var listDesc = document.createElement('dd');
      listDesc.innerText = gistURL[j] + ' ' + gistLang[j];
      listTitle.innerText = gistDesc[j];
      listTitle.appendChild(listDesc);
      gistList.appendChild(listTitle); */      
      var listDesc = document.createElement('li');
      var HTMLlink = document.createElement('a');
      HTMLlink.setAttribute("href", gist.url);
      listDesc.innerHTML = (gist.description || "No Description") + ' ' + HTMLlink + ' ';
      //following code from piazza discussion https://piazza.com/class/i7nxjgezs1b2wt?cid=184 typed manually.
      var fbutton = document.createElement("button");
      fbutton.innerHTML = "+";
      fbutton.setAttribute("gistIDno", gist.id);
      fbutton.onclick = function(){
        var fGist = gistMapping[this.getAttribute("gistIDno")];
        fav_list.push(fGist);
      };
      listDesc.appendChild(fbutton);
      gistListDoms.appendChild(listDesc);
      
    }  
  
  for(var j = 0; j < favList.length; j++)
    {
      var fav = favList[i];
      favMapping[fav.id] = fav;
      var favListDesc = document.createElement('li');
      var favHTMLlink = document.createElement('a');
      favHTMLlink.setAttribute("href", fav.url);
      favListDesc.innerHTML = (fav.description || "No Description") + ' ' + favHTMLlink + ' ';
      var rbutton = document.createElement("button");
      rbutton.innerHTML = "-";
      rbutton.setAttribute("favIDno", fav.id);
      rbutton.onclick = function(){
        var fFav = favMapping[this.getAttribute("favIDno")];
        fav_list.pop(fFav);
      };
      favListDesc.appendChild(rbutton);
      favListDoms.appendChild(favListDesc);
      
    }
}



/*function addFavorite(fGist)
{
  //TODO: You are out of button scope, this is not refering to the button anymore
	//var gistIDnum = this.getAttribute("gistIDno");	
	fav_list.push(fGist);

  //TODO: what is fav_list. it's not define
}*/