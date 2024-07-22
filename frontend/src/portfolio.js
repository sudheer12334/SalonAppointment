import emoji from "react-easy-emoji";

const greeting = {
  /*  Summary And Greeting Section */
  username: "Groom & Boom",
  title: "It's your time to Groom & Boom!",
  subTitle: emoji("To us, beauty and makeup and color is like the finishing touch on everything. Get the look you always wanted to have in Groom & Boom."),
  resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
};

//  Social Media Link

const socialMediaLinks = {

 
  gmail: "groom&boom@.com",
  
  facebook: "https://www.facebook.com/groom&boom",

  twitter: "https://kidadl.com/articles/best-salon-quotes-and-sayings-to-leave-you-feeling-beautiful",

  instagram: "https://kidadl.com/articles/best-salon-quotes-and-sayings-to-leave-you-feeling-beautiful"
  
};

// Who We Are

const skillsSection = {
  title: "Who We Are ?",
  subTitle: "At Groom & Boom Salon, with over 35 years of experience, and a footprint of over 50+ Salons in 20 cities across the length and breadth of the country",
  skills: [
    emoji("💇🏻   We have developed a deep understanding of the beauty industry, its professionals and the skills needed to make a mark."),
    emoji("💇🏻   Professionally trained hair and makeup experts with countless shows under our belt and outstanding skin services."),
    emoji("💇🏻   India’s first and leading chain of beauty salons, offers expert services in hairstyling, skin and beauty care.")
  ],
  softwareSkills: [   
  ]
};

const techStack = {
  viewSkillBars: true, 
  experience: [
    {
      Stack: "Hair -  Care, Colors, Styling, Haircut, Waxing",
      progressPercentage: "31%"
      
    },
    {
      Stack: "Hands & Feet - Hand Care, Feet Care, Nails, Milk & Honey Hand Treatment",
      progressPercentage: "53%"
      
    },
    {
      Stack: "Makeup - Styling, Saree Drape, Makeup, Dermaplaning, Laser Hair Removal, Lash Lift & Tint",
      progressPercentage: "66%"
    }
  ]
};

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"false" // Set true or false to show Contact profile using Github, defaults to false
};


//Customer Reviews

const achievementSection = {

  title: emoji("WORDS THAT KEEP US GOING 💌 "),
  subtitle: "Honest review from our genuine customers.",

  achievementsCards: [
    {
      title: "Manreet Kaur",
      subtitle: "When I visited the Salon, the scars on my face were very visible and I was really apprehensive. But the makeup artist Ranjana did such a great job in hiding them! I was so happy.",
      image: require("./assets/images/jd1.jpg"),
      footerLink: [
        
      ]
    },
    {
      title: "Rashi Tuli",
      subtitle: "'When I went to visit the salon for my bridal make up i was a little worried as I had scars on my face. But the expert Suman assured me about the quality of products and I absolutely loved the end result.'",
      image: require("./assets/images/jd22.jpg"),
      footerLink: []
    },

    {
      title: "Niti Taylor",
      subtitle: "The Haircut enhances my face and the colour suits my complexion 😄😍💗😅.",
      image: require("./assets/images/jd88.jpg"),
      footerLink: [
         ]
    }
  ]
};

//Contact Information

const contactInfo = {
  title: emoji("Contact Us ☎️"),
  subtitle: "Want to give yourself a new look?",
  number: "+91-99998888111",
  email_address: "groom&boom@.com"
};
export { greeting, socialMediaLinks, skillsSection,  techStack, openSource, achievementSection, contactInfo};
