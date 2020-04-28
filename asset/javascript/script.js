var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=Stockholm");
xhr.setRequestHeader("x-rapidapi-host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "2b1daa7d01msh975f208f11d0872p135fa2jsnf0d45637b825");

xhr.send(data);

function writeToDocument(type) {
    getData(type, function(data) {
        document.getElementsById("data").innerHTML = data;
    });
}

$('.carousel').carousel()