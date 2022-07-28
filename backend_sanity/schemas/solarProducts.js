export default {
    name: 'solarProducts', 
    title: 'Solar Products', 
    type: 'document', 
    fields: [
        {
            name: 'name', 
            title: 'Product Name', 
            type: 'string'
        }, 
        {
            name: 'model', 
            title: 'Product Model', 
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
            name: 'nominalPower', 
            title: 'Nominal Power', 
            type: 'string'
        }, 
        {
            name: 'efficiency', 
            title: 'Efficiency', 
            type: 'string'
        }, 
        {
            name: 'maximumVoltage', 
            title: 'Maximum Voltage', 
            type: 'string'
        }, 
        {
            name: 'weight', 
            title: 'Weight', 
            type: 'string'
        }, 
        {
            name: 'keyFeatures', 
            title: 'Key Features', 
            type: 'string'
        }, 
        {
            name: 'description', 
            title: 'Product Description', 
            type: 'string'
        }
    ]
}