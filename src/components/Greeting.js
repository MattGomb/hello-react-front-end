import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGreetings } from "../redux/greetings/GreetingsSlice";

function Greeting() {
  const greeting = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetings());
  }, []);

  return <div>{greeting.text}</div>;
}

export default Greeting;