const category=["편의점","카페","음식점","문화생활","여행","교통","마트","관리비","세금",
"온라인쇼핑","경조사","기부","교육","의료","유흥","미용","통신비","급여","기타수입","로또","월세"];


const card=[{name:"IBK기업은행체크카드",bank:"ibk"},
{name:"신한체크카드",bank:"sh"},
{name:"카카오체크카드",bank:"kakao"}];

const bank=[{name:"IBK기업은행",bank:'ibk',money:100000},
{name:"신한은행",bank:'sh',money:1000000},
{name:"카카오뱅크",bank:'kakao',money:6000000}];

function house(date, money, category, detail,way){
    this.date=date;
    this.money=money;
    this.category=category;
    this.detail=detail;
    this.way=way;
}