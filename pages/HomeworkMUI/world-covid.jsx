import { Divider, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import CovidCard from "./covid-card";
import CloseIcon from "@mui/icons-material/Close";

function WorldCovid() {
  const [covidData, setCovidData] = useState([]);
  const [today, setToday] = useState(new Date());
  const [covidDataCountry, setCovidDataCountry] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const response = await fetch(
      "https://disease.sh/v3/covid-19/countries",
      requestOptions
    );

    setCovidData(await response.json());
  };

  const clickHandler = (item) => {
    setCovidDataCountry(item);
  };

  return (
    <div className="mx-20">
      {covidDataCountry && (
        <div className="border px-5 pb-5 rounded-xl bg-slate-50 shadow-lg">
          <div className="text-right pt-2">
            <IconButton
              color="error"
              size="small"
              onClick={() => setCovidDataCountry()}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <div className="flex flex-col items-center mb-5">
            <img
              src={covidDataCountry.countryInfo?.flag}
              alt=""
              className="h-12 object-contain mb-3"
            />
            <p className="text-2xl font-bold text-gray-500">
              {covidDataCountry.country}
            </p>
            <p className="text-xl font-bold text-gray-500">
              {covidDataCountry.continent}
            </p>
          </div>
          <div className="flex justify-between">
            <CovidCard
              title="ຕິດທັງໝົດ"
              number={covidDataCountry.cases}
              color="#069FDB"
            />
            <CovidCard
              title="ກຳລັງປິ່ນປົວ"
              number={covidDataCountry.active}
              color="#0a803b"
            />
            <CovidCard
              title="ປົວດີແລ້ວ"
              number={covidDataCountry.recovered}
              color="#da8e03"
            />
            <CovidCard
              title="ເສຍຊີວິດ"
              number={covidDataCountry.deaths}
              color="#db0606"
            />
          </div>
        </div>
      )}
      <Divider sx={{ marginY: "20px" }} />
      <div className="overflow-y-scroll h-96">
        <table className="border w-full">
          <thead className="bg-slate-400 h-16">
            <tr>
              <th>Flag</th>
              <th className="flex-1">Country Name</th>
              <th>Total Cases</th>
              <th>Total Active</th>
              <th>Total Deaths</th>
            </tr>
          </thead>
          <tbody>
            {covidData.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-slate-100 cursor-pointer"
                onClick={() => clickHandler(item)}
              >
                <td className="w-16">
                  <img
                    src={item.countryInfo.flag}
                    alt=""
                    className="w-12 object-contain"
                  />
                </td>
                <td className="flex-1">{item.country}</td>
                <td className="text-right w-32">
                  {item.cases.toLocaleString("en-US")}
                </td>
                <td className="text-right w-32">
                  {item.active.toLocaleString("en-US")}
                </td>
                <td className="text-right w-32">
                  {item.deaths.toLocaleString("en-US")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WorldCovid;
