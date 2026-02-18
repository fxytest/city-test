const questions = [

/* Q1 */
{question:"理想的周末安排是？",options:[
{text:"参加挑战型活动",type:"A"},
{text:"整理规划生活",type:"B"},
{text:"和朋友聚会吃饭",type:"C"},
{text:"安静阅读学习",type:"D"},
{text:"体验新鲜玩法",type:"E"}]},

/* Q2 */
{question:"面对新机会你会？",options:[
{text:"立刻争取",type:"A"},
{text:"评估风险",type:"B"},
{text:"看心情决定",type:"C"},
{text:"深入分析",type:"D"},
{text:"尝试创新方式",type:"E"}]},

/* Q3 */
{question:"你更向往的生活节奏？",options:[
{text:"高速拼搏",type:"A"},
{text:"稳定规律",type:"B"},
{text:"轻松自在",type:"C"},
{text:"安静专注",type:"D"},
{text:"多变灵活",type:"E"}]},

/* Q4 */
{question:"团队里你更像？",options:[
{text:"领导者",type:"A"},
{text:"执行者",type:"B"},
{text:"气氛组",type:"C"},
{text:"策略家",type:"D"},
{text:"创意者",type:"E"}]},

/* Q5 */
{question:"面对压力你通常？",options:[
{text:"迎难而上",type:"A"},
{text:"按部就班",type:"B"},
{text:"放松缓解",type:"C"},
{text:"反思总结",type:"D"},
{text:"改变策略",type:"E"}]},

/* Q6 */
{question:"你更在意什么？",options:[
{text:"事业成就",type:"A"},
{text:"稳定生活",type:"B"},
{text:"开心快乐",type:"C"},
{text:"精神成长",type:"D"},
{text:"创造价值",type:"E"}]},

/* Q7 */
{question:"选城市你优先考虑？",options:[
{text:"机会资源",type:"A"},
{text:"秩序环境",type:"B"},
{text:"烟火气息",type:"C"},
{text:"文化底蕴",type:"D"},
{text:"创新氛围",type:"E"}]},

/* Q8 */
{question:"假期更喜欢？",options:[
{text:"事业体验",type:"A"},
{text:"居家休息",type:"B"},
{text:"美食旅行",type:"C"},
{text:"文化探索",type:"D"},
{text:"科技展会",type:"E"}]},

/* Q9 */
{question:"朋友评价你？",options:[
{text:"有冲劲",type:"A"},
{text:"可靠稳重",type:"B"},
{text:"开朗随和",type:"C"},
{text:"理性冷静",type:"D"},
{text:"创意十足",type:"E"}]},

/* Q10 */
{question:"你理想的工作状态？",options:[
{text:"竞争驱动",type:"A"},
{text:"流程规范",type:"B"},
{text:"氛围轻松",type:"C"},
{text:"深度研究",type:"D"},
{text:"持续创新",type:"E"}]},

/* Q11 */
{question:"面对未知你会？",options:[
{text:"主动探索",type:"A"},
{text:"谨慎前行",type:"B"},
{text:"随遇而安",type:"C"},
{text:"理性观察",type:"D"},
{text:"实验尝试",type:"E"}]},

/* Q12 */
{question:"未来五年更期待？",options:[
{text:"职位提升",type:"A"},
{text:"家庭稳定",type:"B"},
{text:"生活自由",type:"C"},
{text:"思想进阶",type:"D"},
{text:"创业突破",type:"E"}]},

/* Q13 */
{question:"理想的夜晚是？",options:[
{text:"加班奋斗",type:"A"},
{text:"规律休息",type:"B"},
{text:"朋友夜宵",type:"C"},
{text:"安静阅读",type:"D"},
{text:"灵感讨论",type:"E"}]},

/* Q14 */
{question:"你害怕什么？",options:[
{text:"停滞不前",type:"A"},
{text:"不稳定",type:"B"},
{text:"无趣生活",type:"C"},
{text:"思想空洞",type:"D"},
{text:"没有变化",type:"E"}]},

/* Q15 */
{question:"理想收入状态？",options:[
{text:"高速增长",type:"A"},
{text:"持续稳定",type:"B"},
{text:"够花开心",type:"C"},
{text:"支持学习",type:"D"},
{text:"支持创新",type:"E"}]},

/* Q16 */
{question:"面对失败？",options:[
{text:"再拼一次",type:"A"},
{text:"稳步调整",type:"B"},
{text:"休息一下",type:"C"},
{text:"深入复盘",type:"D"},
{text:"换新思路",type:"E"}]},

/* Q17 */
{question:"城市气质吸引你？",options:[
{text:"拼搏氛围",type:"A"},
{text:"秩序规范",type:"B"},
{text:"生活气息",type:"C"},
{text:"文化历史",type:"D"},
{text:"科技创新",type:"E"}]},

/* Q18 */
{question:"你羡慕哪种人？",options:[
{text:"事业巅峰者",type:"A"},
{text:"家庭幸福者",type:"B"},
{text:"自在快乐者",type:"C"},
{text:"思想深刻者",type:"D"},
{text:"创新领袖",type:"E"}]},

/* Q19 */
{question:"面对竞争？",options:[
{text:"享受挑战",type:"A"},
{text:"冷静应对",type:"B"},
{text:"适度参与",type:"C"},
{text:"研究策略",type:"D"},
{text:"创新取胜",type:"E"}]},

/* Q20 */
{question:"理想办公环境？",options:[
{text:"高楼CBD",type:"A"},
{text:"标准写字楼",type:"B"},
{text:"咖啡氛围",type:"C"},
{text:"安静书房",type:"D"},
{text:"科技园区",type:"E"}]},


/* Q21 */
{question:"成长过程中你更依赖？",options:[
{text:"目标驱动",type:"A"},
{text:"规划执行",type:"B"},
{text:"兴趣体验",type:"C"},
{text:"深度思考",type:"D"},
{text:"创新突破",type:"E"}]},

/* Q22 */
{question:"面对选择你更倾向？",options:[
{text:"快速决断",type:"A"},
{text:"慎重考虑",type:"B"},
{text:"顺其自然",type:"C"},
{text:"逻辑分析",type:"D"},
{text:"尝试不同方案",type:"E"}]},

/* Q23 */
{question:"朋友遇到困难你通常？",options:[
{text:"帮他解决问题",type:"A"},
{text:"给实际建议",type:"B"},
{text:"陪伴安慰",type:"C"},
{text:"分析原因",type:"D"},
{text:"提供新思路",type:"E"}]},

/* Q24 */
{question:"你对未来的态度？",options:[
{text:"全力冲刺",type:"A"},
{text:"稳步前进",type:"B"},
{text:"随遇而安",type:"C"},
{text:"持续提升认知",type:"D"},
{text:"创造新机会",type:"E"}]},

/* Q25 */
{question:"理想的一天应该？",options:[
{text:"高效完成目标",type:"A"},
{text:"按计划运行",type:"B"},
{text:"轻松愉快",type:"C"},
{text:"有所学习",type:"D"},
{text:"产生新想法",type:"E"}]},

/* Q26 */
{question:"面对挑战你更像？",options:[
{text:"战士",type:"A"},
{text:"管理者",type:"B"},
{text:"享受者",type:"C"},
{text:"思考者",type:"D"},
{text:"探索者",type:"E"}]},

/* Q27 */
{question:"理想的午休方式？",options:[
{text:"处理事务",type:"A"},
{text:"放松调整",type:"B"},
{text:"聊天吃饭",type:"C"},
{text:"阅读",type:"D"},
{text:"构思新点子",type:"E"}]},

/* Q28 */
{question:"如果创业，你会？",options:[
{text:"迅速扩张规模",type:"A"},
{text:"稳健经营",type:"B"},
{text:"打造生活品牌",type:"C"},
{text:"专注研究领域",type:"D"},
{text:"做创新产品",type:"E"}]},

/* Q29 */
{question:"你最讨厌哪种环境？",options:[
{text:"缺少机会",type:"A"},
{text:"混乱无序",type:"B"},
{text:"冷清压抑",type:"C"},
{text:"缺乏思想",type:"D"},
{text:"墨守成规",type:"E"}]},

/* Q30 */
{question:"你更认同的价值观？",options:[
{text:"努力改变命运",type:"A"},
{text:"安稳就是幸福",type:"B"},
{text:"开心最重要",type:"C"},
{text:"认知决定高度",type:"D"},
{text:"创新创造未来",type:"E"}]},

/* Q31 */
{question:"你更享受哪种状态？",options:[
{text:"忙碌奋斗",type:"A"},
{text:"有序运行",type:"B"},
{text:"悠闲自在",type:"C"},
{text:"安静沉思",type:"D"},
{text:"创造变化",type:"E"}]},

/* Q32 */
{question:"面对不确定性？",options:[
{text:"主动出击",type:"A"},
{text:"保持稳健",type:"B"},
{text:"顺其自然",type:"C"},
{text:"研究趋势",type:"D"},
{text:"大胆创新",type:"E"}]},

/* Q33 */
{question:"你理想的朋友圈？",options:[
{text:"事业精英",type:"A"},
{text:"老朋友为主",type:"B"},
{text:"吃喝玩乐搭子",type:"C"},
{text:"知识交流圈",type:"D"},
{text:"创业创新圈",type:"E"}]},

/* Q34 */
{question:"你更在意别人对你的？",options:[
{text:"能力认可",type:"A"},
{text:"可靠评价",type:"B"},
{text:"亲和印象",type:"C"},
{text:"智慧评价",type:"D"},
{text:"创意印象",type:"E"}]},

/* Q35 */
{question:"长期生活你更希望？",options:[
{text:"持续升级",type:"A"},
{text:"平稳舒适",type:"B"},
{text:"轻松幸福",type:"C"},
{text:"思想成熟",type:"D"},
{text:"不断创新",type:"E"}]},

/* Q36 */
{question:"当资源有限时？",options:[
{text:"拼命争取",type:"A"},
{text:"合理分配",type:"B"},
{text:"降低需求",type:"C"},
{text:"优化思路",type:"D"},
{text:"设计新方法",type:"E"}]},

/* Q37 */
{question:"你更喜欢哪种城市标签？",options:[
{text:"奋斗之城",type:"A"},
{text:"秩序之城",type:"B"},
{text:"烟火之城",type:"C"},
{text:"文化之城",type:"D"},
{text:"创新之城",type:"E"}]},

/* Q38 */
{question:"面对重大机会？",options:[
{text:"果断抓住",type:"A"},
{text:"稳重判断",type:"B"},
{text:"随缘选择",type:"C"},
{text:"深度评估",type:"D"},
{text:"尝试新路径",type:"E"}]},

/* Q39 */
{question:"你的人生关键词？",options:[
{text:"突破",type:"A"},
{text:"稳定",type:"B"},
{text:"幸福",type:"C"},
{text:"成长",type:"D"},
{text:"创造",type:"E"}]},

/* Q40 */
{question:"理想生活重心？",options:[
{text:"事业",type:"A"},
{text:"家庭",type:"B"},
{text:"享受",type:"C"},
{text:"学习",type:"D"},
{text:"创新",type:"E"}]},

/* Q41 */
{question:"理想居住地特征？",options:[
{text:"繁华中心",type:"A"},
{text:"环境安静",type:"B"},
{text:"美食丰富",type:"C"},
{text:"文化浓厚",type:"D"},
{text:"科技发达",type:"E"}]},

/* Q42 */
{question:"你更适合哪种节奏？",options:[
{text:"快节奏",type:"A"},
{text:"均衡节奏",type:"B"},
{text:"慢节奏",type:"C"},
{text:"专注节奏",type:"D"},
{text:"变化节奏",type:"E"}]},

/* Q43 */
{question:"面对压力来源？",options:[
{text:"外部竞争",type:"A"},
{text:"生活责任",type:"B"},
{text:"情绪状态",type:"C"},
{text:"认知差距",type:"D"},
{text:"创新压力",type:"E"}]},

/* Q44 */
{question:"你更希望10年后的自己？",options:[
{text:"事业顶尖",type:"A"},
{text:"生活稳定",type:"B"},
{text:"快乐自在",type:"C"},
{text:"思想成熟",type:"D"},
{text:"引领创新",type:"E"}]},

/* Q45 */
{question:"理想晚年状态？",options:[
{text:"成就显赫",type:"A"},
{text:"安稳幸福",type:"B"},
{text:"轻松快乐",type:"C"},
{text:"精神充实",type:"D"},
{text:"持续创造",type:"E"}]},

/* Q46 */
{question:"遇到冲突你会？",options:[
{text:"正面解决",type:"A"},
{text:"理性协商",type:"B"},
{text:"避免冲突",type:"C"},
{text:"思考原因",type:"D"},
{text:"创新方案",type:"E"}]},

/* Q47 */
{question:"理想假期城市？",options:[
{text:"国际大都市",type:"A"},
{text:"宜居城市",type:"B"},
{text:"美食天堂",type:"C"},
{text:"历史名城",type:"D"},
{text:"科技之城",type:"E"}]},

/* Q48 */
{question:"你更重视？",options:[
{text:"效率成果",type:"A"},
{text:"安全感",type:"B"},
{text:"幸福感",type:"C"},
{text:"认知深度",type:"D"},
{text:"创新空间",type:"E"}]},

/* Q49 */
{question:"你更讨厌哪种限制？",options:[
{text:"没有发展空间",type:"A"},
{text:"生活不稳定",type:"B"},
{text:"没有娱乐",type:"C"},
{text:"思想受限",type:"D"},
{text:"没有创新自由",type:"E"}]},

/* Q50 */
{question:"最终你更想成为什么样的人？",options:[
{text:"敢拼敢闯",type:"A"},
{text:"稳重可靠",type:"B"},
{text:"热爱生活",type:"C"},
{text:"理性深刻",type:"D"},
{text:"持续创新",type:"E"}]}

];

