import '../sass/login.scss';
import splashImage from "../assets/img/splash-image.jpg";
import recTangle from "../assets/img/Rectangle.svg"



function Login() {
 

  return (
    <>
    <section className='background-img-in-login'>
   <img className={"background-image-in-login"} src={splashImage} alt="backgroundimage"/>
<img className={"background-rectangle-in-login"} src={recTangle} alt="backgroundimage"/>

  <form>

    <h2>Log ind</h2>
			<div>
				<label>
					<input type="text" name="username" placeholder="Brugernavn" />
				</label>
			</div>
			<div>
				<label>
					<input type="password" name="password" placeholder="Adgangskode" />
				</label>
			</div>
			<button type="submit">Log ind</button>
		</form>

    </section>  
    </>
  )
}

export default Login