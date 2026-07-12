import {
  Boxes,
  ChartNoAxesCombined,
  Construction,
  FlaskConical,
} from 'lucide-react'

export const navigation = [
  { id: 'home', label: '首页' },
  { id: 'research', label: '研究' },
  { id: 'publications', label: '成果' },
  { id: 'experience', label: '经历' },
  { id: 'projects', label: '项目' },
  { id: 'contact', label: '联系' },
]

export const metrics = [
  { value: '40+', label: '论文' },
  { value: '20+', label: 'SCI 论文' },
  { value: '7', label: '软件著作权' },
]

export const researchAreas = [
  {
    icon: FlaskConical,
    index: '01',
    title: '混凝土耐久性与多场耦合',
    description:
      '研究氯盐、硫酸盐、碳化、冻融与持续荷载共同作用下水泥基材料的传输、损伤和劣化机制。',
    keywords: ['氯盐侵蚀', '多离子耦合', '环境—荷载作用'],
  },
  {
    icon: ChartNoAxesCombined,
    index: '02',
    title: '桥梁全寿命与可靠度',
    description:
      '面向沿海与严酷环境桥梁，开展服役寿命预测、时变可靠度分析和耐久性设计方法研究。',
    keywords: ['寿命预测', '时变可靠度', '风险评估'],
  },
  {
    icon: Boxes,
    index: '03',
    title: '多尺度与细观数值模拟',
    description:
      '发展随机细观结构与多尺度模型，刻画材料非均质性、孔隙演化及传输过程的不确定性。',
    keywords: ['随机骨料', '多尺度建模', '不确定性'],
  },
  {
    icon: Construction,
    index: '04',
    title: '大型桥梁设计与工程咨询',
    description:
      '将结构分析、抗震计算与耐久性理论用于悬索桥、斜拉桥、拱桥等重大桥梁工程。',
    keywords: ['结构设计', 'AASHTO', '工程咨询'],
  },
]

