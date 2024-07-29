import styles from "./About.module.css";
import myPhoto from "./me.jpg";

function About() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.mainContent}>
          <div className={styles.aboutMeContainer}>
            <h2 className={styles.myProfession}>
              Front-End and Software Developer
            </h2>
            <h1 className={styles.myName}>Hloba Artyom</h1>
            <p className={styles.aboutMe}>
              my-nam Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis.{" "}
            </p>
          </div>

          <div className={styles.projectsContainer}>
            <h3 className={styles.mainContactTitle}>Projects</h3>

            <ol className={styles.projectsList}>
              <li className={styles.projectsItem}>
                <a
                  href="https://hellen.p.goit.global/"
                  className={styles.projectsItemLink}
                >
                  https://hellen.p.goit.global/
                </a>
                <span className={styles.projectItemDescr}>
                  ..........................[ HTML5, CSS3 ]
                </span>
              </li>
              <li className={styles.projectsItem}>
                <a
                  href="https://cryptohub.p.goit.global/"
                  className={styles.projectsItemLink}
                >
                  https://cryptohub.p.goit.global/
                </a>
                <span className={styles.projectItemDescr}>
                  ................[ JavaScript ]
                </span>
              </li>
              <li className={styles.projectsItem}>
                <a
                  href=" https://kidslike.p.goit.global/"
                  className={styles.projectsItemLink}
                >
                  https://kidslike.p.goit.global/
                </a>
                <span className={styles.projectItemDescr}>
                  ......................[ React.js, Node.js ]
                </span>
              </li>
            </ol>
          </div>

          <div className={styles.workExperienceContainer}>
            <h3 className={styles.mainContactTitle}>Work Experience</h3>

            <div className={styles.workExperiencePlace}>
              <h4 className={styles.workExperiencePosition}>
                Front-End Developer{" "}
                <span className={styles.workExperienceCompany}>Freelance</span>
              </h4>
              <p className={styles.workPeriod}>
                September 2019 - up to now | Country
              </p>

              <ul className={styles.workDutiesList}>
                <li className={styles.workDuties}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </li>
                <li className={styles.workDuties}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li className={styles.workDuties}>
                  Risus commodo viverra maecenas.
                </li>
                <li className={styles.workDuties}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </li>
              </ul>
            </div>

            <div className={styles.workExperiencePlace}>
              <h4 className={styles.workExperiencePosition}>
                Manager{" "}
                <span className={styles.workExperienceCompany}>
                  Banderogusak & Co.
                </span>
              </h4>
              <p className={styles.workPeriod}>
                March 2015 - October 2018 | Country
              </p>
              <ul className={styles.workDutiesList}>
                <li className={styles.workDuties}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod labore et dolore magna aliqua.
                </li>
                <li className={styles.workDuties}>
                  Quis ipsum suspendisse ultrices gravida.
                </li>
                <li className={styles.workDuties}>
                  Risus commodo viverra maecenas.
                </li>
              </ul>
            </div>

            <div className={styles.workExperiencePlace}>
              <h4 className={styles.workExperiencePosition}>
                Manager{" "}
                <span className={styles.workExperienceCompany}>
                  BestUA Corp.
                </span>
              </h4>
              <p className={styles.workPeriod}>
                June 2014 - February 2015 | Country
              </p>
              <ul className={styles.workDutiesList}>
                <li className={styles.workDuties}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li className={styles.workDuties}>
                  Quis ipsum suspendisse ultrices gravida.
                </li>
                <li className={styles.workDuties}>
                  Risus commodo viverra maecenas.
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.workExperiencePlace}>
            <h3 className={styles.mainContactTitle}>Education</h3>
            <h4 className={styles.myUniversity}>
              Zaporizhzhya National University
            </h4>
            <h5 className={styles.profession}>Software Developer</h5>
            <p className={styles.workPeriod}>
              September 2009 - June 2014 | Ukraine
            </p>
          </div>
        </div>

        <aside className={styles.sideBar}>
          <img
            src={myPhoto}
            alt="my-photo"
            width="350"
            className={styles.myPhoto}
          />

          <div className={styles.contactsContainer}>
            <h3 className={styles.sidebarTitle}>Contacts</h3>

            <p className={styles.contactsItem}>
              <span className={styles.contactsType}>C:</span>
              <a href="tel:+380683833393" className={styles.contactsNumber}>
                +380683833393
              </a>
            </p>
            <p className={styles.contactsItem}>
              <span className={styles.contactsType}>E:</span>
              <a
                href="mailto:hlobartyom@gmail.com"
                className={styles.contactsMail}
              >
                hlobartyom
              </a>
            </p>
          </div>

          <div className={styles.techContainer}>
            <h3 className={styles.sidebarTitle}>Tech Skills</h3>

            <ul className={styles.skillsList}>
              <li className={styles.skillsListItem}>
                <span className={styles.skillsListText}>HTML5</span>
              </li>
              <li className={styles.skillsListItem}>
                <span className={styles.skillsListText}>CSS3</span>
              </li>
              <li className={styles.skillsListItem}>
                <span className={styles.skillsListText}>GIT</span>
              </li>
              <li className={styles.skillsListItem}>
                <span className={styles.skillsListText}>WebPack</span>
              </li>
              <li className={styles.skillsListItem}>
                <span className={styles.skillsListText}>JavaScript</span>
              </li>
              <li className={styles.skillsListItem}>
                <span className={styles.skillsListText}>React.js</span>
              </li>
              <li className={styles.skillsListItem}>
                <span className={styles.skillsListText}>Node.js</span>
              </li>
            </ul>
          </div>

          <div className={styles.softContainer}>
            <h3 className={styles.sidebarTitle}>Soft Skills</h3>

            <ul className={styles.softList}>
              <li className={styles.softListItem}>
                <span className={styles.softListText}>Scrum</span>
              </li>
              <li className={styles.softListItem}>
                <span className={styles.softListText}>Agile</span>
              </li>
              <li className={styles.softListItem}>
                <span className={styles.softListText}>GTD</span>
              </li>
              <li className={styles.softListItem}>
                <span className={styles.softListText}>Teamwork</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}

export default About;
