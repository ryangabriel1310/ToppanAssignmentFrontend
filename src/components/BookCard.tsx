import { SetStateAction, useRef } from "react";

import { ChevronUp } from "@/assets";
import { BookType } from "@/types";
import styles from "@/styles/BookCard.module.css";

interface BookCardProps {
  book: BookType;
  children: React.ReactNode;
  index: number;
  openArr: boolean[];
  setOpenArr: React.Dispatch<SetStateAction<boolean[]>>;
}

export default function BookCard({ book, children, index, openArr, setOpenArr }: BookCardProps) {
  const personContainerRef = useRef<HTMLDivElement>(null);

  function handleClick() {
    setOpenArr((prevState) => {
      const defaultArr = new Array(openArr.length).fill(false);
      defaultArr[index] = !prevState[index];
      return defaultArr;
    });
  }

  return (
    <>
      <div className={styles["book"]} id={`book-item-${index + 1}`}>
        <div className={styles["book-content"]}>
          <p className={styles["book-number"]}>{index + 1}</p>
          <p className={styles["book-title"]}>{book.name}</p>
          <button className={styles["book-toggle"]} onClick={handleClick}>
            <ChevronUp width={29} fillColor="#D56767" rotation={openArr[index] ? 0 : 180} />
          </button>
        </div>
        <p className={styles["book-author"]}>by {book.author}</p>
      </div>
      <div
        ref={personContainerRef}
        className={styles["customers-container"]}
        style={{ height: openArr[index] ? personContainerRef.current?.scrollHeight : 0 }}
      >
        {children}
      </div>
    </>
  );
}
