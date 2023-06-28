import prisma from "../db"

export const createPayment = async (req, res) => {
    const payment = await prisma.payment.create({
        data: {
            amount: req.body.amount,
            tea: req.body.tea,
            tep: req.body.tep,
            initialPayment: req.body.initialPayment,
            payment: req.body.payment,
            mortgageLifeInsurance: req.body.mortgageLifeInsurance,
            allRiskInsurance: req.body.allRiskInsurance,
            currency: req.body.currency,
            frequency: req.body.frequency,
            years: req.body.years,
        }
    })

    res.status(201).json({ payment })
}