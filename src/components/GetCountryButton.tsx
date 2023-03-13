import { Properties } from "csstype";
import { useRouter } from "next/router";

import styles from "@/styles/GetCountryButton.module.css";

type GetCountryButtonProps = {
  countryCode?: string | string[] | undefined;
  style?: Properties;
};
export default function GetCountryButton({ countryCode, style }: GetCountryButtonProps) {
  const router = useRouter();

  async function handleClick() {
    (async function () {
      const countryResponse: Response = await fetch("http://localhost:5000/api/getRandomCountry");
      const countryData: number = await countryResponse.json();

      router.push(`/${countryData}`);
    })();
  }

  return (
    <button className={styles["action-btn"]} style={style} onClick={handleClick}>
      Get country: {countryCode}
    </button>
  );
}
