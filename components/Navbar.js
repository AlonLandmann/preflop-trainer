import { useUser } from '@auth0/nextjs-auth0/client'
import css from '@/scss/Navbar.module.scss'

export default function Navbar() {
  const { user, error, isLoading } = useUser()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

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
        <div className={css.loginButton}>
          {user
            ? <button onClick={() => { location.replace('api/auth/logout') }}>
                Log out
              </button>
            : <button onClick={() => { location.replace('api/auth/login') }}>
                Log in
              </button>
          }
        </div>
      </div>
    </div>
  )
}