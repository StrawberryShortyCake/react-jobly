import "./CompanyCard.css";
/**
 * Purpose: renders a single company
 *
 * Props: { handle, name, description, numEmployees, logoUrl }
 * States: none
 *
 *  CompanyList > CompanyCard
 */
function CompanyCard({ companyData }) {
  return (
    <div className="CompanyCard">
      <h2>{companyData.name}</h2>
      <p>{companyData.description}</p>
    </div>
  );
}
export default CompanyCard;
