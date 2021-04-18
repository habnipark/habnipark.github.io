// Question JS setting
var i =1;
 var qNumber = {
  1:{
    'Qtitle' : 'Q.01',
    'Qdescription' : '친구와의 술 약속! 눈 앞에 두개의 술집을 발견한다. 당신의 선택은?',
    'abType' : 'EI',
    'A_a' : '북적북적 사람들이 가득한 술집! "뭐야, 이런 찐맛집 포스는 못참지!"',
    'A_b' : '손님이 적고 조용한 술집! "그래도 아늑한 술집이 낫지!"'
    },
  2:{
    'Qtitle' : 'Q.02',
    'Qdescription' : '평화롭게 집에 누워있던 휴일 오후, 시원한 맥주가 땡긴다. 당신의 선택은?',
    'abType' : 'EI',
    'A_a' : '"맥주집에서 생맥콜? 아님 한강에서 맥주?" 만날 친구를 물색해서 밖으로 나간다.',
    'A_b' : '냉장고에 구비해둔 맥주를 꺼내 먹거나 없으면 시켜먹고, 그것도 귀찮으면 그냥 참는다.'
    },
  3:{
    'Qtitle' : 'Q.03',
    'Qdescription' : '10시까지 영업인 술집에서 술을 마시던 당신,  아직 술이 부족한데 시간은 어느덧 9시 40분! 당신의 선택은?',
    'abType' : 'EI',
    'A_a' : '"빨리 먹고 제 때 나갈게요 사장님~!~ 한병만 더 주세요~!" 사장님에게 너스레를 떨며 한 병을 더 쟁취한다.',
    'A_b' : '"어쩔 수 없지 뭐." 아쉬움을 뒤로하고 자리를 마무리한다.'
    },
  4:{
    'Qtitle' : 'Q.04',
    'Qdescription' : '술 약속을 위해 술집을 골라야하는 당신과 친구들! 술집 선택의 기준은?',
    'abType' : 'SN',
    'A_a' : '친구가 짜둔 최애 술집 리스트에 맡긴다.',
    'A_b' : '지금 당장 우리의 직감과 요즘 들었던 트렌드를 떠올려보고 고른다.'
    },
  5:{
    'Qtitle' : 'Q.05',
    'Qdescription' : '처음 와본 술집이 괜찮았을 때, 당신이 그 술집을 기억하는 방식은?',
    'abType' : 'SN',
    'A_a' : '술집의 위치, 안주의 종류, 맛있는 메뉴 등을 잘 외워둔다.',
    'A_b' : '여기 참 괜찮네, 전반적인 분위기를 대강 기억해둔다.'
    },
  6:{
    'Qtitle' : 'Q.06',
    'Qdescription' : '직장동료가 당신이 이전에 추천했던 회사 근처의 술집 위치를 물어본다. 당신의 대답은?',
    'abType' : 'SN',
    'A_a' : '어떻게 가는지 회사에서부터 가는 법을 알려준다.',
    'A_b' : '술집 근처의 큰 건물들을 중심으로 알려준다.'
    },
  7:{
    'Qtitle' : 'Q.07',
    'Qdescription' : '당신이 즐겨먹던 맥주의 맛이 바뀐 것 같다는 말이 들려온다. 당신의 반응은?',
    'abType' : 'TF',
    'A_a' : '"크~~~ 맛만 있구만" 내 최애맥주를 의심하지 않는다.',
    'A_b' : '"탄산이 좀 세졌나..?" 괜히 변한 것 같이 느껴져 원인을 찾아본다.'
    },
  8:{
    'Qtitle' : 'Q.08',
    'Qdescription' : '"어제 울적해서 칵테일 한 잔 마셨는데 맛 진짜 없었어" 라고 말하는 친구, 당신의 반응은?',
    'abType' : 'TF',
    'A_a' : '"어디서 무슨 칵테일 마셨길래?" 먼저 물어본다.',
    'A_b' : '"왜 어제 무슨일 있었길래 울적했어?" 먼저 물어본다.'
    },
  9:{
    'Qtitle' : 'Q.09',
    'Qdescription' : '"이직준비 너무 힘들다." 술자리에서 친구가 고민을 털어놓는다. 당신의 반응은?',
    'abType' : 'TF',
    'A_a' : '"어디로 이직 준비 하고있어? 이력서는 넣고 있고?" 친구의 상황을 먼저 물어본다.',
    'A_b' : '"회사 다니면서 이직 준비 빡세지? 힘들겠다" 먼저 위로한다.   '
    },
  10:{
    'Qtitle' : 'Q.10',
    'Qdescription' : '술~이 한 잔 생각 나~는 날~~ 음주 파티원을 모집하는 당신의 모습은?',
    'abType' : 'JP',
    'A_a' : '애들아 오늘 퇴근하고 n시쯤 강남에서 회에다 소주 먹을래?',
    'A_b' : '오늘 술 마실 사람! 어디서 뭐 먹을지는 아직 안정했지만 몰라 일단만나!'
    },
  11:{
    'Qtitle' : 'Q.11',
    'Qdescription' : '끝나고 집에서 쉬려했는데 친구들이 한잔만 마시자고 꼬드긴다. 당신의 생각은?',
    'abType' : 'JP',
    'A_a' : '"오늘은 술 먹을 계획이 전혀 없었는데..." 당황스럽고 무척 고민이 된다.',
    'A_b' : '콜! 몰라 특별히 급한 일도 없는데 한번 사는 인생 놀고보자!'
    },
  12:{
    'Qtitle' : 'Q.12',
    'Qdescription' : '미리 찾아두었던 술집이 문을 닫았다. 당신의 선택은?',
    'abType' : 'JP',
    'A_a' : '(미리 전화로 확인하기 때문에 그런 일은 좀처럼 일어나지 않지만) 다시 근처 맛집을 검색해본다.',
    'A_b' : '괜찮아 보이는 근처의 다른 술집으로 들어간다.'
    }
  }



