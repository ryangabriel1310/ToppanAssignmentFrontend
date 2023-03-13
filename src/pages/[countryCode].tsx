import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { BookCard, CustomerCard, GetCountryButton } from "@/components";
import { BookType, ErrorDataType } from "@/types";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const router = useRouter();
  const countryCode = router.query.countryCode;

  const [books, setBooks] = useState<BookType[]>([]);
  const [openArr, setOpenArr] = useState<boolean[]>(new Array(books.length).fill(false));

  useEffect(() => {
    console.log("useEffect ran");
    if (!countryCode) {
      return;
    }
    (async function () {
      try {
        const bookResponse = await fetch(`http://localhost:5000/api/getTop3ReadBooks?country_code=${countryCode}`);

        if (bookResponse.status === 400) {
          const errorData: ErrorDataType = await bookResponse.json();
          console.log(errorData.message);
          setBooks([]);
          return;
        }

        if (bookResponse.status === 404) {
          const errorData: ErrorDataType = await bookResponse.json();
          console.log(errorData.message);
          setBooks([]);
          return;
        }

        const bookData: BookType[] = await bookResponse.json();
        bookData.forEach((bookDatum, index) => {
          console.log(`Book ${index + 1}: `, bookDatum);
        });
        setBooks(bookData);
      } catch (error) {
        console.log("Error", error);
      }
    })();
  }, [countryCode]);

  useEffect(() => {
    setOpenArr(new Array(books.length).fill(false));
  }, [books]);

  return (
    <>
      <Head>
        <title>Toppan Ecquaria Assignment</title>
        <meta name="description" content="Generate the most popular books based on country" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/book.ico" />
      </Head>
      <main className={styles.main}>
        <GetCountryButton countryCode={countryCode} style={{ position: "absolute", top: "25px", left: "25px" }} />
        <div className={styles["container"]}>
          {books.length > 0
            ? books.map((book, index) => (
                <BookCard key={index} index={index} book={book} openArr={openArr} setOpenArr={setOpenArr}>
                  {book.borrowers ? book.borrowers.map((borrower, index) => <CustomerCard key={index} name={borrower} />) : null}
                </BookCard>
              ))
            : "No data found"}
        </div>
      </main>
    </>
  );
}
