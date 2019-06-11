var users=[
    {
        id:23,
        name:'Vinay',
        city:'Bangalore',
        age:24
    },
    {
        id:24,
        name:'Anand',
        city:'Chennai',
        age:36
    },
    {
        id:34,
        name:'Hari',
        city:'Pune',
        age:40
    },
    {
        id:44,
        name:'Nandish',
        city:'Bangalore',
        age:24
    },
    {
        id:46,
        name:'Manoj',
        city:'Calicut',
        age:30
    },
    {
        id:68,
        name:'Padma',
        city:'Bangalore',
        age:20
    }
]

users.filter(user => user.age > 30 )
    .map(user=>user.name + ": age: "+user.age)
    .sort()
    .forEach(name => console.log(name));