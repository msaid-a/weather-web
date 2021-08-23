import React, { useContext } from "react";
import { Container, Text } from "../../Component";
import DailyWheater from "../Reusable/DailyWheater";
import { useGetCurrentLocation } from "../../Services/weather.services";
import moment from "moment";
import MediaQuery from "react-responsive";
import {WheatherContex} from '../../contex/wheateContex'

interface props {
  location: {latitude: number, longtitude: number}
}

const Main: React.FC<props> = (props) => {

  const value = useContext(WheatherContex);
  
  return (
    <Container loading={value.isValidating}>
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
                {value.data?.current.humidity}%
              </Text.Paragraph>
            </Container>
            <Container className="weather-item">
              <Text.Paragraph color="white">Pressure</Text.Paragraph>
              <Text.Paragraph color="white">
                {value.data?.current.pressure}
              </Text.Paragraph>
            </Container>
            <Container className="weather-item">
              <Text.Paragraph color="white">Wind Speed</Text.Paragraph>
              <Text.Paragraph color="white">
                {value.data?.current.wind_speed}
              </Text.Paragraph>
            </Container>

            <Container className="weather-item">
              <Text.Paragraph color="white">Sunrise</Text.Paragraph>
              <Text.Paragraph color="white">
                {value.data?.current.sunrise &&
                  moment(value.data?.current.sunrise * 1000).format("HH:mm")}
              </Text.Paragraph>
            </Container>
            <Container className="weather-item">
              <Text.Paragraph color="white">Sunset</Text.Paragraph>
              <Text.Paragraph color="white">
                {value.data?.current.sunset &&
                  moment(value.data?.current.sunset * 1000).format("HH:mm")}
              </Text.Paragraph>
            </Container>
          </Container>
        </Container>

        <Container className="place-container">
          <Text.Heading h={2} color="white">
            {value.data?.timezone}
          </Text.Heading>
          <Text.Paragraph color="white" className="font-bold">
            {value.data?.lat} - {value.data?.lon}
          </Text.Paragraph>
          <MediaQuery minDeviceWidth={445}>
            <Container className="weather-forecast-item mt-8">
              <Text.Heading h={2} color="white" className="day mr-10">
                {moment(value.data?.current.dt * 1000).format("dddd")}
              </Text.Heading>
              <img
                src={`http://openweathermap.org/img/wn//${value.data?.current.weather[0].icon}@4x.png`}
                alt="weather icon"
              />
              <Text.Heading h={2} color="white" className="temp mr-10">
                {value.data?.current.temp}&#176;C
              </Text.Heading>
            </Container>
          </MediaQuery>
        </Container>
      </Container>
      <DailyWheater daily={value.data?.daily} />
    </Container>
  );
};

export default Main;
