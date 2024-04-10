import React from "react";
import Image from "next/image";
import styles from "../styles/About.module.css";
import aboutImg from "../pages/Assets/aboutImg.jpg";
function about() {
  return (
    <div className={styles.about}>
      <h2>About Us</h2>
      <div className={styles.aboutInfo}>
        <div className={styles.aboutLeft}>
          <Image src={aboutImg} className={styles.aboutImg} />
        </div>
        <div className={styles.aboutRight}>
          <h2>Wikipedia</h2>
          <p>
            North point Children’s School Muzaffarpur affiliated to ICSE & ISC
            New Delhi came into existence with the effort of Late Smt. Shibani
            Mitra and her Son the Late Partha Sarathi Mitra with their noble
            mission to provide quality education to the children of Muzaffarpur.
            The students that have passed out from our institution today
            contribute to all walks of life such as medical science, engineering
            research, civil services and numerous other sectors. North Point
            Children’s School has its own premises at Mithanpura Chowk ,
            Muzaffarpur with well-equipped smart classrooms and lab facilities
            viz. (Chemistry, Physics, Biology and Computer labs). With its
            affiliation, the school has been incessantly working and maintaining
            the all-round development of students setting up a milestone
            example.The extraordinary performance of students has ever been the
            centralised force of the school which energises faculties to
            establish a holistic teaching learning environment in the school
            premises; which has built up its students at such lend that they are
            serving not only the society at state level but also at national and
            international level in all walks of life such as, medical science,
            engineering research and development, Civil Services Academic
            sectors etc.Our lush green school campuses give our children a
            natural environment for learning. It promotes physical activities
            and has a positive impact on the child’s future. Communication
            between the school and parents has been “the key” to a good
            relationship.The school regularly takes its students to its
            playground located at Dhiranpatti, Muzaffarpur for games.The school
            regularly takes its students to its playground located at
            Dhiranpatti, Muzaffarpur for games.The extraordinary performance of
            students has ever been the centralised force of the school which
            energises faculties to establish a holistic teaching learning
            environment in the school premises; which has built up its students
            at such lend that they are serving not only the society at state
            level but also at national and international level in all walks of
            life such as, medical science, engineering research and development,
            Civil Services Academic sectors etc.
          </p>
        </div>
      </div>
    </div>
  );
}

export default about;
