document.getElementById('lol').onclick = name;
    function name() 
{ 

    fetch("https://apis.kahoot.it/namerator")
    .then(a=>a.json())
    .then(b=>document.getElementById('nic').innerHTML="Your nick is: " + b.name)

}

