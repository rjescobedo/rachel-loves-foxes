// Function to fetch fox facts and images
const foxes = [

    {
        name: 'Red Fox',
        url: 'https://www.activewild.com/wp-content/uploads/2020/07/Red-Fox.jpg',
        description: 'The Red Fox is the largest and most widespread of the fox species. This familiar canid is known for its bright orange-red coat and bushy, white-tipped tail, with individuals from some regions having either silvery or gray / black fur. The length of the fur also varies, with red foxes living further north having longer and denser coats. Known for its adaptability, the red fox can live in a wide range of habitats, from urban areas to wilderness. The red fox also has a varied diet, which consists of rodents, birds, fruits, and insects.The red fox has complex social structures and communication methods. Its barks, whimpers and wails can be heard not just in the wilderness, but also in towns and even cities in many parts of the Northern Hemisphere'
    },
    {
        name: 'Arctic Fox',
        url: 'https://www.activewild.com/wp-content/uploads/2020/08/Arctic-Fox.jpg',
        description: 'The Arctic Fox is well-adapted to living in cold environments, with thick fur that changes color from brown in summer to white in winter for camouflage, and fur-covered foot pads. It eats a wide variety of food, including rodents, birds, and fish, and will both scavenge and hunt its own prey. Lemmings are the fox’s most important food in many areas. The Arctic fox is known for its acute hearing, which it uses to locate prey under the snow.'
    },
    {
        name: "Blandford's Fox",
        url: 'https://www.activewild.com/wp-content/uploads/2020/07/Blanfords-Fox.jpg',
        description: "Blanford's Fox is an Asian fox species distinguished by its small size, large ears, and long bushy tail. It primarily inhabits mountainous and rocky regions where it can find shelter during the day. This nocturnal fox feeds on fruits, insects, and small mammals. It is known for its incredible climbing skills, which allow it to escape predators and access hard-to-reach food sources."
    },
    {
        name: 'Cape Fox',
        url: 'https://www.activewild.com/wp-content/uploads/2020/07/Cape-Fox.jpg',
        description: 'The Cape Fox is the only true fox found in southern Africa. It has silver-gray fur, a bushy tail with a black tip, and is the smallest canid in the region (it is occasionally preyed on by the larger black-backed jackal). A nocturnal species, the Cape fox preys on rodents, insects, and occasionally small birds. It is solitary, except during the mating season, and uses burrows (usually the abandoned burrows of other species) for shelter.'
    }, 
    {
        name: 'Corsac Fox',
        url: 'https://www.activewild.com/wp-content/uploads/2020/07/Corsac-Fox.jpg',
        description: 'The Corsac Fox, also known as the Steppe fox, or just the corsac, is an Asian true fox species. It is adapted to dry, open landscapes, and generally avoids forested areas. It has a light orange-tan coat, which provides camouflage in its desert and steppe habitats. The Corsac Fox does not dig its own burrows but instead takes over those abandoned by other animals. Corsac foxes have a social structure that can vary from solitary to small groups, depending on the availability of food.'
    },
    {
        name: 'Fennec Fox',
        url: 'https://www.activewild.com/wp-content/uploads/2023/06/Fennec-Fox.jpg',
        description: "The Fennec Fox is the smallest fox species, and one of the most recognizable, due to its distinctive large ears, which help to dissipate heat and locate prey underground. This desert living fox has a creamy-colored coat that reflects sunlight during the day and provides warmth at night. The Fennec Fox is an omnivore, feeding on plants, rodents, insects, and birds. The species' burrowing lifestyle helps it to avoid the extreme heat of its desert home."
    },
    {
        name: 'Bengal Fox',
        url: 'https://www.activewild.com/wp-content/uploads/2020/07/Bengal-Fox.jpg',
        description: 'Also known as the Indian fox, the Bengal fox is recognized by its reddish-brown fur, bushy, black-tipped tail, and long ears. It inhabits open grasslands, thorn scrub, and semi-desert regions, where it feeds on rodents, reptiles, crabs, and fruit. This fox is nocturnal and uses dens for shelter. It is not shy and often seen near human settlements.'
    }, 
    {
        name: 'Kit Fox',
        url: 'https://www.activewild.com/wp-content/uploads/2020/07/Kit-Fox-Desert-Animal.jpg',
        description: 'The kit fox is the smallest of the four true fox species found in North America. It is found in arid and semi-arid environments, including deserts and scrublands. Adaptations for living in dry, hot habitats include large ears for thermoregulation and a sandy-colored coat for camouflage. This desert specialist will dig its own dens, but is also known to use the abandoned burrows of other species. The kit fox is primarily nocturnal, feeding on small mammals, birds, and insects. It is known for its incredible agility and speed.'
    }
]

// Index to track which fox is being displayed
let currentFoxIndex = 0;

function getFoxData(arr) {
    // Get the current fox based on the index
    const fox = arr[currentFoxIndex];

    // Select HTML elements
    const foxNameDiv = document.getElementById('fox-name');
    const foxImgDiv = document.getElementById('fox-images');
    const foxDescriptionDiv = document.getElementById('fox-description');

    // Clear previous content
    foxNameDiv.innerHTML = '';
    foxImgDiv.innerHTML = '';
    foxDescriptionDiv.innerHTML = '';

    // Display the fox name
    const foxNameElement = document.createElement('h3');
    foxNameElement.textContent = fox.name;
    foxNameElement.classList.add('fox-name')
    foxNameDiv.appendChild(foxNameElement);

    // Display the fox image
    const foxImgElement = document.createElement('img');
    foxImgElement.src = fox.url;
    foxImgElement.alt = fox.name;
    foxImgElement.classList.add('fox-img');
    foxImgDiv.appendChild(foxImgElement);

    // Display the fox description
    const foxDescriptionElement = document.createElement('p');
    foxDescriptionElement.textContent = fox.description;
    foxDescriptionElement.classList.add('fox-description');
    foxDescriptionDiv.appendChild(foxDescriptionElement);

    // Update index for the next click
    currentFoxIndex = (currentFoxIndex + 1) % arr.length; // Loop back to the start
}

// Add event listener to button
const button = document.getElementById('btn');
button.addEventListener('click', () => {
    getFoxData(foxes);
});

window.onload = getFoxData(foxes);