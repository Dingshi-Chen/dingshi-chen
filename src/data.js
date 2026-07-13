import { Boxes, ChartNoAxesCombined, Construction, FlaskConical } from 'lucide-react'

const bi = (en, zh) => ({ en, zh })

export const navigation = [
  { id: 'home', label: bi('Home', '首页') },
  { id: 'research', label: bi('Research', '研究') },
  { id: 'publications', label: bi('Publications', '成果') },
  { id: 'experience', label: bi('Experience', '经历') },
  { id: 'projects', label: bi('Projects', '项目') },
  { id: 'contact', label: bi('Contact', '联系') },
]

export const metrics = [
  { value: '40+', label: bi('Publications', '论文') },
  { value: '20+', label: bi('SCI papers', 'SCI 论文') },
  { value: '7', label: bi('Software copyrights', '软件著作权') },
]

export const researchAreas = [
  { icon: FlaskConical, index: '01', title: bi('Concrete durability under coupled actions', '混凝土耐久性与多场耦合'), description: bi('Transport, damage and deterioration of cementitious materials under chloride, sulfate, carbonation, freeze–thaw and sustained loading.', '研究氯盐、硫酸盐、碳化、冻融与持续荷载共同作用下水泥基材料的传输、损伤和劣化机制。'), keywords: [bi('Chloride attack', '氯盐侵蚀'), bi('Multi-ion coupling', '多离子耦合'), bi('Environment–load interaction', '环境—荷载作用')] },
  { icon: ChartNoAxesCombined, index: '02', title: bi('Bridge life-cycle reliability', '桥梁全寿命与可靠度'), description: bi('Service-life prediction, time-dependent reliability and durability design for bridges in marine and other harsh environments.', '面向沿海与严酷环境桥梁，开展服役寿命预测、时变可靠度分析和耐久性设计方法研究。'), keywords: [bi('Service life', '寿命预测'), bi('Time-variant reliability', '时变可靠度'), bi('Risk assessment', '风险评估')] },
  { icon: Boxes, index: '03', title: bi('Multiscale and mesoscale modelling', '多尺度与细观数值模拟'), description: bi('Stochastic mesoscale structures and multiscale models for heterogeneity, pore evolution, transport and uncertainty.', '发展随机细观结构与多尺度模型，刻画材料非均质性、孔隙演化及传输过程的不确定性。'), keywords: [bi('Random aggregates', '随机骨料'), bi('Multiscale modelling', '多尺度建模'), bi('Uncertainty', '不确定性')] },
  { icon: Construction, index: '04', title: bi('Major bridge engineering', '大型桥梁设计与工程咨询'), description: bi('Structural analysis, seismic assessment and engineering design for suspension, cable-stayed, arch and continuous bridges.', '将结构分析、抗震计算与耐久性理论用于悬索桥、斜拉桥、拱桥等重大桥梁工程。'), keywords: [bi('Structural design', '结构设计'), bi('AASHTO', 'AASHTO'), bi('Engineering consultancy', '工程咨询')] },
]

