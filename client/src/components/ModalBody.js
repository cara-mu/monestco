import React from 'react'

import '../styles/ModalBody.css';

export default function ModalBody() {
    return (
        <div>
            <div className="row modal_body_header mb-3">
            UNIQLO was questioned for partaking in direct and <br/> 
            indirect use of Uyghur workers outside Xinjiang, China
            </div>
            <div>
                <p className="paragraph_text">The Australian Strategic Policy Institute (ASPI) published a report in March of 2020 identifying 83 foreign and Chinese companies allegedly benefiting from the use of Uyghur workers outside of Xinjiang through potentially abusive labour transfer programs. The Business and Human Rights Resource Centre had invited UNIQLO to respond to this publication.</p>
                <p className="paragraph_header">Responsibility Taken? NO</p>
                <p className="paragraph_text">UNIQLO denied responsibility despite the published report and states that they have not learned of any issues regarding the Uyghur workers in abusive labour transfer programs.</p>
                <p className="paragraph_header">Issue Addressed? YES</p>
                <p className="paragraph_text">UNIQLO states that they are not associated with the two factories linked to UNIQLO in the report. No product of UNIQLO is made in Xinjiang. Thus, UNIQLO has confirmed that they have not taken part in such allegations.</p>
            </div>
        </div>
    )
}
