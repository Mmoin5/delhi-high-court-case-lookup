import React, { useState } from "react";
import "../Style/CaseDetails.css"; // ✅ Import CSS

const CaseDetails = ({ caseData }) => {
    if (!caseData) return null;

    // ✅ Negative scenario: No case details found
    if (caseData.parties && caseData.parties.includes("No case details found")) {
        return (
            <div className="case-card">
                <h2 className="case-title">Case Details</h2>
                <p className="error-text">❌ No case details found for this input.</p>
            </div>
        );
    }

    // ✅ Filter out empty/invalid PDFs
    const validPdfs = (caseData.orderPdfs || []).filter(pdf => pdf && pdf.trim() !== "");

    // ✅ Pagination state
    const [page, setPage] = useState(1);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(validPdfs.length / itemsPerPage);

    const startIndex = (page - 1) * itemsPerPage;
    const currentPdfs = validPdfs.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="case-card">
            <h2 className="case-title">Case Details</h2>
            <p><strong>Case Type:</strong> {caseData.caseType}</p>
            <p><strong>Case Number:</strong> {caseData.caseNumber}</p>
            <p><strong>Filing Year:</strong> {caseData.filingYear}</p>
            <p><strong>Filing Date:</strong> {caseData.filingDate || "N/A"}</p>
            <p><strong>Next Hearing Date:</strong> {caseData.nextHearingDate || "N/A"}</p>
            <p><strong>Parties:</strong> {caseData.parties}</p>

            <h3 className="pdf-title">Order PDFs:</h3>
            {currentPdfs.length > 0 ? (
                <div>
                    <ul className="pdf-list">
                        {currentPdfs.map((pdf, index) => (
                            <li key={index} className="pdf-item">
                                <a href={pdf} target="_blank" rel="noopener noreferrer" className="pdf-link">
                                    View PDF {startIndex + index + 1}
                                </a>
                                <button
                                    onClick={() => window.open(pdf, "_blank")}
                                    className="pdf-button"
                                >
                                    Download
                                </button>
                            </li>
                        ))}
                    </ul>

                    {totalPages > 1 && (
                        <div className="pagination">
                            <button
                                onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                                disabled={page === 1}
                            >
                                Previous
                            </button>
                            <span>Page {page} of {totalPages}</span>
                            <button
                                onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={page === totalPages}
                            >
                                Next
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <p>No PDF Available</p>
            )}
        </div>
    );
};

export default CaseDetails;
