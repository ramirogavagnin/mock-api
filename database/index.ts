const users: ServerUser[] = [
  {
    id: 'it-drixit-1',
    avatar:
      'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png',
    email: 'it@drixit.com',
    password: 'Password1234',
    name: 'IT',
    surname: 'Drixit',
    age: 25,
    role: 'admin',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Iml0LWRyaXhpdC0xIn0.rx1pmEStroglSb5eM12pYQmvpIxeSa5XQ23ZFj-P074',
  },
  {
    id: 'info-drixit-2',
    avatar:
      'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png',
    email: 'info@drixit.com',
    password: 'Password1234',
    name: 'Info',
    surname: 'Drixit',
    age: 30,
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
