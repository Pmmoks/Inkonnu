import React from 'react'
import Link from '../Components/Link/Link.jsx'

import SiteRoutes from '../Routes/Routes.js'

import styles from './landingPage.scss'

const LandingPage = () => (
  <div className={styles.landingBackdrop}>
    <div className={styles.landingPage}>
      <h2>This site is being built. Good things come to those who wait.</h2>
      <br />
      <Link className={styles.landingButton} path={SiteRoutes.read}>
        ENTER
      </Link>
    </div>
  </div>
)

export default LandingPage
