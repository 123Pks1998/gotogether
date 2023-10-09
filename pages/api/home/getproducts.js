require('../../../config')
import Product from '../../../model/home'
const handler = async (req, resp) => {
    let products = await Product.find()
    resp.status(200).json({ products })
    // console.log(products)
}
export default handler