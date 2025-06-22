
import profileimg from '../../assets/IMG20250425140151 (1).jpg'
function Profile(){
    return(
        <section>
            <div>
                <div>
                    <div>
                        <h2>Full-Stack Developer</h2>
                        <h1>Pavan Vasam</h1>
                        <p>
 Experienced mentor specializing in Data Structures and Algorithms (DSA) with Smart Interviews. Eager to apply expertise in DSA
 and web development to real-world projects. Possesses strong skills in mentoring and a strong foundation in web development
 technologies</p>
                    
                    </div>
                    <div>
                      <img src={profileimg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Profile