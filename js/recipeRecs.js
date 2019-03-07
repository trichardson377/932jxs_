window.onload = function () {
    $('#recipe-recs-list').on('click','li', function (event) {
        console.log(event);
        let query = '';

        if (event.currentTarget.id) {
            query = '?recipeId=' + event.currentTarget.id;
        }
        
        location.href = `./recipe.html${query}`;
    });

    console.log('hello');
}