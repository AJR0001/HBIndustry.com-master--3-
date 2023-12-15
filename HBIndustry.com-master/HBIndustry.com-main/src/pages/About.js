import "./home.css"
import background from "./Background.png" 
import head from "./head.png"
import logomono from "./logomono.png"
import event1 from "./event1.jpg"
import event2 from "./event2.jpg"
import event3 from "./event3.jpg"

export default function About() {
    return  <div>
        <section class="frontpage" style={{
                        backgroundImage: 'url('+background+')',
                        }}>
                <section class="outside">
                </section>
                <section class="outside">
                
                    <section class="fill">
                        <h1>David Pack Owner and CEO</h1>
                        <img src={head} width="300" height="300" />
                        <section class="content">
                            <h2><b>Accolades</b></h2>
                            <p>Hello  my Pack'd Kitchen! I have been a chef for 7 years now, with a mix of professional and personal experiences. My goal is to bring the restaurant experience to your home, your meal prep, or at your next event! I have helped numerous clients since the opening of Pack'd Kitchen and I hope I can help you too!</p>
                        </section>
                    </section>
                </section>
                </section>
                <section class="outside">
                <section class="middle">
                    <section class="leftbox">
                    <h1>We Do Events</h1>
                    <section class="eventrow">
                    <section class="mpic">
                        <img src={event1} width="250" height="300" />
                    </section>
                    <section class="mpic">
                        <img src={event3} width="250" height="300" />
                    </section>
                    </section>
                    <section class="eventrow">
                    <section class="mpic">
                        <img src={event2} width="600" height="400" />
                    </section>
                </section>
                <p>As well as our other services I am always here to do events. Please reach out to me with a text or email to book me for one of these!</p>
                    </section>
                    <section class="rightbox">
                    <h1>Leave a Review</h1>
                    <p>Coming Soon</p>
                    </section>
                </section>
                </section>
                <section class="foot">
                <section class="eclectic">
                    <img src={logomono} width="200" height="160" />
                <section class="eclecticinfo">
                    <h2>Pack'D Kitchen</h2>
                    <h2>443-244-2095</h2>
                    <h2>packdkitchenllc@gmail.com</h2>
                </section>
                </section>
                <section class="footdesc">
                <section class="center">
                    <h1><b>Contact</b></h1>
                    <h2><b>Scheduler</b> username</h2>
                    <h2><a href="mailto: packdkitchenllc@gmail.com?">Email Me</a></h2>
                </section>
                <section class="center">
                    <h1><b>Social</b></h1>
                    <h2><b>Facebook</b> username</h2>
                    <h2><b>Instagram</b> username</h2>
                </section>
                <section class="center">
                    <h1><b>Associates Links</b></h1>
                    <h2>Dani K <a href="danikgymandwellness.com">Dani K Gym</a></h2>
                    <h2>Site created by <a href="hbindustry.co">HBIndustry</a></h2>
                </section>
                <section class="center">
                    <h1><b>Resources</b></h1>
                    <h2>Images Provided by PACKDKITCHEN</h2>
                    <h2>Graphics Created by <a href="hbindustry.co">HBIndustry</a></h2>   
                </section>
                </section>
                </section>
                </section>
            </div>
}