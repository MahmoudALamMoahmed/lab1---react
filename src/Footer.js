import "./App.css";
function Footer() {
  return (
    <>
      <div className="Footer d-flex justify-content-around flex-wrap m-1">
        <div className="text-center">
          <p className="">Get Get</p>
        </div>
        <div className="">
          <button className="btn btn-dark ms-5">More</button>
        </div>
        <div className="icons ms-5">
          <div className="col">
            <div className="text-center col-6">
              <i class="bi bi-facebook ms-2"></i>
              <i class="bi bi-twitter ms-2"></i>
            </div>
            <p className="pe-5 ">CopyRight</p>
          </div>
        </div>
        ;
      </div>
    </>
  );
}
export default Footer;
