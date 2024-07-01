import styles from "../../../styles.module.css"

export default function Section(){
    return(
        <div className={styles.container}>
            <div className={styles.sectionContainer}>
                <h2 className={styles.sectionHeading}>Contact us</h2>
                <p className={styles.sectionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
        </div>
    )
}