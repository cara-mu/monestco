# API Definitions
Created by Justin Hu, 2021/08/31

---
Format:
- Name
- URL
- HTTP Method:  GET/POST/PUT/DELETE
- Params:
- Return:
---

## Political Association

1. Get Summary Info
- URL: /api/v1/pa/summary
- Method: Get
- Params:  ?company='Champion'
- Return  
  ```json
  {   
      "rep" : 23750,    
      "dem": 1744
  }
  ```

2. Get Detailed Info
- URL: /api/v1/pa/detailed
- Method: Get
- Params:  ?company='Champion'
- Return
```json
{
   "data": [{
            "year": 2016,
            "rep": 23750,
            "dem": 1744,
            "indi": 1
        },
            {
            "year": 2018,
            "rep": 63227,
            "dem": 917,
            "indi": 0.95
        },
            {
             "year": 2020,
            "rep": 254474,
            "dem": 19394,
            "indi": 0.96
        }
    ],
    "citation": [{
        "arthor": "none",
        "title": "J Crew Group",
        "publihser": "OpenSecrets",
        "pages": "34",
        "date": "none",
        "url": "https://www.opensecrets.org/orgs/h-m-co/summary?id=D000042667"
    }]
}
```
Notes:
1. citation may contains multiple items

## Comparisons

3. Get Ranking Info (for Browser Extension)
- URL: /api/v1/ranking
- Method: Get
- Params:   
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;brand: brand name   
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ranking preference:   (low,  medium, high)    
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;di: Diversity & Inclusion,    
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;we: Worker Exploitation,    
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wp:  Waster & Pollution,   
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;es: Ethical Sourcing
- Return   
  Industry Ranking according to inputted preference

``` json
[
    "Patagonia",
    "H&M",
    "Tommy Hilfiger",
    "Calvin Klein",
    "Gap",
    "Banana Republic",
    "Old Navy",
    "The North Face",
    "Levi's",
    "Ralph Lauren",
    "Club Monaco",
    "Zara",
    "Uniqlo",
    "Abercrombie & Fitch",
    "American Eagle",
    "Guess",
    "Boohoo",
    "Forever 21"
]
```

4. Get Dimension Data for Comparison Chart to Each Industry
- URL: /industry
- Method: Get
- Params: None
- Return
```json
{
   "rows":[
      {
         "ID":"1",
         "Industry":"Apparel",
         "Atotal":"100",
         "Alow":"44.97",
         "Ahigh":"64.67",
         "A1total":"16",
         "A1low":"8.94",
         "A1high":"12.71",
         "A1.1total":"6",
         "A1.1low":"3.87",
         "A1.1high":"5.60",
         "A1.2total":"10",
         "A1.2low":"4.82",
         "A1.2high":"7.36",
         "A2total":"32",
         "A2low":"14.09",
         "A2high":"20.97",
         "A2.1total":"6",
         "A2.1low":"3.01",
         "A2.1high":"5.01",
         "A2.2total":"16",
         "A2.2low":"7.69",
         "A2.2high":"11.37",
         "A2.3total":"10",
         "A2.3low":"2.71",
         "A2.3high":"5.88",
         "A3total":"32",
         "A3low":"11.08",
         "A3high":"19.57",
         "A3.1total":"8",
         "A3.1low":"2.16",
         "A3.1high":"5.19",
         "A3.2total":"14",
         "A3.2low":"1.86",
         "A3.2high":"7.01",
         "A3.3total":"10",
         "A3.3low":"7.01",
         "A3.3high":"9.01",
         "A4total":"20",
         "A4low":"9.24",
         "A4high":"13.05",
         "A4.1total":"6",
         "A4.1low":"3.01",
         "A4.1high":"5.01",
         "A4.2total":"8",
         "A4.2low":"1.20",
         "A4.2high":"4.01",
         "A4.3total":"6",
         "A4.3low":"4.01",
         "A4.3high":"5.46",
         "Btotal":"100",
         "Blow":"34.64",
         "Bhigh":"50.81",
         "B1total":"18",
         "B1low":"7.16",
         "B1high":"10.54",
         "B1.1total":"4",
         "B1.1low":"2.57",
         "B1.1high":"3.55",
         "B1.2total":"10",
         "B1.2low":"3.85",
         "B1.2high":"5.97",
         "B1.3total":"4",
         "B1.3low":"0.50",
         "B1.3high":"2.01",
         "B2total":"18",
         "B2low":"6.99",
         "B2high":"9.98",
         "B2.1total":"4",
         "B2.1low":"2.66",
         "B2.1high":"3.65",
         "B2.2total":"10",
         "B2.2low":"3.85",
         "B2.2high":"5.97",
         "B2.3total":"4",
         "B2.3low":"0.27",
         "B2.3high":"1.31",
         "B3total":"34",
         "B3low":"8.91",
         "B3high":"15.87",
         "B3.1total":"10",
         "B3.1low":"0.92",
         "B3.1high":"2.84",
         "B3.2total":"14",
         "B3.2low":"2.02",
         "B3.2high":"5.92",
         "B3.3total":"6",
         "B3.3low":"2.59",
         "B3.3high":"4.32",
         "B3.4total":"4",
         "B3.4low":"2.50",
         "B3.4high":"3.56",
         "B4total":"30",
         "B4low":"10.65",
         "B4high":"15.35",
         "B4.1total":"10",
         "B4.1low":"4.30",
         "B4.1high":"6.35",
         "B4.2total":"10",
         "B4.2low":"3.14",
         "B4.2high":"5.22",
         "B4.3total":"4",
         "B4.3low":"2.50",
         "B4.3high":"3.56",
         "B4.4total":"6",
         "B4.4low":"0.16",
         "B4.4high":"1.05",
         "Ctotal":"100",
         "Clow":"35.58",
         "Chigh":"52.66",
         "C1total":"28",
         "C1low":"13.78",
         "C1high":"19.69",
         "C1.1total":"6",
         "C1.1low":"1.35",
         "C1.1high":"2.94",
         "C1.2total":"8",
         "C1.2low":"5.01",
         "C1.2high":"6.53",
         "C1.3total":"8",
         "C1.3low":"5.04",
         "C1.3high":"7.01",
         "C1.4total":"6",
         "C1.4low":"2.06",
         "C1.4high":"5.01",
         "C2total":"22",
         "C2low":"7.25",
         "C2high":"13.75",
         "C2.1total":"6",
         "C2.1low":"1.61",
         "C2.1high":"3.68",
         "C2.2total":"4",
         "C2.2low":"1.20",
         "C2.2high":"3.01",
         "C2.3total":"6",
         "C2.3low":"2.06",
         "C2.3high":"4.23",
         "C2.4total":"6",
         "C2.4low":"1.79",
         "C2.4high":"3.68",
         "C3total":"22",
         "C3low":"6.45",
         "C3high":"10.20",
         "C3.1total":"6",
         "C3.1high":"1.07",
         "C3.1low":"3.01",
         "C3.2total":"8",
         "C3.2low":"1.54",
         "C3.2high":"4.01",
         "C3.3total":"4",
         "C3.3low":"1.40",
         "C3.3high":"2.55",
         "C3.4total":"4",
         "C3.4low":"1.15",
         "C3.4high":"2.55",
         "C4total":"28",
         "C4low":"6.07",
         "C4high":"11.04",
         "C4.1total":"10",
         "C4.1low":"2.20",
         "C4.1high":"5.01",
         "C4.2total":"6",
         "C4.2low":"0.24",
         "C4.2high":"2.01",
         "C4.3total":"4",
         "C4.3low":"1.04",
         "C4.3high":"2.25",
         "C4.4total":"8",
         "C4.4low":"1.51",
         "C4.4high":"3.55",
         "Dtotal":"100",
         "Dlow":"30.70",
         "Dhigh":"49.54",
         "D1total":"26",
         "D1low":"6.91",
         "D1high":"12.32",
         "D1.1total":"18",
         "D1.1low":"3.14",
         "D1.1high":"7.10",
         "D1.2total":"8",
         "D1.2low":"3.57",
         "D1.2high":"5.43",
         "D2total":"28",
         "D2low":"6.73",
         "D2high":"13.68",
         "D2.1total":"12",
         "D2.1low":"1.38",
         "D2.1high":"4.09",
         "D2.2total":"8",
         "D2.2low":"1.46",
         "D2.2high":"4.54",
         "D2.3total":"8",
         "D2.3low":"3.02",
         "D2.3high":"6.01",
         "D3total":"46",
         "D3low":"14.50",
         "D3high":"24.67",
         "D3.1total":"6",
         "D3.1low":"2.02",
         "D3.1high":"4.15",
         "D3.2total":"10",
         "D3.2low":"1.38",
         "D3.2high":"3.85",
         "D3.3total":"10",
         "D3.3low":"6.10",
         "D3.3high":"9.78",
         "D3.4total":"10",
         "D3.4low":"1.08",
         "D3.4high":"3.39",
         "D3.5total":"10",
         "D3.5low":"2.27",
         "D3.5high":"6.01"
      }
   ]
}
```

5. Get Comparison Data
- URL: /comparison/:companyID1/:companyID2/:companyID3
- Method: Get
- Params: companyID1, companyID2, companyID3
- Return
```

```

