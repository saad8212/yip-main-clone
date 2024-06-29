import React from 'react';
import styles from './acp.module.css';
const ACP = () => {
    const content = [
        {
            text: `A federal initiative to ensure equitable internet access for all households. Recognizing the pivotal role of connectivity in today's digital era, the ACP program offers eligible households substantial discounts on their internet or wireless services. With savings of up to $30 per month and even up to $75 per month for those residing on qualifying Tribal lands, the ACP program makes internet access more affordable than ever. Our dedicated ACP customer service team is on hand to guide you through the application process, ensuring you can take full advantage of what the Affordable Connectivity Program offers.`
        },
        {
            heading: 'Eligibility Criteria For The Affordable Connectivity Program ACP',
            text: `The Affordable Connectivity Program (ACP) ensures that individuals and households in need have access to affordable internet connectivity. To qualify for this essential program, individuals and families must meet specific eligibility criteria to target those requiring assistance. Here are the necessary eligibility requirements for the ACP:`,
            listItems: [
                {
                    heading: 'Income Eligibility:',
                    text: 'Your income should be less than or equal to 200% of the Federal Poverty Guidelines to be eligible for the ACP. This criterion helps identify those facing financial constraints in accessing broadband services.'
                },
                {
                    heading: 'Federal Pell Grant:',
                    text: 'If any household member has a Federal Pell Grant during the present award year, you meet one of the qualifications for the ACP. Pell Grants are typically granted to students with significant financial need, making them a key eligibility indicator.'
                },
                {
                    heading: 'Low-Income Internet Program:',
                    text: 'You can qualify for the ACP if you meet the eligibility criteria for a participating provider\'s current low-income internet program. This ensures that individuals already seeking low-cost internet solutions can access additional support.'
                },
                {
                    heading: 'Participation in Assistance Programs:',
                    text: 'Specific government assistance programs automatically make you eligible for the ACP. These programs include:'
                },
                {
                    heading: 'Free and Reduced-Price School Lunch Program or School Breakfast Program.',
                    text: 'This includes school participation under the USDA\'s Community Eligibility Provision, ensuring that students\' families in need can access the ACP.'
                },
                {
                    heading: 'SNAP (Supplemental Nutrition Assistance Program).',
                    text: 'Individuals and households receiving SNAP benefits can benefit from the ACP\'s internet service discounts.'
                },
                {
                    heading: 'Medicaid.',
                    text: 'Medicaid recipients are eligible for the ACP, recognizing the importance of internet access for healthcare needs.'
                },
                {
                    heading: 'Federal Housing Assistance.',
                    text: 'Those participating in programs like the Housing Choice Voucher (HCV) Program (Section 8 Vouchers), Project-Based Rental Assistance (PBRA), Section 202, Section 811 Public Housing, and other affordable housing initiatives are eligible for the ACP.'
                },
                {
                    heading: 'Affordable Housing Programs for Specific Communities.',
                    text: 'The ACP supports Indians living in America, Alaska Natives, and Native Hawaiians participating in affordable housing programs.'
                },
                {
                    heading: 'Supplemental Security Income (SSI).',
                    text: 'Individuals receiving SSI benefits can access the ACP\'s internet service discounts.'
                },
                {
                    heading: 'WIC (Women, Infants, and Children).',
                    text: 'Participation in the WIC program opens up eligibility for the ACP, recognizing the importance of connectivity for families with young children.'
                },
                {
                    heading: 'Veterans Pension or Survivor Benefits.',
                    text: 'Veterans and their families receiving pension or survivor benefits are eligible for ACP benefits.'
                },
                {
                    heading: 'Lifeline.',
                    text: 'Those participating in the Lifeline program can receive additional support through the ACP.'
                }

            ]
        },
        {
            heading: 'Residence On Qualified Tribal Lands',
            text: `Reside on qualified Tribal lands and participate in specific assistance programs, such as Bureau of Indian Affairs General Assistance, Tribal TANF, Food Distribution Program on Indian Reservations, or income-based Tribal Head Start. You may be eligible for the ACP. This recognizes the unique needs of tribal communities and provides them with essential connectivity support.`
        },
        {
            heading: 'How To Apply For ACP Benefit',
            text: `Here's how you can apply for the Affordable Connectivity Program or ACP.`,
            listItems: [
                'Visit the Website: Go to the ACP website to access the application portal.',
                'Complete the Application: You can either complete the application online or download it and send it by mail.',
                'Choose a Provider: Reach out to the internet service provider of your choice to choose a service package and have the ACP discount applied to your monthly bill.',
                'Alternative Applications: Some providers may have their own application process.'
            ]
        },
        {
            heading: 'Existing Customers and the Affordable Connectivity Program',
            text: `If you are already a customer with your internet service provider and wish to take advantage of the Affordable Connectivity Program (ACP), follow these steps:`,
            listItems: [
                'Contact Your Provider: Contact the customer support team of your internet service provider or check their website to discuss how you can use your ACP benefit with your current internet service.',
                'Assistance Provided: The customer service team of your ISP will guide you through the application process and ensure that your ACP benefit is appropriately applied to your current service.'
            ]
        },
        {
            heading: 'FAQs',
            faqs : [
                {
                  question: "What is the ACP?",
                  answer:
                    "The Affordable Connectivity Program (ACP) is a national initiative to ensure all households have equitable access to internet services. The program offers significant discounts on internet or wireless services to eligible households.",
                },
                {
                  question: "Which services are included in the Affordable Connectivity Program?",
                  answer:
                    "The ACP covers the cost of both internet and wireless services. Households that qualify for the eligibility conditions can avail a monthly discount of up to $30 on these services. For those living in qualifying Tribal areas, they can enjoy even more significant savings of up to $75 per month.",
                },
                {
                  question: "What are the requirements for eligibility in the Affordable Connectivity Program?",
                  answer:
                    "Several factors determine eligibility for the ACP. A household is considered eligible if the income is at or below 200% of the Federal Poverty Guidelines. You can qualify based on your income falling within the Federal Poverty Guidelines or if a member meets certain criteria. This includes receiving a Federal Pell Grant in the current award year, meeting eligibility requirements for a low-income internet program offered by a participating provider, or participating in one of several assistance programs.",
                },
                {
                  question: "How to apply for the Affordable Connectivity Program benefit?",
                  answer:
                    "You can apply for the ACP benefit via our dedicated ACP customer service. After verification of your eligibility, you will receive an ACP application ID. This ID is used to apply for the benefit of your chosen service.",
                },
                {
                  question: 'How is "household" defined for applying for the Affordable Connectivity Program?',
                  answer:
                    'When applying for the Affordable Connectivity Program, "household" is defined as a group of people residing at the same address who collectively manage their finances and expenses. This group can include a single family, an individual living independently, multiple families living together, or any combination of related or unrelated individuals who share a living space.',
                },
            ]
        }
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.heading_main}>Affordable Connectivity Program (ACP)</h1>
            {content.map((section, index) => (
                <div key={index} className={styles.section}>
                    <h2 className={styles.heading}>{section.heading}</h2>
                    <p className={styles.text}>{section.text}</p>
                    {section.listItems && (
                        <ul className= {styles.list}>
                            {section.listItems.map((item, i) => (
                                <>
                                    <h3 key={i} className={styles.sub_heading}>{item.heading}</h3>
                                    <p key={i} className={styles.sub_text}>{item.text}</p>
                                </>
                            ))}
                        </ul>
                    )}
                    {
                        section.faqs &&  (
                        <ul className= {styles.list}>
                            {section.faqs.map((item, i) => (
                                <>
                                    <h3 key={i} className={styles.sub_heading}>{item.question}</h3>
                                    <p key={i} className={styles.sub_text}>{item.answer}</p>
                                </>
                            ))}
                        </ul>
                    )
                    }
                </div>
            ))}
        </div>
    );
};

export default ACP;
