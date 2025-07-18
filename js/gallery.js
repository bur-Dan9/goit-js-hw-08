const images = [
  {
    preview: "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original: "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original: "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];
const gallery = document.querySelector(".gallery");

gallery.style.listStyleType = "none";
gallery.style.width = "1128px";
gallery.style.minWidth = "320px";
gallery.style.display = "grid";
gallery.style.gridTemplateColumns = "repeat(3, 1fr)";
gallery.style.gap = "24px";
gallery.style.justifyContent = "center";
gallery.style.alignItems = "center";
gallery.style.margin = "0 auto";


gallery.innerHTML = images
  .map(
    ({ preview, original, description }) => `
  <li class="gallery-item" style="overflow:hidden; transition: transform 0.3s ease; cursor: pointer;">
    <a class="gallery-link" href="${original}">
      <img
        class="gallery-image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        width="360"
        height="200"
        style="display:block; width:100%; height:auto;"
      />
    </a>
  </li>`
  )
  .join("");


gallery.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.transform = "scale(1.05)";
    item.style.zIndex = "10";
  });
  item.addEventListener("mouseleave", () => {
    item.style.transform = "scale(1)";
    item.style.zIndex = "0";
  });
});

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  const target = event.target;
  if (target.nodeName !== "IMG") return;

  const largeImageUrl = target.dataset.source;

  const instance = basicLightbox.create(
    `
    <img src="${largeImageUrl}" width="1112" height="640" style="cursor:pointer;">
  `,
    {
      onShow: (instance) => {
        instance.element().querySelector("img").onclick = () => instance.close();
      },
    }
  );

  instance.show();
});