export const publications = [
  ['2026','Materials and Structures','Low-carbon SCMs mitigate chloride attack and calcium leaching-induced degradation: physicochemical mechanisms and multiscale modeling','Chen D, Guo W, Duan B, et al. Materials and Structures, 2026, 59(3): 157.',bi('First author','第一作者')],
  ['2025','Materials Today Communications','Multiscale modeling reveals coupled chloride-sulfate attack mechanisms in coastal bridges: from pore evolution to service life prediction','Chen D, Chen D, Guo W, et al. Materials Today Communications, 2025: 113508.',bi('First author','第一作者')],
  ['2025','中南大学学报（自然科学版）','水泥基材料细观结构导致的氯离子传输不确定性研究','陈定市, 郭文华. 中南大学学报（自然科学版）, 2025, 56(01): 156–172.',bi('First author','第一作者')],
  ['2025','铁道科学与工程学报','重载铁路钢筋混凝土梁桥氯盐侵蚀-疲劳寿命评估','陈定市, 段斌鑫, 郭文华. 铁道科学与工程学报, 2025, 1–13.',bi('First author','第一作者')],
  ['2024','Construction and Building Materials','Mesoscopic characteristics and spatiotemporal variability of chloride transport in concrete','Chen D, Guo W, Wu B, et al. Construction and Building Materials, 2024, 415: 135081.',bi('First author','第一作者')],
  ['2024','Thin-Walled Structures','Mesoscopic statistics-based probability characteristics of chloride transport and reliability-based corrosion initiation life of bridge tower','Chen D, Guo W, Quan X, et al. Thin-Walled Structures, 2024, 198: 111680.',bi('First author','第一作者')],
  ['2024','Construction and Building Materials','Mechanistic modeling for coupled chloride-sulfate attack in cement-based materials','Chen D, Guo W, Chen D, et al. Construction and Building Materials, 2024, 455: 139231.',bi('First author','第一作者')],
  ['2024','Journal of Building Engineering','Mesostructure-induced uncertainty of chloride transport in concrete','Chen D, Guo W, Guo L, et al. Journal of Building Engineering, 2024, 98: 111337.',bi('First author','第一作者')],
  ['2024','Engineering Failure Analysis','Novel epoxy resin-bonded sand system: Mechanical strength, deterioration resistance, and failure mechanism','Shi J, Chen D, Yu Z. Engineering Failure Analysis, 2024, 158: 108020.',bi('Corresponding author','通讯作者')],
  ['2023','Construction and Building Materials','Experimental and modelling investigation on chloride transport and flexural behaviour of RC beams subjected to simultaneous deteriorating factors of carbonation, FT cycles and multi-type sustained stress','Chen D, Guo W, Kang J, et al. Construction and Building Materials, 2023, 397: 132305.',bi('First author','第一作者')],
  ['2023','Engineering Failure Analysis','Service life prediction and time-variant reliability of reinforced concrete structures in harsh marine environment considering multiple factors: A case study for Qingdao Bay Bridge','Chen D, Guo W, Wu B, et al. Engineering Failure Analysis, 2023, 154: 107671.',bi('First author','第一作者')],
  ['2022','Journal of Building Engineering','Experimental study and modelling of concrete carbonation under the coupling effect of freeze-thaw cycles and sustained loads','Chen D, Liu S, Shen J, et al. Journal of Building Engineering, 2022, 52: 104390.',bi('First author','第一作者')],
  ['2021','Construction and Building Materials','A meso-stochastic research on the chloride transport in unsaturated concrete','Chen D, Yang K, Hu D, et al. Construction and Building Materials, 2021, 273: 121986.',bi('First author','第一作者')],
].map(([year,journal,title,citation,role]) => ({ year,journal,title,citation,role }))

export const education = [
  { period: '2022.09 — 2025.12', institution: bi('Central South University', '中南大学'), degree: bi('PhD in Civil Engineering', '土木工程 · 博士'), detail: bi('GPA 3.93; ranked 4th of 68. Research on concrete durability and life-cycle reliability of bridges.', '平均绩点 3.93，专业排名 4 / 68；研究方向为混凝土耐久性与桥梁全寿命可靠度。') },
  { period: '2013.09 — 2016.06', institution: bi("Chang’an University", '长安大学'), degree: bi('MEng in Bridge and Tunnel Engineering', '桥梁与隧道工程 · 硕士'), detail: bi('Recommended admission; ranked 4th overall in the programme.', '推荐免试；桥隧专业三年综合排名第 4。') },
  { period: '2009.09 — 2013.06', institution: bi("Chang’an University", '长安大学'), degree: bi('BEng in Road, Bridge and River-crossing Engineering', '道路桥梁与渡河工程 · 本科'), detail: bi('GPA 3.69; top 5% of the programme; first prize for the outstanding graduation thesis/design.', '平均绩点 3.69，专业前 5%；优秀毕业设计（论文）第一名。') },
]

export const workExperience = [
  { period: '2016.06 — 2022.08', institution: bi('CCCC First Highway Consultants Co., Ltd.', '中交第一公路勘察设计研究院有限公司'), degree: bi('Bridge Design Institute · Engineer', '桥梁工程设计院 · 工程师'), detail: bi('Designed and advised on major bridge projects in China and overseas, covering suspension, cable-stayed, arch and continuous bridges.', '参与或主持国内外大型桥梁项目设计与咨询，涵盖悬索桥、斜拉桥、拱桥和连续刚构。') },
]

export const honors = [
  bi('National Highly Cited Scholar, Top 5% (2024, 2025)', '2024、2025 全国高被引学者 TOP 5%'),
  bi('CSU President’s Scholarship for Innovation (2024, 2025)', '2024、2025 中南大学校长奖学金创新奖'),
  bi('Second Prize, Outstanding Design Project, China Highway & Transportation Society (2022)', '2022 中国公路勘察设计协会优秀设计项目二等奖'),
  bi('Outstanding Employee, CCCC First Highway Consultants (2021)', '2021 中交一公院优秀员工'),
]

