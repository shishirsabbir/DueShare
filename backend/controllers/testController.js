// imports
import Test from '../models/testModel.js';

// test controllers
export async function greetHello(req, res, next) {
    try {
        res.status(200).json({
            status: 'success',
            message: 'Hello World!',
        });
    } catch (err) {
        next(err);
    }
}

export async function postData(req, res, next) {
    try {
        const testData = Test.build({
            lastName: req.body.lastName,
            firstName: req.body.firstName,
            email: req.body.email,
        });

        await testData.save();

        res.status(201).json({
            status: 'success',
            data: {
                test: testData,
            },
        });
    } catch (err) {
        next(err);
    }
}

export async function getAllData(req, res, next) {
    try {
        const allTestData = await Test.findAll();

        res.status(200).json({
            status: 'success',
            data: {
                test: allTestData,
            },
        });
    } catch (err) {
        next(err);
    }
}

export async function getSingleData(req, res, next) {
    try {
        const singleTestData = await Test.findByPk(req.params.id);

        if (!singleTestData) {
            throw new Error(`there is no data with id ${req.params.id}`);
        }

        res.status(200).json({
            status: 'success',
            data: {
                test: singleTestData,
            },
        });
    } catch (err) {
        next(err);
    }
}

export async function updateData(req, res, next) {
    try {
        const singleTestData = await Test.findOne({
            where: {
                id: req.params.id,
            },
        });

        if (!singleTestData) {
            throw new Error(`there is no data with id ${req.params.id}`);
        }

        await Test.update(
            { ...req.body },
            {
                where: {
                    id: req.params.id,
                },
            }
        );

        await singleTestData.reload();

        res.status(200).json({
            status: 'success',
            data: {
                test: singleTestData,
            },
        });
    } catch (err) {
        next(err);
    }
}

export async function deleteData(req, res, next) {
    try {
        const singleTestData = await Test.findOne({
            where: {
                id: req.params.id,
            },
        });

        if (!singleTestData) {
            throw new Error(`there is no data with id ${req.params.id}`);
        }

        Test.destroy({
            where: {
                id: req.params.id,
            },
        });

        res.status(204).json({
            status: 'success',
            data: {
                test: singleTestData,
            },
        });
    } catch (err) {
        next(err);
    }
}
