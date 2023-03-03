// QUESTION 1

/**
 * Using the constructor method, create an InstagramPost() constructor function that takes the properties below as arguments.
    *Handle of author
    *content, 
    *An image link posted by the author of the post
    *Number of views, 
    *Number of likes,
 */

function InstagramPost(authorHandle, content, imageLink, views, likes) {
    this.authorHandle = authorHandle;
    this.content = content;
    this.imageLink = imageLink;
    this.views = views;
    this.likes = likes;
}

// QUESTION 2 

/**
 * Create 2 Instagram post objects from the constructor function you created above
 */

const adebola = new InstagramPost('@adebola', 'A day in the life of a software engineer', 'www.image.com', '298', '259');

const davido = new InstagramPost ('@davido', 'World Tour coming up!', 'www.davidoofficial.com', '1,500,985', '1,500,000');

console.log({adebola});
console.log({davido});

// QUESTION 3

/**
 * Musa Dawodu is a 19 years old Nigerian male who lives with his parents in Lekki, Lagos State. 
   Recently, he wrote the JAMB exam and had the following scores in his combination:
        ENG - 70
        GOVT - 85
        LIT - 82
        CRK - 94
 */

//  (a) Using the factory method, implement a createPerson() factory function that takes name, 
//      age and location as arguments. Afterwards, create an object representing Musa from the factory function. 

function createPerson(name, age, location) {
    return {
        name: name,
        age: age,
        location: location,
    }
}    

let musa = createPerson('Musa Dawodu', '19', 'Lekki, Lagos');
console.log({musa});

//  (b) Also, implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments. 
//      Then create an object representing Muse’s JAMB scores. Add the object as a property to Musa object you 
//      created above in (a) above

function createJambScores(eng, govt, lit, crk) {
    return {
        ENG: eng,
        GOVT: govt,
        LIT: lit,
        CRK: crk,
    }
}

let musaJambScores = createJambScores('75', '93', '90', '65');
console.log({musaJambScores});

let musaDetails = Object.assign(musa, {musaJambScores})
console.log({musaDetails});

// QUESTION 4

/**
 * What are the different ways you can clone an object? Give examples for each of them.
 */

// FIRST METHOD: Using Object.assign():
    let aboutChiamaka = {
        name: "Chiamaka Okeke",
        gender: 'female',
        track: 'Frontend',
        height: '5.5ft'
    };
   let alsoAboutChiamaka = Object.assign({}, aboutChiamaka);
    console.log({alsoAboutChiamaka}); 

// SECOND METHOD: Using the spread operator:
    let aboutMe = {
        name: 'Emmanuella Aguenu',
        gender: 'female',
        track: 'Backend',
        height: '6ft'
    };
    let alsoAboutMe = {...aboutMe};
    console.log({alsoAboutMe}); 


// THIRD METHOD: Using JSON.parse() and JSON.stringify():
    let aboutNgozi = {
        name: "Ngozi Okafor",
        gender: 'female',
        track: 'Mobile Dev',
        height: '5.9ft'
    };
    let alsoAboutNgozi = JSON.parse(JSON.stringify(aboutNgozi));
    console.log({alsoAboutNgozi}); 


    // QUESTION 5

    /**
     * As Nigeria goes to the polls, here is an object representing some of the Presidential Candidates:
     */

    const presidentialCandidates = {
        AAC: 'Omoyele Sowore',
        ACCORD: 'Christopher Imumolen',
        APC: 'Bola Ahmed Tinubu',
        LP: 'Peter Obi',
        NNPP: 'Rabiu Kwankwaso',
        PDP: 'Atiku Abubakar',
     }
     
     /**
      * Using any of the enumeration methods taught in class (for…in  or for..of), 
      * log out each of the presidential candidates in this format:
        'Omoyele Sowore is the presidential candidate of AAC'
      */
     
     for (let key in presidentialCandidates) {
         console.log(`${presidentialCandidates[key]} is the presidential candidate of ${key}`);
       }
     