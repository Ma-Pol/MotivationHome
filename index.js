$(document).ready(() => {
  renderCurrentTime();
  renderQuote();
  renderRandomImage();
});

const renderCurrentTime = () => {
  const url = `https://worldtimeapi.org/api/timezone/Asia/Seoul`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const datetime = data["datetime"].substr(11, 5);
      $("#time").text(datetime);
    });
};

const renderQuote = () => {
  const url = `https://api.quotable.io/random`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const content = `" ${data["content"]} "`;
      const author = `- ${data["author"]} -`;
      $("#content").text(content);
      $("#author").text(author);
    });
};

const renderRandomImage = () => {
  const randomImageNumber = Math.floor(Math.random() * 5) + 1;
  const randomImageURL = `./imgs/img${randomImageNumber}.jpg`;
  console.log(randomImageURL);
  $(document.body).css("background-image", `url(${randomImageURL})`);
};