6. Get Scores for the Company and Reasoning
- URL: /companyscores
- Method: Post
- Params: ?0=Aritzia
- Return
``` json
[
   {
      "ID":6,
      "IndustryStandardsID":1,
      "CompanyID":6,
      "Ascore":30,
      "A1score":8,
      "A1.1score":6,
      "A1.1short":"Prohibits discrimination and provides unconscious bias training.",
      "A1.1long":"Aritzia prohibits discriminatory practices and implemented mandatory training to address unconscious bias within the organization.",
      "A1.2score":2,
      "A1.2short":"Has reporting hotlines but lacks processes to address complaints.",
      "A1.2long":"Aritzia provides somewhat accessible reporting channels for employees and but does not prohibit retaliation for raising concerns. Aritzia has faced multiple discrimination complaints in recent years and has not addressed or resolved the allegations.",
      "A2score":6,
      "A2.1score":0,
      "A2.1short":"Does not describe any goals or initiatives to increase gender equality.",
      "A2.1long":"Aritzia lacks goals, strategies and initiatives towards increasing female recruitment, retention and advancement into leadership positions.",
      "A2.2score":6,
      "A2.2short":"In leadership, 50% of top executives and 30% of the board are women.",
      "A2.2long":"Aritzia's current gender breakdown for its global operations and management levels are unknown. In top leadership, 50% (3/6) of women hold positions at the C-Level, while 30% (3/10) of its board members were represented by women.",
      "A2.3score":0,
      "A2.3short":"Does not report on gender pay gaps, or take any initiative.",
      "A2.3long":"Aritzia does not report any information on gender pay gaps and does not take initiatives towards achieving equal pay.",
      "A3score":7,
      "A3.1score":0,
      "A3.1short":"Lacks goals and initiatives to increase cultural diversity.",
      "A3.1long":"Aritzia has not set goals to increase cultural diversity, but is currently working on establishing a Diversity & Inclusion Committee and creating Diversity & Inclusion strategies and goals.",
      "A3.2score":0,
      "A3.2short":"Does not disclose ethnic breakdown of employees.",
      "A3.2long":"Aritzia does not disclose its ethnic breakdown across the general workforce, management levels, or executive levels.",
      "A3.3score":7,
      "A3.3short":"Provides D&I training and aims to amplify Black women's voices in journalism.",
      "A3.3long":"Aritzia has implemented mandatory D&I training and a Diversity and Inclusion Committee led by the COO. Aritzia has publicly demonstrated support for the Black Lives Matter movement and sponsors CBC Radio Canada's Black Women's Journalism Fellowship to amplify Black voices.",
      "A4score":9,
      "A4.1score":2,
      "A4.1short":"Partners with Stonewall Community Foundation to increase inclusivity.",
      "A4.1long":"Aritzia supports LGBTQ+ employees through an ongoing partnership with Stonewall Community Foundation to increase inclusivity in the workplace. No additional measures are taken to support LGBTQ+ communities.",
      "A4.2score":4,
      "A4.2short":"Trains employees and develops individual accommodation plans.",
      "A4.2long":"Aritzia's store operations are inclusive to disabilities. Aritzia does not have initiatives to increase hiring employees with disabilities, but will develop individual accommodation plans and return-to-work plans for employees absent due to disabilities.",
      "A4.3score":3,
      "A4.3short":"Has diverse representation and somewhat inclusive sizing, but lacks campaigns.",
      "A4.3long":"Aritzia's advertising and marketing efforts show a diverse representation of models. It offers a size selection up to size 18, and is beginning to expand its plus size options. No additional campaigns or initiatives are taken to promote inclusivity.",
      "Bscore":32,
      "B1score":6,
      "B1.1score":4,
      "B1.1short":"Prohibits child labour and refuses to work with at-risk suppliers.",
      "B1.1long":"Aritzia prohibits direct and indirect suppliers from using child labour. Aritzia vets suppliers for child labour before entering contracts and takes corrective action if violations are found.",
      "B1.2score":2,
      "B1.2short":"Monitors suppliers and listens to worker feedback, but actions taken are unknown.",
      "B1.2long":"Aritzia conducts some unannounced audits and worker interviews but makes little effort to listen to complaints. Aritzia prohibits unauthorized subcontracting, but no additional efforts are taken to identify supply chain risks.",
      "B1.3score":0,
      "B1.3short":"Does not describe remediation plans for child labour victims.",
      "B1.3long":"Aritzia has not implemented processes to effectively remediate child labour violations. It is unknown whether Aritzia would provide remediation to the victims and their families if future violations were to occur.",
      "B2score":6,
      "B2.1score":4,
      "B2.1short":"Prohibits forced labour and refuses to work with at-risk suppliers.",
      "B2.1long":"Aritzia prohibits direct and indirect suppliers from using forced labour. Aritzia vets suppliers for forced labour before entering contracts and takes corrective action if violations are found.",
      "B2.2score":2,
      "B2.2short":"Monitors suppliers and listens to worker feedback, but actions taken are unknown.",
      "B2.2long":"Aritzia conducts some unannounced audits and worker interviews but makes little effort to listen to complaints. Aritzia prohibits unauthorized subcontracting, but no additional efforts are taken to identify supply chain risks.",
      "B2.3score":0,
      "B2.3short":"Does not describe remediation plans for forced labour victims.",
      "B2.3long":"Aritzia has not implemented processes to effectively remediate forced labour violations. It is unknown whether Aritzia would support and compensate the victims if future violations were to occur.",
      "B3score":7,
      "B3.1score":2,
      "B3.1short":"Requires wages to provide discretionary income, but wages are unknown.",
      "B3.1long":"Aritzia requires suppliers to pay the higher of the minimum wage or prevailing industry standard. Aritzia states that wages must provide for basic needs and discretionary income, but does not safeguard wages in price negotiations. There is no evidence that shows factory workers are being paid a living wage.",
      "B3.2score":0,
      "B3.2short":"Lacks goals and initiatives to increase worker wages.",
      "B3.2long":"Aritzia lacks goals or initiatives to improve wages across its supply chain. Aritzia does not benchmark current wage levels or work with external organizations and governments to advocate for fair compensation in the industry.",
      "B3.3score":1,
      "B3.3short":"Does not require timely payments but publishes some wage information.",
      "B3.3long":"Aritzia does not state on-time and full wage payment requirements in contracts. Aritzia provides workers with clear and written pay checks at least once a month. Aritzia does not mention how suppliers are audited to ensure wages and benefits are paid.",
      "B3.4score":4,
      "B3.4short":"Ensures worker rights are respected and refuses to work with at-risk suppliers.",
      "B3.4long":"Aritzia requires all suppliers to respect the right to freedom of association and collective bargaining. Aritzia vets suppliers for compliance before entering contracts and takes corrective action if violations are found.",
      "B4score":13,
      "B4.1score":5,
      "B4.1short":"Sets clear health and safety requirements and trains suppliers.",
      "B4.1long":"Aritzia sets clear health and safety requirements and refuses to work with at-risk suppliers. Aritzia provides health and safety training to suppliers and workers, but does not extend its initiatives to indirect suppliers. Aritzia does not mention initiatives to reduce VOC use and has not published progress.",
      "B4.2score":4,
      "B4.2short":"Refuses to work with at-risk suppliers, but lacks other initiatives.",
      "B4.2long":"Aritzia prohibits all suppliers from enforcing excessive working hours. Aritzia has not implemented responsible purchasing practices to negotiate reasonable production lead times, minimise last-minute changes, and adapt orders to supplier capacities.",
      "B4.3score":4,
      "B4.3short":"Prohibits worker mistreatment and refuses to work with at-risk suppliers.",
      "B4.3long":"Aritzia prohibits direct and indirect suppliers from abusing workers. Aritzia vets suppliers for compliance before entering contracts and takes corrective action if violations are found.",
      "B4.4score":0,
      "B4.4short":"Does not provide remediation for mistreated workers.",
      "B4.4long":"Aritzia has not implemented processes to effectively remediate worker mistreatment violations. It is unknown whether Aritzia would support and compensate victims if future violations were to occur.",
      "Cscore":31,
      "C1score":7,
      "C1.1score":1,
      "C1.1short":"Tracks energy use but lacks goals to reduce supply chain energy use.",
      "C1.1long":"In 2018, Aritzia adopted the Higg Facility Environmental Module for its all suppliers to report on energy use. However, Aritzia has not has not set measurable reduction goals and does not publish any energy consumption data.",
      "C1.2score":2,
      "C1.2short":"Does not commit to reduce emissions across the supply chain.",
      "C1.2long":"Aritzia uses the Higg Facility Environmental Module for all suppliers to track emissions data. Aritzia has not set goals to reduce GHG emissions and does not publish GHG emissions data for its facilities or for the supply chain.",
      "C1.3score":4,
      "C1.3short":"Offices, stores and distribution centers are carbon neutral.",
      "C1.3long":"Energy-efficient LEDs make up 95% of lighting across Aritzia stores. Aritzia has not set goals to increase use of renewable energy, but all Aritzia-managed offices, stores and distribution centres are carbon neutral. Aritzia offsets emissions by purchasing Renewable Energy Credits (RECs) and certified Carbon Offsets.",
      "C1.4score":0,
      "C1.4short":"Does not work with suppliers to reduce energy use and emissions.",
      "C1.4long":"Aritzia does not describe any actions taken to work with suppliers in reducing its manufacturing carbon footprint. No initiatives are taken to increase renewable energy use in the supply chain.",
      "C2score":3,
      "C2.1score":1,
      "C2.1short":"Tracks water use data for some suppliers.",
      "C2.1long":"Aritzia requires all finished good apparel factories to report on environmental impact using the Higg Facility Environmental Module to track and manage water consumption across the supply chain. However, Aritzia has not set goals to reduce water use and water consumption data is unknown.",
      "C2.2score":0,
      "C2.2short":"Its Denim Forum brand uses e-Flow and laser technologies to reduce water.",
      "C2.2long":"Aritzia's Denim Forum product line works with an Italian mill that uses processes such as e-Flow and laser technologies to reduce water, but results are unknown. There is no evidence Aritzia takes any other initiatives to recycle and reduce water across the supply chain.",
      "C2.3score":1,
      "C2.3short":"Tracks chemical use and has a product line that reduces usage.",
      "C2.3long":"Aritzia requires all finished good apparel factories to conduct Higg Assessments to track chemical use. Its Denim Forum line uses e-Flow and laser technologies to reduce water and chemical use. No additional initiatives are taken to reduce the amount of hazardous chemicals used in production.",
      "C2.4score":1,
      "C2.4short":"Tracks wastewater discharge for 60% of its finished goods factories.",
      "C2.4long":"In 2020, 60% of Aritzia's finished good factories completed the Higg Facility Environmental Module self-assessment on its water and chemical impacts. Aritzia does not work with suppliers to ensure compliance with wastewater discharge legislations and prevent freshwater pollution.",
      "C3score":14,
      "C3.1score":6,
      "C3.1short":"Has eliminated all plastic packaging and has supply chain initiatives.",
      "C3.1long":"Aritzia has eliminated the use of plastic in its packaging, replacing cellophane plastic bags with protective paper bags. Where required, Aritzia will pay extended-producer responsibility fees for recycling client packaging. Aritzia's efforts to reduce polybag use has eliminated 3,500kg of plastic from its supply chain in 2019.",
      "C3.2score":7,
      "C3.2short":"Uses 70% and 40% recycled paper in its e-commerce mailers and shopping bags, respectively.",
      "C3.2long":"Aritzia does not use plastic packaging and vaguely aims to increase the percentage of recycled content used in packaging. Currently, e-commerce mailers are made with 70% recycled paper and shopping bags are made with 40% post-consumer content.",
      "C3.3score":1,
      "C3.3short":"E-commerce shipments are 100% recyclable.",
      "C3.3long":"Aritzia's e-Commerce shipments are 100% recyclable, but it is unknown whether other packaging can be recycled, reused or composted. No additional efforts are made to encourage consumers to reduce, reuse or recycle packaging.",
      "C3.4score":0,
      "C3.4short":"No efforts made to reduce packaging waste in the supply chain.",
      "C3.4long":"Aritzia does not describe any actions taken to reduce packaging waste throughout the distribution and manufacturing processes.",
      "C4score":7,
      "C4.1score":2,
      "C4.1short":"Uses some post-consumer recycled polyester and nylon, but amounts are unknown.",
      "C4.1long":"Aritzia currently uses some post-consumer recycled polyester made from plastic bottles and recycled nylon made from old fishnets certified by the Global Recycled Standard. However, the amounts used are unknown and Aritzia does not make any further commitments to increase the use of recycled synthetic materials.",
      "C4.2score":4,
      "C4.2short":"Donates all unsold products to various charities.",
      "C4.2long":"Aritzia aims to divert all products that are unable to be sold to partners such as Good360 and Dress for Success, away from landfills. It works with Debrand to find alternative uses for products that cannot be sold or donated. No efforts are made to increase material circularity.",
      "C4.3score":0,
      "C4.3short":"Does not offer take-back or repair programs.",
      "C4.3long":"Aritzia does not provide any take-back programs or repair services for consumers to reduce consumption. No additional efforts are taken to extend the first life of products.",
      "C4.4score":1,
      "C4.4short":"Tracks waste metrics for key suppliers, but lacks initiatives.",
      "C4.4long":"Aritzia has not set goals and makes no efforts to work with suppliers to promote material circularity and reduce waste across the supply chain. However, it uses the Higg Facility Environmental Module for 60% of its finished good apparel factories to track supply chain material waste.",
      "Dscore":37,
      "D1score":9,
      "D1.1score":6,
      "D1.1short":"Aims to use 50% sustainably-sourced cotton by 2025.",
      "D1.1long":"Aritzia currently sources 20% of its cotton from Better Cotton Initiative certified sources and it's Denim Forum line uses organic cotton certified to the Global Organic Textiles Standard and the Organic Cotton Standard. Aritzia commits to use 50% sustainably produced cotton by 2020, but progress is unknown and no commitments are made towards sourcing recycled cotton.",
      "D1.2score":3,
      "D1.2short":"Partners with the ILO but does not pledge against Uzbek and Turkmen cotton.",
      "D1.2long":"Aritzia traces the original sources of all cotton through its Materials Sourcing Policy, but did not sign any pledges to prevent sourcing from countries with a high risk of forced labour. Aritzia is partnered with the International Labour Organization to protect worker's rights, but no additional initiatives are taken.",
      "D2score":10,
      "D2.1score":1,
      "D2.1short":"Vaguely commits to sourcing viscose and wood-based materials sustainably.",
      "D2.1long":"Aritzia commits to use sustainably-sourced viscose and wood-based materials, but has not set a time bound goal or target. Current breakdowns are unknown.",
      "D2.2score":3,
      "D2.2short":"Uses some sustainably produced packaging, but lacks goals.",
      "D2.2long":"Aritzia has not made commitments to incorporate sustainably procured paper into their packaging. All wooden hangers are Forest Stewardship Council certified and online shipment mailers are made out of 70% recycled materials.",
      "D2.3score":6,
      "D2.3short":"Partners with Canopy Style and will not source from endangered forests.",
      "D2.3long":"Aritzia has made a commitment to ensure that all paper-based packaging does not include fibres sourced from ancient or endangered forests by the end of 2022. Aritzia is also partnered with Canopy's Back4Good Initiative, which aims to develop sustainable packaging solutions.",
      "D3score":18,
      "D3.1score":2,
      "D3.1short":"Requires suppliers to sign onto animal welfare standards.",
      "D3.1long":"Aritzia requires suppliers to sign its Materials Sourcing Policy, which outlines the standards for sourcing raw materials including animal welfare standards. However, Aritzia has not implemented any processes to ensure implementation of such standards.",
      "D3.2score":0,
      "D3.2short":"No policies or goals to use sustainably procured leather.",
      "D3.2long":"Aritzia does not have policies governing the use of leather and has not set goals to source recycled or sustainably produced leather. Current leather sources are unknown.",
      "D3.3score":10,
      "D3.3short":"Has banned the use of fur.",
      "D3.3long":"Aritzia prohibits the use of fur and angora hair. Aritzia does not sell any products that are made from or contain real fur.",
      "D3.4score":0,
      "D3.4short":"No policies or goals to source sustainably produced wool.",
      "D3.4long":"Aritzia does not have policies governing the source of wool and has not set goals towards sourcing recycled or sustainably produced wool. Current wool sources are unknown.",
      "D3.5score":6,
      "D3.5short":"Uses 100% sustainably produced down.",
      "D3.5long":"Aritzia will not use down sourced from live plucked or force fed birds and currently sources 100% Responsible Down Standard certified down. However, Aritzia has not made any commitments to increase use of recycled down."
   }
]
```

