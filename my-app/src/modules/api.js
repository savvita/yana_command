import axios from "axios";
import { Hosting } from '../components/Hosting.ts';

const getImages = async (text, per_page) => {
    if(!text || !per_page) return undefined;

    const host = new Hosting();
    try {
        const res = await axios({
            method: 'get',
            url: `https://${host.getHost()}/api/getImages?text=${ text }&per_page=${ per_page }`,
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            }
        });
        return res.data;
    } catch {
        return undefined;
    }
}

const getImagesPaginate = async (text, per_page, numberOfPage) => {
    if(!text || !numberOfPage || !per_page) return undefined;

    const host = new Hosting();
    try {
        const res = await axios({
            method: 'get',
            url: `https://${host.getHost()}/api/getImagesPaginate?text=${text}&perPage=${per_page}&page=${numberOfPage}`,
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            }
        });
        return res.data;
    } catch {
        return undefined;
    }
}

const getUsersImages = async (username) => {
    if(!username) return undefined;

    const host = new Hosting();

    try {
        const res = await axios({
            method: 'get',
            url: `https://${host.getHost()}/api/getUserImages?username=${username}`,
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            }
        });
        return res.data;
    } catch {
        return undefined;
    }
}

const getVideos = async (text, per_page) => {
    if(!text || !per_page) return undefined;

    const host = new Hosting();
    try {
        const res = await axios({
            method: 'get',
            url: `https://${host.getHost()}/api/getVideos?text=${ text }&per_page=${ per_page }`,
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            }
        });
        return res.data;
    } catch {
        return undefined;
    }
}

const getVideosPaginate = async (text, per_page, numberOfPage) => {
    if(!text || !numberOfPage || !per_page) return undefined;

    const host = new Hosting();
    try {
        const res = await axios({
            method: 'get',
            url: `https://${host.getHost()}/api/getVideosPaginate?text=${text}&perPage=${per_page}&page=${numberOfPage}`,
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            }
        });
        return res.data;
    } catch {
        return undefined;
    }
}

const getUsersVideos = async (username) => {
    if(!username) return undefined;

    const host = new Hosting();

    try {
        const res = await axios({
            method: 'get',
            url: `https://${host.getHost()}/api/getUserVideos?username=${username}`,
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            }
        });
        return res.data;
    } catch {
        return undefined;
    }
}

const functions = {
    getImages: getImages,
    getImagesPaginate: getImagesPaginate,
    getUsersImages: getUsersImages,
    getVideos: getVideos,
    getVideosPaginate: getVideosPaginate,
    getUsersVideos: getUsersVideos
};

export default functions;