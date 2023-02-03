//api管理
const base={
    host:'https://opendata.resas-portal.go.jp',
    getPrefectures:'api/v1/prefectures',//指定された都道府県に関する都道府県データ
    getPrefName:'api/v1/cities',//指定された都道府県に関する市区町村データ
    getPopulation:'api/v1/population/composition/perYear'//地域単位、年単位の年齢構成のデータを返します。
}



export default base