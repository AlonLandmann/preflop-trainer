import Image from 'next/image'
import { useUser } from '@auth0/nextjs-auth0/client'
import css from '@/scss/Navbar.module.scss'

export default function Navbar() {
  const { user, error, isLoading } = useUser()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  console.log(user)

  return (
    <div className={css.container}>
      <div className={css.center}>
        <div className={css.logo}>
          <strong>preflop</strong>Trainer
        </div>
        <nav className={css.navLinks}>
          <div>User Guide</div>
          <div>Feedback</div>
          <div>Results</div>
        </nav>
        {!user &&
          <div className={css.loginButton}>
            <button onClick={() => { location.replace('api/auth/login') }}>
              Login
            </button>
          </div>
        }
        {user &&
          <div className={css.accountImage}>
            <Image
              src={user.picture}
              alt='profile picture'
              width={32}
              height={32}
              onClick={() => { location.replace('api/auth/logout') }}
            />
          </div>
        }
      </div>
    </div>
  )
}