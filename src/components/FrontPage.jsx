import { description, myName } from "../datas/data";

function FrontPage() {
  return (
    <div>
      <div className="nothing"></div>
      <div className="frontPage">
        <p>{myName}</p>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default FrontPage;
