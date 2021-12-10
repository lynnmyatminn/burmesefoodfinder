import axios from "axios";
import { lazy, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap:wrap;
  // background-color: #dec49b;

`;

const Header = styled.div`
  color: #e88901;
  background-color: #f9f8f9;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;

const AppNameComponent = styled.div`
display:flex;
align-items:center;
`;

const AppIcon = styled.img`
  width: 120px;
  height: 120px;
`;

const SearchIcon = styled.img`
width:36px;
height:36px;
`;

const SearchComponent = styled.div`
display:flex;
flex-direction:row;
background-color:white;
padding:10px;
border-radius:10px;
width:50%;
`;

const SearchInput = styled.input`
border:none;
outline:none;
margin-left:15px;
font-size:16px;
font-weight:bold;
`;

const FoodListContainer = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
padding:30px;
gap:20px;
justify-content:space-evenly;
`;

const FoodContainer = styled.div`
display:flex;
flex-direction:column;
padding:10px;
width:300px;
box-shadow:0 3px 10px 0 #aaa;
`;


function App() {

  const APP_ID = "a52b4d43";
  const APP_KEY = "e0e5c667605f5e91d8275c973531b80a";

  const [timeoutId, setTimeOutId] = useState();
  const [foodList, setFoodList] = useState([]);

  const fetchAPI = async (searchtext) => {
    const resp = await
      axios.get(`https://api.edamam.com/search?q=${searchtext}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    // .then(function (resp) {
    //   console.log(resp)
    // })
    console.log(resp);
    setFoodList(resp.data.hits);
  }

  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => fetchAPI(event.target.value), 500);
    setTimeOutId(timeout);
  }

  const FoodComponent = ({ food }) => {
    return (
      <FoodContainer>
        <img src={food.image} loading={lazy} />
        <span>
          {food.label}
        </span>
        <span>
          ingredients
        </span>
        <span color="blue" onClick={() => window.open(food.url)}>
          see more recipe
        </span>

      </FoodContainer>
    )
  }

  return (
    <Container>
      <Header>
        <AppNameComponent>
          <AppIcon src="/mohinga.png" />
          Burmese Food Finder
        </AppNameComponent>
        <SearchComponent>
          <SearchIcon src="/search-icon.svg" />
          <SearchInput placeholder="search" onChange={onTextChange} />
        </SearchComponent>
      </Header>
      <FoodListContainer>
        {foodList.length && foodList.map((food) => (
          <FoodComponent food={food.recipe} />
        ))}
      </FoodListContainer>
    </Container>
  );
}

export default App;
