var choices = [
    {
      choices: [
       
      
  

        {
          routeBegins: "leave",
          content: "Leave"
        }
      ]
    },
    {
      choices: [
        {
        
          routeBegins: "adventure",
          content: "Help Block."
        },
        {
          routeBegins: "noAdventure",
          content: "It's such a bother, I don't feel up to it."
        }
      ]
    },
    {
      choices: [
        {
          store: "blockAffection",
          routeBegins: "hangOutWithBlock",
          content: "Yep.",
          nextIndex: 0
        },
        {
          routeBegins: "noHangOutWithBlock",
          content: "Nope.",
          nextIndex: 0
        }
      ]
    }
  ];
  
  export default choices;
  