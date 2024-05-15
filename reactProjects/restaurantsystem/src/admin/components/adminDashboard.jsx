
export default function AdminDashboard() {

  return (
    <>
      <div className="dashboard pl-5p">

        <div className=" d-flex pt-3 m-3">
          <i className='fa-solid fa-palette fa-2x'></i>
          <h4 className="m-2">Dashboard</h4>
        </div>

        <div className="main-content">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="sale m-4 pt-3 ">
                  <p style={{fontSize: "20px;"}}>Total Sale amount</p>
                  <p style={{color: "blue;"}}>+ 0%</p>
                  <p style={{fontSize: "20px;"}}>65.00$</p>
                  <p style={{fontsize: "20px;"}}>0.00$ Last month</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="sale m-4 pt-3">
                  <p style={{fontSize: "20px;"}}>Total Sale amount</p>
                  <p style={{color: "blue;"}}>+ 0%</p>
                  <p style={{fontsize: "20px;"}}>41.00$</p>
                  <p style={{fontsize: "20px;"}}>0.00$ Last month</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="sale m-4 pt-3">
                  <p style={{fontsize: "20px;"}}>Total Sale amount</p>
                  <p style={{color: "blue;"}}>+ 0%</p>
                  <p style={{fontsize: "20px;"}}>0.00$</p>
                  <p style={{fontsize: "20px;"}}>0.00$ Last month</p>
                </div>
              </div>
            </div>
            <div className="row">

              <div className="col-md-4">
                <div className="sale m-4 pt-3">
                  <p style={{fontsize: "20px;"}}>Total Sale amount</p>
                  <p style={{color: "blue;"}}>+ 0%</p>
                  <p style={{fontsize: "20px;"}}>24.00$</p>
                  <p style={{fontsize: "20px;"}}>0.00$ Last month</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="sale m-4 pt-3">
                  <p style={{fontsize: "20px;"}}>Total Sale amount</p>
                  <p style={{color: "blue;"}}>+ 0%</p>
                  <p style={{fontsize: "20px;"}}>11.00$</p>
                  <p style={{fontsize: "20px;"}}>0.00$ Last month</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="sale m-4 pt-3">
                  <p style={{fontsize: "20px;"}}>Total Sale amount</p>
                  <p style={{color: "blue;"}}>+ 0%</p>
                  <p style={{fontsize: "20px;"}}>76.05$</p>
                  <p style={{fontsize: "20px;"}}>0.00$ Last month</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="graph-content m-5 px-3">
          <h1 className="m-2"> Annual Graph View</h1>
          <div className="chart-container">
            <canvas id="acquisitions"></canvas>
          </div>
        </div>

      </div>
    </>
  );
}