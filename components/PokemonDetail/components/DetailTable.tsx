import styles from './DetailTable.module.css'

export function DetailTable({ children }) {
  return <table className={styles.root}>{children}</table>
}
