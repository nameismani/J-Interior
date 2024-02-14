// import image1 from '../src/assets/images/about_image.jpg';
// import image3 from '../src/assets/images/Tv_Units.jpg';
// import image2 from '../src/assets/images/Modualr_Kitchen.jpg';
import poojaRoom from '../src/assets/images/jinterior_Pooja_Room2.jpg';
import tvUnit from '../src/assets/images/jinterior_Tv_Units.jpg';
import wardrobe from '../src/assets/images/jinterior_Wardrobe.jpg';
import furniture from '../src/assets/images/jinterior_Furniture.jpg';
import project1  from '../src/assets/images/jinterior_project1.jpg';
import project2  from '../src/assets/images/jinterior_project2.jpg';
import project3  from '../src/assets/images/jinterior_project3.jpg';
import project4  from '../src/assets/images/jinterior_project4.jpg';







export const testimonialData = [
    {
        id:1,
        name:'Manikandan',
        role:'Web Developer',
        feedback:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sint qui ullam! Esse iure possimus id natus blanditiis, iusto neque?',
        imgLink:'https://cdn4.iconfinder.com/data/icons/avatars-32/90/24-512.png',
        ratings:[{id:1,rating:'star'},{id:2,rating:'star'},{id:3,rating:'star'},{id:4,rating:'star'},{id:5,rating:'halfstar'}]
    },
    {
        id:2,
        name:'Kumerasan',
        role:'UI/UX Designer',
        feedback:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sint qui ullam! Esse iure possimus id natus blanditiis, iusto neque?',
        imgLink:'https://cdn4.iconfinder.com/data/icons/avatars-32/90/24-512.png',
        ratings:[{id:1,rating:'star'},{id:2,rating:'star'},{id:3,rating:'star'},{id:4,rating:'star'},{id:5,rating:'halfstar'}]
    },
    {
        id:3,
        name:'Sudhan',
        role:'Graphic Designer',
        feedback:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sint qui ullam! Esse iure possimus id natus blanditiis, iusto neque?',
        imgLink:'https://cdn4.iconfinder.com/data/icons/avatars-32/90/24-512.png',
        ratings:[{id:1,rating:'star'},{id:2,rating:'star'},{id:3,rating:'star'},{id:4,rating:'star'},{id:5,rating:'halfstar'}]
    },
    {
        id:4,
        name:'Magesh',
        role:'CAD Engineer',
        feedback:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sint qui ullam! Esse iure possimus id natus blanditiis, iusto neque?',
        imgLink:'https://cdn4.iconfinder.com/data/icons/avatars-32/90/24-512.png',
        ratings:[{id:1,rating:'star'},{id:2,rating:'star'},{id:3,rating:'star'},{id:4,rating:'star'},{id:5,rating:'halfstar'}]
    },
    {
        id:4,
        name:'Magesh',
        role:'CAD Engineer',
        feedback:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sint qui ullam! Esse iure possimus id natus blanditiis, iusto neque?',
        imgLink:'https://cdn4.iconfinder.com/data/icons/avatars-32/90/24-512.png',
        ratings:[{id:1,rating:'star'},{id:2,rating:'star'},{id:3,rating:'star'},{id:4,rating:'star'},{id:5,rating:'halfstar'}]
    }
]

export const services = [
    {id:1,
     cardTitleFront:'Pooja room',
     cardTitleBack:'Pooja room',
     cardText:'Pooja room designs provide sacred spaces within homes for prayer, meditation, and spiritual practices. Tailored to individual preferences and religious traditions, these designs incorporate elements such as altars, shelves, and seating to create serene and tranquil environments conducive to spiritual reflection and worship.',
     cardUrl:'https://google.com',
     cardAnimationDirection:'horizontal',
     transitionDelay:0.4,
     transitionDuration:1,
     backgroundImageUrl:poojaRoom
    },
    {id:2,
        cardTitleFront:'TV unit',
        cardTitleBack:'TV unit',
        cardText:'TV unit designs are sleek and functional solutions for organizing and displaying entertainment equipment in modern living spaces. With various styles, materials, and configurations available, these units offer versatile storage options for TVs, media players, and accessories.',
        cardUrl:'https://google.com',
        cardAnimationDirection:'vertical',
        transitionDelay:0.6,
        transitionDuration:1.3,
        backgroundImageUrl:tvUnit
       },
       {id:3,
        cardTitleFront:'Wardrobe',
        cardTitleBack:'Wardrobe',
        cardText:'Wardrobe designs offer stylish and efficient storage solutions for organizing clothing, accessories, and personal items in bedrooms and dressing areas. With a wide range of styles, sizes, and configurations available, these wardrobes can be customized to fit any space and complement any decor scheme.',
        cardUrl:'https://google.com',
        cardAnimationDirection:'horizontal',
        transitionDelay:0.4,
        transitionDuration:1,
        backgroundImageUrl:wardrobe
       },
       {id:4,
        cardTitleFront:'Furniture',
        cardTitleBack:'Furniture',
        cardText:'Furniture designs encompass a wide range of styles, materials, and functionalities tailored to enhance comfort, functionality, and aesthetics in living spaces. ',
        cardUrl:'https://google.com',
        cardAnimationDirection:'vertical',
        transitionDelay:0.6,
        transitionDuration:1.3,
        backgroundImageUrl:furniture
       },

]

export const projects = [

    {
        id:1,
        projectTitle:'Project1',
        projectDesc:'This is a description of the first project',
        imgUrl:project1
    },
    {
        id:2,
        projectTitle:'Project2',
        projectDesc:'This is a description of the second project',
        imgUrl:project2
    },
    {
        id:3,
        projectTitle:'Project3',
        projectDesc:'This is a description of the third project',
        imgUrl:project3
    },
    {
        id:4,
        projectTitle:'Project4',
        projectDesc:'This is a description of the fourth project',
        imgUrl:project4
    }
]