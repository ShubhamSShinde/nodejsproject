let data = ""; 
const api = 'https://type.fit/api/quotes';
const quotes = document.getElementById('quotes');
const author = document.getElementById('author');
const btn = document.getElementById('btn');
const tweet = document.getElementById('tweet');
let textdata = ''

const getnewQuotes = () => {
    let num = Math.floor(Math.random() * 1643);
    console.log(data[num].author)
    // console.log(num)
    textdata= data[num]
    quotes.innerText = `${data[num].text}`
    author.innerText = `${data[num].author}`
}

const getQutoes = async () => {

     try {
        let response = await fetch(api);
        data = await response.json();
        getnewQuotes();
        // console.log(data[0].author)

    } catch (error) {
        console.log(error)
    }
} 

btn.addEventListener('click',getQutoes)

tweet.addEventListener('click',()=>{
let tpost =`https://twitter.com/intent/tweet/?text=${textdata.text}`;
window.open(tpost);
})