7. Get Specific Company A Details
- URL: /companydetailsA_specific
- Method: Post
- Params: ?0=Aritzia
- Return
```

```

8. Get Company A Details
- URL: /companydetailsA
- Method: Post
- Params: ?0=Aritzia
- Return
``` json
{
   "rows":[
      {
         "ID":6,
         "IndustryStandardsID":1,
         "CompanyID":6,
         "Ascore":30,
         "A1score":8,
         "A1.1score":6,
         "A1.1short":"Prohibits discrimination and provides unconscious bias training.",
         "A1.1long":"Aritzia prohibits discriminatory practices and implemented mandatory training to address unconscious bias within the organization.",
         "A1.2score":2,
         "A1.2short":"Has reporting hotlines but lacks processes to address complaints.",
         "A1.2long":"Aritzia provides somewhat accessible reporting channels for employees and but does not prohibit retaliation for raising concerns. Aritzia has faced multiple discrimination complaints in recent years and has not addressed or resolved the allegations.",
         "A2score":6,
         "A2.1score":0,
         "A2.1short":"Does not describe any goals or initiatives to increase gender equality.",
         "A2.1long":"Aritzia lacks goals, strategies and initiatives towards increasing female recruitment, retention and advancement into leadership positions.",
         "A2.2score":6,
         "A2.2short":"In leadership, 50% of top executives and 30% of the board are women.",
         "A2.2long":"Aritzia's current gender breakdown for its global operations and management levels are unknown. In top leadership, 50% (3/6) of women hold positions at the C-Level, while 30% (3/10) of its board members were represented by women.",
         "A2.3score":0,
         "A2.3short":"Does not report on gender pay gaps, or take any initiative.",
         "A2.3long":"Aritzia does not report any information on gender pay gaps and does not take initiatives towards achieving equal pay.",
         "A3score":7,
         "A3.1score":0,
         "A3.1short":"Lacks goals and initiatives to increase cultural diversity.",
         "A3.1long":"Aritzia has not set goals to increase cultural diversity, but is currently working on establishing a Diversity & Inclusion Committee and creating Diversity & Inclusion strategies and goals.",
         "A3.2score":0,
         "A3.2short":"Does not disclose ethnic breakdown of employees.",
         "A3.2long":"Aritzia does not disclose its ethnic breakdown across the general workforce, management levels, or executive levels.",
         "A3.3score":7,
         "A3.3short":"Provides D&I training and aims to amplify Black women's voices in journalism.",
         "A3.3long":"Aritzia has implemented mandatory D&I training and a Diversity and Inclusion Committee led by the COO. Aritzia has publicly demonstrated support for the Black Lives Matter movement and sponsors CBC Radio Canada's Black Women's Journalism Fellowship to amplify Black voices.",
         "A4score":9,
         "A4.1score":2,
         "A4.1short":"Partners with Stonewall Community Foundation to increase inclusivity.",
         "A4.1long":"Aritzia supports LGBTQ+ employees through an ongoing partnership with Stonewall Community Foundation to increase inclusivity in the workplace. No additional measures are taken to support LGBTQ+ communities.",
         "A4.2score":4,
         "A4.2short":"Trains employees and develops individual accommodation plans.",
         "A4.2long":"Aritzia's store operations are inclusive to disabilities. Aritzia does not have initiatives to increase hiring employees with disabilities, but will develop individual accommodation plans and return-to-work plans for employees absent due to disabilities.",
         "A4.3score":3,
         "A4.3short":"Has diverse representation and somewhat inclusive sizing, but lacks campaigns.",
         "A4.3long":"Aritzia's advertising and marketing efforts show a diverse representation of models. It offers a size selection up to size 18, and is beginning to expand its plus size options. No additional campaigns or initiatives are taken to promote inclusivity."
      }
   ]
}
```

