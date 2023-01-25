export class User {

     gender: String;
     name: Name;
     location: Location;
     email: String;
     login: Login;
     dob: Dob;
     registered: Registered;
     phone: String;
     cell: String;
     id: Id;
     picture: Picture;
     nat: String;
}

//name part
export class Name {
     title: String;
     first: String;
     last: String;
}

//location part
export class Location {
     street;
     city: String;
     state: String;
     country: String;
     postcode: String;
}

export class Street {
     number: String;
     name: String;
}
export class Coordinates {
     latitude: String;
     longitude: String;
}
export class Timezone {
     offset: String;
     description: String;
}

//login part
export class Login {
     uuid: String;
     username: String;
     password: String;
     salt: String;
     md5: String;
     sha1: String;
     sha256: String;
}

//dob part
export class Dob {
     date: String;
     age: String;
}

//registered part
export class Registered {
     date: String;
     age: String;
}

//id part
export class Id {
     name: String;
     value: String;
}

//picture part
export class Picture {
     large: String;
     medium: String;
     thumbnail: String;
}
