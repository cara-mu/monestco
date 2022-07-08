import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import "../styles/PrivacyPolicy.css";

const useStyles = makeStyles((theme) => ({


    siteContainer: {
        maxWidth: "1146px",
        margin: "auto",
    },

    title: {
        maxWidth: "1146px",
        height: "32px",
        fontFamily: "DM Sans",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "30px",
        lineHeight: "28px",
        color: "#26385A",
        marginTop: "97px",
        marginBottom: "40px"
    },
    subTitle: {
        marginTop: "55px",
        fontSize: "20px",
        lineHeight: "35px",
        color: "#26385A",
        weight: "500"
    },

    text: {
        maxWidth: "1111px",
        font: "DM Sans",
        fontSize: "18px",
        lineHeight: "35px",
    },

    textDivider: {
        height: "16px"
    },

    bolded: {
        weight: "500"
    },

    endDivider: {
        height: "401px"
    }

}));

function PrivacyPolicy() {
    const classes = useStyles();
    return (
        <div className={classes.siteContainer}>
            <div className={classes.title}>
                Privacy Policy
            </div>
            <div className={classes.text}>
                Monest (“we,” “our”, or “us”) recognizes that your business is no one else's. Customers, visitors and users who use www.monest.co (the “site”) will have their privacy protected. To protect your privacy, we follow different principles in accordance with world-wide practices for customer privacy and data protection. This Privacy Policy sets out how we use and protect any information that is collected by us. This includes information collected online through our websites, branded pages on third party platforms (i.e, social networking sites) and through our direct marketing campaigns or other online communications. By accessing this site, using features of this site and submitting information to this site, you are bound by all conditions in our Terms & Conditions and this Privacy Policy.
            </div>

            <div className={classes.subTitle}>
                INFORMATION WE COLLECT
            </div>
            <div className={classes.text}>
                <b className={classes.bolded}> Information you provide:</b> When you register an account, we collect some Personal Data (that is, any information relating to an identified or identifiable natural person), such as your name, title, email address, phone number, billing information and other similar information.
            </div>

            <div className={classes.textDivider} />
            <div className={classes.text}>
                <b className={classes.bolded}>Device Identifiers:</b> When you access the site by or through a device, we may access, collect, monitor and/or remotely store one or more “device identifiers”. A device identifier does not collect or share any personally identifiable information about you but may be used in conjunction with personally identifiable information.
            </div>

            <div className={classes.textDivider} />
            <div className={classes.text}>
                <b className={classes.bolded}>Analytics:</b> When you access our site, we may collect information (either directly or using third party services) using logging and cookies which can sometimes be correlated with Personal Information. We use this information to monitor and analyse use and interest in the Service. See the section on “Service Providers” for more detail in this respect.
            </div>

            <div className={classes.textDivider} />
            <div className={classes.text}>
                <b className={classes.bolded}>Log data:</b> As with most website and technology services delivered over the Internet, our servers automatically collect information when you access or use our site and record it in log files. This log data may include the Internet Protocol (IP) address, the address of the web page visited before using the site, the purchases that you make, the products you viewed, browser type and settings, the date and time the site was accessed, information about browser configuration and plugins, language preferences and cookie data.
            </div>

            <div className={classes.textDivider} />
            <div className={classes.text}>
                <b className={classes.bolded}>Cookie Information:</b> A cookie is a piece of text stored by your web browser, they enable the browser to remember passwords, orders and preferences when visiting a website. We use cookies and similar technologies such as pixel tags and web beacons in our site that help us collect certain usage data about you (such as your preferences and to process shopping cart items), which may become Personal Data due to direct association with you. The site may also include cookies and similar tracking technologies of third parties, which may collect information about you.
            </div>

            <div className={classes.subTitle}>
                USE OF INFORMATION
            </div>
            <div className={classes.text}>
                Monest uses information that we collect for the purpose of fulfilling our contractual obligations to you and/or where you have consented to such usage. Here is a non-exhaustive list of the usage of your
            </div>

            <div className={classes.textDivider} />
            <div className={classes.text}>
                <b className={classes.bolded}>Personal Data. More specifically, we use Personal Data:
                    <br />To provide, update, maintain and protect our site and business.</b> This includes use of Personal Data to support delivery of the site, prevent or address service errors, security or technical issues, analyse and monitor usage, trends and other activities or at your request. We may use your email address or phone number to send you notices (including any notices required by law, in lieu of communication by postal mail). If you correspond with us by email, we may retain the content of your email messages, your email address and our responses.
            </div>

            <div className={classes.textDivider} />
            <div className={classes.text}>
                <b className={classes.bolded}>As required by applicable law, legal process or regulation.</b> We may in certain instances be compelled by law to process your Personal Data in order to comply with a binding order. We will only do so to the extent reasonably required by that order.
            </div>

            <div className={classes.textDivider} />
            <div className={classes.text}>
                <b className={classes.bolded}>To communicate with you by responding to your requests, comments and questions.</b> If you contact us, we may use your Personal Data to respond.
            </div>

            <div className={classes.textDivider} />
            <div className={classes.text}>
                <b className={classes.bolded}>To send emails and other communications.</b> We may send you service, technical and other administrative emails, messages and other types of communications. we may also contact you to inform you about changes in our products, and important notices, such as security and fraud notices.
            </div>

            <div className={classes.textDivider} />
            <div className={classes.text}>
                <b className={classes.bolded}>To investigate and help prevent security issues and abuse.</b>
            </div>

            <div className={classes.textDivider} />
            <div className={classes.text}>
                <b className={classes.bolded}>For marketing purposes.</b> We may also use your contact information to send you marketing messages. If you don’t want to receive these messages, you can opt out by following the instructions in the message.
            </div>

            <div className={classes.subTitle}>
                INFORMATION SHARING AND DISCLOSURE
            </div>
            <div className={classes.text}>
                We do not rent, trade or transfer your personal information with third parties except to provide the services or products requested by you with your permission or under the following circumstances:
            </div>

            <div className={classes.textDivider} />
            <ul className={classes.text}>
                <li>
                    Email service provider or any other third party necessary in order to fulfill an order placed on our site. These third parties are prohibited from using your personal information for promotional purposes.
                </li>
                <li>
                    To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which personal information held by us about our users is among the assets transferred.
                </li>
                <li>
                    We share non-personal information for purposes of better understanding the usage of site by Users and improving on that experience.
                </li>
                <li>
                    We reserve the right to disclose your personal information as required by law: (1) When we believe disclosure is necessary protect our rights or to comply with a legal process; (2) In the event it is necessary to prevent, investigate or take action regarding unlawful, illegal or suspicious activities that violate the Terms of Use or as otherwise required by law.
                </li >
            </ul>

            <div className={classes.text}>
                All information voluntarily shared by you through forums, comments, or blog posts are publicly available and your username is visible by other users. Information voluntarily shared by you to site is not considered personal information and is not subject to this Privacy Policy. We are not responsible for any information you submit that can be read by other users and can be used to send you unsolicited information by other users.
            </div>

            <div className={classes.text}>
                We may from time to time choose to post personal information about a user for promotional or site purposes, prior to posting said information we will obtain the user’s consent via email.
            </div>

            <div className={classes.subTitle}>
                RETENTION OF DATA
            </div>
            <div className={classes.text}>
                Monest will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
            </div>

            <div className={classes.textDivider} />
            <div className={classes.text}>
                We will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer time periods.
            </div>

            <div className={classes.subTitle}>
                TRANSFER OF DATA
            </div>
            <div className={classes.text}>
                Monest is a global business and we may process, transfer and store information about our users on servers located in a number of countries, including Canada. As a result, your personal information may be subject to data protection and other laws that may differ from your country of residence. Your personal information may be disclosed in response to inquiries or requests from government authorities or to respond to judicial processes in the countries in which we operate. By using the our site, or by providing us with any information, you consent to the collection, processing, maintenance and transfer of such information in and to Canada and other applicable territories in which the privacy laws may not be as comprehensive as, or equivalent to, those in the country where you reside and/or are a citizen. You may contact us to obtain information about our policies and practices regarding our transfer of data or use of service providers outside of your country, or to ask questions about the collection, use, disclosure or storage of personal information outside of your country.
            </div>

            <div className={classes.subTitle}>
                CHILDREN'S PRIVACY
            </div>
            <div className={classes.text}>
                Protecting children’s privacy is important to us. We do not direct our services to, nor do we knowingly collect any personal information from, children under the age of thirteen. If we learn that a child under the age of thirteen has provided personally identifiable information through our site, we will use reasonable efforts to remove such information from our files.
            </div>

            <div className={classes.subTitle}>
                PROTECTING YOUR INFORMATION
            </div>
            <div className={classes.text}>
                Monest implements a number of security measures to maintain the security of your personal information. These security measures are implemented both during transmission of personal information and once received. The security of your personal information is important to us. All sensitive information submitted such as credit card information is encrypted using secure layer technology (SSL).
            </div>

            <div className={classes.subTitle}>
                THIRD PARTIES
            </div>
            <div className={classes.text}>
                In some instances the site might contain links to other sites. We are not responsible or liable for activities and content on third party sites. We encourage you to read the privacy statement’s of third party sites. 
            </div>

            <div className={classes.subTitle}>
                CHANGES TO PRIVACY POLICY
            </div>
            <div className={classes.text}>
                Monest may amend or update this Privacy Policy in its sole discretion and without prior notice. Any changes we may make to our Privacy Policy will be posted on this page. Please check back frequently to see any updates or changes to our Privacy Policy. If you do not agree or consent to these updates or changes, do not continue to use our services.
            </div>

            <div className={classes.textDivider} />
            <div className={classes.text}>
                In addition to this Privacy Policy, there may be specific campaigns or promotions which will be governed by additional privacy terms or policies. We encourage you to read these additional terms or policies before participating in any such campaigns or promotions as you will be required to comply with them if you participate. Any additional privacy terms or policies will be made prominently available to you.
            </div>

            <div className={classes.textDivider} />
            <div className={classes.text}>
                This policy was last modified 6/18/2021
            </div>

            <div className={classes.subTitle}>
                CONTACT INFORMATION
            </div>
            <div className={classes.text}>
                If you have any question regarding this Privacy Policy, you can contact us at: 
            </div>
            <div className={classes.endDivider}></div>
        </div>
    );
}

export default PrivacyPolicy