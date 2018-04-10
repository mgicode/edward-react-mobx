import React from 'react'
import CSSModules from 'react-css-modules'
import {observer, inject} from 'mobx-react'
import {Header} from '../components'
import styles from '../css/faq.css'
import {Browser} from '../helpers'


const QUESTIONS = [
    {
        group_title: '新手上路',
        group_items: [{
            topic_title: '注册登录',
            icon: 'zcdl',
            topic_items: [{
                q: '注册需要您提供哪些相关材料？',
                a: '提供个人常用手机号，短信验证码提交通过后，设置用户名、密码即可注册。'
            }, {
                q: '身份认证可以修改吗？',
                a: '一个账号只可身份认证一次，一旦认证成功将无法修改。'
            }, {
                q: '身份认证总是失败，该如何解决？',
                a: '请检查身份证号和真实姓名是否匹配，输入是否正确。如输入正确但无法认证成功，请拨打客服电话 <a href="tel:400-6766-988" >400-6766-988</a> ，客服人员会审核您的身份信息后协助您完成身份认证操作。'
            }]
        }, {
            topic_title: '身份认证流程',
            icon: 'sfrz',
            topic_items: [{
                q: '身份认证需要您提供哪些相关材料？',
                a: '需提供您的有效身份证号，及真实姓名。提交后系统会进行核实，核实无误即可认证成功。'
            }, {
                q: '身份认证可以修改吗？',
                a: '一个账号只可身份认证一次，一旦认证成功将无法修改。'
            }, {
                q: '身份认证总是失败，该如何解决？',
                a: '请检查身份证号和真实姓名是否匹配，输入是否正确。如输入正确但无法认证成功，请拨打客服电话<a href="tel:400-6766-988" >400-6766-988</a>，客服人员会审核您的身份信息后协助您完成身份认证操作。'
            }]
        }, {
            topic_title: '绑定银行卡',
            icon: 'bdyhk',
            topic_items: [{
                q: '银行卡绑定过程需要提供哪些信息？',
                a: '需要提供身份认证人的有效银行卡信息，包括发卡行、银行卡号。'
            }, {
                q: '绑定银行卡失败，该如何解决？',
                a: '目前徽商银行只支持储蓄卡绑定，暂不支持信用卡和存折绑定。如储蓄卡号、发卡行、开户姓名均正确但无法绑定成功，请拨打客服电话<a href="tel:400-6766-988" >400-6766-988</a>，客服人员会协助您完成绑定操作。'
            }, {
                q: '可以修改开户行名称吗？',
                a: '目前只支持绑定一张银行卡，若账户中无余额、无待收时，可在“个人中心”-“我的信息”-“绑定银行卡”下进行修改；若账户中有余额和待收时，则不可以进行银行卡开户支行的修改。'
            }]
        }, {
            topic_title: '还款方式及利息计算',
            icon: 'hkfs',
            topic_items: [{
                q: '按月等额本息还款',
                a: '项目期间将出借本金及利息总额相加，然后平均分摊到还款期限的每个月中，每个月的还款额是固定的，但每月还款额中的本金比重逐月递增、利息比重逐月递减。'
            }, {
                q: '利息如何让计算？',
                a: '每月还款额=[借款本金×月利率×（1+月利率）^还款月数]÷[（1+月利率）^还款月数－1]<br/> 注：^次方'
            }, {
                q: '案例：',
                a: '某“消费贷”项目期限24个月，预期年化利率13.5%，出借金额为30000元，那么：<br/>每月回款本息=1433.31元'
            }, {
                q: '（按天）一次性还本付息',
                a: '按项目实际天数计算利息，项目到期日一次性将出借的本金和利息总额偿还给出借客户。'
            }, {
                q: '利息如何计算？',
                a: '项目总期限T天，项目年化利率R，客户出借本金M：<br/> 到期回款本金：M；<br/> 到期回款利息：M*R*T/360'
            }, {
                q: '案例：',
                a: '某“易赚盈”项目期限30天，预期年化利率12%，客户出借本金1,000,000元，那么：<br/> 到期回款本金=1,000,000元；<br/> 到期回款利息=1,000,000*12%*30/360=10000元；<br/> （注：具体情况按照每个项目的详细信息进行具体分析，最终解释权归工场微金所有。） '
            }, {
                q: '按月付息到期还本',
                a: '项目期间每月偿还一次利息，到期日一次性偿还本金和最后一期利息。'
            }, {
                q: '利息如何计算？',
                a: '项目总期限T个月，项目年化利率R，客户出借本金M：<br/> 到期回款本金：M；<br/> 每月（末）回款利息：M*R/12 元； '
            }, {
                q: '案例：',
                a: '某“利随享”项目期限12个月，预期年化利率14%，客户出借本金=1,000,000元，那么：<br/> 到期回款本金：1,000,000元；<br/> 每月回款利息：1,000,000*14%/12=11666.67元；<br/> （注：具体情况按照每个项目的详细信息进行具体分析，最终解释权归工场微金所有。） '
            }]
        }]
    }, {
        group_title: '我要出借',
        group_items: [{
            topic_title: '出借流程',
            icon: 'cjlc',
            topic_items: [{
                q: '出借前需要做哪些必要操作？',
                a: '出借前应完成以下操作内容：<br/> 1.注册账号并登录<br/> 2.开通徽商存管账户<br/> 3.设置交易密码<br/> 4.充值 '
            }, {
                q: '出借金额是否有限制？',
                a: '1.单笔出借金额不得低于标的限制的最低起投额<br/> 2.单笔出借金额不得大于标的剩余的可投金额<br/> 3.单笔出借导致标的所剩余的可投金额低于起投额时，不可出借，请尽量输入可直接满标的金额作为最后一笔出借。 '
            }, {
                q: '出借时会有附加费用产生吗？',
                a: '出借人在工场微金完成的每一笔出借，平台都不会收取任何附加费用。'
            }, {
                q: '出借完后该如何查看我的回款状态？',
                a: '请到“个人中心”-“我的出借”中查看出借记录以及回款计划。'
            }]
        }, {
            topic_title: '资金管理',
            icon: 'zjgl',
            topic_items: [{
                q: '通过网银支付是否安全？',
                a: '用户充值、出借和提现操作均通过徽商银行存管系统的网上支付服务完成，保障交易安全，您可放心交易。'
            }, {
                q: '充值应注意的问题',
                a: '1）请注意您的银行卡充值限额，以免造成充值失败；<br>2）如果充值金额没有及时到账，请拨打客服电话<a href="tel:400-6766-988" >400-6766-988</a>，客服人员会协助你解决；<br>3）对充值后无出借的提现，收取0.4%的手续费。'
            }, {
                q: '充值有时间限制吗？',
                a: '没有时间限制，用户7*24小时均可通过徽商银行资金存管系统充值。'
            }, {
                q: '如何充值？',
                a: '您还可以通过在线网银转账等多种形式，直接充值到您的徽商银行存管电子专用账户。'
            }, {
                q: '港澳台等特殊用户怎么充值？',
                a: '特殊用户是指大陆境外的港澳台用户，以及因户口动迁等原因导致无法线上进行身份验证开户的用户。徽商银行资金存管上线前已注册并有资金记录行为的特殊用户可以正常进行充值、出借、提现，未注册的新特殊用户，抱歉暂不能为您提供服务。'
            }, {
                q: '用户提现条件是什么? 有什么限制?',
                a: '已注册、已开户（已绑卡）、已设置交易密码的个人和机构用户，均可以进行提现。同一个用户单日总提现次数不能超过10次，单日提现限额为2000万元（含）。单月笔数和总金额不做限制。'
            }, {
                q: '用户提现方式有哪些？',
                a: '提现分为实时提现和大额提现两种方式。1.实时提现：中行、农行、工行、建行、交行、上海银行、平安银行单笔限额5.00万（含）以下，单日总限额50万（含）以下；其它银行单笔限额5.00万（含）以下，单日总限额20万（含）以下，工作日及节假日7*24小时实时到账。各银行实际提现限额以页面提示的额度为准。2.大额提现：单笔/单日额度不限，工作日9:00-16:30可用，预计2小时内到账，实际到帐时间以发卡行为准。大额提现需填写联行号（开户支行）。'
            }, {
                q: '提现收手续费吗？怎么收取？',
                a: '（1）用户在工场微金有过一笔出借后，提现免收手续费；<br>（2）充值后无出借的提现，收取0.4%的手续费；<br>（3）手续费在进行提现交易时实时收取。'
            }]
        }, {
            topic_title: '债权转让',
            icon: 'zqzr',
            topic_items: [{
                q: '什么是债权转让？',
                a: '债权转让是指，产品持有人（转让方）将自己持有的全部出借项目，通过项目转让方式，将债权转让给其他人（受让方），并与受让方签订转让协议，收回本金及利息的操作。当您急需用钱或资金流转需要时，可以发起债权转让，快速收回资金。'
            }, {
                q: '债权转让的规则',
                a: '1. 仅一次性还本付息、按天一次性还本付息、按月付息到期还本的项目（包括已认购的转让项目）持有满30天后，允许全部转让；<br/>2、单笔微金项目支持一对多转让，并可多次转让；<br/>3.微金项目发布转让后，若在有效期内未全部卖出，剩余部分可再次申请转让；<br/>4. 原标出借本金不足1000元时，不允许转让；<br/>5. 预期还款日前7日（含还款日当日）不允许转让；<br/>6. 转让方通过折让金设置转让价格，折让金越高，受让方预期年化利率越高。折让金定价区间：0≤折 让金≤转让方填写的转让本金的20%；<br/>7. 转让手续费为原标出借本金的0.5%；'
            }, {
                q: '如何债权转让？',
                a: '首先从平台账户“我的出借”列表中选择需要转出的项目，点击“出借的项目-XX项目”右下方蓝色的“项目转让”选项，链接到该笔项目的转让信息填报页面，根据页面提示发起转让申请。'
            }, {
                q: '债权转让利息计算？',
                a: '以原标还款方式为“一次性还本付息”模式的项目转让标为例：<br/> 假设：<br/> 1.    项目总期限＝T天，预期年化利率=R，客户出借本金M元；<br/> 2.	客户在持有原标的第D天（已持有期限=D天）在平台发起转让：<br/><br/> 分析：原标剩余期限=T-D天，<br/><br/> 项目交易时收取转让方手续费C元；<br/> 转让方实收金额=转让时原标剩余价值-C；<br/> <br/> 到期日受让方回款本金=M元；<br/> 到期日受让方回款利息=M*R*T/360 元；'
            }, {
                q: '案例：',
                a: '1.“易车享”XX项目期限180天，预期年化利率13%，客户出借本金1,000,000元；<br/> 2. 客户在持有项目30天时发起转让申请，原标剩余期限150天；<br/> <br/> 分析：转让时原标剩余价值=1,010,142.71元；<br/> 转让方手续费=10,000元；<br/> 转让方实收金额=1010142.71-10000=1,000,142.71元；<br/> <br/> 到期时受让方回款本金=1,000,000元；<br/> 到期时受让方回款利息=1,000,000*13%*180/360=65000元<br/> （注：具体情况按照每个项目的详细信息进行具体分析，最终解释权归工场微金所有。） '
            }]
        }, {
            topic_title: '批量出借',
            icon: 'plcj',
            topic_items: [{
                q: '什么是“批量出借”？',
                a: '“批量出借”是工场微金为了方便用户出借小额项目推出的新功能，通过使用该功能，用户可以一次性出借远大于单个项目可投金额的资金。批量出借后，系统会自动按照项目列表的默认顺序依次完成投标，直至完成所有出借为止。'
            }, {
                q: '批量出借能否使用工豆？',
                a: '使用“批量出借”功能时会默认选择使用工豆，且工豆优先投标'
            }, {
                q: '批量出借能否使用优惠券？',
                a: '使用“批量出借”功能不可以使用优惠券，如果想使用优惠券，只能选择集合中的单个项目进行出借。'
            }, {
                q: '批量出借后还用逐一输入交易密码吗？',
                a: '用户完成授权后，使用“批量出借”功能进行投标无需再次输入交易密码，即可完成出借。'
            }, {
                q: '新用户首投时能否正常享受新手福利？',
                a: '新用户首次出借时使用“批量出借”可能无法享受到新手政策活动的最优奖励，建议仔细阅读新手政策，并选择单个项目出借'
            }, {
                q: '批量出借怎么开通？',
                a: '登录后，未开通徽商账户、未升级徽商账户、未设置交易密码的用户，不允许使用批量出借功能。用户应先完成开户、升级和设置密码后开通批量出借功能的授权→设置最高限额→授权完成。'
            }, {
                q: '使用批量出借后能否债权转让？',
                a: '债权转让只针对单个项目进行转让。如果系统自动匹配的单个项目出借金额不足1000元，则不能进行债权转让。'
            }]
        }]
    }, {
        group_title: '徽商银行资金存管',
        group_items: [{
            topic_title: '徽商银行资金存管',
            icon: 'hsyh',
            topic_items: [{
                q: '什么是徽商银行资金存管？',
                a: '用户在工场微金的交易资金通道，将由第三方支付托管账户全面迁移至徽商银行资金存管系统。接入徽商银行存管后，借款人、出借人将在徽商银行开设独立的银行电子账户，交易资金均根据用户指令通过该电子银行账户划拨，从源头上杜绝资金池以及资金占用风险的发生。徽商银行独立电子账户在借款人、平台、出借人之间建立安全屏障，实现出借者资金和平台自有资金的完全隔离。'
            }, {
                q: '老用户怎么升级徽商银行存管？',
                a: '1）点击“个人中心”-“开通银行存管账户”滚动公告<br/> 2）开通徽商账户<br/> 3）设置交易密码<br> 4）完成升级 '
            }]
        }, {
            topic_title: '余额利息',
            icon: 'yesy',
            topic_items: [{
                q: '什么是余额利息？',
                a: '余额利息是用户徽商存管电子账户的可用余额所产生的利息，该利息按照徽商银行定期存款利率或活期存管利率“靠档计息”规则，当资金变动日终时进行计算，用户可在个人中心查询。'
            }, {
                q: '如何计算存款利息？',
                a: '徽商直销银行自动靠档计息业务开通了三个月、六个月、一年、两年、三年、五年6个档位。靠档计息账户在进行提前支取时，存款利率按照满足存期要求的最大靠档利率计算。<br>举例：<br>支取靠档计息存款资金时，存期为7个月，则结息靠入整存整取六个月的档位，存款利息=靠档账户支取金额×7个月×六个月定存利率。<br>支取靠档计息存款资金时，存期为50天，则结息无法靠档，根据活期利率结息，存款利息=靠档账户支取金额×50天×活期利率。'
            }]
        }]
    }, {
        group_title: '常见问题',
        group_items: [{
            topic_title: '违约金',
            icon: 'wyj',
            topic_items: [{
                q: '什么是违约金？',
                a: '违约金是正常还款下，除应还本息之外，补充分配给出借人的金额。'
            },
                {
                    q: '违约金分类',
                    a: '违约金分为逾期违约金和提前还款违约金'
                },
                {
                    q: '何时分配逾期违约金？',
                    a: '由第三方担保机构提供本金利息保证的项目，逾期时首先由担保机构及时代偿，担保机构代偿失效时，将会产生逾期违约金。'
                },
                {
                    q: '何时分配提前还款违约金？',
                    a: '提前还款是每个借款人可享的权利，为保障出借人利益，借款人提前还款后，需缴纳提前还款违约金，由工场微金分配给出借人作为出借损失补偿。'
                }]
        }, {
            topic_title: '其它',
            icon: 'qt',
            topic_items: [{
                q: '使用App客户端打开页面速度慢, 或无法正常访问?',
                a: '请点击以下链接, 查询并获取网络信息截图, 然后, 拨打我们的客服电话进行反馈, 技术人员将尽快排查解决。<br/><a href="http://ceba.quansucloud.com/wstCeba/local/mobile!dns.action?domain=app.gongchangp2p.com">App网络信息查询</a><br/><a href="http://ceba.quansucloud.com/wstCeba/local/mobile!dns.action?domain=m.gongchangp2p.com ">HTML5网络信息查询</a>'
            }]
        }]
    }, {
        group_title: '了解项目',
        group_items: [
            {
                topic_title: '消费贷',
                icon: 'xfd',
                topic_items: [{
                    q: '什么是消费贷？',
                    a: '“消费贷”系列项目是一款面向广大消费用户提供消费借贷信息服务的产品。项目借款人主要由通善金融、掌众金融、悠融资产等推荐。借款人资金主要用于满足个人消费需求。本项目由工场微金向交易双方提供方便快捷的借贷信息撮合及居间服务，借款人和出借人通过工场微金平台直接签订法律协议，明确双方的权利义务关系。本项目由大型担保公司或国内大型知名机构为借款人提供连带责任保证担保，如果借款人未按时履行还款义务，则由担保方履行担保责任，以保障出借人权益。'
                }, {
                    q: '如果借款人无力还款，如何保障出借人的本金及利息安全？',
                    a: '如果借款人未按期还款，由担保机构履行担保责任代为清偿借款,以保障出借人权益。担保机构负责借款追偿，催收工作。'
                }, {
                    q: '消费贷项目出借人线上都需要签哪些合同及文件？',
                    a: '消费贷项目为个人直接借贷项目，出借人资金出借涉及的合同及签署主体如下(仅供参考，以实际签署合同为准)：<br/>（1）《借款合同》：出借人、借款人<br/>（2）《出借咨询服务协议》：出借人、平台方<br/>（3）《保证合同》：出借人、担保方<br/>（4）《委托划款授权书》：出借人、平台方<br/>（5）《网络借贷出借风险提示》<br/>（6）《出借人承诺书》<br/>（7）《履行反洗钱义务的承诺书》'
                }]
            }
        ]
    }
];


