import './../StudentsPage/studentsPage.css';
import students from '../../data/students.json';
import SliderCards from '../SliderCards';

function StudentsPage() {
  return (
    <section className="pages">
      <div className="container">
        <h2 className="title pages__title">Студенти Гоґвортсу</h2>
        <SliderCards data={students} />
      </div>
    </section>
  );
}

export default StudentsPage;
