var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/direct/?destination=LED&origin=MOW");
xhr.setRequestHeader("x-rapidapi-host", "travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "2b1daa7d01msh975f208f11d0872p135fa2jsnf0d45637b825");

xhr.send(data);

$('.carousel').carousel()