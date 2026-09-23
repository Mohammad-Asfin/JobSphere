import axios from 'axios';
import { demoJobs } from '../data/demoJobs';

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";
const IS_DEMO_MODE = import.meta.env.VITE_DEMO_MODE === 'true';

// Helper for local storage demo data
const getDemoData = () => {
    const data = localStorage.getItem('demoJobs');
    if (data) return JSON.parse(data);
    localStorage.setItem('demoJobs', JSON.stringify(demoJobs));
    return demoJobs;
};
const setDemoData = (data) => localStorage.setItem('demoJobs', JSON.stringify(data));

export const getAllJobs = async () => {
    if (IS_DEMO_MODE) return getDemoData();
    try {
        const response = await axios.get(`${API_URL}/allPosts`);
        return response.data;
    } catch (error) {
        console.error("API Error: Failed to fetch jobs", error);
        throw error;
    }
};

export const searchJobs = async (query) => {
    if (!query) return getAllJobs();
    
    if (IS_DEMO_MODE) {
        const jobs = getDemoData();
        const lowerQ = query.toLowerCase();
        return jobs.filter(j => 
            (j.title && j.title.toLowerCase().includes(lowerQ)) ||
            (j.description && j.description.toLowerCase().includes(lowerQ)) ||
            (j.company && j.company.toLowerCase().includes(lowerQ)) ||
            (j.location && j.location.toLowerCase().includes(lowerQ)) ||
            (j.technologies && j.technologies.some(t => t.toLowerCase().includes(lowerQ)))
        );
    }
    
    try {
        const response = await axios.get(`${API_URL}/posts/${query}`);
        return response.data;
    } catch (error) {
        console.error("Search API Error", error);
        return [];
    }
};

export const createJob = async (job) => {
    if (IS_DEMO_MODE) {
        const jobs = getDemoData();
        const newJob = { ...job, id: `demo-${Date.now()}` };
        setDemoData([...jobs, newJob]);
        return newJob;
    }
    const response = await axios.post(`${API_URL}/post`, job);
    return response.data;
};

export const updateJob = async (job) => {
    if (IS_DEMO_MODE) {
        let jobs = getDemoData();
        jobs = jobs.map(j => j.id === job.id ? job : j);
        setDemoData(jobs);
        return job;
    }
    const response = await axios.put(`${API_URL}/post`, job);
    return response.data;
};

export const deleteJob = async (id) => {
    if (IS_DEMO_MODE) {
        const jobs = getDemoData().filter(j => j.id !== id);
        setDemoData(jobs);
        return { success: true };
    }
    await axios.delete(`${API_URL}/post/${id}`);
    return { success: true };
};
