function viralAdvertising(n) {
  let viewers = 5;
  let likes = 0;
  while (n > 0) {
    viewers = Math.floor(viewers / 2);
    likes += viewers;
    viewers = viewers * 3;
    n--;
  }
  return likes;
}

console.log(viralAdvertising(5));
