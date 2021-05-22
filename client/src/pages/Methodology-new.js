import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import "../styles/Methodology-new.css";
import logo1 from "../assets/1.svg";
import logo2 from "../assets/2.svg";
import logo3 from "../assets/3.svg";
import logo4 from "../assets/4.svg";
import logo5 from "../assets/5.svg";
import logo6 from "../assets/6.svg";
import logo7 from "../assets/7.svg";
import logo8 from "../assets/8.svg";
import logo9 from "../assets/9.svg";
import logo10 from "../assets/10.svg";

const Methodology = () => {
  const [showNav, setShowNav] = useState(false)
  const [tabView, setTabView] = useState(false)
  const [visibleSection, setVisibleSection] = useState()

  const overViewRef = useRef(null);
  const scopeOfBrandRef = useRef(null);
  const researchPrinciplesRef = useRef(null);
  const researchMethodologyRef = useRef(null);
  const diversityInclusionRef = useRef(null);
  const workerExploitationRef = useRef(null);
  const wastePollutionRef = useRef(null);
  const ethicalSourcingRef = useRef(null);
  const informationSourcesRef = useRef(null);

  const sectionRefs = [
    { section: "overView", ref: overViewRef },
    { section: "scopeOfBrand", ref: scopeOfBrandRef },
    { section: "researchPrinciples", ref: researchPrinciplesRef },
    { section: "researchMethodology", ref: researchMethodologyRef },
    { section: "diversityInclusion", ref: diversityInclusionRef },
    { section: "workerExploitation", ref: workerExploitationRef },
    { section: "wastePollution", ref: wastePollutionRef },
    { section: "ethicalSourcing", ref: ethicalSourcingRef },
    { section: "informationSources", ref: informationSourcesRef },
  ];

  const getDimensions = ele => {
    const { height } = ele.getBoundingClientRect();
    const offsetTop = ele.offsetTop;
    const offsetBottom = offsetTop + height;
    
    return {
      height,
      offsetTop,
      offsetBottom,
    };
  };


  useEffect(() => {
    const handleScroll = () => {      
      const scrollPosition = window.scrollY;
      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < (offsetBottom + 100);
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } 
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth > 850) {
        setTabView(false);
      } else {
        setTabView(true);
        setShowNav(false);
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const MethodologyNav = () => {

    const scrollTo = ele => {
      const element = document.getElementById(ele.current.id);
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
  
      // var element = document.getElementById(ele.current.id);
      // var headerOffset = 80;
    	// var elementPosition = element.getBoundingClientRect().top;
      // var offsetPosition = elementPosition - headerOffset;
      
      // window.scrollTo({
      //     top: offsetPosition,
      //     behavior: "smooth"
      // });   

      setShowNav(false);
      // ele.current.scrollIntoView({
      //   behavior: "smooth",
      //   block: "start",
      // });
    };

    return(
        <div className={`Methodology-left`}>
          <div onClick={() => scrollTo(overViewRef)} className={`Methodology-table-title ${visibleSection === 'overView' ? "title-selected" : ""}`}>Overview</div>
          <div onClick={() => scrollTo(scopeOfBrandRef)} className={`Methodology-table-sub-title ${visibleSection === 'scopeOfBrand' ? "title-selected" : ""} `}>Scope of Brand</div>
          <div onClick={() => scrollTo(researchPrinciplesRef)} className={`Methodology-table-sub-title ${visibleSection === 'researchPrinciples' ? "title-selected" : ""} `}>Research Principles</div>
          <div onClick={() => scrollTo(researchMethodologyRef)} className={`Methodology-table-title ${visibleSection === 'researchMethodology' ? "title-selected" : ""}`}>Research Methodology</div>
          <div onClick={() => scrollTo(diversityInclusionRef)} className={`Methodology-table-sub-title ${visibleSection === 'diversityInclusion' ? "title-selected" : ""} `}>Diversity & Inclusion</div>
          <div onClick={() => scrollTo(workerExploitationRef)} className={`Methodology-table-sub-title ${visibleSection === 'workerExploitation' ? "title-selected" : ""} `}>Worker Exploitation</div>
          <div onClick={() => scrollTo(wastePollutionRef)} className={`Methodology-table-sub-title ${visibleSection === 'wastePollution' ? "title-selected" : ""} `}>Waste & Pollution</div>
          <div onClick={() => scrollTo(ethicalSourcingRef)} className={`Methodology-table-sub-title ${visibleSection === 'ethicalSourcing' ? "title-selected" : ""} `}>Ethical Sourcing</div>
          <div onClick={() => scrollTo(informationSourcesRef)} className={`Methodology-table-title ${visibleSection === 'informationSources' ? "title-selected" : ""}`}>Information Sources</div>
        </div>
    )
  }

  return (
    <div className={`Methodology-new ${showNav && 'Methodology-new-blur' }` }>
        <div className='Methodology-index'><div onClick={() => setShowNav(!showNav)} className={`Methodology-index-btn  ${showNav ? 'index-btn-active' : 'index-btn-inactive'}` }>INDEX</div></div>
      {(!tabView || showNav) && <MethodologyNav/>}
      <div className="Methodology-right">
        <div className="Methodology-heading">Methodology</div>

        <div className={`Methodology-btn-container ${showNav && 'btn-container-blur'}`}>
          <div className="Methodology-btn Methodology-btn-selected">Apparel</div>
          <div className="Methodology-btn">Tech</div>
          <div className="Methodology-btn">Fast Food</div>
          <div className="Methodology-btn">Beauty</div>
        </div>

        <div id='overview' ref={overViewRef} className="Methodology-title">Overview</div>
        <div className="Methodology-paragraph black-text">
          Monest analyzes the social and environmental metrics of brands. Our
          goal is to educate and equip consumers with data to leverage their
          purchasing power and hold brands to higher ethical standards.
        </div>
        <div className="Methodology-paragraph black-text">
          Monest aims to best inform consumers in making their purchasing
          decisions. While our scoring does not reflect the nature of each
          brand’s business model, we believe it is important to acknowledge the
          detrimental impacts of fast fashion brands and excessive consumption.
          Inherent to the fast fashion business model, the pressure to reduce
          costs and speed up production time results in cutting corners at the
          expense of workers and the environment. To decrease demand for the
          production of new clothes, we strongly encourage consumers to follow
          best practices by reducing consumption and shopping second hand when
          possible.
        </div>
        <div id='scopeOfBrand' ref={scopeOfBrandRef} className="Methodology-sub-title">Scope of Brand</div>
        <div className="Methodology-paragraph black-text">
          Monest assesses brands at the forefront of the apparel industry with
          the power and influence to become catalysts for social and
          environmental change. Consumer-facing brands are selected based on
          sector indices and benchmarks, supplemented by top performing lists in
          the fashion sector and their respective markets. Factors such as
          market capitalization, size, and North American recognition are
          prioritized in the selection process.
        </div>
        <div id='researchPrinciples' ref={researchPrinciplesRef} className="Methodology-sub-title">Research Principles</div>
        <div className="Methodology-paragraph-italic grey-text">
          The following principles guide our approach to the research process:{" "}
        </div>
        <div>
          <span className="Methodology-paragraph-highlight grey-text">
            1. Evidence-based:{" "}
          </span>
          <span className="Methodology-paragraph grey-text">
            The foundation of our research is built on a strong governance
            process. Our research process identifies and avoids potential biases
            by following a detailed methodology that mitigates the risk of
            subjectivity in qualitative research. We evaluate brands based on
            explicit statements of intent and published metrics of progress.
            Brands will not receive full scores for vague commitments without
            evidence to support their claims.{" "}
          </span>
        </div>
        <div>
          <span className="Methodology-paragraph-highlight grey-text">
            2. Transparency:{" "}
          </span>
          <span className="Methodology-paragraph grey-text">
            Our methodology acknowledges the importance of publicly disclosing
            credible and comprehensive data. We require brands to be transparent
            regarding their operations and supply chain practices in order to
            fulfill the corresponding criteria. Transparency does not equal
            sustainability, but it does enable accountability and allows
            consumers to make better informed decisions.
          </span>
        </div>
        <div>
          <span className="Methodology-paragraph-highlight grey-text">
            3. Accuracy:{" "}
          </span>
          <span className="Methodology-paragraph grey-text">
            We set high standards of quality for our research and strive for
            accuracy by employing a diligent review process. To accurately
            reflect the most relevant brand information and account for changes,
            scores will be responsively updated and revised on an annual basis.
            In the future, we plan to implement a feedback system for users and
            stakeholders to notify us of any inaccuracies to hold us
            accountable.
          </span>
        </div>

        <div id='researchMethodology' ref={researchMethodologyRef} className="Methodology-title">Research Methodology</div>
        <div className="Methodology-paragraph-italic grey-text">
          Our research methodology was created in 2020 and will be reviewed
          annually to ensure that it continues to reflect the most important
          issues and best practices within the apparel industry.
        </div>
        <div className="Methodology-paragraph">
          The foundation of our methodology centers around two core values:
        </div>

        <div className="Methodology-paragraph-highlight grey-text">
          1. Focusing on issues that matter most
        </div>
        <div className="Methodology-paragraph grey-text mb-10">
          Our research methodology prioritizes the most pressing issues
          identified within the industry based on the views of industry experts
          and NGOs. Each criteria (or issue) is weighted in proportion to the
          materiality of their impacts on the environment and people affected.
        </div>

        <div className="Methodology-paragraph-highlight grey-text">
          2. Assessing actions brands have the power to change
        </div>
        <div className="Methodology-paragraph grey-text mb-10">
          Taking a pragmatic approach, we only evaluate actions within the scope
          of a brand’s control. The scores are reflective of current brand
          performance and do not focus on historical incidences, which are
          instead showcased in our “In the News” section for users to consider.
          We believe that brands have the power to change for the better and
          designed our methodology to reflect a realistic roadmap of actions
          brands can work towards achieving.
        </div>
        <div className="Methodology-paragraph grey-text mb-10">
          Apparel brands are assessed using a scoring system that evaluates each
          brand’s performance in the following four categories: Diversity &
          Inclusion, Worker Exploitation, Waste & Pollution, and Sustainable
          Materials. Each category highlights the most prevalent issues which
          consist of actions brands can take to address the specific issue:
        </div>

        <div id='diversityInclusion' ref={diversityInclusionRef} className="Methodology-sub-title">Diversity & Inclusion</div>
        <div className="Methodology-paragraph black-text">
          Many brands with operations in North America have faced issues such as
          discrimination in their hiring practices, as well as a lack of diverse
          representation in executive leadership. In addition, many brands lack
          policies that ensure the wellbeing of underrepresented groups.
        </div>
        <div className="Methodology-paragraph grey-text">
          This category evaluates the brand on a corporate-level divided into
          four main issues: Discrimination, Gender Equality, Cultural Diversity,
          and Inclusivity. Brands are scored on their performance in the context
          of the workplace, executive leadership, and in their consumer-facing
          marketing and product design efforts.
        </div>
        <div id='workerExploitation' ref={workerExploitationRef} className="Methodology-sub-title">Worker Exploitation</div>
        <div className="Methodology-paragraph grey-text">
          Clothing production is a manufacturing-intensive process that is
          commonly outsourced to suppliers in developing countries with less
          stringent regulations. Workers in factories around the world face
          unsafe working conditions and are victims of exploitative labour
          practices.
        </div>
        <div className="Methodology-paragraph grey-text">
          This category evaluates the brand’s global supply chains and treatment
          of workers across four main issues: Child Labour, Forced Labour,
          Living Wage, and Working Conditions. Brands are scored on their supply
          chain policies, the quality of their safeguards against labour risks,
          the traceability of their supply chains, and their commitment to
          eliminating worker exploitation.
        </div>
        <div id='wastePollution' ref={wastePollutionRef} className="Methodology-sub-title">Waste & Pollution</div>
        <div className="Methodology-paragraph grey-text">
          The apparel industry is the second largest polluter in the world,
          accounting for 10% of the world’s carbon emissions. It is also the
          second largest consumer of the world’s water supply. From the
          production process to the textile waste that eventually ends up in
          landfills, apparel brands have opportunities to reduce their
          environmental impact at each step of the value chain.
        </div>
        <div className="Methodology-paragraph grey-text">
          This category evaluates the brand’s environmental management across
          the entire value chain for the following issues: Air Pollution, Water
          Pollution and Waste, Packaging Waste, and Material Waste. Brands are
          scored on their commitments, initiatives and progress disclosed across
          their owned and operated facilities as well as their supply chain.
        </div>

        <div id='ethicalSourcing' ref={ethicalSourcingRef} className="Methodology-sub-title">Ethical Sourcing</div>
        <div className="Methodology-paragraph grey-text">
          The greatest sustainability risks within textile production occur in
          the growing and extracting of raw materials. Cotton is the most common
          material used in the production of clothes, but the harvesting process
          is rampant with interconnected environmental and socio-economic risks.
          Furthermore, the lack of governance surrounding where materials are
          sourced from raises concerns for habitat biodiversity and animal
          welfare.
        </div>
        <div className="Methodology-paragraph grey-text">
          This category evaluates the brand’s sourcing practices across the most
          prevalent issues within the industry: Cotton Farming, Deforestation,
          and Animal Welfare. Brands are scored on their commitment to using
          more sustainable materials and reducing unethical practices in those
          areas.
        </div>

        <div id='informationSources' ref={informationSourcesRef} className="Methodology-title">Information Sources</div>
        <div className="Methodology-paragraph grey-text">
          Brands are assessed on publicly available information from direct and
          indirect sources.
        </div>
        <div style={{marginBottom:'10px'}}>
          <span className="Methodology-paragraph-highlight grey-text">
            1. Direct data sources{" "}
          </span>
          <span className="Methodology-paragraph grey-text">
            include all materials published by the brand or parent brand. This
            includes all information available on websites, annual reports,
            corporate responsibility reports, press releases and other direct
            publications.
          </span>
        </div>
        <div>
          <span className="Methodology-paragraph-highlight grey-text">
            
            2. Indirect data sources{" "}
          </span>
          <span className="Methodology-paragraph grey-text">
            supplement the research based on direct sources and include relevant
            information published by external organizations. This includes
            material sourced from credible third-party reports, certifications,
            standard systems and multi-stakeholder groups such as the following:
          </span>
        </div>

        <div className="logo-container">
            <img src={logo1} alt="logo" ></img>
            <img src={logo2} alt="logo"></img>
            <img src={logo3} alt="logo"></img>
            <img src={logo7} alt="logo"></img>            
            <img src={logo6} alt="logo"></img>
            <img src={logo5} alt="logo"></img>
            <img src={logo8} alt="logo"></img>
            <img src={logo9} alt="logo"></img>
            <img src={logo10} style={{width: '90%'}} alt="logo"></img>        
            <img src={logo4} alt="logo"></img>          
        </div>
      </div>
    </div>
  );
};

export default Methodology;
