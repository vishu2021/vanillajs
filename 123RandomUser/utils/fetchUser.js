const URL = "https://randomuser.me/api/";

const getUser = async () => {
  const response = await fetch(URL);
  // console.log("response :", response);
  const data = await response.json();
  // console.log("data :", data);

  // destructure
  const person = data.results[0];
  // console.log("data :", data);
  const { phone, email } = person;
  // console.log("{ phone, email } :", { phone, email });
  // console.log("person :", person);
  const { large: image } = person.picture;
  // console.log("{ large: image } :", { large: image });
  // console.log("person.picture :", person.picture);
  const { password } = person.login;
  // console.log("{ password } :", { password });
  // console.log("person.login :", person.login);
  const { first, last } = person.name;
  // console.log("{ first, last } :", { first, last });
  // console.log("person.name :", person.name);
  const {
    dob: { age },
  } = person;
  // console.log("{dob: { age }, } :", { dob: { age } });
  // console.log("person :", person);
  const {
    street: { number, name },
  } = person.location;
  // console.log("{street: { number, name },} :", { street: { number, name } });
  // console.log("person.location :", person.location);

  // console.log("image :", image);
  // console.log("phone :", phone);
  // console.log("email :", email);
  // console.log("password :", password);
  // console.log("age :", age);
  // console.log("street number name :", `${number} ${name}`);
  // console.log("name :", `${first} ${last}`);

  return {
    image,
    phone,
    email,
    password,
    age,
    street: `${number} ${name}`,
    name: `${first} ${last}`,
  };
};

export default getUser;
