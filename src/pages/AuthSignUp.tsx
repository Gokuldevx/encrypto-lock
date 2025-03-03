import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithPopup } from 'firebase/auth'
import { FirebaseError } from 'firebase/app'
import { auth, googleProvider } from '../lib/firebase'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Mail, Loader2 } from 'lucide-react'
import { useToast } from '../components/ui/use-toast'

export function AuthSignup() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true)
      console.log('Starting Google authentication...')

      const result = await signInWithPopup(auth, googleProvider)

      console.log('Google Sign-In successful:', result.user)

      if (!result.user.email) {
        throw new Error('No email provided from authentication provider')
      }

      const userData = {
        name: result.user.displayName || '',
        email: result.user.email,
        photoURL: result.user.photoURL || '',
        uid: result.user.uid
      }

      console.log('Navigating to dashboard with user data:', userData)

      navigate('/storage', { state: userData, replace: true })
    } catch (error) {
      console.error('Auth error:', error)

      if (error instanceof FirebaseError) {
        console.error('Firebase Auth Error:', error.code, error.message)
        switch (error.code) {
          case 'auth/popup-closed-by-user':
            toast({
              title: 'Authentication Cancelled',
              description: 'You closed the authentication window. Please try again.',
              variant: 'default'
            })
            break
          case 'auth/popup-blocked':
            toast({
              title: 'Popup Blocked',
              description: 'Please allow popups for this site and try again.',
              variant: 'destructive'
            })
            break
          case 'auth/unauthorized-domain':
            toast({
              title: 'Domain Not Authorized',
              description: 'Please add "localhost:5173" to authorized domains in Firebase Console.',
              variant: 'destructive'
            })
            console.error(`
              Firebase Domain Error: Please follow these steps:
              1. Go to Firebase Console
              2. Select your project
              3. Go to Authentication > Settings
              4. Add these domains:
                 - localhost
                 - localhost:5173
                 - 127.0.0.1
            `)
            break
          default:
            toast({
              title: 'Authentication Error',
              description: error.message || 'Failed to sign in. Please try again.',
              variant: 'destructive'
            })
        }
      } else {
        toast({
          title: 'Authentication Error',
          description: 'An unexpected error occurred. Please try again.',
          variant: 'destructive'
        })
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Sign Up</CardTitle>
          <CardDescription>Continue with Google to create your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            variant="outline"
            className="w-full h-12"
            onClick={handleGoogleSignIn}
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Mail className="mr-2 h-4 w-4" />
            )}
            Continue with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}