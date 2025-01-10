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
    const { productId, ...rest } = req.body;

    const product = await prisma.product.findUnique({
        where: {
            id: productId,
        }
    })

    if (!product) {
        res.status(404);
        return res.json({ data: [], errors: [`nope!`] })
    }

    const newUpdate = await prisma.update.create({
        data: {
            ...rest,
        }
    });

    res.json({ data: newUpdate, errors: [] });
}

export const updateUpdate = async (req, res) => {
    const products = await prisma.product.findMany({
        where: {
            belongsToId: req.user.id,
        },
        include: {
            updates: true,
        }
    })

    const updates = products.reduce((allUpdates, product) => {
        return [...allUpdates, ...product.updates]
    }, []);

    const match = updates.find(update => update.id === req.params.id);

    if (!match) {
        return res.json({ message: 'nope' });
    }

    const updatedUpdate = await prisma.update.update({
        where: {
            id: req.params.id,
        },
        data: req.body,
    })

    res.json({ data: updatedUpdate });
}

export const deleteUpdate = async (req, res) => {
    const products = await prisma.product.findMany({
        where: {
            belongsToId: req.user.id,
        },
        include: {
            updates: true,
        }
    })

    const updates = products.reduce((allUpdates, product) => {
        return [...allUpdates, ...product.updates]
    }, []);

    const match = updates.find(update => update.id === req.params.id);

    if (!match) {
        return res.json({ message: 'nope' });
    }

    const deleted = await prisma.update.delete({
        where: {
            id: req.params.id,
        }
    })

    res.json({data: deleted});
}