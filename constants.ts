
import { ItineraryDay, BookingReminder, ChecklistItem } from './types';

export const HOTEL_INFO = {
  name: "MYSTAYS 東池袋飯店",
  address: "170-0013 東京都豊島区東池袋4-39-13",
  station: "JR 大塚站 (山手線) / 向原站 (都電荒川線)",
  coords: { lat: 35.7303, lng: 139.7288 }
};

const searchUrl = (q: string) => `https://www.google.com/search?q=${encodeURIComponent(q)}`;

export const ITINERARY: ItineraryDay[] = [
  {
    date: "2026-02-28",
    title: "抵達東京 / 飯店入駐",
    spots: [
      { name: "成田國際機場", infoLink: searchUrl("成田機場 設施"), transportToNext: "搭乘京成電鐵 Skyliner 至日暮里站，轉乘 JR 山手線至大塚站" },
      { name: "飯店 Check-in (MYSTAYS)", infoLink: "https://www.mystays.com/hotel-mystays-higashi-ikebukuro-tokyo/" }
    ],
    transport: "成田機場 ➔ Skyliner ➔ 日暮里 ➔ 大塚站",
    restaurant: { name: "無敵家拉麵", link: "https://www.google.com/maps/search/Mutekiya+Ramen" },
    notes: "14:15 抵達。首日專注於辦理入住與熟悉大塚站周邊環境。",
    googleMapQuery: "JR Otsuka Station"
  },
  {
    date: "2026-03-01",
    title: "Costco & Outlet (馬拉松預警)",
    spots: [
      { name: "Costco 幕張倉庫店", infoLink: "https://www.costco.co.jp/store-finder/Makuhari", transportToNext: "步行約 15 分鐘至三井 Outlet" },
      { name: "三井 Outlet Park 幕張", infoLink: "https://mitsui-shopping-park.com/mop/makuhari/tw/", transportToNext: "步行至 AEON 美食街" }
    ],
    transport: "有樂町線 ➔ 新木場 ➔ JR 京葉線 (幕張豐砂站)",
    restaurant: { name: "AEON 幕張新都心美食街", link: "https://www.google.com/maps/search/AEON+Mall+Makuhari+Shintoshin" },
    notes: "馬拉松日，留在幕張區域活動，避開東京都心管制。",
    isMarathonDay: true,
    googleMapQuery: "Costco Wholesale Makuhari"
  },
  {
    date: "2026-03-02",
    title: "淺草下町巡禮 / 晴空塔",
    spots: [
      { name: "淺草寺 (雷門)", infoLink: "https://www.senso-ji.jp/chinese_t/", transportToNext: "步行經過吾妻橋至晴空塔 (約20分) 或搭乘東武線" },
      { name: "仲見世商店街", infoLink: searchUrl("淺草 仲見世 必吃"), transportToNext: "步行前往晴空塔" },
      { name: "東京晴空塔", infoLink: "https://www.tokyo-skytree.jp/cn_t/" }
    ],
    transport: "山手線 ➔ 上野站 ➔ 轉乘銀座線至淺草",
    restaurant: { name: "淺草今半 (壽喜燒)", link: "https://www.google.com/maps/search/Asakusa+Imahan" },
    notes: "晴空塔看夜景，需提前於 2 月預約餐廳。",
    googleMapQuery: "Tokyo Skytree"
  },
  {
    date: "2026-03-03",
    title: "築地美食 / 銀座文具購物",
    spots: [
      { name: "築地場外市場", infoLink: "https://www.tsukiji.or.jp/chinese/", transportToNext: "搭乘日比谷線至銀座站" },
      { name: "銀座 伊東屋 (Ito-ya)", infoLink: "https://www.ito-ya.co.jp/", transportToNext: "步行至銀座商圈" },
      { name: "銀座商圈", infoLink: searchUrl("銀座 逛街地圖") }
    ],
    transport: "有樂町線直達銀座一丁目站",
    restaurant: { name: "築地虎杖 (海鮮丼)", link: "https://www.google.com/maps/search/Tsukiji+Itadori" },
    notes: "女兒節。銀座 Ito-ya 購買特色文具。",
    googleMapQuery: "Ginza Itoya"
  },
  {
    date: "2026-03-04",
    title: "台場一日遊 / 鋼彈與海景",
    spots: [
      { name: "台場海濱公園 (自由女神)", infoLink: "https://www.tptc.co.jp/park/01_02", transportToNext: "步行至富士電視台" },
      { name: "富士電視台", infoLink: "https://www.fujitv.com/zh-tw/visit/", transportToNext: "步行至 DiverCity 購物中心" },
      { name: "DiverCity (獨角獸鋼彈)", infoLink: "https://mitsui-shopping-park.com/divercity-tokyo/tw/", transportToNext: "步行前往餐廳" }
    ],
    transport: "JR 大塚站 ➔ 新橋站 ➔ 轉乘百合海鷗號 (Yurikamome) 至台場站",
    restaurant: { name: "Bills 台場 (世界第一早餐)", link: "https://www.google.com/maps/search/Bills+Odaiba" },
    notes: "享受台場海景與科技感，彩虹大橋夜景必看。",
    googleMapQuery: "Odaiba Marine Park"
  },
  {
    date: "2026-03-05",
    title: "荒川線路面電車 / 上野賞梅",
    spots: [
      { name: "都電荒川線 (路面電車)", infoLink: "https://www.kotsu.metro.tokyo.jp/toden/", transportToNext: "於三之輪橋站步行或轉乘至上野公園" },
      { name: "上野公園 (賞梅)", infoLink: searchUrl("上野公園 梅花祭") }
    ],
    transport: "飯店旁「向原站」搭乘路面電車",
    restaurant: { name: "上野 伊豆榮 (鰻魚飯)", link: "https://www.google.com/maps/search/Izuei+Ueno" },
    notes: "悠閒下町漫步，享受春日梅花氣息。",
    googleMapQuery: "Ueno Park"
  },
  {
    date: "2026-03-06",
    title: "麻布台之丘 / 六本木夜景",
    spots: [
      { name: "麻布台之丘", infoLink: "https://www.azabudai-hills.com/zh-CHT/index.html", transportToNext: "步行至 teamLab 會場" },
      { name: "teamLab Borderless", infoLink: "https://www.teamlab.art/zh-hant/e/borderless-azabudai/", transportToNext: "搭乘日比谷線或步行至六本木" }
    ],
    transport: "大塚站 ➔ 轉乘日比谷線至神谷町",
    restaurant: { name: "麻布台之丘 美食街", link: "https://www.google.com/maps/search/Azabudai+Hills+Restaurants" },
    notes: "teamLab 門票必須提前預約。",
    googleMapQuery: "Azabudai Hills"
  },
  {
    date: "2026-03-07",
    title: "澀谷地標 / SHIBUYA SKY",
    spots: [
      { name: "澀谷十字路口", infoLink: searchUrl("澀谷 景點 2026"), transportToNext: "步行至宮下公園" },
      { name: "宮下公園 (Rayard)", infoLink: "https://mitsui-shopping-park.com/urban/miyashita/", transportToNext: "步行至澀谷 Scramble Square 14樓" },
      { name: "SHIBUYA SKY", infoLink: "https://www.shibuya-scramble-square.com/sky/" }
    ],
    transport: "山手線直達澀谷站",
    restaurant: { name: "宮下公園推薦美食", link: "https://www.google.com/maps/search/Miyashita+Park+Food" },
    notes: "2/7 搶訂夕陽時段門票。禁止攜帶帽子與腳架。",
    googleMapQuery: "Shibuya Scramble Square"
  },
  {
    date: "2026-03-08",
    title: "中目黑櫻花 / 自由之丘",
    spots: [
      { name: "星巴克臻選®東京烘焙工坊", infoLink: "https://www.starbucks.co.jp/reserve/roastery/", transportToNext: "步行沿目黑川欣賞櫻花" },
      { name: "目黑川畔 (河津櫻)", infoLink: searchUrl("中目黑 河津櫻 時間"), transportToNext: "搭乘東急東橫線至自由之丘" }
    ],
    transport: "澀谷站 ➔ 轉乘東急東橫線",
    restaurant: { name: "中目黑 AFURI (柚子鹽拉麵)", link: "https://www.google.com/maps/search/AFURI+Nakameguro" },
    notes: "3月初有機會觀賞河津櫻。享受星巴克工坊咖啡。",
    googleMapQuery: "Starbucks Reserve Roastery Tokyo"
  },
  {
    date: "2026-03-09",
    title: "新宿御苑 / 返程準備",
    spots: [
      { name: "新宿御苑", infoLink: "https://fng.or.jp/shinjuku/zh-hant/", transportToNext: "步行至新宿站周邊商圈" },
      { name: "新宿末尾購物", infoLink: searchUrl("新宿 必買 2026") }
    ],
    transport: "山手線 ➔ 新宿站。行李快遞或寄放 ➔ 前往機場",
    restaurant: { name: "新宿 蟹道樂", link: "https://www.google.com/maps/search/Kani+Doraku+Shinjuku" },
    notes: "15:25 航班，建議 11:30 從酒店出發前往機場。",
    googleMapQuery: "Shinjuku Gyoen National Garden"
  }
];

