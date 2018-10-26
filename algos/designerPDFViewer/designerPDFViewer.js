function designerPdfViewer(h, word) {
  return (
    word.split("").reduce((highest, current) => {
      let height = h[current.charCodeAt(0) - 97];
      return height > highest ? height : highest;
    }, 0) * word.length
  );
}
