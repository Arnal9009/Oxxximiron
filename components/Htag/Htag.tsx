// components | props
import { HtagProps } from "./Htag.props";

// styles
import styles from "./Htag.module.scss"

export const Htag = ({children, tag}: HtagProps):JSX.Element => {
  switch (tag) {
    case "h1":
      return <h1 className={styles.h1}>{children}</h1>
    case "h2":
      return <h2 className={styles.h2}>{children}</h2>
    case "h3":
      return <h3 className={styles.h3}>{children}</h3>  
    case "h4":
      return <h4 className={styles.h4}>{children}</h4>
    case "h5":
      return <h5 className={styles.h5}>{children}</h5>
    case "h6":
      return <h6 className={styles.h6}>{children}</h6>
    case "logo_header_d":
      return <h2 className={styles.logo_header_d}>Ration<span>.</span></h2>
    case "logo_header_w":
      return <h2 className={styles.logo_header_w}>Ration<span>.</span></h2>
    case "logo_main":
      return <h2 className={styles.logo_main}>Ration<span>.</span></h2>
    default:
      return <></>  
  } 
}