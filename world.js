window.onload = function(){
    
    var lookupBtn = document.getElementById('Lookup');
    var httpRequest;
    var searchRequest; 

    lookupBtn.addEventListener('click', function(element) {
        element.preventDefault();

        var country = documnet.getElementById('result');
        searchResult = document.getElementById('country').value;

        httpRequest = new XMLHttpRequest();
        var url = "world.php?country" + country;
        httpRequest.onreadystatechange = searchBtn;
        httpRequest.open('GET', url);
        httpRequest.send();

    });

    function searchBtn(){
        if (httpRequest.readyState == XMLHttpRequest.DONE){
            if (httpRequest.status == 200){
                var response = httpRequest.responseText;
                searchResult.innerHTML = response;
            }else {
                alert('Request Declined.');
            }
        }
    }
};