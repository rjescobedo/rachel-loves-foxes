// Function to fetch fox facts and images
const foxes = [
    {   
        name: 'Arctic Fox',
        url: 'https://www.activewild.com/wp-content/uploads/2020/08/Arctic-Fox.jpg'
    },
    {
        name: 'Red Fox',
        url: 'https://www.activewild.com/wp-content/uploads/2020/07/Red-Fox.jpg'
    }
]

function getFoxData(arr) {
    // Clear previous content
    const factElement = document.getElementById('fox-facts');
    const imageElement = document.getElementById('fox-images');

    // Clear previous data
    factElement.innerHTML = '';
    imageElement.innerHTML = '';

    // Loop through the array of fox data
    arr.forEach((fox) => {
        const foxName = fox.name;
        const foxUrl = fox.url;

        console.log('Fox Name:', foxName);
        console.log('Fox Image URL:', foxUrl);

        // Display the fox name
        const nameElement = document.createElement('p');
        nameElement.textContent = `Fox name: ${foxName}`;
        factElement.appendChild(nameElement);

        // Display the fox image
        const imgElement = document.createElement('img');
        imgElement.src = foxUrl;  // Set the image source to the API URL
        imgElement.alt = foxName;
        imgElement.classList.add('fox-img');
        imageElement.appendChild(imgElement);
    });
}

getFoxData(foxes)