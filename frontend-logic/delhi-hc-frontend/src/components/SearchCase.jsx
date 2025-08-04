import React, { useState } from "react";
import axios from "axios";
import CaseDetails from "./CaseDetails";
import "../Style/SearchCase.css"; // ✅ Import external CSS

function SearchCase() {
    const [caseType, setCaseType] = useState("");
    const [customCaseType, setCustomCaseType] = useState("");
    const [caseNumber, setCaseNumber] = useState("");
    const [filingYear, setFilingYear] = useState("");
    const [loading, setLoading] = useState(false);
    const [caseData, setCaseData] = useState(null);
    const [error, setError] = useState("");

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setCaseData(null);

        const finalCaseType = caseType === "Other" ? customCaseType : caseType;

        try {
            const response = await axios.post("http://localhost:8081/api/cases/fetch", null, {
                params: {
                    caseType: finalCaseType,
                    caseNumber,
                    filingYear,
                },
            });

            if (!response.data || Object.keys(response.data).length === 0) {
                setError("❌ No case details found for this input.");
            } else {
                setCaseData(response.data);
            }
        } catch (err) {
            setError("⚠️ Failed to fetch case details. Please check inputs or server.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="search-container">
            <div className="search-card">
                <h2 className="search-title">Delhi High Court Case Search</h2>
                <form className="search-form" onSubmit={handleSearch}>

                    <label>
                        Case Type:
                        <select value={caseType} onChange={(e) => setCaseType(e.target.value)} required>
                            <option value="">Select Case Type</option>
                            <option value="W.P.(C)">W.P.(C)</option>
                            <option value="CRL.M.C.">CRL.M.C.</option>
                            <option value="CM APPL.">CM APPL.</option>
                            <option value="Other">Other</option>
                        </select>
                    </label>

                    {caseType === "Other" && (
                        <label>
                            Enter Case Type:
                            <input
                                type="text"
                                value={customCaseType}
                                onChange={(e) => setCustomCaseType(e.target.value)}
                                required
                            />
                        </label>
                    )}

                    <label>
                        Case Number:
                        <input type="text" value={caseNumber} onChange={(e) => setCaseNumber(e.target.value)} required />
                    </label>
                    <label>
                        Filing Year:
                        <input type="text" value={filingYear} onChange={(e) => setFilingYear(e.target.value)} required />
                    </label>

                    <button type="submit" className="search-button">
                        {loading ? "Searching..." : "Search"}
                    </button>
                </form>

                {error && <p className="error-text">{error}</p>}

                {caseData && (
                    <div className="case-details-section">
                        <CaseDetails caseData={caseData} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchCase;