9. Get Company B Details
- URL: /companydetailsB
- Method: Post
- Params: ?0=Aritzia
- Return
``` json
{
   "rows":[
      {
         "ID":6,
         "IndustryStandardsID":1,
         "CompanyID":6,
         "Bscore":32,
         "B1score":6,
         "B1.1score":4,
         "B1.1short":"Prohibits child labour and refuses to work with at-risk suppliers.",
         "B1.1long":"Aritzia prohibits direct and indirect suppliers from using child labour. Aritzia vets suppliers for child labour before entering contracts and takes corrective action if violations are found.",
         "B1.2score":2,
         "B1.2short":"Monitors suppliers and listens to worker feedback, but actions taken are unknown.",
         "B1.2long":"Aritzia conducts some unannounced audits and worker interviews but makes little effort to listen to complaints. Aritzia prohibits unauthorized subcontracting, but no additional efforts are taken to identify supply chain risks.",
         "B1.3score":0,
         "B1.3short":"Does not describe remediation plans for child labour victims.",
         "B1.3long":"Aritzia has not implemented processes to effectively remediate child labour violations. It is unknown whether Aritzia would provide remediation to the victims and their families if future violations were to occur.",
         "B2score":6,
         "B2.1score":4,
         "B2.1short":"Prohibits forced labour and refuses to work with at-risk suppliers.",
         "B2.1long":"Aritzia prohibits direct and indirect suppliers from using forced labour. Aritzia vets suppliers for forced labour before entering contracts and takes corrective action if violations are found.",
         "B2.2score":2,
         "B2.2short":"Monitors suppliers and listens to worker feedback, but actions taken are unknown.",
         "B2.2long":"Aritzia conducts some unannounced audits and worker interviews but makes little effort to listen to complaints. Aritzia prohibits unauthorized subcontracting, but no additional efforts are taken to identify supply chain risks.",
         "B2.3score":0,
         "B2.3short":"Does not describe remediation plans for forced labour victims.",
         "B2.3long":"Aritzia has not implemented processes to effectively remediate forced labour violations. It is unknown whether Aritzia would support and compensate the victims if future violations were to occur.",
         "B3score":7,
         "B3.1score":2,
         "B3.1short":"Requires wages to provide discretionary income, but wages are unknown.",
         "B3.1long":"Aritzia requires suppliers to pay the higher of the minimum wage or prevailing industry standard. Aritzia states that wages must provide for basic needs and discretionary income, but does not safeguard wages in price negotiations. There is no evidence that shows factory workers are being paid a living wage.",
         "B3.2score":0,
         "B3.2short":"Lacks goals and initiatives to increase worker wages.",
         "B3.2long":"Aritzia lacks goals or initiatives to improve wages across its supply chain. Aritzia does not benchmark current wage levels or work with external organizations and governments to advocate for fair compensation in the industry.",
         "B3.3score":1,
         "B3.3short":"Does not require timely payments but publishes some wage information.",
         "B3.3long":"Aritzia does not state on-time and full wage payment requirements in contracts. Aritzia provides workers with clear and written pay checks at least once a month. Aritzia does not mention how suppliers are audited to ensure wages and benefits are paid.",
         "B3.4score":4,
         "B3.4short":"Ensures worker rights are respected and refuses to work with at-risk suppliers.",
         "B3.4long":"Aritzia requires all suppliers to respect the right to freedom of association and collective bargaining. Aritzia vets suppliers for compliance before entering contracts and takes corrective action if violations are found.",
         "B4score":13,
         "B4.1score":5,
         "B4.1short":"Sets clear health and safety requirements and trains suppliers.",
         "B4.1long":"Aritzia sets clear health and safety requirements and refuses to work with at-risk suppliers. Aritzia provides health and safety training to suppliers and workers, but does not extend its initiatives to indirect suppliers. Aritzia does not mention initiatives to reduce VOC use and has not published progress.",
         "B4.2score":4,
         "B4.2short":"Refuses to work with at-risk suppliers, but lacks other initiatives.",
         "B4.2long":"Aritzia prohibits all suppliers from enforcing excessive working hours. Aritzia has not implemented responsible purchasing practices to negotiate reasonable production lead times, minimise last-minute changes, and adapt orders to supplier capacities.",
         "B4.3score":4,
         "B4.3short":"Prohibits worker mistreatment and refuses to work with at-risk suppliers.",
         "B4.3long":"Aritzia prohibits direct and indirect suppliers from abusing workers. Aritzia vets suppliers for compliance before entering contracts and takes corrective action if violations are found.",
         "B4.4score":0,
         "B4.4short":"Does not provide remediation for mistreated workers.",
         "B4.4long":"Aritzia has not implemented processes to effectively remediate worker mistreatment violations. It is unknown whether Aritzia would support and compensate victims if future violations were to occur."
      }
   ]
}
```

