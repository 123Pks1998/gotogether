require('../../../config')
import Product from '../../../model/science'
const handler = async (req, resp) => {
    let products = await Product.find()
    resp.status(200).json({ products })
    // console.log(products)
}
export default handler