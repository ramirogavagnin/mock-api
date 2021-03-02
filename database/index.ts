const users: ServerUser[] = [
  {
    id: 'it-drixit-1',
    avatar:
      'https://i.pinimg.com/originals/ac/51/52/ac5152b9f7f50781b2b01e35463fc4e6.jpg',
    email: 'rick@sanchez.com',
    password: 'Password1234',
    name: 'Rick',
    surname: 'Sanchez',
    age: 45,
    role: 'admin',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Iml0LWRyaXhpdC0xIn0.rx1pmEStroglSb5eM12pYQmvpIxeSa5XQ23ZFj-P074',
  },
  {
    id: 'info-drixit-2',
    avatar:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fnordic.ign.com%2Frick-morty%2F36594%2Fvideo%2Fis-rick-and-morty-season-4-trying-to-distract-us-from-evil-mortys-plan&psig=AOvVaw3E5_sh9iajRS_VHXpIg-_x&ust=1614815137953000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiyn63lku8CFQAAAAAdAAAAABAE',
    email: 'morty@smith.com',
    password: 'Password1234',
    name: 'Morty',
    surname: 'Smith',
    age: 14,
    role: 'user',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImluZm8tZHJpeGl0LTIifQ.857deM9UdFkHQjIRpmLxMyQSL6XIe4HSa7xDbRWLJic',
  },
]

// Let's also add a delay to make it a bit closer to reality
const randomDelay = () =>
  new Promise((resolve) => {
    const max = 250
    const min = 100
    const delay = Math.floor(Math.random() * (max - min + 1)) + min

    setTimeout(resolve, delay)
  })

export { users, randomDelay }
