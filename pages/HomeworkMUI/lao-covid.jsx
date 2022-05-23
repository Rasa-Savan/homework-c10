import React, { useEffect, useState } from "react";
import CovidCard from "./covid-card";

function LaoCovid() {
  const [covidData, setCovidData] = useState({});
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const response = await fetch(
      "https://disease.sh/v3/covid-19/countries/laos?strict=true",
      requestOptions
    );
    setCovidData(await response.json());
  };

  // console.log("covid data", covidData);
  return (
    <div>
      <div className="flex flex-col items-center mb-20">
        <img
          src={covidData.countryInfo?.flag}
          alt=""
          className="h-12 object-contain mb-3"
        />
        <p className="text-2xl font-bold text-gray-500">{covidData.country}</p>
        <p className="text-xl font-bold text-gray-500">{covidData.continent}</p>
      </div>

      <div className="px-20">
        <p className="text-xl text-gray-500 font-bold boonhome my-3">
          - ສະພາບລວມ
        </p>
        <div className="flex justify-between">
          <CovidCard
            title="ຕິດທັງໝົດ"
            number={covidData.cases}
            color="#069FDB"
          />
          <CovidCard
            title="ກຳລັງປິ່ນປົວ"
            number={covidData.active}
            color="#0a803b"
          />
          <CovidCard
            title="ປົວດີແລ້ວ"
            number={covidData.recovered}
            color="#da8e03"
          />
          <CovidCard
            title="ເສຍຊີວິດ"
            number={covidData.deaths}
            color="#db0606"
          />
        </div>
      </div>

      <div className="px-20 my-20">
        <p className="text-xl text-gray-500 font-bold boonhome my-3">
          - ລາຍງານປະຈຳວັນ{" "}
          {today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear()}
        </p>
        <div className="flex justify-between">
          <CovidCard
            title="ຕິດວັນນີ້"
            number={covidData.todayCases}
            color="#069FDB"
          />
          <CovidCard
            title="ປົວດີວັນນີ້"
            number={covidData.todayRecovered}
            color="#da8e03"
          />
          <CovidCard
            title="ເສຍຊີວິດວັນນີ້"
            number={covidData.todayDeaths}
            color="#db0606"
          />
        </div>
      </div>
    </div>
  );
}

export default LaoCovid;
