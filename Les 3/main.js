console.log("main.js is running...");

// Opdr. 1a

const person = `
{
    "firstname": "Judeska",
  "email": "judeska@example.com"
} 
`;

const objPerson = JSON.parse(person);
console.log(`Firstname is: ${objPerson.firstname}`);
console.log(`Email is: ${objPerson.email}`);
console.log(`----------------------------------`);

// Opdr. 1b

const person1 = `{
    "id": 1,
    "firstname": "John",
    "lastname": "Doe",
    "email": "johndoe@example.com",
    "birthDate": "1973-01-22",
    "phone": "(555) 555-1234",
    "website": "www.johndoe.com"
}`;

const objPerson1 = JSON.parse(person1);
console.log(`id is: ${objPerson1.id}`);
console.log(`firstname is: ${objPerson1.firstname}`);
console.log(`lastname is: ${objPerson1.lastname}`);
console.log(`----------------------------------`);

// Opdr. 2
const text = `{
  "id": 1,
  "slug": "lorem-ipsum",
  "url": "https://jsonplaceholder.org/posts/lorem-ipsum",
  "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "content": "Ante taciti nulla sit libero orci sed nam. Sagittis suspendisse gravida ornare iaculis cras nullam varius ac ullamcorper.",
  "image": "https://dummyimage.com/800x430/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
  "thumbnail": "https://dummyimage.com/200x200/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
  "status": "published",
  "category": "lorem",
  "publishedAt": "04/02/2023 13:25:21",
  "updatedAt": "14/03/2023 17:22:20",
  "userId": 1
}`;

const objText = JSON.parse(text);
console.log(`title is: ${objText.title}`);
console.log(`content is: ${objText.content}`);
console.log(`publishedAt is: ${objText.publishedAt}`);
console.log(`----------------------------------`);

// Opdr. 3
const profile = `{
    "id": 4,
  "firstname": "Emily",
  "lastname": "Davis",
  "email": "emilydavis@example.com",
  "birthDate": "1974-11-30",
  "login": {
    "uuid": "4a0eed11-9430-4d68-901f-c0d4c1c3bf30",
    "username": "emilydavis",
    "password": "jsonplaceholder.org",
    "md5": "c1328472c5794a25723600f71c1b4586",
    "sha1": "35544a31cc19bd6520af116554873167117f4d94",
    "registered": "2022-07-10T11:21:20.033Z"
  },
  "address": {
    "street": "321 Maple Street",
    "suite": "Apt. 50",
    "city": "Anytown",
    "zipcode": "12345-6789",
    "geo": {
      "lat": "42.9012",
      "lng": "-71.5678"
    }
  },
  "phone": "(555) 555-3456",
  "website": "www.emilydavis.com",
  "company": {
    "name": "GHI Corporation",
    "catchPhrase": "Your success is our priority",
    "bs": "Consulting"
  }
}`;

const objProfile = JSON.parse(profile);
console.log(`email is: ${objProfile.email}`);
console.log(`username is: ${objProfile.login.username}`);
console.log(`city is: ${objProfile.address.city}`);
console.log(`company is: ${objProfile.company.name}`);
console.log(`----------------------------------`);

// Opdr. 4
const text2 = `{
  "id": 11,
  "postId": 3,
  "userId": 2,
  "comment": "Cras convallis ipsum eget sapien hendrerit dignissim."
 }`;

const objText2 = JSON.parse(text2);
console.log(`id is: ${objText2.id}`);
console.log(`postId is: ${objText2.postId}`);
console.log(`userId is: ${objText2.userId}`);
console.log(`comment is: ${objText2.comment}`);
console.log(`----------------------------------`);

// Opdr. 5
const comment = `
  [
    {
      "id": 1,
      "postId": 1,
      "userId": 1,
      "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      "id": 2,
      "postId": 1,
      "userId": 1,
      "comment": "Nulla quis libero vel orci rutrum suscipit."
    },
    {
      "id": 3,
      "postId": 3,
      "userId": 2,
      "comment": "Cras ac elit sit amet mi placerat bibendum."
    }
  ]
 `;

const objComment = JSON.parse(comment);
for (let i = 0; i < objComment.length; i++) {
  const object = objComment[i];
  console.log(`comment is: ${object.comment}`);
}
console.log(`----------------------------------`);

// Opdr. 6
const albums = `
[
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "https://via.placeholder.com/600/24f355",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
  },
  {
    "albumId": 1,
    "id": 4,
    "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    "url": "https://via.placeholder.com/600/d32776",
    "thumbnailUrl": "https://via.placeholder.com/150/d32776"
  },
  {
    "albumId": 1,
    "id": 5,
    "title": "natus nisi omnis corporis facere molestiae rerum in",
    "url": "https://via.placeholder.com/600/f66b97",
    "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
  },
  {
    "albumId": 1,
    "id": 6,
    "title": "accusamus ea aliquid et amet sequi nemo",
    "url": "https://via.placeholder.com/600/56a8c2",
    "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
  }
]
`;
const objAlbums = JSON.parse(albums);
const ulList = document.querySelector("ul");
for (let i = 0; i < objAlbums.length; i++) {
  const album = objAlbums[i];
  ulList.innerHTML += `<li>${album.title}</li>`;
}

// Opdr. 7
fetch("https://jsonplaceholder.org/users/1")
  .then(function (response) {
    return response.json();
  })
  .then((data) => console.log(data));

  // Opdr. 8
  