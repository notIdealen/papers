import AnnualIncomePage from './3_pages/AnnualIncomePage/AnnualIncomePage';
// import AnnualCard from './5_components/AnnualCard/AnnualCard';
import { annualTables } from './99_test_data/data';

function App() {
  localStorage.setItem('annualTable', JSON.stringify(annualTables));

  return (
    <div>
      <AnnualIncomePage/>
    </div>
  );
}

export default App;
