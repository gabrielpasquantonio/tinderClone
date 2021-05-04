import { Unsubscribe } from "@material-ui/icons";
import React, { useState,useEffect } from "react";
import TinderCard from "react-tinder-card";
import database from "./firebase";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([]);

  // useEffect is a piece of code which runs based on a condition
  //this is where the code runs
  useEffect(() => {
  

    const unsubscribe = database
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      ); 
      //selecting people from firebase collection, get into the data from firebase and map through every person on it and return its keys (name,url) on setPeople


return () => {
  //this is cleanup...
  //good practice to avoid app to crash due to high list amount
  unsubscribe()
};

    // if the array bellow is blank, this will run ONCE when the component loads, and will  never load  again
    // as we have people in there, every time we swipe people will change [people]
    // if we want to upadate every time some one send a text, if we had a var mesage we would just place it hter [message]
  }, []);

  //BAD
  //declaring a variable in React, same as typing in const people = []
  //people.push('sonny','qazi')

  //GOD(Push to an array in React)
  //setPeople([...people, 'sonny','qazi'])

  return (
    <div>
     

      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            // always gives key in React, allow react to officially re-render a list; makes your app super fast
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
