const canvas = document.getElementById("canvas");
const imageExample = document.getElementById("image-example");
const pxSizeInput = document.getElementById("px-size");
const fileInput = document.getElementById("file");
const versionsSelector = document.getElementById("versions");
const downloadButton = document.getElementById("download");
const ctx = canvas.getContext("2d");

const canvasSize = 800;
let division = 50;
let imageSrc =
  "https://upload.wikimedia.org/wikipedia/commons/9/99/Las_Meninas_01.jpg";
let version = "pixel";

const draw = () => {
  // Cleaning
  ctx.clearRect(0, 0, canvasSize, canvasSize);
  // Placing image
  const img = new Image();
  imageExample.src = imageSrc;
  img.src = imageSrc;
  img.crossOrigin = "Anonymous";

  img.onload = () => {
    const width =
      img.naturalWidth > img.naturalHeight
        ? canvasSize
        : canvasSize * (img.naturalWidth / img.naturalHeight);
    const height =
      img.naturalWidth < img.naturalHeight
        ? canvasSize
        : canvasSize * (img.naturalHeight / img.naturalWidth);
    canvas.width = width;
    canvas.height = height;

    ctx.drawImage(img, 0, 0, width, height);

    // Pixelate
    const pxSize = width / division;

    const pixelRowLength = division;
    const pixelColumnLength = Math.ceil(height / pxSize);

    // Getting the color value of all pxs in advance
    const pxValues = [];

    for (let i = 0; i < pixelColumnLength; i++) {
      for (let j = 0; j < pixelRowLength; j++) {
        let pixelData = ctx.getImageData(
          pxSize * j + pxSize / 2,
          pxSize * i + pxSize / 2,
          1,
          1
        ).data;

        if (pixelData[3] == 0) {
          pixelData = pxValues[i - 1][j];
        }

        if (!pxValues[i]) {
          pxValues.push([]);
        }
        pxValues[i].push(pixelData);
      }
    }

    // Removing the background image to avoid picture being shown behind of "dots"
    ctx.clearRect(0, 0, width, height);

    // Painting the pxs
    for (let i = 0; i < pixelColumnLength; i++) {
      for (let j = 0; j < pixelRowLength; j++) {
        ctx.fillStyle = `rgba(${pxValues[i][j][0]}, ${pxValues[i][j][1]}, ${pxValues[i][j][2]}, ${pxValues[i][j][3]})`;
        ctx.strokeStyle = `rgba(${pxValues[i][j][0]}, ${pxValues[i][j][1]}, ${pxValues[i][j][2]}, ${pxValues[i][j][3]})`;

        if (version === "pixel") {
          ctx.fillRect(pxSize * j, pxSize * i, pxSize + 1, pxSize + 1);
        } else if (version === "triangle") {
          ctx.beginPath();
          if (j == 0) {
            ctx.fillRect(0, pxSize * i, pxSize / 2, pxSize + 1);
          }
          if (j == pixelRowLength - 1) {
            ctx.fillRect(
              width - pxSize / 2,
              pxSize * i,
              pxSize / 2,
              pxSize + 1
            );
          }
          if (j % 2 === 0) {
            ctx.moveTo(pxSize * (j - 0.5) - 1, pxSize * i);
            ctx.lineTo(pxSize * (j + 1.5) + 1, pxSize * i);
            ctx.lineTo(pxSize * (j + 0.5), pxSize * (i + 1) + 1);
          } else {
            ctx.moveTo(pxSize * (j - 0.5) - 1, pxSize * (i + 1) + 1);
            ctx.lineTo(pxSize * (j + 1.5) + 1, pxSize * (i + 1) + 1);
            ctx.lineTo(pxSize * (j + 0.5), pxSize * i);
          }
          ctx.fill();
        } else if (version === "bead") {
          ctx.beginPath();
          ctx.arc(
            pxSize * (j + 0.5),
            pxSize * (i + 0.5),
            pxSize / 3,
            0,
            2 * Math.PI
          );
          ctx.lineWidth = pxSize / 3;
          ctx.stroke();
        } else {
          const dotSize =
            version === "dot"
              ? pxSize / 2.5
              : version === "big-dot"
              ? pxSize / 1.4
              : pxSize; // surreal
          ctx.beginPath();
          ctx.arc(
            pxSize * (j + 0.5),
            pxSize * (i + 0.5),
            dotSize,
            0,
            2 * Math.PI
          );
          if (version === "surreal") {
            ctx.fillStyle = `rgba(${pxValues[i][j][0]}, ${pxValues[i][j][1]}, ${pxValues[i][j][2]}, 0.8)`;
          }
          ctx.fill();
        }
      }
    }
  };
};

pxSizeInput.addEventListener("change", (e) => {
  division = Number(e.target.value);
  draw();
});

downloadButton.addEventListener("click", (e) => {
  const link = document.createElement("a");
  link.download = "pixelate-it.png";
  link.href = canvas.toDataURL();
  link.click();
});

const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

fileInput.addEventListener("change", async (e) => {
  const file = e.target.files[0];
  const base64 = await convertBase64(file);
  imageSrc = base64;

  draw();
});

versionsSelector.addEventListener("change", (e) => {
  version = e.target.value;

  draw();
});

draw();

// Learnings from this project are listed below:
const myLearnings = [
  "new",
  "src",
  "href",
  "array",
  "arc()",
  "async",
  "await",
  "value",
  "onload",
  "return",
  "push()",
  "fill()",
  "click()",
  "Math.PI",
  "onerror",
  "download",
  "e.target",
  "Number()",
  "for loop",
  "moveTo()",
  "lineTo()",
  "stroke()",
  "reject()",
  "resolve()",
  "if...else",
  "fillRect()",
  "toDataURL()",
  "beginPath()",
  "Math.ceil()",
  "clearRect()",
  "crossOrigin",
  "getContext()",
  "naturalWidth",
  "FileReader()",
  "naturalHeight",
  "getImageData()",
  "Dynamic Styles",
  "readAsDataURL()",
  "createElement()",
  "getElementById()",
  "Bitwise Operators ()",
  "Logical Operators (!)",
  "createLinearGradient()",
  "Backtick Literals (``)",
  "addEventListener : click",
  "Promise((resolve, reject)",
  "addEventListener : change",
  "Assignment Operators (+=)",
  "Comparison Operators (<,>,?,==,===)",
  "Arithmetic Operators (+,-,++,*,/,%)",
];