// Result JS setting
var result={
'INTJ': {'mbti': '감정에 휘둘리지 않는 혼술꾼', 'src':'', 'content': '혼자만의 시간이 너무 소중해 사람 많고 시끄러운 장소를 별로 좋아하지 않는 당신<br>누군가에게 정 붙이기까지 시간이 좀 걸리고 그만큼 인간 관계 정리도 잘하는 당신은 할 땐 하고 안할 땐 안하는 화끈한 세미 완벽주의자 성향의 술꾼이군요<br>수다 떠는 것을 좋아하는 당신은 내성적이라 발산하진 않지만 약간의 관종끼도 가지고 있어요<br>특이하고 특별한 내 모습을 남들은 굳이 몰랐으면 좋겠다고 생각하는 알쏭달쏭한 사람이군요'},

'INTP': {'mbti': '남을 의식하지 않는 논리적인 마이웨이 술꾼', 'src':'https://jjalbang.today/files/jjalboxthumb/2019/04/102_7949.jpg', 'content': '자기주관이 매우 뚜렷하고 호불호가 확실한 마이웨이 당신<br>탄탄한 자기애로 상처를 쉽게 받지 않고 감정적 기복이 적은 자발적 아웃사이더 성향의 술꾼이군요<br>남에게 별로 관심도 없는만큼 피해주는 것을 극도로 싫어해서 시간약속 안지키는 사람은 용서가 안돼요<br>잡담이나 농담을 별로 좋아하지도 않는 당신은 가벼운 얘기는 별로 흥미도 없어해서 가끔 친구들에게 진지한 팩트폭격기라는 이야기도 많이 듣는 사람이군요'},

'ENTJ': {'mbti': '현실적인 프로페셔널 불도저 술꾼', 'src':'http://img.wemep.co.kr/deal/0/674/2196740/d1b15df4d2d1813b498a2e1e2f8ebc9b4dfdddee.jpg', 'content': '세상에 믿을 사람은 오직 나! 누구에게 의존하거나 의지하는 스타일이 아닌 똑부러지는 당신<br>남이 이래라 저래라 하는 걸 싫어하는 당신은 답답한 걸 못견뎌서 내가 주도적으로 착착 해결하는 스타일이에요<br>하기 싫은 건 안하지만 그래도 해야할 때는 최대한 빨리 잘 끝내버리는 불도저 같은 프로페셔널 술꾼이군요<br>누가 뭘 못하면 답답하고 이해가 안돼서 친구들의 고민에도 공감보다는 해결책을 잘 찾아줘요<br>현실적이고 논리적인 당신은 혼자 있을 때는 상상력이 풍부해지는 몽상가 기질도 있는 사람이군요'},

'ENTP': {'mbti': '아싸가 되고싶은 혼종인싸 술꾼', 'src':'http://www.slist.kr/news/photo/201710/21957_63858_4228.png', 'content': '사람들과 지내는 것을 좋아하고 친화력도 좋지만 혼자만의 시간도 소중한 당신<br>사람들에게 치유받고 또 사람들로 인해 스트레스를 받는 때때로 아싸가 되고싶은 혼종인싸 술꾼이군요<br>독립심이 강해 혼자가 가장 편하지만 외로움도 잘 타는 당신은 밖에선 잘놀지만 집 안에 있는 것도 좋아해요<br>직설적이고 솔직해서 나와 의견이 다른 상대를 만나면 주로 설득하는 편으로 토론과 논쟁에 강해요<br>잘못된 건 잘못됐다고 말해야 직성이 풀리는 당신은 정해진 틀에 갇힌 생활이 싫은 자유로운 사람이군요'},

'INFJ': {'mbti': '생각이 너무 많은 감성술꾼', 'src':'https://s1.blackdesertm.com/KR/FORUM/BDM/Upload/Board/25c73fdac9a20190925175536086.jpeg', 'content': '생각이 많아 혼자만의 생각 정리할 시간이 꼭 필요한 당신<br>생각과 함께 망상도 많아 감수성까지 풍부한 감성 술꾼이군요<br>관심 받고 싶은데 나서는 건 싫어하는 당신은 낯가림이 심하고 눈치가 빨라서<br>친해지고 싶은 사람이 생겨도 먼저 다가와주길 기다리고 일단 친해지면 마음맞는 사람에게 정말 잘해줘요<br>항상 계획을 세우고 계획적인 것을 좋아하는 당신은 무리지어 무의미하게 노는 시간보다는<br>친한 친구와 단 둘이 노는 것을 더욱 좋아하는 사람이군요'},

'INFP': {'mbti': '귀찮은 게 많은 "조용한관종"술꾼', 'src':'https://2.gall-img.com/hygall/files/attach/images/82/984/465/058/bd6d5fd4b7ce86203ac8032e0de9543e.jpg', 'content': '연락도 나가는 것도 가끔 만사 귀찮은 게 많지만 막상 나가면 잘 노는 세미 집순이 당신<br>관심을 원하긴하지만 막상 관심이 쏟아지면 어색해서 어쩔줄 모르는 조용한 관종술꾼이군요<br>생각만 엄청 하고 실천까지는 오래 걸리는 당신은 일단 시작하면 완벽하고싶은 게으른 완벽주의자예요<br>남한테 관심은 많지 않지만 남들이 나를 어떻게 생각할지는 많이 고민 하는 당신은<br>때론 인간관계에 예민해지기도 해서 작은 변화 하나에도 내가 뭘 잘못했나 고민하곤 해요<br>한 번 싫은 건 끝까지 싫은 당신은 개인적인 이야기를 남에게 하는 것을 싫어해서 화날 땐 혼자 있는게 편한 사람이군요'},

'ENFJ': {'mbti': '핵인싸가 되고싶은 신뢰파술꾼', 'src':'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4Ki1/image/LO5kA5nu5kR_9BiKjoLpADrZCi0.png', 'content': '사람들을 이끄는 것에 타고난 재능이 있고 좋아하기도 하는 핵인싸재질인 당신<br>상대방이 신뢰감을 보이면 살아있음을 느끼는 신뢰파 술꾼이군요<br>센스있고 눈치가 빨라 사람들에게 잘 맞춰주는 당신은 평소 주위 사람의 신뢰를 많이 받아요<br>남들에게 신경쓰고 잘해주려고 해서 가끔 사람들의 눈치를 보기도 하고 상처를 받기도 하죠<br>무리에 속해있는 것도 좋아하지만 마이웨이 기질이 약간 있어 여가시간을 혼자 보내는 것도 좋아하는 사람이군요'},

'ENFP': {'mbti': '열정 넘치는 예측불허 즉흥술꾼', 'src':'https://lh3.googleusercontent.com/proxy/_C5OzI0lC9JQbxjo-QI44meFO0uoPl4DhuD2l7J5Q51hNF2GY2x4zhxcXQ2vJ7TylxohqFy6RiMR2dlexKdxP_PL9jUyDlcupU11bc7z47DiFv3tAF_bs3oa-VP8kw', 'content': '갑자기 꽂힌 것도 삘 받으면 하고싶은 건 꼭 해야 직성이 풀리는 당신<br>무언가에 쉽게 몰두하는 성격으로 즉흥적인 무계획 삶을 즐기는 예측불허 즉흥술꾼이군요<br>사람들과 함께하는 것을 너무 좋아하는 당신은 사람들에게 친절을 베풀고 친해지는 과정조차 행복이지만<br>내 시간이 필요할 땐 나가 노는 것 보다는 철저히 혼자 있는 잠수 시간도 필요해요<br>리액션을 잘 해서 고민 상담도 많이 해주지만<br>거짓말을 잘 못하는 당신은 입에 발린 말은 잘 못해요<br>호불호가 분명한 당신은 갑자기 확 꽂혀서 계획한 일들에 금방 식는 편이라 하나를 제대로 완성한 적은 잘 없긴해도<br>일단 완성하면 그 기억 하나로 여생을 행복하게 보낼 소박한 사람이군요'},

'ISTJ': {'mbti': '원리원칙적인 계획형 철벽술꾼', 'src':'https://2.gall-img.com/hygall/files/attach/images/82/705/279/257/5b6118ada6831a11ed139aea7ba7604b.jpg', 'content': '즉흥적인 것을 싫어하고 약속이 정말 중요해서 약속을 어기는 걸 정말 싫어하는 당신<br>원리원칙적이고 계획적이어서 가끔 딱딱하단 소리를 듣곤하는 당신은 철벽술꾼이군요<br>책임감이 강해 프로젝트를 진행할 때 딴 곳으로 새지않고 목표한 바를 끝내야 직성이 풀리는 당신은<br>협동보다는 타인의 간섭 없이 혼자서 일을 해결하는 방식을 선호해요<br>남에게 별로 관심이 없어 개인사를 이야기하기 싫어하고 가끔 상대방의 개인적인 이야기를 듣는 것도 지루해요<br>여행이나 술약속에도 나서서 계획하는 것이 속편한 당신은 칼같은 면이 있는 똑부러지는 사람이군요'},

'ISFJ': {'mbti': '배려심 많은 "아싸 중에 인싸"술꾼', 'src':'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/2GVd/image/X8NIEN8SMr7-WbNSRuRtf4JsIFQ.jpg', 'content': '배려심 많고 공감을 잘해주는 온화한 성격의 당신<br>어쩔 땐 내향적이고 어쩔 땐 외향적이어서 인싸 중엔 아싸지만 아싸 중엔 인싸술꾼이군요<br>이런 알 수 없는 성격때문에 당신은 간혹 나도 내 성격을 잘 모르겠다고 생각해요<br>겉으론 무덤덤해보여도 남몰래 남들의 눈치도 많이 보는 편이라 인간 관계에 간혹 스트레스를 받는 당신은<br>따뜻한 마음으로 주변사람을 챙기는 것을 좋아해 상대에게 잘 맞춰주고 주변사람 칭찬도 많이 해줘요<br>겸손한 성격으로 나서거나 주변 사람들에게 나에 대한 어필은 잘 안하지만 관심 받는 것은 좋아하는 사람이군요'},

'ESTJ': {'mbti': '이성적이고 엄격한 엄근진 리더술꾼', 'src':'https://pbs.twimg.com/profile_images/1005705424530599937/yshNeK35_400x400.jpg', 'content': '현실적이고 이성적인 성격으로 딱딱 떨어지게 확실한게 좋은 당신<br>내 계획이 틀어지는 걸 견딜 수 없는 엄격한 성격의 엄근진 리더술꾼이군요<br>내 시간을 방해받는 것을 싫어해서 즉흥적인 번개는 질색인 당신은<br>외로움도 많이 타지 않아 나가서 노는 것보단 혼자 이것저것 배우는 것을 더 좋아하기도 해요<br>리더 맡는 것을 좋아하진 않지만 일처리 못하는 것을 정말 싫어하기 때문에 누가 못하는 걸 지켜보느니<br>내가 주도적으로 나서서 다 해놓는게 맘이 편해요<br>남에게 큰 관심이 없고 내 현재 상황과 나에게만 집중하는 당신은<br>목표를 설정하고 이룰 때 까지 한 우물을 파는 사람이군요'},

'ESFJ': {'mbti': '새로운 술자리가 좋은 사교술꾼', 'src':'http://file3.instiz.net/data/file3/2018/03/14/d/3/5/d354bfa412e711d0079e8e117458091c.jpg', 'content': '사회생활 만렙 타고난 분위기 메이커인 당신<br>새로운 사람 사귀는 것도 좋아하고 같이 노는 것도 좋아하는 당신은 사교술꾼이군요<br>어색한 것을 못참는 당신은 먼저 다가가 말을 쉽게 걸기도하고 상대방의 이야기는 물론 강의에도 호응을 많이 해주는 리액션 부자예요<br>친구 가족 주변 인물들을 모두 알뜰살뜰 챙기는 성격탓에 다른 사람에게 인정 받을 때 기분이 특히 좋아요<br>아직 안 일어난 상황에 대해서도 미리 걱정하는 당신은 마상을 쉽게 받아 인간관계가 힘들 때도 많은 사람이군요'},

'ISTP': {'mbti': '주류에 속하기 싫은 무미건조술꾼', 'src':'https://blog.kakaocdn.net/dn/bFhdIj/btqA1y1Ctiw/L3YadVoAhQlO7HS4mY7sFk/img.png', 'content': '친한 사람 앞이 아니면 조용히 과묵한 당신<br>관심있고 좋은 것에만 열중하기도 바쁜 당신은 새로운 만남은 싫은 무미건조술꾼이군요<br>효율적인 것을 특히 좋아해서 내가 맡은 바는 빠르게 처리하는 편인 당신은 하기 싫은 것은 죽어도 하기 싫어하지만 하나에 꽂히면 내가 질릴 때 까지 끝장을 봐야해요<br>이것저것 잘하는 것도 많고 관심있는 것도 많은 재주꾼이지만 만사가 귀찮아 끝을 못보는 경우도 많아요<br>시끄럽고 정신 사나운 것을 싫어해서 친한 사람 앞에서만 활발한 당신은 냉철하지만 내 사람에게는 따뜻한 사람이군요'},

'ISFP': {'mbti': '약속이 취소되면 은근히 기쁜 집순이술꾼', 'src':'https://lh3.googleusercontent.com/proxy/VgWFcCQsBMz0n0wxb7fXd5Z0kCb1w1PRFqYyeEWoFYvTWDm1bF05tS5FcoGDPSAr46gf18yf0t6N43I', 'content': '밖에 나돌아 다니는 게 귀찮고 그냥 매사 귀찮은 일이 많은 당신<br>집에 가면 연락이 두절되기도 하는 당신은 약속이 취소되면 속으로 기뻐하는 집순이술꾼이군요<br>혼자가 좋은데 놀 때가 좋을 때도 있어서 막상 만나면 잘 놀지만 금방 지치는 당신은<br>사람들이랑 만나면 기가 빨리는 기분이 들어서 사람 만나는 게 좋은데 싫어요<br>공감능력이 뛰어난 당신은 칭찬이라도 받는 날엔 하루종일 그 생각밖에 안나요<br>결정과 거절을 잘 못해서 주변 의견 분위기를 따라가는 게 편한 당신은<br>겸손하고 양보를 잘하고, 일단 한 번 친해지면 활발하고 낙천적인 사람이군요 '},

'ESTP': {'mbti': '외로운 게 싫은 스릴넘치는 쿨톤술꾼', 'src':'https://mblogthumb-phinf.pstatic.net/MjAxOTA5MjZfNDQg/MDAxNTY5NDM5NjU4NDQ0.UssKlhh8nIR7iC8E9DttWfov-EOo7Sca_imxfTsy-0kg.-oF9emfhJfpXlZr2B6-gv-iY5-pcY2nI4f_NZUU5GS0g.JPEG.ydvisa/1569439646121.jpg?type=w800', 'content': '외로움을 많이 타는 활발한 게으름쟁이인 당신<br>깊게 생각하는 것보다 스릴 넘치고 재밌는 일이 좋은 뒤끝 없는 쿨톤술꾼이군요<br> 남 눈치는 잘 보지 않고 내가 하고 싶은 걸 하고 사는 걸 좋아하는 편인 당신은<br> 주변에 일어나는 일에 관심이 많고 리더십이 많아 조장이나 반장으로 많이 추천돼요<br>남에게 관심도 없고 굳이 생각하기도 귀찮아서 가끔 공감능력이 없다는 이야길 듣는 당신은<br>추상적이거나 감성적인 유형을 싫어해서 돌직구 던진다는 소리도 자주 듣는 사람이군요'},

'ESFP': {'mbti': '단순한 게 좋은 자유로운 영혼술꾼', 'src':'https://i.smalljoys.me/2018/01/ec8db8eb84a4ec9dbc-ebb3b5eab5aceb90a8-4.jpg', 'content': '좋은 게 좋은 거지 잘먹고 잘살자 단순한 게 좋은 당신<br>생각이 자유롭고 평온한 당신은 사교성이 특출난 자유로운 영혼술꾼이군요<br>아무리 걱정되는 일이 있어도 조금만 고민하다 잠들고 다시 회복하는 당신은 집에 오래 있으면 무기력해져 쉬는 날엔 거의 집에 붙어있길 싫어해요<br>알아주는 관종으로 주목받는 것을 좋아하는 당신은 학교나 직장에서 모르는 사람이 없을 정도로<br>친구의 친구의 친구까지 합세한 술자리도 싫지 않은 우주최강 사교만렙인 사람이군요'}
}



