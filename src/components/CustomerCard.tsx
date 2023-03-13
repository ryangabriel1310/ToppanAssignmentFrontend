import styles from "@/styles/CustomerCard.module.css";

type PersonType = {
  name: string;
};
export default function CustomerCard({ name }: PersonType) {
  return <p className={styles["customer"]}>{name}</p>;
}
