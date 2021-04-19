import React, { useState } from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import "../styles/ModalBody.css";

export default function ModalBody({ handleClose }) {
  const [showCitation, setShowCitation] = useState(false);

  return (
    <div className="model-body">
      <div className="model-body-content">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="model-title">
            UNIQLO was questioned for partaking in direct and indirect use of
            Uyghur workers outside Xinjiang, China
            <CancelIcon onClick={handleClose} className="model-close-icon" />
          </div>
          <div className="model-description">
            <div>
              The Australian Strategic Policy Institute (ASPI) published a
              report in March of 2020 identifying 83 foreign and Chinese
              companies allegedly benefiting from the use of Uyghur workers
              outside of Xinjiang through potentially abusive labour transfer
              programs. The Business and Human Rights Resource Centre had
              invited UNIQLO to respond to this publication.
            </div>        
            <div style={{ fontSize: "14px", marginTop: "1rem" }}>
              <span style={{ fontWeight: "700" }}>Issue Addressed?</span>
              <span style={{ color: "#28a745", marginLeft: "5px" }}>Yes</span>
            </div>
            <div>
              UNIQLO states that they are not associated with the two factories
              linked to UNIQLO in the report. No product of UNIQLO is made in
              Xinjiang. Thus, UNIQLO has confirmed that they have not taken part
              in such allegations.
            </div>
            <div style={{ fontSize: "14px", marginTop: "1rem" }}>
              <span style={{ fontWeight: "700" }}>Responsibility Taken?</span>
              <span style={{ color: "#E94921", marginLeft: "5px" }}>No</span>
            </div>
            <div>
              UNIQLO denied responsibility despite the published report and
              states that they have not learned of any issues regarding the
              Uyghur workers in abusive labour transfer programs.
            </div>
            <div
              className="Fun-Fact"
              style={{ width: "100%", fontWeight: "700" }}
            >
              Citation
              <i
                onClick={() => setShowCitation(!showCitation)}
                style={{ borderColor: "#323232" }}
                className={`Fun-Fact-arrowdown ${showCitation ? "Fun-Fact-arrowdown-rotate" : ""}`}
              ></i>
            </div>
            {showCitation ? (
              <div>
                “Business & Human Rights Resource Centre.” UNIQLO's Response -
                Business & Human Rights Resource Centre,
                www.business-humanrights.org/en/latest-news/uniqlos-response/.
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
