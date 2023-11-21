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

const objtext = JSON.parse(text);
console.log(`title is: ${objtext.title}`);
console.log(`content is: ${objtext.content}`);
console.log(`publishedAt is: ${objtext.publishedAt}`);
console.log(`----------------------------------`);

// Opdr. 3
const text1 = `{
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

const objtext1 = JSON.parse(text1);
console.log(`email is: ${objtext1.email}`);
console.log(`username is: ${objtext1.login.username}`);
console.log(`city is: ${objtext1.address.city}`);
console.log(`company is: ${objtext1.company.name}`);
console.log(`----------------------------------`);

