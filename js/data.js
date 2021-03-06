var DATA = [
    {   time: 1000,
        x: -1,
        y: 0,
        z: 2,
        counter: 0,
        width: 40,
        height: 110,
        id: 'pepsi10',
        anims: [[{type: 'rotate', values: [-5]}]]
    },
    {   time: 1100,
        x: -1,
        y: 20,
        z: 2,
        counter: 0,
        width: 40,
        height: 85,
        id: 'pepsi11',
        anims: [
            [{type: 'brightnes', values:[120]}],
            [{type: 'brightnes', values:[80]}]
        ]
    },
    {
        x: 0,
        y: 20,
        z: 3,
        counter: 0,
        width: 40,
        height: 85,
        id: 'pepsi12',
    },
    {
        x: 49,
        y: 16,
        z: 3,
        counter: 0,
        width: 10,
        height: 5,
        id: 'pepsi1',
    },
    {
        x: 50,
        y: 4,
        z: 3,
        counter: 0,
        width: 7,
        height: 11,
        id: 'pepsi2',
    },
    {   time: 600,
        x: 5,
        y: 10,
        z: 4,
        counter: 0,
        width: 30,
        height: 20,
        id: 'pepsi9',
        anims: [
            [{type: 'move', values: [10,5]}, {type: 'rotate', values: [10]}],
            [{type: 'move', values: [-5,-5]}, {type: 'rotate', values: [-5]}, ],
            [{type: 'move', values: [-50,0]}]
        ]
    },
    {   time: 400,
        x: 45,
        y: 23,
        z: 4,
        counter: 0,
        width: 20,
        height: 10,
        id: 'pepsi6',
        anims: [
            [{type: 'rotate', values: [4]}],
            [{type: 'rotate', values: [9]}],
            [{type: 'rotate', values: [-3]}],
            [{type: 'rotate', values: [-8]}],
            [{type: 'move', values: [0, 15]}],
            [{type: 'move', values: [-10, 10]}],
            [{type: 'move', values: [0, -5]}],
        ]
    },
    {   time: 250,
        x: 30,
        y: 20,
        z: 4,
        counter: 0,
        width: 10,
        height: 20,
        id: 'pepsi14',
        anims: [
            [{type: 'move', values: [10,25]}, {type: 'rotate', values: [10]}],
            [{type: 'rotate', values: [-5]}, {type: 'move', values: [-15,0]}],
            [{type: 'rotate', values: [-10]}, {type: 'move', values: [5,-5]}],
        ]
    },
   {   time: 40,
        x: 20,
        y: 80,
        z: 4,
        counter: 0,
        width: 10,
        height: 20,
        id: 'pepsi15',
        anims: [
            [{type: 'move', values: [15,5]}, {type: 'rotate', values: [10]}],
            [{type: 'rotate', values: [-5]}, {type: 'move', values: [-10,0]}],
            [{type: 'rotate', values: [-10]}, {type: 'move', values: [5,-5]}],
        ]
    },
    {   time: 800,
        x: 46,
        y: 45,
        z: 4,
        counter: 0,
        width: 17,
        height: 60,
        id: 'pepsi7',
        anims: [
            [{type: 'changeBackground', values: ['pepsi8']}],
            [{type: 'changeBackground', values: ['pepsi7']}],
        ]
    },
    {   time: 300,
        x: 38,
        y: 33,
        z: 3,
        counter: 0,
        width: 10,
        height: 10,
        id: 'pepsi4',
        anims: [
            [{type: 'rotate', values: [10]}, {type: 'move', values: [10,0]}],
            [{type: 'rotate', values: [7]}],
            [{type: 'rotate', values: [-3]}, {type: 'move', values: [-5, 15]}],
            [{type: 'rotate', values: [4]}],
            [{type: 'rotate', values: [-14]}],
        ]
    },
    {   time: 400,
        x: 62,
        y: 32,
        z: 3,
        counter: 0,
        width: 10,
        height: 10,
        id: 'pepsi5',
        anims: [
            [{type: 'rotate', values: [10]}, {type: 'move', values: [10,0]}],
            [{type: 'rotate', values: [4]}],
            [{type: 'rotate', values: [-3]}, {type: 'move', values: [-5, 15]}],
            [{type: 'rotate', values: [-14]}],
        ]
    },
    {   time: 750,
        x: 33,
        y: 0,
        z: 5,
        counter: 0,
        width: 5,
        height: 110,
        id: 'pepsi23',
        anims: [
            [{type: 'rotate', values: [-6]}],
            [{type: 'brightnes', values:[120]}],
            [{type: 'brightnes', values:[140]}],
            [{type: 'brightnes', values:[100]}]
        ]
    },
    {
        x: 69,
        y: 0,
        z: 1,
        counter: 0,
        width: 36,
        height: 110,
        id: 'pepsi22',
    },
    {   time: 500,
        x: 67,
        y: 0,
        z: 2,
        counter: 0,
        width: 5,
        height: 110,
        id: 'pepsi24',
        anims: [
            [{type: 'rotate', values: [-1]}],
            [{type: 'brightnes', values: [80]}],
            [{type: 'brightnes', values: [100]}],
        ]
    },
    {   time: 300,
        x: 73,
        y: 50,
        z: 3,
        counter: 0,
        width: 15,
        height: 10,
        id: 'pepsi17',
        anims: [
            [{type: 'rotate', values: [-14]}],
            [{type: 'rotate', values: [10]}, {type: 'move', values: [10,0]}],
            [{type: 'rotate', values: [7]}],
            [{type: 'move', values: [-20, 5]}],
            [{type: 'rotate', values: [-3]}, {type: 'move', values: [-5, 15]}],
            [{type: 'move', values: [20, -5]}],
            [{type: 'rotate', values: [4]}],
        ]
    },
    {   time: 400,
        x: 74,
        y: 60,
        z: 3,
        counter: 0,
        width: 15,
        height: 10,
        id: 'pepsi20',
        anims: [
            [{type: 'rotate', values: [10]}, {type: 'move', values: [10,0]}],
            [{type: 'rotate', values: [7]}],
            [{type: 'move', values: [-20, 5]}],
            [{type: 'rotate', values: [-3]}, {type: 'move', values: [-5, 15]}],
            [{type: 'move', values: [20, -5]}],
            [{type: 'rotate', values: [4]}],
            [{type: 'rotate', values: [-11]}],
        ]
    },
    {   time: 600,
        x: 74,
        y: 70,
        z: 3,
        counter: 0,
        width: 15,
        height: 10,
        id: 'pepsi21',
        anims: [
            [{type: 'rotate', values: [10]}, {type: 'move', values: [10,0]}],
            [{type: 'rotate', values: [7]}],
            [{type: 'move', values: [10, 5]}],
            [{type: 'rotate', values: [-3]}, {type: 'move', values: [-5, 15]}],
            [{type: 'move', values: [10, -5]}],
            [{type: 'rotate', values: [4]}],
            [{type: 'rotate', values: [-14]}],
        ]
    },
    {   time: 600,
        x: 88,
        y: 52,
        z: 3,
        counter: 0,
        width: 7,
        height: 5,
        id: 'pepsi16',
        anims: [
            [{type: 'rotate', values: [10]}, {type: 'move', values: [10,0]}],
            [{type: 'move', values: [10, 5]}],
            [{type: 'rotate', values: [-3]}, {type: 'move', values: [-5, 15]}],
            [{type: 'move', values: [10, -5]}],
            [{type: 'rotate', values: [-14]}],
        ]
    },
    {   time: 500,
        x: 85,
        y: 40,
        z: 3,
        counter: 0,
        width: 10,
        height: 10,
        id: 'pepsi18',
        anims: [
            [{type: 'rotate', values: [10]}, {type: 'move', values: [10,0]}],
            [{type: 'move', values: [10, 5]}],
            [{type: 'rotate', values: [-3]}, {type: 'move', values: [-5, 15]}],
            [{type: 'move', values: [10, -5]}],
            [{type: 'rotate', values: [4]}],
            [{type: 'rotate', values: [-14]}],
        ]
    },
    {   time: 400,
        x: 95,
        y: 30,
        z: 3,
        counter: 0,
        width: 5,
        height: 20,
        id: 'pepsi19',
        anims: [
            [{type: 'rotate', values: [10]}, {type: 'move', values: [10,0]}],
            [{type: 'rotate', values: [7]}],
            [{type: 'move', values: [10, 5]}],
            [{type: 'move', values: [10, -5]}],
            [{type: 'rotate', values: [-3]}, {type: 'move', values: [-5, 15]}],
            [{type: 'rotate', values: [4]}],
        ]
    },
    {   time: 200,
        x: 50,
        y: 88,
        z: 4,
        counter: 0,
        width: 6,
        height: 10,
        id: 'pepsi3',
        anims: [
            [{type: 'rotateXY', values: [40,0.2]}],
            [{type: 'rotateXY', values: [-40,0.2]}],
            [{type: 'rotateXY', values: [0,0.2]}],
            [{type: 'rotateXY', values: [0,0.2]}],
            [{type: 'rotateXY', values: [0,0.2]}],
        ]
    },
];

