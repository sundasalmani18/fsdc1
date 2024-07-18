

export default  function Nav(){
    return(
   <>
  <ul className="nav justify-content-end">
  <li className="nav-item">
    <a className="nav-link active" href="#">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Category</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Register</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" href="#">Login</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" href="#">Cart</a>
  </li>
</ul>
   </>
    );
}