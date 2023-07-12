import supabase from "./supabase-config";

class ApiService {
  constructor(){
    this.supabase = supabase;
  }
  
  login = async ({ email, password }) => {
    const { data, error } = await this.supabase.auth.signInWithPassword({ email, password })

    if (error){
      throw new Error('Sorry, but login failed. Please check again');
    }

    return data;
  }

}

export const apiService = new ApiService();