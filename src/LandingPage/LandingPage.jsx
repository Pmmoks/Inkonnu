import React from 'react'
import Link from '../Components/Link/Link.jsx'

import SiteRoutes from '../Routes/Routes.js'

import styles from './landingPage.scss'

const LandingPage = () => (
  <div className={styles.landingBackdrop}>
    <div className={styles.landingPage}>
      <h1>This site is being built. Thanks for your patience.</h1>
      <br />
      <Link className={styles.landingButton} path={SiteRoutes.sample}>
        ENTER
      </Link>
    </div>
  </div>
)

export default LandingPage