10. Get Company C Details
- URL: /companydetailsC
- Method: Post
- Params: ?0=Aritzia
- Return
``` json
{
   "rows":[
      {
         "ID":6,
         "IndustryStandardsID":1,
         "CompanyID":6,
         "Cscore":31,
         "C1score":7,
         "C1.1score":1,
         "C1.1short":"Tracks energy use but lacks goals to reduce supply chain energy use.",
         "C1.1long":"In 2018, Aritzia adopted the Higg Facility Environmental Module for its all suppliers to report on energy use. However, Aritzia has not has not set measurable reduction goals and does not publish any energy consumption data.",
         "C1.2score":2,
         "C1.2short":"Does not commit to reduce emissions across the supply chain.",
         "C1.2long":"Aritzia uses the Higg Facility Environmental Module for all suppliers to track emissions data. Aritzia has not set goals to reduce GHG emissions and does not publish GHG emissions data for its facilities or for the supply chain.",
         "C1.3score":4,
         "C1.3short":"Offices, stores and distribution centers are carbon neutral.",
         "C1.3long":"Energy-efficient LEDs make up 95% of lighting across Aritzia stores. Aritzia has not set goals to increase use of renewable energy, but all Aritzia-managed offices, stores and distribution centres are carbon neutral. Aritzia offsets emissions by purchasing Renewable Energy Credits (RECs) and certified Carbon Offsets.",
         "C1.4score":0,
         "C1.4short":"Does not work with suppliers to reduce energy use and emissions.",
         "C1.4long":"Aritzia does not describe any actions taken to work with suppliers in reducing its manufacturing carbon footprint. No initiatives are taken to increase renewable energy use in the supply chain.",
         "C2score":3,
         "C2.1score":1,
         "C2.1short":"Tracks water use data for some suppliers.",
         "C2.1long":"Aritzia requires all finished good apparel factories to report on environmental impact using the Higg Facility Environmental Module to track and manage water consumption across the supply chain. However, Aritzia has not set goals to reduce water use and water consumption data is unknown.",
         "C2.2score":0,
         "C2.2short":"Its Denim Forum brand uses e-Flow and laser technologies to reduce water.",
         "C2.2long":"Aritzia's Denim Forum product line works with an Italian mill that uses processes such as e-Flow and laser technologies to reduce water, but results are unknown. There is no evidence Aritzia takes any other initiatives to recycle and reduce water across the supply chain.",
         "C2.3score":1,
         "C2.3short":"Tracks chemical use and has a product line that reduces usage.",
         "C2.3long":"Aritzia requires all finished good apparel factories to conduct Higg Assessments to track chemical use. Its Denim Forum line uses e-Flow and laser technologies to reduce water and chemical use. No additional initiatives are taken to reduce the amount of hazardous chemicals used in production.",
         "C2.4score":1,
         "C2.4short":"Tracks wastewater discharge for 60% of its finished goods factories.",
         "C2.4long":"In 2020, 60% of Aritzia's finished good factories completed the Higg Facility Environmental Module self-assessment on its water and chemical impacts. Aritzia does not work with suppliers to ensure compliance with wastewater discharge legislations and prevent freshwater pollution.",
         "C3score":14,
         "C3.1score":6,
         "C3.1short":"Has eliminated all plastic packaging and has supply chain initiatives.",
         "C3.1long":"Aritzia has eliminated the use of plastic in its packaging, replacing cellophane plastic bags with protective paper bags. Where required, Aritzia will pay extended-producer responsibility fees for recycling client packaging. Aritzia's efforts to reduce polybag use has eliminated 3,500kg of plastic from its supply chain in 2019.",
         "C3.2score":7,
         "C3.2short":"Uses 70% and 40% recycled paper in its e-commerce mailers and shopping bags, respectively.",
         "C3.2long":"Aritzia does not use plastic packaging and vaguely aims to increase the percentage of recycled content used in packaging. Currently, e-commerce mailers are made with 70% recycled paper and shopping bags are made with 40% post-consumer content.",
         "C3.3score":1,
         "C3.3short":"E-commerce shipments are 100% recyclable.",
         "C3.3long":"Aritzia's e-Commerce shipments are 100% recyclable, but it is unknown whether other packaging can be recycled, reused or composted. No additional efforts are made to encourage consumers to reduce, reuse or recycle packaging.",
         "C3.4score":0,
         "C3.4short":"No efforts made to reduce packaging waste in the supply chain.",
         "C3.4long":"Aritzia does not describe any actions taken to reduce packaging waste throughout the distribution and manufacturing processes.",
         "C4score":7,
         "C4.1score":2,
         "C4.1short":"Uses some post-consumer recycled polyester and nylon, but amounts are unknown.",
         "C4.1long":"Aritzia currently uses some post-consumer recycled polyester made from plastic bottles and recycled nylon made from old fishnets certified by the Global Recycled Standard. However, the amounts used are unknown and Aritzia does not make any further commitments to increase the use of recycled synthetic materials.",
         "C4.2score":4,
         "C4.2short":"Donates all unsold products to various charities.",
         "C4.2long":"Aritzia aims to divert all products that are unable to be sold to partners such as Good360 and Dress for Success, away from landfills. It works with Debrand to find alternative uses for products that cannot be sold or donated. No efforts are made to increase material circularity.",
         "C4.3score":0,
         "C4.3short":"Does not offer take-back or repair programs.",
         "C4.3long":"Aritzia does not provide any take-back programs or repair services for consumers to reduce consumption. No additional efforts are taken to extend the first life of products.",
         "C4.4score":1,
         "C4.4short":"Tracks waste metrics for key suppliers, but lacks initiatives.",
         "C4.4long":"Aritzia has not set goals and makes no efforts to work with suppliers to promote material circularity and reduce waste across the supply chain. However, it uses the Higg Facility Environmental Module for 60% of its finished good apparel factories to track supply chain material waste."
      }
   ]
}
```

11. Get Company D Details
- URL: /companydetailsD
- Method: Post
- Params: ?0=Aritzia
- Return
``` json
{
   "rows":[
      {
         "ID":6,
         "IndustryStandardsID":1,
         "CompanyID":6,
         "Dscore":37,
         "D1score":9,
         "D1.1score":6,
         "D1.1short":"Aims to use 50% sustainably-sourced cotton by 2025.",
         "D1.1long":"Aritzia currently sources 20% of its cotton from Better Cotton Initiative certified sources and it's Denim Forum line uses organic cotton certified to the Global Organic Textiles Standard and the Organic Cotton Standard. Aritzia commits to use 50% sustainably produced cotton by 2020, but progress is unknown and no commitments are made towards sourcing recycled cotton.",
         "D1.2score":3,
         "D1.2short":"Partners with the ILO but does not pledge against Uzbek and Turkmen cotton.",
         "D1.2long":"Aritzia traces the original sources of all cotton through its Materials Sourcing Policy, but did not sign any pledges to prevent sourcing from countries with a high risk of forced labour. Aritzia is partnered with the International Labour Organization to protect worker's rights, but no additional initiatives are taken.",
         "D2score":10,
         "D2.1score":1,
         "D2.1short":"Vaguely commits to sourcing viscose and wood-based materials sustainably.",
         "D2.1long":"Aritzia commits to use sustainably-sourced viscose and wood-based materials, but has not set a time bound goal or target. Current breakdowns are unknown.",
         "D2.2score":3,
         "D2.2short":"Uses some sustainably produced packaging, but lacks goals.",
         "D2.2long":"Aritzia has not made commitments to incorporate sustainably procured paper into their packaging. All wooden hangers are Forest Stewardship Council certified and online shipment mailers are made out of 70% recycled materials.",
         "D2.3score":6,
         "D2.3short":"Partners with Canopy Style and will not source from endangered forests.",
         "D2.3long":"Aritzia has made a commitment to ensure that all paper-based packaging does not include fibres sourced from ancient or endangered forests by the end of 2022. Aritzia is also partnered with Canopy's Back4Good Initiative, which aims to develop sustainable packaging solutions.",
         "D3score":18,
         "D3.1score":2,
         "D3.1short":"Requires suppliers to sign onto animal welfare standards.",
         "D3.1long":"Aritzia requires suppliers to sign its Materials Sourcing Policy, which outlines the standards for sourcing raw materials including animal welfare standards. However, Aritzia has not implemented any processes to ensure implementation of such standards.",
         "D3.2score":0,
         "D3.2short":"No policies or goals to use sustainably procured leather.",
         "D3.2long":"Aritzia does not have policies governing the use of leather and has not set goals to source recycled or sustainably produced leather. Current leather sources are unknown.",
         "D3.3score":10,
         "D3.3short":"Has banned the use of fur.",
         "D3.3long":"Aritzia prohibits the use of fur and angora hair. Aritzia does not sell any products that are made from or contain real fur.",
         "D3.4score":0,
         "D3.4short":"No policies or goals to source sustainably produced wool.",
         "D3.4long":"Aritzia does not have policies governing the source of wool and has not set goals towards sourcing recycled or sustainably produced wool. Current wool sources are unknown.",
         "D3.5score":6,
         "D3.5short":"Uses 100% sustainably produced down.",
         "D3.5long":"Aritzia will not use down sourced from live plucked or force fed birds and currently sources 100% Responsible Down Standard certified down. However, Aritzia has not made any commitments to increase use of recycled down."
      }
   ]
}
```

12. Get Score Denominator
- URL: /scoredenominator
- Method: Get
- Params: None
- Return
```

```

13. Get Company's Total Score
- URL: /companyTotalScores
- Method: Get
- Params: ?company=Uniqlo
- Return
```json
[
  {
    "Ascore": 52,
    "Bscore": 50,
    "Cscore": 45,
    "Dscore": 32
  }
]
```

## Citations

