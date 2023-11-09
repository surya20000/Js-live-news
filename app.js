// Progression 1: create a function and fetch the api using axios
let arr = [];

function getData(){
    const getBlog = document.getElementById('blog');

    axios
        .get(
            'https://gnews.io/api/v4/search?q=example&token=48c61d35c068f6438c32c4a0b260f8bd&lang=en'
        )
        .then((res) => {
            console.log(res.data);
            const listOfArticles = res.data.articles;
            
            listOfArticles.forEach((article) =>{
                const getArticle = document.createElement('div');
                getArticle.setAttribute('id','article');
                getArticle.setAttribute('class','article');

                const title = document.createElement('h3');
                const content = document.createElement('p');
                const img = document.createElement('img');

                title.innerText = article.title;
                content.innerText = article.content;
                img.setAttribute('src', article.image);

                getArticle.append(title);
                getArticle.append(img);
                getArticle.append(content);

                arr.push(getArticle);
            });

            arr.forEach((ele) =>{
                getBlog.append(ele);
            });
        }); 
}
getData();