function Home(){
  return (
    <>
    <div className="card text-center" id="landing">
      <div className="card-header" id="title">
        <h5 className="card-title">Welcome to BadBank!</h5>
        {/* {JSON.stringify(ctx)} */}
      </div>
      <div className="card-body">
        <p className="card-text" id="bodytxt">We offer great banking services! Secured deposits with convenient access!</p>
        <p>Hours of operation: Mon-Fri:	9:00AM - 5:00PM and Sat:	9:00AM - 1:00PM ---- Tel: 800-888-8888</p>
        <Link to="/login" className="btn btn-primary"><b>Get Started!</b></Link>
      </div>
      </div>
      <div className="card-footer text-muted" style={{textAlign: 'center'}}>@2023 BadBank</div>

      <div>
         <img src="bank.png" style={{padding: '10px'}}></img>
      </div>


        </>
);
}