export const publications = [
  {
    year: '2026',
    journal: 'Materials and Structures',
    role: '第一作者',
    title:
      'Low-carbon SCMs mitigate chloride attack and calcium leaching-induced degradation: physicochemical mechanisms and multiscale modeling',
    citation:
      'Chen D, Guo W, Duan B, et al. Materials and Structures, 2026, 59(3): 157.',
  },
  {
    year: '2025',
    journal: 'Materials Today Communications',
    role: '第一作者',
    title:
      'Multiscale modeling reveals coupled chloride-sulfate attack mechanisms in coastal bridges: from pore evolution to service life prediction',
    citation:
      'Chen D, Chen D, Guo W, et al. Materials Today Communications, 2025: 113508.',
  },
  {
    year: '2024',
    journal: 'Construction and Building Materials',
    role: '第一作者',
    title: 'Mesoscopic characteristics and spatiotemporal variability of chloride transport in concrete',
    citation:
      'Chen D, Guo W, Wu B, et al. Construction and Building Materials, 2024, 415: 135081.',
  },
  {
    year: '2024',
    journal: 'Thin-Walled Structures',
    role: '第一作者',
    title:
      'Mesoscopic statistics-based probability characteristics of chloride transport and reliability-based corrosion initiation life of bridge tower',
    citation:
      'Chen D, Guo W, Quan X, et al. Thin-Walled Structures, 2024, 198: 111680.',
  },
  {
    year: '2024',
    journal: 'Construction and Building Materials',
    role: '第一作者',
    title: 'Mechanistic modeling for coupled chloride-sulfate attack in cement-based materials',
    citation:
      'Chen D, Guo W, Chen D, et al. Construction and Building Materials, 2024, 455: 139231.',
  },
  {
    year: '2024',
    journal: 'Journal of Building Engineering',
    role: '第一作者',
    title: 'Mesostructure-induced uncertainty of chloride transport in concrete',
    citation:
      'Chen D, Guo W, Guo L, et al. Journal of Building Engineering, 2024, 98: 111337.',
  },
  {
    year: '2024',
    journal: 'Engineering Failure Analysis',
    role: '通讯作者',
    title:
      'Novel epoxy resin-bonded sand system: Mechanical strength, deterioration resistance, and failure mechanism',
    citation:
      'Shi J, Chen D, Yu Z. Engineering Failure Analysis, 2024, 158: 108020.',
  },
  {
    year: '2024',
    journal: 'Case Studies in Construction Materials',
    role: '通讯作者',
    title: 'Data-driven predicting of bond strength in corroded BFRP concrete structures',
    citation:
      'Li B, Zhang J, Qu Y, Chen D. Case Studies in Construction Materials, 2024, 21: e03638.',
  },
  {
    year: '2023',
    journal: 'Construction and Building Materials',
    role: '第一作者',
    title:
      'Experimental and modelling investigation on chloride transport and flexural behaviour of RC beams subjected to simultaneous deteriorating factors',
    citation:
      'Chen D, Guo W, Kang J, et al. Construction and Building Materials, 2023, 397: 132305.',
  },
  {
    year: '2023',
    journal: 'Engineering Failure Analysis',
    role: '第一作者',
    title:
      'Service life prediction and time-variant reliability of reinforced concrete structures in harsh marine environment: A case study for Qingdao Bay Bridge',
    citation:
      'Chen D, Guo W, Wu B, et al. Engineering Failure Analysis, 2023, 154: 107671.',
  },
  {
    year: '2022',
    journal: 'Journal of Building Engineering',
    role: '第一作者',
    title:
      'Experimental study and modelling of concrete carbonation under the coupling effect of freeze-thaw cycles and sustained loads',
    citation:
      'Chen D, Liu S, Shen J, et al. Journal of Building Engineering, 2022, 52: 104390.',
  },
  {
    year: '2022',
    journal: 'Structures',
    role: '第一作者',
    title:
      'Experimental and simulation study on chloride diffusion in unsaturated concrete under the coupled effect of carbonation and loading',
    citation:
      'Chen D, Feng Y, Shen J, et al. Structures, 2022, 43: 1356–1368.',
  },
  {
    year: '2021',
    journal: 'Construction and Building Materials',
    role: '第一作者',
    title: 'A meso-stochastic research on the chloride transport in unsaturated concrete',
    citation:
      'Chen D, Yang K, Hu D, et al. Construction and Building Materials, 2021, 273: 121986.',
  },
  {
    year: '2021',
    journal: 'Journal of Building Engineering',
    role: '第一作者',
    title:
      'Study on the bearing capacity and chloride ion resistance of RC structures under multi-factor corrosive environment and continuous load',
    citation:
      'Chen D, Sun G, Hu D, et al. Journal of Building Engineering, 2021, 44: 102990.',
  },
]

export const education = [
  {
    period: '2022.09 — 2025.12',
    institution: '中南大学',
    degree: '土木工程 · 博士',
    detail: '平均绩点 3.93，专业排名 4 / 68；研究方向为混凝土耐久性与桥梁全寿命可靠度。',
  },
  {
    period: '2013.09 — 2016.06',
    institution: '长安大学',
    degree: '桥梁与隧道工程 · 硕士',
    detail: '推荐免试；桥隧专业三年综合排名第 4。',
  },
  {
    period: '2009.09 — 2013.06',
    institution: '长安大学',
    degree: '道路桥梁与渡河工程 · 本科',
    detail: '平均绩点 3.69，专业前 5%；优秀毕业设计（论文）第一名。',
  },
]

export const workExperience = [
  {
    period: '2016.06 — 2022.08',
    institution: '中交第一公路勘察设计研究院有限公司',
    degree: '桥梁工程设计院 · 工程师',
    detail:
      '参与或主持国内外大型桥梁项目设计与咨询，涵盖悬索桥、斜拉桥、拱桥和连续刚构，承担总体分析、抗震计算及施工图设计。',
  },
]

export const honors = [
  '2024、2025 全国高被引学者 TOP 5%',
  '2024、2025 中南大学校长奖学金创新奖',
  '2022 中国公路勘察设计协会优秀设计项目二等奖',
  '2021 中交一公院优秀员工',
]

