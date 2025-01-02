import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Auth from './Auth'
import supabase  from '../supabase/SupabaseClient'

export default function SB_Auth() {
  const [session, setSession] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return (<Auth />)
  }
  else {
    navigate('/protected')
  }
}