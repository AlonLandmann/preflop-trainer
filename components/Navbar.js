import css from '@/scss/Navbar.module.scss'

export default function Navbar() {
  return (
    <div className={css.container}>
      <div className={css.center}>
        <div className={css.logo}>
          <strong>preflop</strong>Trainer
        </div>
        <div className={css.navLinks}>
          <div>User Guide</div>
          <div>Feedback</div>
          <div>Results</div>
        </div>
        <div className={css.loginButton}>
          <button>Login</button>
        </div>
      </div>
    </div>
  )
}