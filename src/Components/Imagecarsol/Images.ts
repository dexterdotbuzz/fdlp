import Afteronedefault from "../../assets/afteronedefault.webp";
import Beforeonedefault from "../../assets/Beforeonedefault.png";
import After2 from "../../assets/After2.webp";
import Before2 from "../../assets/lhfssj-4.webp";
import img1After from "../../assets/nbydcjdpc-9 (1).webp";
import bedroomImg from "../../assets/B1-3.png";
import kitchenImg from "../../assets/shrhhbcdpc-1.webp";
import afterKitchenImg from "../../assets/shmzz-8.webp";
import dining from "../../assets/Before2.png";
import dining2 from "../../assets/lanmao-13.webp";
// import Before from "../../assets/Before.png"
// import imgi from "../../assets/bedroom.jpg"

const images = {
before: { src: Beforeonedefault, title: "Before", }
,
after: [
{ src: Afteronedefault, title: "afteronedefault" },
{ src: Before2, title: "After Bedroom" },
{ src: dining2, title: "After Kitchen" }
],
otherImages: [
{ before: { src: Afteronedefault, title: "Metaphysical Silence" }, after: { src: Afteronedefault, title: "After " } },

{ before: { src: After2, title: "Heavenly Hideout" }, after: { src: afterKitchenImg, title: "After " } },
{ before: { src: img1After, title: "Serene Sanctuary" }, after: { src: dining2, title: "After " } },

{ before: { src: Before2, title: "Peaceful Paradise" }, after: { src: afterKitchenImg, title: "After" } },
{ before: { src: dining2, title: "Zen Oasis" }, after: { src: kitchenImg, title: "After " } },
{ before: { src: kitchenImg, title: "Dreamy Dwelling" }, after: { src: kitchenImg, title: "After " } },
{ before: { src: afterKitchenImg, title: "Whispering Woods" }, after: { src: Afteronedefault, title: "After " } },
] as const,

belowBefore: [
    { src: Beforeonedefault, title: "Image 1" },
    { src: dining, title: "Image 2" },
    { src: bedroomImg, title: "Image 3" }
  ]
};

export default images;
