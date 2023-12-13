//const freelancerroot = document.createElement("div")
const roottitle = document.createElement("div");
document.body.appendChild(roottitle);
const Title = document.createElement("h1");
Title.textContent ="Freelancer Forum";
roottitle.append(Title);


//below is array info


const names= [
    "tyriece",
    "bernice", 
    "nick",  
];

const prices= [
    "$50",
    "$40", 
    "$60",  
];

const occupations= [
    "photographer",
    "teacher", 
    "military",  
];

const groups= [
    {name: "nick",
    price: "$60",
    occupation: "military",
    },
];

//   const root = document.createElement("div"); ask arron about this later 

//   document.body.append(root);
  // this is what allowed the js file to connect to html

 
 //render block
  function render() {
    const freelance = document.querySelector("#freelance");
    const freeLanceElements = groups.map((group) => {
      const element = document.createElement("li");
      element.classList.add(group.name, group.occupation, group.price);
      element.textContent = `${group.name} - ${group.occupation} - ${group.price}`;
      return element;
    });
    freelance.replaceChildren(...freeLanceElements);
  }

  //interval block

  const addGroupsIntervalId = setInterval(addGroups, 3000);
  
  function addGroups() {
    const name = names[Math.floor(Math.random() * names.length)];
    const occupation =
      occupations[Math.floor(Math.random() * occupations.length)];
    const price = prices[Math.floor(Math.random() * prices.length)];
  
    groups.push({ name, occupation, price });
  
    render();
  }




//   // Parans are for parameters and using functions
// console.log("Hello")


// // curlies {} are for going into the logic of a for loop, if statement,
// // or function
// for(let i =0 ; i < 3; i++){
//     console.log(i)
// }

// //brackets are for arrays
// const arr = [1,2,3,4]
// arr[0]
