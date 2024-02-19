import './Resume.css'

export default function Myinfo(props) {
    return (
        <div className="mydiv">
            <header className="header">
                <h1> {props.name}</h1>
                <h1 >{props.desgination}</h1>

                <table className='table'>
                    <tr>
                        <td><h5>Personal Info</h5></td>
                    </tr>
                    <tr>
                        <td><p> address:abc</p></td>
                    </tr>
                    <tr>
                        <td> <p> phone No:12222</p></td>
                    </tr>

                    <tr>
                        <td><h5>Education</h5></td>
                    </tr>

                    <tr>
                        <td><p> Intermediate :ABC Girls College</p></td>
                    </tr>

                    <tr>
                        <td> <p> Bachalor:B.E(Software Engineering)</p></td>
                    </tr>
                    <tr>
                        <td><h5>Skills</h5></td>
                    </tr>
                    <tr>
                        <td><p> Core Java Concepts</p></td>
                    </tr>
                    <tr>
                        <td>  <p> Core PhP Concepts </p></td>
                    </tr>
                    <tr>
                        <td><p>WordPress </p></td>
                    </tr>
                    <tr> 
                        <td> <p> Htmml </p></td>
                    </tr>
                    <tr>
                        <td> <p> Css </p></td>
                        </tr>
       <tr>
        <td> <p> Javascript </p></td>
        </tr>
                    <tr> 
                        <td><p> Learn js Framework and advance topics </p></td>
                        </tr>
                </table>

            </header>
        </div>
    );
}
 