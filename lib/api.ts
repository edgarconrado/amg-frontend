import { supabase } from "./supabase";

export const fetchCategory = async () => {
    const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('created_at', {
            ascending: true
        });
    if (error){   
        return [];
    }   
    else
    { 
        return data;
    }        
};

export type Categories = Awaited<ReturnType<typeof fetchCategory>>;