13. Get Citation Information for Each Brand in Detailed Breakdowns
- URL: /citationsLong
- Method: Post
- Params: ?0=Aritzia
- Return
``` json
[
   {
      "ID":12,
      "RelationalID":6,
      "Type":"A1.1",
      "Author":null,
      "Title":"The Aritzia Code of Conduct",
      "PublishingGroup":"Aritzia",
      "Date":"2017",
      "Pages":"page 6",
      "URL":null
   },
   {
      "ID":73,
      "RelationalID":6,
      "Type":"A1.2",
      "Author":null,
      "Title":"The Aritzia Code of Conduct",
      "PublishingGroup":"Aritzia",
      "Date":"2017",
      "Pages":"page 7",
      "URL":null
   },
   {
      "ID":180,
      "RelationalID":6,
      "Type":"A2.2",
      "Author":null,
      "Title":"Leadership & Governance: Board of Directors & Governance",
      "PublishingGroup":"Aritzia",
      "Date":"2021",
      "Pages":null,
      "URL":null
   },
   {
      "ID":181,
      "RelationalID":6,
      "Type":"A2.2",
      "Author":null,
      "Title":"Leadership & Governance: Executive Team",
      "PublishingGroup":"Aritzia",
      "Date":"2021",
      "Pages":null,
      "URL":null
   },
   {
      "ID":287,
      "RelationalID":6,
      "Type":"A3.1",
      "Author":null,
      "Title":"Real Change Starts From Within",
      "PublishingGroup":"Aritzia",
      "Date":"2020",
      "Pages":null,
      "URL":null
   },
   {
      "ID":355,
      "RelationalID":6,
      "Type":"A3.3",
      "Author":null,
      "Title":"Real Change Starts From Within",
      "PublishingGroup":"Aritzia",
      "Date":"2020",
      "Pages":null,
      "URL":null
   },
   {
      "ID":432,
      "RelationalID":6,
      "Type":"A4.1",
      "Author":null,
      "Title":"Real Change Starts From Within",
      "PublishingGroup":"Aritzia",
      "Date":"2020",
      "Pages":null,
      "URL":null
   },
   {
      "ID":478,
      "RelationalID":6,
      "Type":"A4.2",
      "Author":null,
      "Title":"Multi-Year Accessibility Plan and Policies for Aritzia",
      "PublishingGroup":"Aritzia",
      "Date":"2021",
      "Pages":null,
      "URL":null
   },
   {
      "ID":518,
      "RelationalID":6,
      "Type":"A4.3",
      "Author":null,
      "Title":"Women's Fashion Boutique | Aritzia",
      "PublishingGroup":"Aritzia",
      "Date":"2021",
      "Pages":null,
      "URL":null
   },
   {
      "ID":519,
      "RelationalID":6,
      "Type":"A4.3",
      "Author":null,
      "Title":"Real Change Starts From Within",
      "PublishingGroup":"Aritzia",
      "Date":"2020",
      "Pages":null,
      "URL":null
   },
   {
      "ID":618,
      "RelationalID":6,
      "Type":"B1.1",
      "Author":null,
      "Title":"California Transparency Act: California Transparency in Supply Chains Act",
      "PublishingGroup":"Aritzia",
      "Date":"2021",
      "Pages":null,
      "URL":null
   },
   {
      "ID":619,
      "RelationalID":6,
      "Type":"B1.1",
      "Author":null,
      "Title":"Corporate Responsibility: Supplier Code of Conduct",
      "PublishingGroup":"Aritzia",
      "Date":"2021",
      "Pages":null,
      "URL":null
   },
   {
      "ID":712,
      "RelationalID":6,
      "Type":"B1.2",
      "Author":null,
      "Title":"California Transparency Act: California Transparency in Supply Chains Act",
      "PublishingGroup":"Aritzia",
      "Date":"2021",
      "Pages":null,
      "URL":null
   },
   {
      "ID":713,
      "RelationalID":6,
      "Type":"B1.2",
      "Author":null,
      "Title":"Corporate Responsibility: Supplier Code of Conduct",
      "PublishingGroup":"Aritzia",
      "Date":"2021",
      "Pages":null,
      "URL":null
   },
   {
      "ID":714,
      "RelationalID":6,
      "Type":"B1.2",
      "Author":null,
      "Title":"Sustainability: Product",
      "PublishingGroup":"Aritzia",
      "Date":"2021",
      "Pages":null,
      "URL":null
   },
   {
      "ID":859,
      "RelationalID":6,
      "Type":"B2.1",
      "Author":null,
      "Title":"California Transparency Act: California Transparency in Supply Chains Act",
      "PublishingGroup":"Aritzia",
      "Date":"2021",
      "Pages":null,
      "URL":null
   },
   {
      "ID":860,
      "RelationalID":6,
      "Type":"B2.1",
      "Author":null,
      "Title":"Corporate Responsibility: Supplier Code of Conduct",
      "PublishingGroup":"Aritzia",
      "Date":"2021",
      "Pages":null,
      "URL":null
   },
   {
      "ID":954,
      "RelationalID":6,
      "Type":"B2.2",
      "Author":null,
      "Title":"California Transparency Act: California Transparency in Supply Chains Act",
      "PublishingGroup":"Aritzia",
      "Date":"2021",
      "Pages":null,
      "URL":null
   },
   {
      "ID":955,
      "RelationalID":6,
      "Type":"B2.2",
      "Author":null,
      "Title":"Sustainability: Product",
      "PublishingGroup":"Aritzia",
      "Date":"2021",
      "Pages":null,
      "URL":null
   },
   {
      "ID":1092,
      "RelationalID":6,
      "Type":"B3.1",
      "Author":null,
      "Title":"Corporate Responsibility: Supplier Code of Conduct",
      "PublishingGroup":"Aritzia",
      "Date":"2021",
      "Pages":null,
      "URL":null
   },
   {
      "ID":1223,
      "RelationalID":6,
      "Type":"B3.3",
      "Author":null,
      "Title":"Corporate Responsibility: Supplier Code of Conduct",
      "PublishingGroup":"Aritzia",
      "Date":"2021",
      "Pages":null,
      "URL":null
   },
   {
      "ID":1289,
      "RelationalID":6,
      "Type":"B3.4",
      "Author":null,
      "Title":"California Transparency Act: California Transparency in Supply Chains Act",
      "PublishingGroup":"Aritzia",
      "Date":"2021",
      "Pages":null,
      "URL":null
   },
   {
      "ID":1290,
      "RelationalID":6,
      "Type":"B3.4",
      "Author":null,
      "Title":"Corporate Responsibility: Supplier Code of Conduct",
      "PublishingGroup":"Aritzia",
      "Date":"2021",
      "Pages":null,
      "URL":null
   },
   {
      "ID":1376,
      "RelationalID":6,
      "Type":"B4.1",
      "Author":null,
      "Title":"California Transparency Act: California Transparency in Supply Chains Act",
      "PublishingGroup":"Aritzia",
      "Date":"2021",
      "Pages":null,
      "URL":null
   },
   {
      "ID":1377,
      "RelationalID":6,
      "Type":"B4.1",
      "Author":null,
      "Title":"Corporate Responsibility: Supplier Code of Conduct",
      "PublishingGroup":"Aritzia",
      "Date":"2021",
      "Pages":null,
      "URL":null
   },
   {
      "ID":1481,
      "RelationalID":6,
      "Type":"B4.2",
      "Author":null,
      "Title":"California Transparency Act: California Transparency in Supply Chains Act",
      "PublishingGroup":"Aritzia",
      "Date":"2021",
      "Pages":null,
      "URL":null
   },
   {
      "ID":1482,
      "RelationalID":6,
      "Type":"B4.2",
      "Author":null,
      "Title":"Corporate Responsibility: Supplier Code of Conduct",
      "PublishingGroup":"Aritzia",
      "Date":"2021",
      "Pages":null,
      "URL":null
   },
   {
      "ID":1565,
      "RelationalID":6,
      "Type":"B4.3",
      "Author":null,
      "Title":"California Transparency Act: California Transparency in Supply Chains Act",
      "PublishingGroup":"Aritzia",
      "Date":"2021",
      "Pages":null,
      "URL":null
   },
   {
      "ID":1566,
      "RelationalID":6,
      "Type":"B4.3",
      "Author":null,
      "Title":"Corporate Responsibility: Supplier Code of Conduct",
      "PublishingGroup":"Aritzia",
      "Date":"2021",
      "Pages":null,
      "URL":null
   },
   {
      "ID":1655,
      "RelationalID":6,
      "Type":"C1.1",
      "Author":null,
      "Title":"Our Product",
      "PublishingGroup":"Aritzia",
      "Date":"2020",
      "Pages":null,
      "URL":null
   },
   {
      "ID":1656,
      "RelationalID":6,
      "Type":"C1.1",
      "Author":null,
      "Title":"Corporate Sustainability",
      "PublishingGroup":"Aritzia",
      "Date":"2020",
      "Pages":null,
      "URL":null
   },
   {
      "ID":1714,
      "RelationalID":6,
      "Type":"C1.2",
      "Author":null,
      "Title":"Corporate Sustainability",
      "PublishingGroup":"Aritzia",
      "Date":"2020",
      "Pages":null,
      "URL":null
   },
   {
      "ID":1715,
      "RelationalID":6,
      "Type":"C1.2",
      "Author":null,
      "Title":"Our Product",
      "PublishingGroup":"Aritzia",
      "Date":"2020",
      "Pages":null,
      "URL":null
   },
   {
      "ID":1793,
      "RelationalID":6,
      "Type":"C1.3",
      "Author":null,
      "Title":"Corporate Sustainability",
      "PublishingGroup":"Aritzia",
      "Date":"2020",
      "Pages":null,
      "URL":null
   },
   {
      "ID":1794,
      "RelationalID":6,
      "Type":"C1.3",
      "Author":null,
      "Title":"Our Supply Chain",
      "PublishingGroup":"Aritzia",
      "Date":"2020",
      "Pages":null,
      "URL":null
   },
   {
      "ID":1857,
      "RelationalID":6,
      "Type":"C1.4",
      "Author":null,
      "Title":"Corporate Sustainability",
      "PublishingGroup":"Aritzia",
      "Date":"2020",
      "Pages":null,
      "URL":null
   },
   {
      "ID":1858,
      "RelationalID":6,
      "Type":"C1.4",
      "Author":null,
      "Title":"Our Supply Chain",
      "PublishingGroup":"Aritzia",
      "Date":"2020",
      "Pages":null,
      "URL":null
   },
   {
      "ID":1912,
      "RelationalID":6,
      "Type":"C2.1",
      "Author":null,
      "Title":"Our Product",
      "PublishingGroup":"Aritzia",
      "Date":"2020",
      "Pages":null,
      "URL":null
   },
   {
      "ID":1960,
      "RelationalID":6,
      "Type":"C2.2",
      "Author":null,
      "Title":"Corporate Sustainability",
      "PublishingGroup":"Aritzia",
      "Date":"2020",
      "Pages":null,
      "URL":null
   },
   {
      "ID":2015,
      "RelationalID":6,
      "Type":"C2.3",
      "Author":null,
      "Title":"Corporate Sustainability",
      "PublishingGroup":"Aritzia",
      "Date":"2020",
      "Pages":null,
      "URL":null
   },
   {
      "ID":2016,
      "RelationalID":6,
      "Type":"C2.3",
      "Author":null,
      "Title":"Our Product",
      "PublishingGroup":"Aritzia",
      "Date":"2020",
      "Pages":null,
      "URL":null
   },
   {
      "ID":2092,
      "RelationalID":6,
      "Type":"C2.4",
      "Author":null,
      "Title":"Our Product",
      "PublishingGroup":"Aritzia",
      "Date":"2020",
      "Pages":null,
      "URL":null
   },
   {
      "ID":2093,
      "RelationalID":6,
      "Type":"C2.4",
      "Author":null,
      "Title":"Our Supply Chain",
      "PublishingGroup":"Aritzia",
      "Date":"2020",
      "Pages":null,
      "URL":null
   },
   {
      "ID":2159,
      "RelationalID":6,
      "Type":"C3.1",
      "Author":null,
      "Title":"Our Supply Chain",
      "PublishingGroup":"Aritzia",
      "Date":"2021",
      "Pages":null,
      "URL":null
   },
   {
      "ID":2198,
      "RelationalID":6,
      "Type":"C3.2",
      "Author":null,
      "Title":"Aritzia X Pack4Good",
      "PublishingGroup":"Aritzia",
      "Date":"2021",
      "Pages":null,
      "URL":null
   },
   {
      "ID":2199,
      "RelationalID":6,
      "Type":"C3.2",
      "Author":null,
      "Title":"Our Supply Chain",
      "PublishingGroup":"Aritzia",
      "Date":"2021",
      "Pages":null,
      "URL":null
   },
   {
      "ID":2239,
      "RelationalID":6,
      "Type":"C3.3",
      "Author":null,
      "Title":"Aritzia X Pack4Good",
      "PublishingGroup":"Aritzia",
      "Date":"2021",
      "Pages":null,
      "URL":null
   },
   {
      "ID":2240,
      "RelationalID":6,
      "Type":"C3.3",
      "Author":null,
      "Title":"Our Supply Chain",
      "PublishingGroup":"Aritzia",
      "Date":"2021",
      "Pages":null,
      "URL":null
   },
   {
      "ID":2288,
      "RelationalID":6,
      "Type":"C3.4",
      "Author":null,
      "Title":"Aritzia X Pack4Good",
      "PublishingGroup":"Aritzia",
      "Date":"2021",
      "Pages":null,
      "URL":null
   },
   {
      "ID":2332,
      "RelationalID":6,
      "Type":"C4.1",
      "Author":null,
      "Title":"Sustainability: Product",
      "PublishingGroup":"Aritzia",
      "Date":"2021",
      "Pages":"page 2",
      "URL":null
   },
   {
      "ID":2373,
      "RelationalID":6,
      "Type":"C4.2",
      "Author":null,
      "Title":"Our Supply Chain",
      "PublishingGroup":"Aritzia",
      "Date":"2021",
      "Pages":null,
      "URL":null
   },
   {
      "ID":2443,
      "RelationalID":6,
      "Type":"C4.4",
      "Author":null,
      "Title":"Our Supply Chain",
      "PublishingGroup":"Aritzia",
      "Date":"2021",
      "Pages":null,
      "URL":null
   },
   {
      "ID":2506,
      "RelationalID":6,
      "Type":"D1.1",
      "Author":null,
      "Title":"Sustainability: Environmental",
      "PublishingGroup":"Aritzia",
      "Date":"2020",
      "Pages":null,
      "URL":null
   },
   {
      "ID":2567,
      "RelationalID":6,
      "Type":"D1.2",
      "Author":null,
      "Title":"Supplier Code of Conduct",
      "PublishingGroup":"Aritzia",
      "Date":"2020",
      "Pages":null,
      "URL":null
   },
   {
      "ID":2646,
      "RelationalID":6,
      "Type":"D2.1",
      "Author":null,
      "Title":"Sustainability: Product",
      "PublishingGroup":"Aritzia",
      "Date":"2021",
      "Pages":"page 2",
      "URL":null
   },
   {
      "ID":2688,
      "RelationalID":6,
      "Type":"D2.2",
      "Author":null,
      "Title":"Sustainability: Operations",
      "PublishingGroup":"Aritzia",
      "Date":"2021",
      "Pages":"page 2",
      "URL":null
   },
   {
      "ID":2733,
      "RelationalID":6,
      "Type":"D2.3",
      "Author":null,
      "Title":"Aritzia X Pack4Good",
      "PublishingGroup":"Aritzia",
      "Date":"2021",
      "Pages":null,
      "URL":null
   },
   {
      "ID":2734,
      "RelationalID":6,
      "Type":"D2.3",
      "Author":null,
      "Title":"Sustainability: Operations",
      "PublishingGroup":"Aritzia",
      "Date":"2021",
      "Pages":"page 2",
      "URL":null
   },
   {
      "ID":2735,
      "RelationalID":6,
      "Type":"D2.3",
      "Author":null,
      "Title":"Sustainability: Product",
      "PublishingGroup":"Aritzia",
      "Date":"2021",
      "Pages":"page 2",
      "URL":null
   },
   {
      "ID":2797,
      "RelationalID":6,
      "Type":"D3.1",
      "Author":null,
      "Title":"California Transparency Act: California Transparency in Supply Chains Act",
      "PublishingGroup":"Aritzia",
      "Date":"2021",
      "Pages":null,
      "URL":null
   },
   {
      "ID":2798,
      "RelationalID":6,
      "Type":"D3.1",
      "Author":null,
      "Title":"Sustainability: Product",
      "PublishingGroup":"Aritzia",
      "Date":"2021",
      "Pages":"page 2",
      "URL":null
   },
   {
      "ID":2879,
      "RelationalID":6,
      "Type":"D3.3",
      "Author":null,
      "Title":"Sustainability: Product",
      "PublishingGroup":"Aritzia",
      "Date":"2021",
      "Pages":"page 2",
      "URL":null
   },
   {
      "ID":2960,
      "RelationalID":6,
      "Type":"D3.5",
      "Author":null,
      "Title":"Sustainability: Product",
      "PublishingGroup":"Aritzia",
      "Date":"2021",
      "Pages":"page 2",
      "URL":null
   },
   {
      "ID":2961,
      "RelationalID":6,
      "Type":"D3.5",
      "Author":null,
      "Title":"Material Change Insights Report 2019",
      "PublishingGroup":"Textile Exchange",
      "Date":"May 2020",
      "Pages":"page 30",
      "URL":null
   }
]
```

