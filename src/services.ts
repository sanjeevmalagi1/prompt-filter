import axios from "axios"

import { ICVE } from "./interfaces";

// import cves from "../test/mocks/cves.json"


const TRANSILIENCE_API_BASE_URL = import.meta.env.VITE_TRANSILIENCE_API_BASE_URL
// const TRANSILIENCE_API_KEY = import.meta.env.VITE_TRANSILIENCE_API_KEY
const TRANSILIENCE_BARER_TOKEN = import.meta.env.VITE_TRANSILIENCE_BARER_TOKEN
const PROMPT_FILTER_API_BASE_URL = import.meta.env.VITE_PROMPT_FILTER_API_BASE_URL

const axiosInstance = axios.create({
    baseURL: TRANSILIENCE_API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${TRANSILIENCE_BARER_TOKEN}`
    }
})

const pfAPIAxiosInstance = axios.create({
    baseURL: PROMPT_FILTER_API_BASE_URL,
    headers: {
      "Content-Type": "application/json"
    }
})

type SortField = "epss_percentile" | "epss_score" | "weaknesses" | "api_created" | "api_last_modified" | "name" | "version";

interface ICVEPayload {
    start_from: number;
    limit: number;
    sort_order: Record<SortField, 1 | -1>;
    since_date: string;
    to_date: string;
    vendor?: string;
    product?: string;
}

export async function fetchPayload(prompt: string) {
    const body = {
        "user_prompt": prompt
    }
    const response = await pfAPIAxiosInstance.post(`/v1/payload`, body)
    
    if (response.status !== 200) {
        return null
    }

    return response.data.data
}

export async function fetchCVEs(payload: ICVEPayload | object): Promise<ICVE[]|null> {
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve(cves as ICVE[])
    //     }, 2000)
    // })
    const body = payload
    
    const response = await axiosInstance.post(`/cves`, body)
    if (response.status !== 200) {
        return null
    }

    return response.data
}