@CSSModules(styles, {
    allowMultiple: true,
    handleNotFoundStyleName: 'ignore'
})
class List extends React.Component {

    render() {

        let topic = (i, index) => {
            return <a styleName="topic" key={index} onClick={() => {
                this.props.history.push(`/faq/${i.icon}`)
            }}>
                <div styleName={`topic-icon icon-${i.icon}`}></div>
                {i.topic_title}
            </a>
        }

        let group = (data, index) => {
            return <div styleName="group" key={index}>
                <div styleName="group-title">{data.group_title}</div>
                <div styleName="topics">
                    {data.group_items.map(topic)}
                </div>
            </div>
        }

        return <div styleName="bg">
            {(!Browser.inApp) && <Header title="帮助中心" history={this.props.history}/>}
            {QUESTIONS.map(group)}
        </div>
    }
}


@CSSModules(styles, {
    allowMultiple: true,
    handleNotFoundStyleName: 'ignore'
})
class Page extends React.Component {

    constructor(props) {
        super(props)

        let current_topic = {}

        QUESTIONS.forEach(group => {
            group.group_items.forEach(topic => {
                if (topic.icon == props.match.params.kind)
                    current_topic = topic
            })
        })

        this.state = {
            opened: [],
            topic: current_topic
        }
    }

    toggleHandler = (index) => {
        let opened = this.state.opened.slice();
        opened[index] = opened[index] == 'show' ? 'hide' : 'show';
        this.setState({opened: opened});
    }

    render() {
        let qa = (i, index) => {
            var cn = this.state.opened[index] == 'show' ? 'qa show' : 'qa';

            return <div styleName={cn} key={index}>
                <div styleName="q" onClick={() => this.toggleHandler(index)}>
                    <div styleName="icon-down-arrow"></div>
                    {i.q}
                </div>
                <div styleName="a" dangerouslySetInnerHTML={{__html: i.a}}></div>
            </div>
        }

        return <div styleName="bg">
            {(!Browser.inApp) && <Header title="帮助中心" history={this.props.history}/>}
            <div styleName="topic-title">{this.state.topic.topic_title}</div>
            <div styleName="topic-content">
                {this.state.topic.topic_items.map(qa)}
            </div>
        </div>
    }
}

export {
    List, Page
}