import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap:wrap;
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

const SearchIcon=styled.img`
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

const FoodListContainer=styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
padding:30px;
gap:20px;
justify-content:space-evenly;
`;

const FoodContainer=styled.div`
display:flex;
flex-direction:column;
padding:10px;
width:300px;
box-shadow:0 3px 10px 0 #aaa;
`;


function App() {
  return (
    <Container>
      <Header>
        <AppNameComponent>
          <AppIcon src="/mohinga.png" />
        Burmese Food Finder
          </AppNameComponent>
        <SearchComponent>
          <SearchIcon src="/search-icon.svg" />
          <SearchInput placeholder="search" />
        </SearchComponent>
      </Header>
      <FoodListContainer>
        <FoodContainer>
          <img src="https://prods3.imgix.net/images/articles/2017_03/Non-Feature-Burma-Superstar-Mohinga-Breakfast-Stew.jpg?auto=format%2Ccompress&dpr=2.63&ixjsv=2.2.3&q=38&w=370" />
          <span>
Mohinga
          </span>
          <span>
            ingredients
            </span>
            <span>
            see more recipe
            </span>
        </FoodContainer>
        <FoodContainer>
          <img src="https://prods3.imgix.net/images/articles/2017_03/Non-Feature-Burma-Superstar-Mohinga-Breakfast-Stew.jpg?auto=format%2Ccompress&dpr=2.63&ixjsv=2.2.3&q=38&w=370" />
          <span>
Mohinga
          </span>
          <span>
            ingredients
            </span>
            <span>
            see more recipe
            </span>
        </FoodContainer>
        <FoodContainer>
          <img src="https://prods3.imgix.net/images/articles/2017_03/Non-Feature-Burma-Superstar-Mohinga-Breakfast-Stew.jpg?auto=format%2Ccompress&dpr=2.63&ixjsv=2.2.3&q=38&w=370" />
          <span>
Mohinga
          </span>
          <span>
            ingredients
            </span>
            <span>
            see more recipe
            </span>
        </FoodContainer>
        <FoodContainer>
          <img src="https://prods3.imgix.net/images/articles/2017_03/Non-Feature-Burma-Superstar-Mohinga-Breakfast-Stew.jpg?auto=format%2Ccompress&dpr=2.63&ixjsv=2.2.3&q=38&w=370" />
          <span>
Mohinga
          </span>
          <span>
            ingredients
            </span>
            <span>
            see more recipe
            </span>
        </FoodContainer>
        <FoodContainer>
          <img src="https://prods3.imgix.net/images/articles/2017_03/Non-Feature-Burma-Superstar-Mohinga-Breakfast-Stew.jpg?auto=format%2Ccompress&dpr=2.63&ixjsv=2.2.3&q=38&w=370" />
          <span>
Mohinga
          </span>
          <span>
            ingredients
            </span>
            <span>
            see more recipe
            </span>
        </FoodContainer>
        <FoodContainer>
          <img src="https://prods3.imgix.net/images/articles/2017_03/Non-Feature-Burma-Superstar-Mohinga-Breakfast-Stew.jpg?auto=format%2Ccompress&dpr=2.63&ixjsv=2.2.3&q=38&w=370" />
          <span>
Mohinga
          </span>
          <span>
            ingredients
            </span>
            <span>
            see more recipe
            </span>
        </FoodContainer>
        <FoodContainer>
          <img src="https://prods3.imgix.net/images/articles/2017_03/Non-Feature-Burma-Superstar-Mohinga-Breakfast-Stew.jpg?auto=format%2Ccompress&dpr=2.63&ixjsv=2.2.3&q=38&w=370" />
          <span>
Mohinga
          </span>
          <span>
            ingredients
            </span>
            <span>
            see more recipe
            </span>
        </FoodContainer>
        <FoodContainer>
          <img src="https://prods3.imgix.net/images/articles/2017_03/Non-Feature-Burma-Superstar-Mohinga-Breakfast-Stew.jpg?auto=format%2Ccompress&dpr=2.63&ixjsv=2.2.3&q=38&w=370" />
          <span>
Mohinga
          </span>
          <span>
            ingredients
            </span>
            <span>
            see more recipe
            </span>
        </FoodContainer>
        <FoodContainer>
          <img src="https://prods3.imgix.net/images/articles/2017_03/Non-Feature-Burma-Superstar-Mohinga-Breakfast-Stew.jpg?auto=format%2Ccompress&dpr=2.63&ixjsv=2.2.3&q=38&w=370" />
          <span>
Mohinga
          </span>
          <span>
            ingredients
            </span>
            <span>
            see more recipe
            </span>
        </FoodContainer>
        <FoodContainer>
          <img src="https://prods3.imgix.net/images/articles/2017_03/Non-Feature-Burma-Superstar-Mohinga-Breakfast-Stew.jpg?auto=format%2Ccompress&dpr=2.63&ixjsv=2.2.3&q=38&w=370" />
          <span>
Mohinga
          </span>
          <span>
            ingredients
            </span>
            <span>
            see more recipe
            </span>
        </FoodContainer>
      </FoodListContainer>
    </Container>
  );
}

export default App;
