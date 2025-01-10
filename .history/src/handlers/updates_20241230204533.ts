import prisma from '../db';

export const getUpdates = async (req, res) => {
    const productsWithUpdates = await prisma.product.findMany({
        where: {
            belongsToId: req.user.id,
        },
        include: {
            updates: true,
        }
    });

    const updates = productsWithUpdates.flatMap(product => product.updates);

    res.json({ data: updates, errors: [] });
}

export const getOneUpdate = async (req, res) => {
    const updateId = req.params.id;

    const update = await prisma.update.findUnique({
        where: {
            id: updateId,
        }
    });

    res.json({ data: update, errors: [] });
}

// TODO finish create update
export const createUpdate = async (req, res) => {
    const product = await prisma.product.findUnique({
        where: {
            id: req.body.id,
        }
    })

    if (!product) {
        res.status(400);
        return res.json({ data: [], errors: [`Product does not belong to user!`] })
    }

    const newUpdate = await prisma.update.create({
        data: {
            title: req.body.title,
            body: req.body.body,
            version: req.body.version,
            productId: req.body.productId,
            updatedAt: null,
        }
    });

    res.json({ data: newUpdate, errors: [] });
}

export const updateUpdate = async (req, res) => {
    const products = 
}

export const deleteUpdate = async (req, res) => {
    const deletedUpdate = await prisma.product.delete({
        where: {
            id: req.params.id,
        }
    })

    res.json({ data: deletedUpdate, errors: [] })
}