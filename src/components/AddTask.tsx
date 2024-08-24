import React from 'react';
import { useState } from 'react';
import { Task } from '@/types/Task';
import axios from 'axios';
import { revalidatePath } from 'next/cache';
import { title } from 'process';
import { pages } from 'next/dist/build/templates/app-page';

export async function createTask(fomData: FormData){
    const rawFormData = {
        task: fomData.get('task'),
        description: fomData.get('description'),
        status: fomData.get('status')
    };
    console.log(rawFormData);
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/todos/', {
            title: rawFormData.task,
            description: rawFormData.description,   
            status: rawFormData.status as 'incomplete' | 'completed'
        });
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
    // I need to figure out how to get the new data to show up on the page
    // without having to refresh the page
    // revalidatePath('pages');
    
}

// Define the function that will handle the Add Task button click event

export const handleAddTask = () => {
    console.log('Add Task button clicked');
};