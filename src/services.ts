import axios from "axios"

import { ICVE } from "./interfaces";

// import cves from "../test/mocks/cves.json"

const PROMPT_FILTER_API_BASE_URL = import.meta.env.VITE_PROMPT_FILTER_API_BASE_URL

const axiosInstance = axios.create({
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
    const response = await axiosInstance.post(`/v1/payload`, body)
    
    if (response.status !== 200) {
        return null
    }

    return response.data.data
}

export async function fetchCVEs(payload: ICVEPayload | null): Promise<ICVE[]|null> {
    if (!payload) {
        return null
    }

    const body = payload
    
    const response = await axiosInstance.post(`/v1/cves`, body)
    if (response.status !== 200) {
        return null
    }

    return response.data
}

export function getDomainName(url: string): string | null {
    try {
        const hostname = new URL(url).hostname;
        const parts = hostname.split('.');
        if (parts.length > 2) {
            return parts.slice(-2).join('.');
        }
        return hostname;
    } catch (error) {
        return null;
    }
}

export function formatDate(isoString: string) {
    const date = new Date(isoString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  }
