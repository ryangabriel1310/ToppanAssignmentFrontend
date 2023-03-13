import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    (async function () {
      const countryResponse: Response = await fetch("http://localhost:5000/api/getRandomCountry");
      const countryData: number = await countryResponse.json();
      console.log(countryData);

      router.push(`/${countryData}`);
    })();
  });
}
