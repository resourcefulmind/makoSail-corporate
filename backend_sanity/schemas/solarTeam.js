export default{
    name:'solarTeam',
    title:'Solar Team',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Name',
            type:'string'
        },
        {
            name:'description',
            title:'Role Description',
            type:'string'
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
    ]
}