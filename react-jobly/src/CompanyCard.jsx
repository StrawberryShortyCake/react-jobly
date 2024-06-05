import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  return (
    <div
      className="CompanyCard"
      onClick={() => navigate(`/companies/${companyData.handle}`)}>
      <h2>{companyData.name}</h2>
      <p>{companyData.description}</p>
    </div>
  );
}
export default CompanyCard;
