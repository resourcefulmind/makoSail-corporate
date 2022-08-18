export default {
    name: 'aquaClasses', 
    title: 'Makosail Swimming Courses', 
    type: 'document', 
    fields: [
        {
            name: 'name', 
            title: 'Name', 
            type: 'string'
        }, 
        {
            name: 'description', 
            title: 'Swimming Course Description', 
            type: 'string'
        }, 
        {
            name: 'imgurl', 
            title: 'ImgUrl', 
            type: 'image', 
            options: {
                hotspot: true,
            }
        }, 
        {
            name: 'price', 
            title: 'Swimming Course Price', 
            type: 'string'
        }
    ]
}