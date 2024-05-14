import Afteronedefault from "../../assets/afteronedefault.webp";
import Beforeonedefault from "../../assets/Beforeonedefault.webp";
import After2 from "../../assets/After2.webp";
import Before2 from "../../assets/Before2.webp";
import img1After from "../../assets/afterimg1.png";
import bedroomImg from "../../assets/bedroom.jpg";
import afterBedImg from "../../assets/afterbedeffect.png";
import kitchenImg from "../../assets/newpvkitchen.jpeg";
import afterKitchenImg from "../../assets/kitechenafter.jpg";
import dining from "../../assets/dining.jpg";
import dining2 from "../../assets/dining22.jpg";
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
{ before: { src: Afteronedefault, title: "Metaphysical Silence" }, after: { src: afterBedImg, title: "After " } },

{ before: { src: After2, title: "Kitchen" }, after: { src: afterKitchenImg, title: "After " } },
{ before: { src: img1After, title: "Dining" }, after: { src: dining2, title: "After " } },

{ before: { src: Before2, title: "Kitchen" }, after: { src: afterKitchenImg, title: "After" } },
{ before: { src: dining2, title: "Dining" }, after: { src: kitchenImg, title: "After " } },
{ before: { src: dining, title: "Dining" }, after: { src: dining2, title: "After " } },
{ before: { src: Beforeonedefault, title: "Bedroom" }, after: { src: Afteronedefault, title: "After " } },
] as const,

belowBefore: [
    { src: Beforeonedefault, title: "Image 1" },
    { src: dining, title: "Image 2" },
    { src: bedroomImg, title: "Image 3" }
  ]
};

export default images;