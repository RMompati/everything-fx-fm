export const CardButton = ({btnText, onClicked=(() => {})}) => {
  return (
      <>
        <div className="col-auto btn card shadow text-start m-3" onClick={onClicked}>
          <div className="card-body">
            <h4 className="card-title m-3">{btnText}</h4>
          </div>
        </div>
      </>
  );
}