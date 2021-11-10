window.onload = function(){
    
    var lookupBtn = document.getElementById('lookup');
    var httpRequest;
    var searchResult; 

    lookupBtn.addEventListener('click', function(element) {
        element.preventDefault();

        var searchResult = document.getElementById('result');
        var country = documnet.getElementById('country').value;

        var httpRequest = new XMLHttpRequest();
        var url = "world.php?country" + country;
        httpRequest.onreadystatechange = searchBtn;
        httpRequest.open('GET', url);
        httpRequest.send();

    });

    lookupCitiesBtn.addEventListener('click', function(element){
        element.preventDefault();

        var searchResult = document.getElementById('result').value;
        var city = document.getElementById('city').value;

        var httpRequest = new XMLHttpRequest();
        var url = "world.php?country=country&context=cities" + country;
        httpRequest.onreadystatechange = searchBtn
        httpRequest.open('GET', url);
        httpRequest.send();


    })

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