export const REMINDERS: BookingReminder[] = [
  {
    id: '1',
    target: 'teamLab Borderless',
    deadline: '2026-01-25 10:00',
    description: '預約 3/6 入場門票 (麻布台之丘)',
    priority: 'normal',
    link: 'https://www.teamlab.art/zh-hant/e/borderless-azabudai/',
    strategy: '1. 官網提前一個月預購。2. 推薦選下午 14:00-16:00 入場。3. 提前註冊帳號並綁定信用卡。'
  },
  {
    id: '2',
    target: '晴空塔敘敘苑',
    deadline: '2026-02-02 23:00',
    description: '預約 3/2 晴空塔晚餐 (敘敘苑)',
    priority: 'normal',
    link: 'https://www.jojoen.co.jp/shop/jojoen/skytree/',
    strategy: '1. 目標是 Skytree 30樓窗邊位。2. 提前一個月(同日)日本時間凌晨 00:00 (台灣 23:00) 開搶。3. 建議用 TableCheck 或官網系統。'
  },
  {
    id: '4',
    target: 'SHIBUYA SKY 夕陽門票',
    deadline: '2026-02-07 23:00',
    description: '核心任務！搶訂 3/7 17:00 左右門票',
    priority: 'high',
    link: 'https://www.shibuya-scramble-square.com/sky/ticket/',
    strategy: '1. 入場前 30 天日本時間 00:00 (台灣前一晚 23:00) 準時開搶。2. 必搶 16:30-17:30 區間看夕陽。3. 推薦使用 Webket 系統，提前登入。'
  }
];

export const DEFAULT_CHECKLIST: ChecklistItem[] = [
  { id: 'c1', label: '實體 Costco 會員卡', completed: false },
  { id: 'c2', label: 'iPhone Apple Pay Suica', completed: false },
  { id: 'c3', label: 'SHIBUYA SKY QR Code', completed: false },
  { id: 'c4', label: '護照 (退稅與換匯用)', completed: true }
];
