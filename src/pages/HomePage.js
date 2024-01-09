import {CardButton} from "../components/ui/CardButton";

export const HomePage = () => {
  return (
      <>
        <div className="container-md text-center">
          <div className="row w-100">
            <CardButton btnText="Calculate Pip Value" onClicked={() => { alert("Calculate Pip Value") }} />

            <CardButton btnText="Calculate Profit or Loss" onClicked={() => { alert("Calculate Profit or Loss") }} />

            <CardButton btnText="Calculate Position Size" onClicked={() => { alert("Calculate Position Size") }} />

            <CardButton btnText="Calculate Where to place the Stop Loss" onClicked={() => { alert("Calculate Where to place the Stop Loss") }} />

            <CardButton btnText="Wait... What is a pip?" onClicked={() => { alert("Wait... What is a pip?") }} />

            <CardButton btnText="School of Pipsiology!" onClicked={() => { alert("School of Pipsiology!") }} />
          </div>
        </div>
      </>
  );
}