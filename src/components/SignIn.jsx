import { useState } from 'react'
import { apiService } from '../services/api'
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";


export default function SignIn() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()
   
    setLoading(true)
    const { data } = await apiService.login({ email, password: 'Abcde777...' });
    console.log(`Data`, data, email);
    
    setLoading(false)
  }

  return (
    <Auth
      supabaseClient={apiService.getInstance()}
      appearance={{ theme: ThemeSupa }}
      providers={["google"]}
    />
  )
}