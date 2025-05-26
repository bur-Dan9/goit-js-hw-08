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

const markup = images.map(
  ({ preview, original, description }) => `
    <li>
      <a class="gallery-link" href="${original}">
        <img class="gallery-image" src="${preview}" alt="${description}" />
      </a>
    </li>`
).join("");

gallery.innerHTML = markup;

gallery.style.listStyle = "none";
gallery.style.margin = "0 auto";
gallery.style.width = "1128px";
gallery.style.display = "grid";
gallery.style.gridTemplateColumns = "repeat(3, 1fr)";
gallery.style.gap = "24px";
gallery.style.padding = "0";

const style = document.createElement("style");
style.textContent = `
  .gallery-link {
    display: block;
    text-decoration: none;
  }
  .gallery-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
    cursor: zoom-in;
  }
  .gallery-image:hover {
    transform: scale(1.05);
  }
  .sl-overlay {
    background-color: rgba(0,0,0,0.85) !important;
  }
`;
document.head.appendChild(style);

const lightbox = new SimpleLightbox(".gallery a", {
  captions: false,
  nav: false,
  close: false,
  showCounter: false,
  animationSpeed: 250,
});

lightbox.on("shown.simplelightbox", () => {
  const imageEl = document.querySelector(".sl-image img");
  if (imageEl) {
    imageEl.style.cursor = "zoom-out";
    imageEl.addEventListener("click", () => lightbox.close());
  }
});