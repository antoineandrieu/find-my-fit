import React, { FC } from 'react';

import styled from 'styled-components';
import CloseButton from './CloseButton';
import { RouteContext } from '../context/RouteContext';

const StyledPrivacyPage = styled.div`
    background: ${(props) => props.theme.layoutBackgroundColor};
    height: 100%;
    display: grid;
    overflow: auto;

    .header {
        text-align: left;
        align-items: center;
        display: grid;
        grid-template-columns: 85% 15%;
    }

    .privacy-text {
        display: flex;
        flex-direction: column;
    }

    .tou-title {
        margin-top: 5vh;
    }

    .privacy-close-button {
        cursor: pointer;
    }

    ol {
        list-style-type: lower-latin;
    }

    @media only screen and (max-width: 420px) {
        grid-template-rows: 10% 90%;
        .header {
            grid-template-columns: 85% 15%;
            border-bottom: 1px solid ${(props) => props.theme.borderColor};

            .privacy-close-button {
                border-left: 1px solid ${(props) => props.theme.borderColor};

                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
            }
        }
        .privacy-text {
            padding: 1vmin 3vmin;
        }

        .header > h1 {
            margin-left: 3vmin;
        }
    }
    @media only screen and (min-width: 421px) {
        grid-template-rows: 10% 90%;
        .header {
            grid-template-columns: 85% 15%;

            .privacy-close-button {
                border: 1px solid ${(props) => props.theme.borderColor};
                border-radius: 4px;
                width: 80%;
                height: 80%;
                margin: auto;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
        .header > h1 {
            margin-left: 15vmin;
        }
        .privacy-text {
            padding: 5vmin 15vmin;
        }
        .tou-text {
            padding: 5vmin 15vmin;
        }
    }
`;
export const PrivacyPage: FC = () => {
    const routeContext = React.useContext(RouteContext);
    return (
        <StyledPrivacyPage>
            <div className="header">
                <h1>PRIVACY POLICY & TERMS OF USE</h1>
                <div
                    className="privacy-close-button"
                    onClick={routeContext.goBack}
                >
                    <CloseButton />
                </div>
            </div>
            <div className="privacy-text">
                <h1>SCIRCULA PRIVACY POLICY</h1>
                <div>
                    <p>
                        SCIRCULA PRIVACY POLICY SCIRCULA B.V (“SCIRCULA” “we,”
                        “our” or “us”) is committed to protecting the privacy of
                        Users of the SCIRCULA Application (“the Application”).
                        We strictly abide by privacy laws and regulations,
                        including the European General Data Protection
                        Regulation (EU 2016/679) and the laws applicable in the
                        various countries in which we operate.
                    </p>
                    <p>
                        Please read this Privacy Policy carefully to understand
                        our policies and practices regarding your information
                        and how we will treat it. By using or accessing the
                        Application or any of our services, you agree to be
                        bound by this Privacy Policy.{' '}
                    </p>
                    <p>
                        Remember that your use of the Application is at all
                        times subject to our Terms of Use, which incorporates
                        this Privacy Policy. Any terms used in this Privacy
                        Policy shall have the definitions given to them in the
                        Terms of Use.
                    </p>
                </div>
                <div>
                    <h2>
                        Our Privacy principles
                        <p>
                            In protecting your privacy, we shall be guided by
                            the following principles:
                        </p>
                    </h2>
                    <p>
                        <ol>
                            <li>
                                We only collect personal information that is
                                necessary in relation to our provision of the
                                Services under the Application;
                            </li>
                            <li>
                                We strive to maintain the highest standards of
                                transparency regarding our collection and
                                processing of your personal information;
                            </li>
                            <li>
                                We only use information for the purposes
                                specified in this Privacy policy;
                            </li>
                            <li>
                                We strive to secure personal information about
                                you.
                            </li>
                        </ol>
                    </p>
                </div>
                <div>
                    <h2>
                        Information we collect about you and how we collect it
                    </h2>
                    <p>
                        When you use the Application without creating a SCIRCULA
                        profile, you are likely to provide us with your personal
                        information, namely your body measurements; Bust, Waist,
                        Hips and Thigh. When you create a SCIRCULA profile on
                        our Application, you are also likely to provide us with
                        additional personal information, including your email
                        address and/or mobile number. In cases where you contact
                        us, your name and other information relating to the
                        Services may be collected. In addition, personal
                        information may be collected automatically when you use
                        the Application on our partner ecommerce sites. This
                        information could include your preferences such as
                        garment sizes and styles. The sources for such
                        information include, without limitation, service
                        analytics and server logs.
                    </p>
                </div>
                <div>
                    <h2>
                        Use of personal information We use the personal
                        information
                    </h2>
                    <p>
                        We collect about you or that you provide to us to:{' '}
                        <ol>
                            <li>
                                To provide you with accurate recommendations on
                                garment size and fit;
                            </li>
                            <li>
                                To provide support and assistance in relation to
                                the Services;
                            </li>
                            <li>To communicate with you from time to time; </li>
                            <li>
                                To assist our partner ecommerce sites improve
                                their respective garment designs, production
                                processes and services;
                            </li>
                            <li>
                                To diagnose or fix technology problems in
                                relation to the Application;
                            </li>
                            <li>
                                To automatically update the SCIRCULA Application
                                on your device; and
                            </li>
                            <li>
                                To personalize and optimize your experience as
                                part of our provision of the Services.
                            </li>
                        </ol>
                    </p>
                </div>
                <div>
                    <h2>Communications</h2>
                    <p>
                        By creating a SCIRCULA profile on our application, you
                        authorize us to send you communications through the
                        email address or mobile number you provide. You may
                        unsubscribe from our communications by sending us an
                        email through admin@scircula.com or by clicking the
                        “unsubscribe” option at the bottom of our communications
                        to you.
                    </p>
                </div>
                <div>
                    <h2>Sharing of information</h2>
                    <p>
                        We may share your information with our trusted third
                        party providers who may process personal information on
                        our behalf. These third parties include companies that
                        provide us with encryption services. Although we have
                        been carefully vetted these third parties, we may not be
                        responsible or liable for any of their acts or
                        omissions. Additionally, SCIRCULA may share your
                        personal information pursuant to any governmental, court
                        and law enforcement requests under any law or
                        regulation.
                    </p>
                </div>
                <div>
                    <h2>Children </h2>
                    <p>
                        Both the Application and the Services are not intended
                        for persons who have not attained the age of majority.
                        Accordingly, SCIRCULA does not knowingly collect
                        personal information from children. In case we learn
                        that we have collected personal information relating to
                        a child, we shall immediately delete such information
                        from our databases.
                    </p>
                </div>
                <div>
                    <h2>Storage and security of information </h2>
                    <p>
                        We use commercially reasonable safeguards to help keep
                        the information collected through the Application secure
                        and we also take reasonable steps such as encryption of
                        personal information to ensure that the personal
                        information is processed pseudonymously and in a way
                        that is not personally identifiable to Users.{' '}
                    </p>
                </div>
                <div>
                    <h2>Retention of information </h2>
                    <p>
                        We shall retain information collected for a reasonable
                        time frame, which will vary depending on the nature of
                        the information and whether the information may be
                        needed for future legitimate use. Immediately upon
                        deletion of your SCIRCULA profile on our Application, we
                        shall delete all your personal information. Similarly,
                        when your personal Information is no longer needed for
                        the purpose for which it was obtained, we will take
                        reasonable steps to delete or destroy it.
                    </p>
                </div>
                <div>
                    <h2>Your control over personal information </h2>
                    <p>
                        You may at any time request for correction or deletion
                        of your personal information by contacting us at
                        admin@scircula.com.
                    </p>
                </div>
                <div>
                    <h2>Changes to the Privacy Policy </h2>
                    <p>
                        We may update this privacy policy from time to time.
                        Your continued use of the Application after we make any
                        changes is deemed to be acceptance of those changes.
                        Therefore, please check the Privacy Policy periodically
                        for updates.
                    </p>
                </div>
                <div>
                    <h2>Contact us </h2>
                    <p>
                        If you have any questions or comments regarding this
                        Privacy Policy, please contact us at admin@scircula.com.
                    </p>
                </div>
                <div>
                    <p>
                        Effective date of the Privacy Policy: 29th day of May
                        2020
                    </p>
                    <p>Last updated on: 29th day of May 2020</p>
                </div>
                <h1 className="tou-title">SCIRCULA TERMS OF USE</h1>

                <div>
                    <p>
                        These Terms of Use constitute a legal agreement between
                        you (“the User” “you” or “your”) and SCIRCULA B.V
                        (“SCIRCULA” “we”, “our” or “us”) concerning your access
                        to and use of our online Web and Mobile Application,
                        SCIRCULA (“SCIRCULA” “we”, “our” or “us”) concerning
                        your access to and use of our online Web and Mobile
                        Application, SCIRCULA (the Application”) and the
                        Services.
                    </p>
                    <p>
                        By accessing or using the Application or the content
                        provided on or through the Application, you agree to
                        follow and be bound by these Terms of Use and our
                        Privacy Policy. Therefore, please read the Terms of Use
                        carefully before signing up or accessing the Application
                        or the Services.
                    </p>
                </div>
                <div>
                    <h2>Definitions</h2>
                    <p>
                        In these Terms of Use, the following terms shall have
                        the following meanings, except where the context
                        otherwise requires:
                    </p>
                    <p>
                        <b>“Account”</b> means the user account created by Users
                        of the Application;
                    </p>
                    <p>
                        <b>“Content”</b> means data or information accessed
                        through the Application;
                    </p>
                    <p>
                        <b>“Intellectual Property Rights”</b> includes (i)
                        copyrights and copyright applications, (ii) trademarks,
                        service marks, trade names, and applications or
                        registrations for any of the foregoing in any country;
                        and (iii) patents, patent applications, continuations,
                        reexaminations, reissues, continuations-in-part, and
                        foreign equivalents of the foregoing, in any country;
                    </p>
                    <p>
                        <b>“Privacy Policy”</b> means the policy accessible on
                        our Application, which details how we treat personal
                        data of Users;
                    </p>
                    <p>
                        <b>“Users”</b> means users of the Application; and
                    </p>
                    <p>
                        <b>“Services”</b>means the fitting services provided
                        through the Application.
                    </p>
                </div>

                <div>
                    <h2>About SCIRCULA</h2>
                    <p>
                        SCIRCULA is an online Web and Mobile Application that
                        helps Users to find their right size and fit when buying
                        garments online. This solution has been created to
                        remove sizing guesswork and the friction in online
                        shopping. You acknowledge, agree, and understand that
                        SCIRCULA does not sell garments or other goods but works
                        with partner ecommerce sites to ensure that they are
                        able to offer the correct sizes of garments to their
                        (ecommerce Application s’) customers. Accordingly,
                        SCIRCULA shall not be a party to the relationship or any
                        dealings between its ecommerce Application s and their
                        customers.
                    </p>
                </div>
                <div>
                    <h2>Access to SCIRCULA Services</h2>
                    <p>
                        The SCIRCULA Application will be accessible to Users via
                        a plug-in Application Programming Interface (API).
                        Therefore, Users may access the SCIRCULA Application
                        upon clicking the “Find My Fit” or “Find My Size”
                        buttons displayed on the homepages, product pages or
                        check-out pages of our partner ecommerce sites.
                        Thereupon, Users will be required to provide their body
                        measurements namely, Bust, Waist, Hips and Thigh sizes.
                    </p>
                    <p>
                        To access more personalized services, Users may opt to
                        create a SCIRCULA profile account/profile using either
                        their email address or mobile number, and will be
                        required to create a password for their account/profile.
                    </p>
                    <p>
                        We reserve the right to restrict any User’s access to
                        SCIRCULA services, temporarily or permanently in the
                        event:
                        <ol>
                            <li>
                                You breach these Terms of Use or other
                                referenced policies;
                            </li>
                            <li>
                                We are unable to verify or authenticate any
                                information you provide to us; or
                            </li>
                            <li>
                                We believe that your actions may cause any loss
                                or liability to us, other Users or our partner
                                ecommerce sites.
                            </li>
                        </ol>
                    </p>
                    <h2>Use of the Application </h2>
                    <p>
                        SCIRCULA hereby grants you a non-exclusive,
                        non-transferable, non-sublicensable, personal, limited
                        license to access, view and use the Application and the
                        content therein, subject to these Terms of Use and our
                        Privacy Policy.
                    </p>
                    <p>
                        Users agree and understand that SCIRCULA’s said licence
                        does not constitute a transfer of title to the
                        Application. As such, Users are strictly prohibited from
                        reverse engineering, modifying, editing, changing,
                        publishing, distributing, or reproducing the Application
                        and its contents without SCIRCULA’s prior written
                        consent.
                    </p>
                </div>
                <div>
                    <h2>Prohibitions</h2>
                    <p>
                        In using the Application, Users will not attempt to or
                        otherwise do any of the following:
                        <ol>
                            <li>
                                Engage in any acts of fraud or
                                misrepresentation;
                            </li>
                            <li>
                                Provide instructional information about illegal
                                activities or encourage criminal conduct,
                                conduct that would give rise to civil liability,
                                or that would otherwise violate any applicable
                                local, state, national, or international law;
                            </li>
                            <li>
                                Interfere with the operations of the Application
                                ;
                            </li>
                            <li>
                                Infringe or violate the rights of SCIRCULA or
                                any other person, including intellectual
                                property rights;
                            </li>
                            <li>
                                Distribute any computer viruses, worms, Trojan
                                horses or other elements destructive to the
                                Application ; or
                            </li>
                            <li>
                                Harvest or otherwise collect information about
                                Users, including email addresses, without their
                                consent.
                            </li>
                        </ol>
                    </p>
                </div>
                <div>
                    <h2>Intellectual property </h2>
                    <p>
                        You acknowledge and agree that the Application is
                        subject to intellectual property. Your use of the
                        Application and the Services must not violate or limit
                        any of SCIRCULA’s Intellectual Property rights.
                    </p>
                </div>
                <div>
                    <h2>Third Party content</h2>
                    <p>
                        It is hereby agreed and understood that SCIRCULA is not
                        responsible for the content in any third party
                        Application s linked to the Application. Selected third
                        party Application s have been linked to the Application
                        for the convenience of Users and as such, Users’ access
                        to third party Application s shall be at the User’s own
                        risk.
                    </p>
                </div>
                <div>
                    <h2>Indemnity; Limitation of liability</h2>
                    <p>
                        The Application and the Services are provided to you on
                        an “AS IS” and “AS AVAILABLE” basis, and, to the extent
                        permitted by applicable law, we exclude all
                        representations or warranties of any kind, express or
                        implied including, but not limited to, implied
                        warranties of merchantability, satisfactory quality,
                        fitness for a particular purpose and non-infringement.
                        Use of the Application shall therefore be at the sole
                        risk of Users. In addition, we make no warranty or
                        representations and disclaim all responsibility and
                        liability for the following:
                        <ol>
                            <li>Incorrect or inaccurate information; </li>
                            <li>
                                Statements or conduct, physical or otherwise, of
                                any third parties;
                            </li>
                            <li>
                                Availability of the Application on an
                                uninterrupted, secure, or error-free basis; and
                            </li>
                            <li>
                                any indirect, special, incidental or
                                consequential damages that may be incurred by
                                you. Users shall indemnify, defend, and hold
                                harmless SCIRCULA and its affiliates,
                                representatives and agents for all claims and
                                liabilities arising out of the use of the
                                Application and the Services.
                            </li>
                        </ol>
                    </p>
                </div>
                <div>
                    <h2>SCIRCULA Privacy Policy </h2>
                    <p>
                        Any information submitted to us, including personal
                        information, through or in connection with the
                        Application shall be governed by our Privacy Policy,
                        which sets out, among other things, our data collection,
                        retention, use and disclosure practices. Please refer to
                        the Privacy Policy, named “Privacy” which is located in
                        the footer of the Application.
                    </p>
                </div>
                <div>
                    <h2>Governing law and jurisdiction </h2>
                    <p>
                        These Terms of Use shall be governed by and construed in
                        accordance with the laws of the Netherlands. Disputes
                        arising in connection with these Terms of Use shall be
                        subject to the exclusive jurisdiction of the courts in
                        the Netherlands.
                    </p>
                    <div>
                        <h2>Miscellaneous provisions </h2>
                        <h3>Relationship with SCIRCULA</h3>
                        Nothing contained in these Terms of Use will be
                        construed to create the relationship of principal and
                        agent, employer and employee, partners or joint ventures
                        with SCIRCULA under any law or regulation.
                        <h3>Severability</h3>
                        <p>
                            If any provision of these Terms of Use is or becomes
                            invalid, illegal or unenforceable in any respect, it
                            shall be ineffective to the extent of such
                            invalidity, illegality or unenforceability and the
                            remaining provisions of this Agreement shall remain
                            in effect.
                        </p>
                        <h3>Amendment</h3>
                        <p>
                            SCIRCULA reserves the right to modify or replace
                            these Terms of Use at any time. If a revision is
                            material we will try to provide at least 30 days’
                            notice prior to any new terms taking effect. Your
                            continued use of or access to the Application
                            following the posting of any changes to these Terms
                            of Use Service constitutes acceptance of those
                            changes.
                        </p>
                        <h3>Headings</h3>
                        <p>
                            The headings in these Terms of Use are included for
                            convenience only and shall not affect the
                            interpretation or construction of the Terms of Use.
                        </p>
                        <h3>Entire Agreement</h3>
                        <p>
                            These Terms of Use, the Privacy Policy and any other
                            reference policies constitute the entire agreement
                            between SCIRCULA and you and supersede any previous
                            oral, written or electronic communications or
                            documents with respect to the Application and the
                            Services.
                        </p>
                        <h2>Contact us</h2>
                        <p>
                            If you have any concerns or questions regarding
                            these Terms of Use, please contact us at
                            admin@scircula.com.
                        </p>
                    </div>
                    <div>
                        <p>
                            Effective date of the Terms of Use: 29th day of May
                            2020
                        </p>
                        <p>Last updated on: 29th day of May 2020</p>
                    </div>
                </div>
            </div>
        </StyledPrivacyPage>
    );
};

export default PrivacyPage;
