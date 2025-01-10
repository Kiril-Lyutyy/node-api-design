import prisma from '../db';

export const getProducts = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            id: req.user.id,
        },
        include: {
            products: true,
        }
    });

    res.json({ data: user.products, errors: [] });
}

export const getOneProduct = async (req, res) => {
    const productId = req.params.id;

    const product = await prisma.product.findFirst({
        where: {
            id: productId,
            belongsToId: req.user.id,
        }
    });

    res.json({ data: product, errors: [] });
}

export const createProduct = async (req, res, next) => {
    try {
        const newProduct = await prisma.product.create({
            data: {
                name: req.body.name,
                belongsToId: req.user.id,
            }
        });
    
        res.json({ data: newProduct, errors: [] });
    } catch (e) {

    }

}

export const updateProduct = async (req, res) => {
    const updatedProduct = await prisma.product.update({
        where: {
            id_belongsToId: {
                id: req.params.id,
                belongsToId: req.user.id,
            }
        },
        data: {
            name: req.body.name,
        }
    });

    res.json({ data: updatedProduct, errors: [] });
}

export const deleteProduct = async (req, res) => {
    const deletedProduct = await prisma.product.delete({
        where: {
            id_belongsToId: {
                id: req.params.id,
                belongsToId: req.user.id,
            }
        }
    })

    res.json({ data: deletedProduct, errors: [] })
}