var DATA2 =[
        {   time: 800,
        x: 46,
        y: 45,
        z: 4,
        counter: 0,
        width: 17,
        height: 60,
        id: 'pepsi7',
        anims: [
            [{type: 'changeBackground', values: ['pepsi8']}],
            [{type: 'changeBackground', values: ['pepsi7']}],
        ]
    },
        {   time: 750,
        x: 33,
        y: 0,
        z: 5,
        counter: 0,
        width: 5,
        height: 110,
        id: 'pepsi23',
        anims: [
            [{type: 'rotate', values: [-6]}],
            [{type: 'brightnes', values:[120]}],
            [{type: 'brightnes', values:[140]}],
            [{type: 'brightnes', values:[100]}]
        ]
    },
        {   time: 500,
        x: 67,
        y: 0,
        z: 2,
        counter: 0,
        width: 5,
        height: 110,
        id: 'pepsi24',
        anims: [
            [{type: 'rotate', values: [-1]}],
            [{type: 'brightnes', values: [80]}],
            [{type: 'brightnes', values: [100]}],
        ]
    },
        {
        x: 50,
        y: 4,
        z: 3,
        counter: 0,
        width: 7,
        height: 11,
        id: 'pepsi2',
    },
        {   time: 200,
        x: 50,
        y: 88,
        z: 4,
        counter: 0,
        width: 6,
        height: 10,
        id: 'pepsi3',
        anims: [
            [{type: 'rotateXY', values: [40,0.2]}],
            [{type: 'rotateXY', values: [-40,0.2]}],
            [{type: 'rotateXY', values: [0,0.2]}],
            [{type: 'rotateXY', values: [0,0.2]}],
            [{type: 'rotateXY', values: [0,0.2]}],
        ]
    },
        {
        x: 49,
        y: 16,
        z: 3,
        counter: 0,
        width: 10,
        height: 5,
        id: 'pepsi1',
    },
        {   time: 300,
        x: 38,
        y: 33,
        z: 3,
        counter: 0,
        width: 10,
        height: 10,
        id: 'pepsi4',
        anims: [
            [{type: 'rotate', values: [10]}, {type: 'move', values: [10,0]}],
            [{type: 'rotate', values: [7]}],
            [{type: 'rotate', values: [-3]}, {type: 'move', values: [-5, 15]}],
            [{type: 'rotate', values: [4]}],
            [{type: 'rotate', values: [-14]}],
        ]
    },
        {   time: 400,
        x: 62,
        y: 32,
        z: 3,
        counter: 0,
        width: 10,
        height: 10,
        id: 'pepsi5',
        anims: [
            [{type: 'rotate', values: [10]}, {type: 'move', values: [10,0]}],
            [{type: 'rotate', values: [4]}],
            [{type: 'rotate', values: [-3]}, {type: 'move', values: [-5, 15]}],
            [{type: 'rotate', values: [-14]}],
        ]
    },
    {   time: 400,
        x: 45,
        y: 23,
        z: 4,
        counter: 0,
        width: 20,
        height: 10,
        id: 'pepsi6',
        anims: [
            [{type: 'rotate', values: [4]}],
            [{type: 'rotate', values: [9]}],
            [{type: 'rotate', values: [-3]}],
            [{type: 'rotate', values: [-8]}],
            [{type: 'move', values: [0, 15]}],
            [{type: 'move', values: [-10, 10]}],
            [{type: 'move', values: [0, -5]}],
        ]
    },
    {
        x: 0,
        y: 0,
        z: 1,
        counter: 0,
        width: 40,
        height: 110,
        id: 'pepsi25',
    },
    {
        x: 70,
        y: 0,
        z: 1,
        counter: 0,
        width: 35,
        height: 110,
        id: 'pepsi36',
    },
    {   time: 400,
        x: 10,
        y: 10,
        z: 4,
        counter: 0,
        width: 20,
        height: 10,
        id: 'pepsi30',
        anims: [
            [{type: 'rotate', values: [4]}],
            [{type: 'rotate', values: [9]}],
            [{type: 'rotate', values: [-3]}],
            [{type: 'rotate', values: [-8]}],
            [{type: 'move', values: [0, 15]}],
            [{type: 'move', values: [-10, 10]}],
            [{type: 'move', values: [0, -5]}],
        ]
    },
    {   time: 250,
        x: 18,
        y: 20,
        z: 4,
        counter: 0,
        width: 3,
        height: 9,
        id: 'pepsi29',
        anims: [
            [{type: 'rotate', values: [4]}],
            [{type: 'rotate', values: [-8]}],
            [{type: 'move', values: [0, 15]}],
            [{type: 'move', values: [0, -5]}],
        ]
    },
    {   time: 500,
        x: 2,
        y: 85,
        z: 4,
        counter: 0,
        width: 15,
        height: 15,
        id: 'pepsi27',
        anims: [
            [{type: 'rotate', values: [10]}, {type: 'move', values: [10,0]}],
            [{type: 'rotate', values: [4]}],
            [{type: 'rotate', values: [-3]}, {type: 'move', values: [-5, 15]}],
            [{type: 'rotate', values: [-14]}],
        ]
    },
    {   time: 700,
        x: 75,
        y: 80,
        z: 4,
        counter: 0,
        width: 20,
        height: 18,
        id: 'pepsi31',
        anims: [
            [{type: 'rotate', values: [10]}, {type: 'move', values: [10,0]}],
            [{type: 'rotate', values: [4]}],
            [{type: 'rotate', values: [-14]}],
            [{type: 'rotate', values: [-3]}, {type: 'move', values: [-5, 15]}],
        ]
    },
    {   time: 400,
        x: 77,
        y: 2,
        z: 4,
        counter: 0,
        width: 8,
        height: 8,
        id: 'pepsi32',
        anims: [
            [{type: 'rotate', values: [10]}, {type: 'move', values: [10,0]}],
            [{type: 'rotate', values: [4]}],
            [{type: 'rotate', values: [-14]}],
            [{type: 'rotate', values: [-3]}, {type: 'move', values: [-5, 15]}],
        ]
    },
    {   time: 200,
        x: 70,
        y: 8,
        z: 4,
        counter: 0,
        width: 8,
        height: 8,
        id: 'pepsi33',
        anims: [
            [{type: 'rotate', values: [4]}],
            [{type: 'rotate', values: [-14]}],
            [{type: 'rotate', values: [-3]}, {type: 'move', values: [-5, 15]}],
            [{type: 'rotate', values: [10]}, {type: 'move', values: [10,0]}],
        ]
    },
    {   time: 200,
        x: 92,
        y: -1,
        z: 4,
        counter: 0,
        width: 10,
        height: 20,
        id: 'pepsi34',
        anims: [
            [{type: 'move', values: [10,25]}, {type: 'rotate', values: [10]}],
            [{type: 'rotate', values: [-5]}, {type: 'move', values: [-15,0]}],
            [{type: 'rotate', values: [-10]}, {type: 'move', values: [5,-5]}],
            [{type: 'move', values: [5,25]}, {type: 'rotate', values: [-10]}],
            [{type: 'move', values: [-5,15]}, {type: 'rotate', values: [5]}],
        ]
    },
]