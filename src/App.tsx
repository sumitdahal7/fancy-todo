import Card from "./components/Card";

function App() {
  return (
    <div className="sumitw-flex sumitw-flex-col sumitw-h-screen sumitw-w-screen sumitw-justify-center sumitw-items-center">
      <Card
        title="Skeleton Card"
        descp="This is the description of the card which is very very beautiful card and it is being used for doing skeleton loading"
        withbtn={true}
        btntitle="View More"
      />
    </div>
  );
}

export default App;
