import staff from '../../data/staff.json';
import SliderCards from '../SliderCards';

function StaffPage() {
  return (
    <section className="pages">
      <div className="container">
        <h2 className="title pages__title">
          Співробітники <br />
          Гоґвортсу
        </h2>
        <SliderCards data={staff} />
      </div>
    </section>
  );
}

export default StaffPage;