14. Get Citation Information for Each Brand in Detailed Breakdowns
- URL: /citations
- Method: Post
- Params: ?0=Aritzia&1=15&2=N
- Return
``` json
[
   {
      "ID":3198,
      "RelationalID":15,
      "Type":"N",
      "Author":"Molko, David",
      "Title":"\"Former Aritzia Manager Calls Out Company to Do More to Address Racism\"",
      "PublishingGroup":"CTV News Vancouver",
      "Date":"June 2020",
      "Pages":null,
      "URL":"https://bc.ctvnews.ca/former-aritzia-manager-calls-out-company-to-do-more-to-address-racism-1.4977175"
   },
   {
      "ID":3199,
      "RelationalID":15,
      "Type":"N",
      "Author":"Tejeda, Chloe",
      "Title":"\"Former Aritzia Employees Call Out Company's Anti Bias Racism\"",
      "PublishingGroup":"Huffington Post Canada",
      "Date":"June 2020",
      "Pages":null,
      "URL":"https://www.huffingtonpost.ca/entry/aritzia-black-employees-racism_ca_5ed5672fc5b66a1b4ba8c47f"
   },
   {
      "ID":3200,
      "RelationalID":15,
      "Type":"N",
      "Author":"Tejada, Chloe",
      "Title":"\"Former Aritzia Employees Call Out Company's Anti-Black Racism\"",
      "PublishingGroup":"Huffington Post",
      "Date":"June 2020",
      "Pages":null,
      "URL":"https://www.huffingtonpost.ca/entry/aritzia-black-employees-racism_ca_5ed5672fc5b66a1b4ba8c47f"
   }
]
```

15. Get Citation Information for Each Brand in Detailed Breakdowns
- URL: /citationsFacts
- Method: Post
- Params: ?0=Aritzia&1=23&2=F
- Return
``` json
[
   {
      "ID":3036,
      "RelationalID":23,
      "Type":"F",
      "Author":null,
      "Title":"Aritzia Diversity and Inclusion",
      "PublishingGroup":"Aritzia",
      "Date":"2020",
      "Pages":null,
      "URL":null
   }
]
```

## Company Details