export const engineeringProjects = [
  {
    period: '2016.10 — 2018.10',
    title: '湖北武穴长江公路大桥',
    role: '分项负责人',
    facts: ['主跨 808 m', '混合梁斜拉桥', '总体与主塔设计'],
    description:
      '作为主塔分项负责人，完成总体计算、主塔结构分析与施工图设计。该桥主跨 808 m，是具有代表性的超大跨径混合梁斜拉桥。',
  },
  {
    period: '2020.08 — 2021.05',
    title: '巴基斯坦 DASU–KKH 改建项目',
    role: '桥梁负责人',
    facts: ['AASHTO 规范', '3 座大型桥梁', '国际工程'],
    description:
      '负责 Uchar、Barseen 与 Dogah 三座桥梁的初步设计和施工图设计，全程采用 AASHTO 规范。Uchar 大桥主跨 180 m，创新采用水平底板索结构。',
  },
  {
    period: '2017.07 — 2017.12',
    title: '阳宝山特大桥',
    role: '主要参与人',
    facts: ['主跨 650 m', '钢桁梁悬索桥', 'AS 法架设'],
    description:
      '完成钢桁架主梁设计与计算。该桥为国内首次采用 AS 法架设的悬索桥，是悬索桥施工技术的重要工程实践。',
  },
  {
    period: '2017.04 — 2017.07',
    title: '湘江特大桥',
    role: '分项负责人',
    facts: ['主跨 560 m', '钢—混组合梁', '斜拉桥'],
    description:
      '承担主跨 560 m 钢—混组合梁斜拉桥总体建模计算、计算书编制与部分主梁施工图设计。',
  },
  {
    period: '2018.04 — 2018.08',
    title: '漕渡河特大桥',
    role: '分项负责人',
    facts: ['计算跨径 460 m', '钢管混凝土', '桁架拱桥'],
    description:
      '完成计算跨径 460 m 上承式钢管混凝土桁架拱桥主桥与引桥的初步设计和结构分析。',
  },
  {
    period: '2015.03 — 2016.07',
    title: '马蹄河大桥',
    role: '主要参与人',
    facts: ['主跨 180 m', '钢筋混凝土拱桥', '施工图咨询'],
    description:
      '参与施工图设计咨询。主拱采用斜拉扣挂悬臂浇筑施工，为公路行业同类桥梁的重要实践。',
  },
]

export const researchProjects = [
  {
    period: '2022.10 — 2025.02',
    title: '考虑环境和重载耦合作用的预应力砼梁桥疲劳损伤机理分析及剩余寿命评估',
    role: '国家自然科学基金 · 主要参与人',
    facts: ['项目号 52078489', '经费 56 万元', '完成约半数研究内容'],
    description:
      '围绕复杂环境与重载耦合条件下预应力混凝土梁桥疲劳损伤、性能退化和剩余寿命开展研究。',
  },
  {
    period: '2022.11 — 2024.11',
    title: '陆路交通关键大型构造物服役能力智能测试装备与平台研发',
    role: '国家重点研发计划 · 参与人',
    facts: ['课题 5', '项目号 2021YFB2601005', '经费 2200 万元'],
    description:
      '参与部分研究工作，以及课题中期、年度与结题材料的技术整理。',
  },
  {
    period: '2022.10 — 至今',
    title: '装配化钢结构路面优选方法研究',
    role: '中交一公院科技创新基金 · 主持',
    facts: ['经费 40 万元', '冻土路基', '装配化桥式路面'],
    description:
      '研发适用于冻土路基的装配化桥式路面结构，建立结构方案优选与性能评价方法。',
  },
  {
    period: '2023.01 — 2024.12',
    title: '复杂环境多场耦合作用下混凝土结构氯盐侵蚀多尺度模拟与概率模型研究',
    role: '中南大学中央高校基本科研业务费项目 · 主持',
    facts: ['项目号 2023ZZTS0373', '多尺度模拟', '概率模型'],
    description:
      '构建复杂环境下氯盐传输的多尺度模型，量化细观结构与环境荷载引起的不确定性。',
  },
  {
    period: '2020.08 — 至今',
    title: '巴基斯坦库区复杂环境下大跨桥梁建造关键技术',
    role: '中国铁建科研计划 · 主要参与人',
    facts: ['项目号 2021-C01', '经费 200 万元', '课题申报与持续研究'],
    description:
      '参与项目申报、立项与研究，面向库区复杂环境解决大跨桥梁设计、建造和耐久性关键问题。',
  },
]
