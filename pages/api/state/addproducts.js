require('../../../config')
import Product from '../../../model/state'
const handler = async (req, resp) => {
    if (req.method == 'POST') {
        let data = new Product({
            slug: req.body.slug,
            img: req.body.img,
            name: req.body.name,
            capital: req.body.capital,
            district: req.body.district,
            region: req.body.region,
            formation: req.body.formation,
            festival: req.body.festival,
            desc: req.body.desc
        })
        await data.save()
        resp.status(200).json({ success: 'success' })
    } else {
        resp.status(200).json({ error: "this is not allowed" })

    }
}
export default handler