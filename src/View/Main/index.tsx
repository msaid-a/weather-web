import React, { useState, useEffect } from "react";
import { Container, Text } from "../../Component";
import DailyWheater from "./DailyWheater";
import { useGetCurrentLocation } from "../../Services/weather.services";
import moment from "moment";
import MediaQuery from "react-responsive";

const Main: React.FC = () => {
  const [latitude, setLatitude] = useState<number>(0);
  const [longtitude, setLongtitude] = useState<number>(0);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((success) => {
      setLatitude(success.coords.latitude);
      setLongtitude(success.coords.longitude);
    });
  }, []);

  const {
    data,
    error,
    isValidating: loading,
  } = useGetCurrentLocation(latitude, longtitude);
  console.log(data, "zxczxc");
  return (
    <Container loading={loading}>
      <Container className="current-info">
        <Container className="date-container">
          <Container className="time">{moment().format("HH:mm a")}</Container>
          <Container className="date">
            {moment().format("DD MMM YYYY")}
          </Container>
          <Container className="others">
            <Container className="weather-item">
              <Text.Paragraph color="white">Humidity</Text.Paragraph>
              <Text.Paragraph color="white">
                {data?.current.humidity}%
              </Text.Paragraph>
            </Container>
            <Container className="weather-item">
              <Text.Paragraph color="white">Pressure</Text.Paragraph>
              <Text.Paragraph color="white">
                {data?.current.pressure}
              </Text.Paragraph>
            </Container>
            <Container className="weather-item">
              <Text.Paragraph color="white">Wind Speed</Text.Paragraph>
              <Text.Paragraph color="white">
                {data?.current.wind_speed}
              </Text.Paragraph>
            </Container>

            <Container className="weather-item">
              <Text.Paragraph color="white">Sunrise</Text.Paragraph>
              <Text.Paragraph color="white">
                {data?.current.sunrise &&
                  moment(data?.current.sunrise * 1000).format("HH:mm")}
              </Text.Paragraph>
            </Container>
            <Container className="weather-item">
              <Text.Paragraph color="white">Sunset</Text.Paragraph>
              <Text.Paragraph color="white">
                {data?.current.sunset &&
                  moment(data?.current.sunset * 1000).format("HH:mm")}
              </Text.Paragraph>
            </Container>
          </Container>
        </Container>

        <Container className="place-container">
          <Text.Heading h={2} color="white">
            {data?.timezone}
          </Text.Heading>
          <Text.Paragraph color="white" className="font-bold">
            {data?.lat} - {data?.lon}
          </Text.Paragraph>
          <MediaQuery minDeviceWidth={445}>
            <Container className="weather-forecast-item mt-8">
              <Text.Heading h={2} color="white" className="day mr-10">
                {moment(data?.current.dt * 1000).format("dddd")}
              </Text.Heading>
              <img
                src={`http://openweathermap.org/img/wn//${data?.current.weather[0].icon}@4x.png`}
                alt="weather icon"
              />
              <Text.Heading h={2} color="white" className="temp mr-10">
                {data?.current.temp}&#176;C
              </Text.Heading>
            </Container>
          </MediaQuery>
        </Container>
      </Container>
      <DailyWheater daily={data?.daily} />
    </Container>
  );
};

export default Main;
