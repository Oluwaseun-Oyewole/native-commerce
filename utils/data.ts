/* eslint-disable global-require */
const onboardingData = [
  {
    id: 0,
    title: "Don't miss out",
    description: "Help us deliver your product to the right place for you",
    path: require("../assets/images/svg/first.svg"),
  },
  {
    id: 1,
    title: "Add your location",
    description: "Help us deliver your product to the right place for you",
    path: require("../assets/images/svg/location.svg"),
  },
  {
    id: 2,
    title: "Camera",
    description: "Meko needs permission to access your camera photo",
    path: require("../assets/images/svg/camera.svg"),
  },
];

export default onboardingData;

export const languagesArray = [
  {
    id: 0,
    path: require("../assets/images/svg/CN.svg"),
    countryName: "China",
  },

  {
    id: 1,
    path: require("../assets/images/svg/FR.svg"),
    countryName: "France",
  },

  {
    id: 2,
    path: require("../assets/images/svg/KR.svg"),
    countryName: "Korea",
  },

  {
    id: 3,
    path: require("../assets/images/svg/EN.svg"),
    countryName: "Britain",
    isSelected: true,
  },

  {
    id: 4,
    path: require("../assets/images/svg/PT.svg"),
    countryName: "Portugal",
  },
];