// Test Start function+DOM
function start(){
  document.querySelector('#startPage').style.display="none";
  document.querySelector('#testPage').style.display="block";
  run();
}
document.querySelector('#start_btn').addEventListener('click',start);



// Calculate type value function
document.querySelector('#A_a').addEventListener('click',function(){
  var abType = document.querySelector('#abType').value;
  var typeValue = document.querySelector('#'+abType).value;
  document.querySelector('#'+abType).value = typeValue+1;
  run();
});
document.querySelector('#A_b').addEventListener('click',run);



// Output result function
function run() {
  if(i==13){
    document.querySelector('#testPage').style.display="none";
    document.querySelector('#resultPage').style.display="block";
    var mbti = '';
    (document.querySelector('#EI').value<2) ? mbti += 'I' : mbti += 'E';
    (document.querySelector('#SN').value<2) ? mbti += 'N' : mbti += 'S';
    (document.querySelector('#TF').value<2) ? mbti += 'F' : mbti += 'T';
    (document.querySelector('#JP').value<2) ? mbti += 'P' : mbti += 'J';
    console.log('mbti');
    document.querySelector('#resultTitle').innerHTML = result[mbti]['mbti'];
    document.querySelector('#resultDescription').innerHTML = result[mbti]['content'];
    document.querySelector('#Rimage').src = result[mbti]['src'];
  }
  else {
    document.querySelector('#Qnumber').innerHTML = i+'/12';
    document.querySelector('#progressBar').style.width=(i/12)*100+'%';
    document.querySelector('#Qtitle').innerHTML = qNumber[i]['Qtitle'];
    document.querySelector('#Qdescription').innerHTML = qNumber[i]['Qdescription'];
    document.querySelector('#abType').value = qNumber[i]['abType'];
    document.querySelector('#A_a').innerHTML=qNumber[i]['A_a'];
    document.querySelector('#A_b').innerHTML=qNumber[i]['A_b'];
    i++;
  }
}



    Kakao.init('c0695d9221da05822fdb6db554887653');

    var resultTitle = document.querySelector('#resultTitle').textContent;
    var resultDescription = document.querySelector('#resultDescription').textContent;

    function sendLink() {
        Kakao.Link.sendDefault({
          objectType: 'feed',
          content: {
            title: resultTitle,
            description: resultDescription,
            imageUrl:
              'resultImage',
            link: {
              mobileWebUrl: 'https://habnipark.github.io/',
              webUrl: 'https://habnipark.github.io/',
            },
          },
          buttons: [
            {
              title: '나의 술쟁이 유형은?',
              link: {
                mobileWebUrl: 'https://habnipark.github.io/',
                webUrl: 'https://habnipark.github.io/',
              }
            }
      ]
    });
  }
document.querySelector('#share').addEventListener('click', sendLink);



// Retry function
function retry(){
  document.querySelector('#resultPage').style.display="none";
  document.querySelector('#testPage').style.display="block";
  i = 1;
  EI.value=SN.value=TF.value=JP.value=0;
  run();
}
document.querySelector('#retry').addEventListener('click',retry);