export const engineeringProjects = [
  { period:'2016.10 — 2018.10', title:bi('Wuxue Yangtze River Highway Bridge','湖北武穴长江公路大桥'), role:bi('Discipline lead','分项负责人'), facts:[bi('808 m main span','主跨 808 m'),bi('Hybrid-girder cable-stayed bridge','混合梁斜拉桥'),bi('Tower and global analysis','总体与主塔设计')], description:bi('Led tower design, global analysis and construction-document design for the 808 m main-span bridge.','作为主塔分项负责人，完成总体计算、主塔结构分析与施工图设计。') },
  { period:'2020.08 — 2021.05', title:bi('DASU–KKH Relocation Project, Pakistan','巴基斯坦 DASU–KKH 改建项目'), role:bi('Bridge lead','桥梁负责人'), facts:[bi('AASHTO standards','AASHTO 规范'),bi('Three major bridges','3 座大型桥梁'),bi('International project','国际工程')], description:bi('Led preliminary and detailed design of the Uchar, Barseen and Dogah bridges using AASHTO standards.','负责 Uchar、Barseen 与 Dogah 三座桥梁的初步设计和施工图设计，全程采用 AASHTO 规范。') },
  { period:'2017.07 — 2017.12', title:bi('Yangbaoshan Bridge','阳宝山特大桥'), role:bi('Core team member','主要参与人'), facts:[bi('650 m main span','主跨 650 m'),bi('Steel-truss suspension bridge','钢桁梁悬索桥'),bi('AS erection method','AS 法架设')], description:bi('Designed and analysed the steel-truss girder for China’s first suspension bridge erected using the AS method.','完成钢桁架主梁设计与计算；该桥为国内首次采用 AS 法架设的悬索桥。') },
  { period:'2022.02 — 2022.08', title:bi('Pingnan–Rongxian Expressway','全州至容县公路（平南至容县段）'), role:bi('Discipline lead','分项负责人'), facts:[bi('636 m main span','主跨 636 m'),bi('Hybrid-girder cable-stayed bridge','钢箱混合梁斜拉桥'),bi('Tower design','主塔设计')], description:bi('Led structural design, calculation and optimisation of the towers for the 636 m main-span bridge.','完成主塔结构的设计、计算与优化。') },
]

export const researchProjects = [
  { period:'2022.10 — 2025.02', title:bi('Fatigue damage and residual-life assessment of prestressed concrete girder bridges under coupled environment and heavy traffic','考虑环境和重载耦合作用的预应力砼梁桥疲劳损伤机理分析及剩余寿命评估'), role:bi('NSFC · Core participant','国家自然科学基金 · 主要参与人'), facts:[bi('Grant 52078489','项目号 52078489'),bi('CNY 560,000','经费 56 万元'),bi('About half of research delivered','完成约半数研究内容')], description:bi('Investigated fatigue damage, degradation and residual life under coupled environmental and heavy-load actions.','研究复杂环境与重载耦合条件下预应力混凝土梁桥疲劳损伤、性能退化和剩余寿命。') },
  { period:'2022.11 — 2024.11', title:bi('Intelligent testing equipment and platform for service capacity of major land-transport structures','陆路交通关键大型构造物服役能力智能测试装备与平台研发'), role:bi('National Key R&D Programme · Participant','国家重点研发计划 · 参与人'), facts:[bi('Task 5','课题 5'),bi('2021YFB2601005','2021YFB2601005'),bi('CNY 22 million','经费 2200 万元')], description:bi('Contributed research and technical documentation for interim, annual and final project reviews.','参与部分研究以及课题中期、年度与结题报告整理。') },
  { period:'2022.10 — Present', title:bi('Optimisation of prefabricated steel road-deck systems','装配化钢结构路面优选方法研究'), role:bi('CCCC FHCC Innovation Fund · Principal investigator','中交一公院科技创新基金 · 主持'), facts:[bi('CNY 400,000','经费 40 万元'),bi('Permafrost subgrade','冻土路基'),bi('Prefabricated deck','装配化桥式路面')], description:bi('Developing a prefabricated bridge-type road system and performance-based selection method for permafrost subgrades.','研发适用于冻土路基的装配化桥式路面结构及方案优选方法。') },
  { period:'2023.01 — 2024.12', title:bi('Multiscale and probabilistic modelling of chloride ingress under coupled harsh-environment actions','复杂环境多场耦合作用下混凝土结构氯盐侵蚀多尺度模拟与概率模型研究'), role:bi('Central Universities Fund · Principal investigator','中南大学中央高校项目 · 主持'), facts:[bi('2023ZZTS0373','2023ZZTS0373'),bi('Multiscale simulation','多尺度模拟'),bi('Probabilistic modelling','概率模型')], description:bi('Built multiscale chloride-transport models and quantified uncertainty from mesostructure and environmental loading.','构建氯盐传输多尺度模型，量化细观结构与环境荷载引起的不确定性。') },
]