16. Get All Company Names
- URL: /allcompanies
- Method: Get
- Params: None
- Return
``` json
  {
   "rows":[
      {
         "Name":"Abercrombie & Fitch"
      },
      {
         "Name":"Adidas"
      },
      {
         "Name":"Reebok"
      },
      {
         "Name":"Aldo"
      },
      {
         "Name":"American Eagle"
      },
      {
         "Name":"Aritzia"
      },
      {
         "Name":"Boohoo"
      },
      {
         "Name":"Nasty Gal"
      },
      {
         "Name":"PrettyLittleThing"
      },
      {
         "Name":"Columbia"
      },
      {
         "Name":"Forever 21"
      },
      {
         "Name":"Gap"
      },
      {
         "Name":"Banana Republic"
      },
      {
         "Name":"Old Navy"
      },
      {
         "Name":"Guess"
      },
      {
         "Name":"H&M"
      },
      {
         "Name":"Champion"
      },
      {
         "Name":"Zara"
      },
      {
         "Name":"Victoria's Secret"
      },
      {
         "Name":"Levi's"
      },
      {
         "Name":"Lululemon"
      },
      {
         "Name":"New Balance"
      },
      {
         "Name":"Nike"
      },
      {
         "Name":"Converse"
      },
      {
         "Name":"Patagonia"
      },
      {
         "Name":"Calvin Klein"
      },
      {
         "Name":"Tommy Hilfiger"
      },
      {
         "Name":"Ralph Lauren"
      },
      {
         "Name":"Club Monaco"
      },
      {
         "Name":"Steve Madden"
      },
      {
         "Name":"Under Armour"
      },
      {
         "Name":"Uniqlo"
      },
      {
         "Name":"The North Face"
      },
      {
         "Name":"Vans"
      }
   ]
}
```

17. Get Company's Name and Other Info
- URL: /companyname
- Method: Post
- Params: ?0=Aritzia
- Return
``` json
[
   {
      "ID":6,
      "Name":"Aritzia",
      "Subsidiary":null,
      "Category":"Women",
      "Description":"is a women's apparel retailer with over 100 stores across North America and headquartered in Vancouver, Canada.",
      "Logo":"https://github.com/sophiasharifi/monestco/blob/main/images/logos/ARITZIA.png?raw=true",
      "IndustryStandardsID":1,
      "TotalScore":33,
      "A_ID":6,
      "B_ID":6,
      "C_ID":6,
      "D_ID":6,
      "SimilarCompany1":"Zara",
      "SimilarCompany2":"H&M",
      "SimilarCompany3":"Club Monaco",
      "SimilarCompany4":"Victoria's Secret"
   }
]
```
## Similar Company
1. Get Total Scores for similar companies
- URL: /api/v1/similarcompanies
- Method: GET
- Params:  ?company=Adidas
- Return: 200 
```json
{
  "1": {
    "name": "Nike",
    "score": 0
  },
  "2": {
    "name": "Under Armour",
    "score": 0
  },
  "3": {
    "name": "Reebok",
    "score": 55
  },
  "4": {
    "name": "New Balance",
    "score": 0
  }
}
```
- Return: 400
```json
{
  "error": "company Adida cannot find"
}
```

3. Return the 4 scores of the similar company 1
- URL: /similiarCompany1
- Method: Post
- Params: ?0=Aritzia
- Return
``` json
[
   {
      "Ascore":55,
      "Bscore":38,
      "Cscore":56,
      "Dscore":49
   }
]
```

19. Return the 4 scores of the similar company 2
- URL: /similiarCompany2
- Method: Post
- Params: ?0=Aritzia
- Return
``` json
[
   {
      "Ascore":62,
      "Bscore":50,
      "Cscore":71,
      "Dscore":74
   }
]
```

20. Return the 4 scores of the similar company 3
- URL: /similiarCompany3
- Method: Post
- Params: ?0=Aritzia
- Return
``` json
[
   {
      "Ascore":65,
      "Bscore":42,
      "Cscore":47,
      "Dscore":56
   }
]
```

21. Return the 4 scores of the similar company 4
- URL: /similiarCompany4
- Method: Post
- Params: ?0=Aritzia
- Return
``` json
[
   {
      "Ascore":42,
      "Bscore":35,
      "Cscore":30,
      "Dscore":28
   }
]
```
22. Get Some Company Info
- URL: /somecompanyinfo
- Method: Post
- Params: ?0=Aritzia
- Return

```

```

23. Get Company Facts
- URL: /facts
- Method: Post
- Params: ?0=Aritzia
- Return
``` json
[
   {
      "ID":23,
      "CompanyID":6,
      "Heading":"Aritzia becomes the founding sponsor of the CBC's Black Women's Journalism Fellowship.",
      "Summary":"Aritzia has introduced the first Canadian Black Women's Journalism Fellowship, a program that offers mentorship opportunities for young female journalists to work in a CBC newsroom for six months."
   },
   {
      "ID":24,
      "CompanyID":6,
      "Heading":"Aritzia provides 100,000 healthcare workers clothing packages.",
      "Summary":"In 2020, Aritzia began its Community Care Program to recognize and thank frontline workers. Aritzia provided 100,000 healthcare workers with custom-designed clothing packages (leggings and t-shirts) to support their fight against COVID-19."
   },
   {
      "ID":25,
      "CompanyID":6,
      "Heading":"Aritzia donates 1,000 Super Puff jackets to women in need.",
      "Summary":"Aritzia teams up with YWCA Canada and The Big Sister's program to provide 1,000 Super Puff jackets to women and girls all across Canada. This initiative is part of the company's Community Giving Program, which aims to empower members of the local community."
   },
   {
      "ID":26,
      "CompanyID":6,
      "Heading":"Aritzia ranked by the Textile Exchange as an industry leader in responsible down use.",
      "Summary":"The Textile Exchange, a global non-profit working to transform sustainable fibres, granted Aritzia a level four ranking in its annual Material Change Insights Report. A level 4 ranking is awarded to companies that are pioneers for change in their industry."
   },
   {
      "ID":27,
      "CompanyID":6,
      "Heading":"Aritzia donated $100,000 to the National Association for the Advancement of Coloured People",
      "Summary":"Aritzia donated $100,000 to the National Association for the Advancement of Coloured People. The company publicly supported BLM on Instagram, and established an Executive Diversity and Inclusion Committee."
   }
]
```

24. Get Company News
- URL: /news
- Method: Post
- Params: ?0=Aritzia
- Return
``` json
[
   {
      "ID":15,
      "CompanyID":6,
      "Photo":"https://github.com/sophiasharifi/monestco/blob/main/images/artizia/_Former%20Aritzia%20manager%20calls%20out%20company%20to%20do%20more%20to%20address%20racism_.jpg?raw=true",
      "Year":2020,
      "Category":"Diversity & Inclusion",
      "Title":"Former Manager Demands Aritzia to Do More to Address Racism",
      "Summary":"In the late spring of 2020, a senior level manager at Aritzia accused the retailer's support for anti-racism movements as being “performative\" for consumers. The Black female manager, who quit Aritzia shortly afterward, indicated that many employees of colour, including herself, were treated differently at work, especially at the management level. The former employee suggested that although Aritzia attempts to follow the status quo with movements such as Black Lives Matter, the firm does not implement and enforce inclusion and diversity measures within their own workplace. Other employees were given inappropriate labels from management, such as being called \"sassy, blunt, defensive.\" In addition, management would give these employees more criticism on their work performances and repeatedly interrupt the workers while they were helping customers.",
      "IssueAddressed":"Yes",
      "IssueAddressedExplanation":"Aritzia publicly commented on the issue and began investigating anti-discrimination training measures.",
      "ResponsibilityTaken":"Yes",
      "ResponsibilityTakenExplanation":"Aritzia immediately made changes to its employee training programs and workplace culture. The company provided detailed copies of employee handbooks to the public to demonstrate that the company had trained employees to report racism and discrimination. The company invested $1M USD into diversity and inclusion programs in an effort to create real and meaningful change, rather than act performatively. The company also expanded harassment training, made diversity and inclusion training programs mandatory, and hired dedicated Diversity and Inclusion experts to develop a focused curriculum."
   },
   {
      "ID":16,
      "CompanyID":6,
      "Photo":"https://github.com/sophiasharifi/monestco/blob/main/images/artizia/_How%20Aritzia%20Thrived%20During%20Covid%2019%20and%20What_s%20Next_%20.jpeg?raw=true",
      "Year":2020,
      "Category":"Covid-19 Response",
      "Title":"How Aritzia Thrived During the Pandemic and What's Next",
      "Summary":"In 2020, Aritzia pledged to not lay off any employees despite the large decrease in retail sales brought by the pandemic. The company did, however, temporarily close stores at the beginning of March to protect its employees, models, and customers. To accommodate these closures and the resulting increase in delivery times, Aritzia extended its sales returns and exchanges policy from 14 days after purchase to 30 days. Consequently, the company was able to sell the majority of its inventory from the previous and current year, while ensuring its customers were satisfied and that employees kept their jobs. Stores were reopened and maintained between the months of May and September.",
      "IssueAddressed":"Yes",
      "IssueAddressedExplanation":"Aritzia has publicly commented on the issue and pledged to launch various programs and initiatives to support pandemic recovery.",
      "ResponsibilityTaken":"Yes",
      "ResponsibilityTakenExplanation":"An open letter from the company on April 4th highlighted the firm's efforts to follow government safety protocols by enforcing social distancing measures and providing Personal Protective Equipment (PPE) to employees and customers shopping in-store. In addition, Aritzia launched the Aritzia Community Care Program, which gifted customized clothes to Canadian healthcare workers (over $20M USD worth of product), and created additional sponsorship programs for customers to help female healthcare workers. The firm also launched the Aritzia Community Relief Fund (ACRF), where 100% of the donations collected were distributed to employees and their facilities. Internally, the company cut leadership pay by 25% and forfeited the cash portion of the Board of Directors fees to ensure that the ACRF successfully supported employees."
   }
]
```

