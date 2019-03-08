window.onload = function () {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			<!--document.getElementById("demo").innerHTML = this.responseText;-->
			console.log(this.responseText);
		}
	};
	xhttp.open("GET", 'http://api.yummly.com/v1/api/recipes?_app_id=bb0eb5d5&_app_key=4723b75a803f80f41d8b0cf018534045&q=onion+soup', true);
	xhttp.send();
	
    $('#recipe-recs-list').on('click','li', function (event) {
        console.log(event);
        let query = '';

        if (event.currentTarget.id) {
            query = '?recipeId=' + event.currentTarget.id;
        }
        
        location.href = `./recipe.html${query}`;
    });
}