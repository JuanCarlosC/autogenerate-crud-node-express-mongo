const models = []

const products = {
    name: 'Products',
    properties: {
        name: {
            type: String,
            required: true,
            info: 'The name for the product',
            validate: (value) => { // return boolean
                return value.length > 3
            },
            validateErrorMsg: 'Product name must be more than 2 characters. ',
            requiredErrorMsg: 'Product name is required. '
        },
        description: {
            type: String,
            info: 'The description for the product'
        },
        postedOn: {
            type: Date,
            default: Date.now(),
            info: 'The date posted for the product'
        },
        price: {
            type: Number,
            required: true
        }
    },
    meta: {
        path: 'products',
        plural: 'products',
        singular: 'product'
    }
}
models.push(products)

const user = {
    name: 'Users',
    properties: {
        firstName: {
            type: String
        },
        lastName: {
            type: String
        },
        age: {
            type: Number
        }
    }
}
models.push(user)

module.exports = models