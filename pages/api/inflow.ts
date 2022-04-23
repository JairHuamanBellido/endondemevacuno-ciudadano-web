import { randomInt } from "crypto";
import { NextApiRequest, NextApiResponse } from "next";

const Days = {
    '1': 'Lun',
    '2': 'Mar',
    '3': 'Mie',
    '4': 'Jue',
    '5': 'Vie',
    '6': 'Sab',
    '0': 'Dom',
};

const getInflowByHour = () => {
    let data = randomInt(60) + 20;
    return [
        { ["11:00"]: data + randomInt(20) - randomInt(20) },
        { ["11:05"]: data + randomInt(20) - randomInt(20) },
        { ["11:10"]: data + randomInt(20) - randomInt(20) },
        { ["11:15"]: data + randomInt(20) - randomInt(20) },
        { ["11:20"]: data + randomInt(20) - randomInt(20) },
        { ["11:25"]: data + randomInt(20) - randomInt(20) },
        { ["11:30"]: data + randomInt(20) - randomInt(20) },
        { ["11:35"]: data + randomInt(20) - randomInt(20) },
        { ["11:40"]: data + randomInt(20) - randomInt(20) },
        { ["11:45"]: data + randomInt(20) - randomInt(20) },
        { ["11:50"]: data + randomInt(20) - randomInt(20) },
        { ["11:55"]: data + randomInt(20) - randomInt(20) },
    ];
}

const getInflowByDay = () => {
    let data = randomInt(60) + 75;
    return [
        { ["09:00"]: data + randomInt(75) - randomInt(75) },
        { ["10:00"]: data + randomInt(75) - randomInt(75) },
        { ["11:00"]: data + randomInt(75) - randomInt(75) },
        { ["12:00"]: data + randomInt(75) - randomInt(75) },
        { ["13:00"]: data + randomInt(75) - randomInt(75) },
        { ["14:00"]: data + randomInt(75) - randomInt(75) },
        { ["15:00"]: data + randomInt(75) - randomInt(75) },
        { ["16:00"]: data + randomInt(75) - randomInt(75) },
        { ["17:00"]: data + randomInt(75) - randomInt(75) },
        { ["18:00"]: data + randomInt(75) - randomInt(75) },
    ];
}

const getInflowPerWeek = () => {
    let data = randomInt(60) + 75;
    return [
        { ["Lun"]: data + randomInt(75) - randomInt(75) },
        { ["Mar"]: data + randomInt(75) - randomInt(75) },
        { ["Mie"]: data + randomInt(75) - randomInt(75) },
        { ["Jue"]: data + randomInt(75) - randomInt(75) },
        { ["Vie"]: data + randomInt(75) - randomInt(75) },
        { ["Sab"]: data + randomInt(75) - randomInt(75) },
        { ["Dom"]: data + randomInt(75) - randomInt(75) },
    ];
}

const getInflowPerMonth = () => {
    let data = randomInt(60) + 75;
    return [
        { ["1"]: data + randomInt(75) - randomInt(75) },
        { ["2"]: data + randomInt(75) - randomInt(75) },
        { ["4"]: data + randomInt(75) - randomInt(75) },
        { ["6"]: data + randomInt(75) - randomInt(75) },
        { ["8"]: data + randomInt(75) - randomInt(75) },
        { ["10"]: data + randomInt(75) - randomInt(75) },
        { ["12"]: data + randomInt(75) - randomInt(75) },
        { ["14"]: data + randomInt(75) - randomInt(75) },
        { ["16"]: data + randomInt(75) - randomInt(75) },
        { ["18"]: data + randomInt(75) - randomInt(75) },
        { ["20"]: data + randomInt(75) - randomInt(75) },
        { ["22"]: data + randomInt(75) - randomInt(75) },
    ];
}

export default async (request: NextApiRequest, response: NextApiResponse) => {
    const {
        query: { startDate, endDate, vaccineCenterId, period },
    } = request;
    if (period === 'hour') {
        return response.status(200).json(getInflowByHour());
    }
    else if (period === 'day') {
        return response.status(200).json(getInflowByDay());
    }
    else if (period === 'week') {
        return response.status(200).json(getInflowPerWeek());
    }

    return response.status(200).json(getInflowPerMonth());
    //return response.status(200).json({ query: startDate + " " + endDate + " " + vaccineCenterId + " " + period });
};