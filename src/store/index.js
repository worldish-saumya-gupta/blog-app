import { createStore } from 'vuex';

const store = createStore({
  state: {
    isLogin :false,
    isPopupVisible: false,
    authorDetails: [
      {
        // blogs:[idblog1,idblog2],
        id: 1,
        firstName: "Terry",
        lastName: "Medhurst",
        email: "atuny0@sohu.com",
        password: "9uQFF1Lh",
        city: "Washington",
        image:"https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        blogs:[],
      },
      {
        id: 2,
        firstName: "Sheldon",
        lastName: "Quigley",
        email: "hbingley1@plala",
        password: "CQutx25i8r",
        city: "Louisville",
        image:"https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        blogs:[],

      },
      {
        id: 3,
        firstName: "Terrill",
        lastName: "Hills",
        email: "rshawe2@51.la",
        password: "OWsTbMUgFc",
        city: "Grass Valley",
        image:"https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        blogs:[],

      },
      {
        id: 4,
        firstName: "Miles",
        lastName: "Cummerata",
        email: "yraigatt3@nature.com",
        password: "sRQxjPfdS",
        city: "Manchester",
        image:"https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        blogs:[],

      },
      {
        id: 5,
        firstName: "Mavis",
        lastName: "Schultz",
        email: "kmeus4@upenn.edu",
        password: "aUTdmmmbH",
        city: "Louisville",
        image:"https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        blogs:[],
      }
    ],
    
    articles: [
      {
        articleId: 1,
        authorId: 1,
        author: "David Paul",
        date: "23/05/2023",
        title: "Sample Article Title for Vue Js 1",
        description: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        city: "Washington",
        image:"https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        blogImage:"https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/79731568097599.5b50bca477735.jpg",

      },
      {
        articleId: 2,
        authorId:2,
        author: "Jhon Doe",
        date: "20/08/2023",
        title: "Sample Article 2 long Article",
        description: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        city: "Louisville",
        image:"https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        blogImage:"https://previews.123rf.com/images/shaihalud/shaihalud1601/shaihalud160100005/50570382-flat-style-banner-design-coding-programming-application-development-concept.jpg"
      },
      {
        articleId: 3,
        authorId:3,
        author: "Jack Smith",
        date: "21/05/2024",
        title: "Sample Article 3",
        description: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        city: "Manchester",
        image:"https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        blogImage:"https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/79731568097599.5b50bca477735.jpg",
      },
      {
        articleId: 4,
        authorId:2,
        author: "James Jacl",
        date: "22/08/2023",
        title: "Sample Article 4 long Article",
        description: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        city: "Louisville",
        image:"https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        blogImage:"https://previews.123rf.com/images/shaihalud/shaihalud1601/shaihalud160100005/50570382-flat-style-banner-design-coding-programming-application-development-concept.jpg"
      },
    ],
    sampleArticles: [
      {
        articleId: 1,
        authorId: 1,
        author: "David Paul",
        date: "23/05/2023",
        title: "Sample Article Title for Vue Js",
        description: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        city: "Washington",
        image:"https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        blogImage:"https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/79731568097599.5b50bca477735.jpg",

      },
      {
        articleId: 2,
        authorId:2,
        author: "Jhon Doe",
        date: "20/08/2023",
        title: "Sample Article 2 long Article",
        description: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        city: "Louisville",
        image:"https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        blogImage:"https://previews.123rf.com/images/shaihalud/shaihalud1601/shaihalud160100005/50570382-flat-style-banner-design-coding-programming-application-development-concept.jpg"
      },
      {
        articleId: 3,
        authorId:3,
        author: "Jack Smith",
        date: "21/05/2024",
        title: "Sample Article 3",
        description: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        city: "Manchester",
        image:"https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        blogImage:"https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/79731568097599.5b50bca477735.jpg",
      },
      {
        articleId: 4,
        authorId:2,
        author: "James Jacl",
        date: "22/08/2023",
        title: "Sample Article 4 long Article",
        description: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        city: "Louisville",
        image:"https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        blogImage:"https://previews.123rf.com/images/shaihalud/shaihalud1601/shaihalud160100005/50570382-flat-style-banner-design-coding-programming-application-development-concept.jpg"
      },
    ]
  },

    mutations:{
      ADD_AUTHOR(state, details) {
        state.isLogin = true;
        const updatedDetails = [...state.authorDetails, details]; 
        state.authorDetails = updatedDetails;
      },

      ADD_ARTICLE(state, newArticle){
        state.articles.push(newArticle);
      },
   
      LOGOUT(state){
        state.isLogin = false;
      },

      AUTHOR_POPUP(state,value)
      {
        state.isPopupVisible = value;
      },
    
    },
 
  getters: {
    getArticles(state){
      return state.articles
    },
    getAuthor(state) {
      return state.authorDetails;
    },
    getIsLogin(state){
      return state.isLogin;
    },
    getIsPopupVisible(state){
      return state.isPopupVisible;
    },
    getSampleArticles(state){
      console.log(state.sampleArticles)
      return state.sampleArticles;
    }
  },
});

export default store;
