import React from "react";
import { Container, Text } from "../../Component";
import { daily } from "../../model";
import moment from 'moment'
interface props {
  daily?: daily[];
}

const DailyWheater: React.FC<props> = (props) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  return (
    <Container className="future-forecast">
      <Container className="weather-forecast px-2">
        {props.daily && props.daily.map((val, index) => (
            <Container className="weather-forecast-item">
            <Text.Heading h={6} color="white" className="day">
                {moment(val.dt*1000).format('dddd')}
            </Text.Heading>
            <img
                src={`http://openweathermap.org/img/wn//${val.weather[0].icon}@2x.png`}
                alt="weather icon"
            />
            <Text.Paragraph color="white" className="temp">
                Night - {val.temp.night}&#176;C
            </Text.Paragraph>
            <Text.Paragraph color="white" className="temp">
                Day - {val.temp.day}&#176;C
            </Text.Paragraph>
            </Container>
        ))}
      </Container>
    </Container>
  );
};

export default DailyWheater;
