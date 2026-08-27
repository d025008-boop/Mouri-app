// ==========================================================
//  毛利家めぐり — アプリケーションロジック（モバイル最適化版）
// ==========================================================

// ----------------------------------------------------------
// 状態管理
// ----------------------------------------------------------
let currentLang     = 'ja';
let currentPage     = 'home';
let visitedSpots    = new Set(JSON.parse(localStorage.getItem('visitedSpots') || '[]'));
let quizIndex       = 0;
let quizScore       = 0;
let quizAnswered    = false;
let surveySubmitted = false;

// ページ順序（スワイプナビ用）
const PAGE_ORDER = ['home', 'about', 'spots', 'quiz', 'seasons', 'access', 'survey'];

// ----------------------------------------------------------
// UI テキスト辞書（4言語対応）
// ----------------------------------------------------------
const UI = {
  visited:          { ja: '✅ 訪問済み',         en: '✅ Visited',              ko: '✅ 방문 완료',           zh: '✅ 已访问' },
  visitNow:         { ja: '👆 ここを訪問した！',  en: '👆 I visited here!',      ko: '👆 여기에 방문했어요!',  zh: '👆 我来过这里！' },
  visitRemoved:     { ja: '訪問済みを解除しました', en: 'Removed from visited',  ko: '방문 취소했습니다',       zh: '已取消访问标记' },
  visitAdded:       { ja: '✅ 訪問済みにしました！', en: '✅ Marked as visited!', ko: '✅ 방문 완료로 설정했습니다!', zh: '✅ 已标记为访问！' },
  spotsFound:       { ja: (n) => `${n}個発見！`,  en: (n) => `${n} found!`,     ko: (n) => `${n}개 발견!`,    zh: (n) => `已发现 ${n} 处！` },
  spotsTotal:       { ja: (n) => `全${n}か所`,   en: (n) => `Total: ${n}`,     ko: (n) => `총 ${n}곳`,       zh: (n) => `共 ${n} 处` },
  quizProgress:     { ja: (i,n) => `${i}問目 / ${n}問`, en: (i,n) => `Q${i} / ${n}`, ko: (i,n) => `${i}번째 / ${n}문제`, zh: (i,n) => `第${i}题 / 共${n}题` },
  correct:          { ja: '⭕ 正解！',            en: '⭕ Correct!',            ko: '⭕ 정답!',               zh: '⭕ 正确！' },
  wrong:            { ja: '❌ 不正解...',          en: '❌ Incorrect...',        ko: '❌ 오답...',             zh: '❌ 错误...' },
  nextQ:            { ja: '次の問題へ →',          en: 'Next Question →',       ko: '다음 문제로 →',           zh: '下一题 →' },
  seeResult:        { ja: '結果を見る 🎉',         en: 'See Results 🎉',         ko: '결과 보기 🎉',            zh: '查看结果 🎉' },
  resultPerfect:    { ja: '満点！すごい！',        en: 'Perfect Score!',         ko: '만점! 대단해요!',         zh: '满分！太棒了！' },
  resultPerfectMsg: { ja: '毛利家のことをよく知っていますね！ぜひ友達にも教えてあげてください。', en: 'You know the Mouri Estate really well! Tell your friends about it.', ko: '모리家에 대해 잘 알고 있군요! 친구들에게도 알려주세요.', zh: '您对毛利家非常了解！请也告诉您的朋友们吧。' },
  resultGood:       { ja: 'よくできました！',      en: 'Well done!',            ko: '잘 했어요!',              zh: '做得很好！' },
  resultGoodMsg:    { ja: '毛利家の魅力をたくさん発見できましたね。もう一度挑戦してみましょう！', en: 'You discovered many interesting things about the estate. Try again!', ko: '모리家의 매력을 많이 발견했군요. 다시 도전해 봅시다!', zh: '您发现了很多毛利家的魅力。再挑战一次吧！' },
  resultMore:       { ja: 'もう少し！',            en: 'Keep learning!',        ko: '조금 더!',                zh: '再加油！' },
  resultMoreMsg:    { ja: '「毛利家を知る」ページを読んでから再挑戦してみましょう！', en: 'Try reading the "About" page, then take the quiz again!', ko: '"모리家 알기" 페이지를 읽고 다시 도전해 보세요!', zh: '请先阅读"了解毛利家"页面，再来挑战吧！' },
  seasonHighlights: { ja: 'この季節のみどころ',   en: 'Highlights',            ko: '이 계절의 볼거리',        zh: '本季亮点' },
  surveyThanks:     { ja: '✅ ご回答ありがとうございました！<br>みなさんの声がこれからのイベント企画に活かされます。', en: '✅ Thank you for your feedback!<br>Your input will help shape future events.', ko: '✅ 답변해 주셔서 감사합니다!<br>여러분의 의견이 앞으로의 이벤트 기획에 활용됩니다.', zh: '✅ 感谢您的回答！<br>您的意见将用于今后的活动策划。' },
  surveyIntro:      { ja: '各イベントへの興味をお聞かせください。皆さんのご意見をもとに、より良いイベントを企画します。', en: 'Please share your interest in each event. Your feedback helps us plan better events for you.', ko: '각 이벤트에 대한 관심을 알려주세요. 여러분의 의견을 바탕으로 더 좋은 이벤트를 기획하겠습니다.', zh: '请告诉我们您对各项活动的兴趣。我们将根据大家的意见策划更好的活动。' },
  surveyInterest:   { ja: 'このイベントに興味はありますか？', en: 'Are you interested in this event?', ko: '이 이벤트에 관심이 있으신가요?', zh: '您对这个活动感兴趣吗？' },
  surveyReason:     { ja: 'そう思った理由を教えください（任意）', en: 'Please share your reason (optional)', ko: '그렇게 생각한 이유를 알려주세요（선택）', zh: '请告诉我们您的理由（选填）' },
  surveyPlaceholder:{ ja: '例：子どもと一緒に体験したいから', en: 'e.g. I would like to experience it with my children', ko: '예：아이와 함께 체험하고 싶어서', zh: '例：想和孩子一起体验' },
  surveySubmit:     { ja: '回答を送信する',       en: 'Submit',                ko: '답변 전송하기',            zh: '提交回答' },
  surveyRequired:   { ja: (title) => `「${title}」の興味度を選んでください`, en: (title) => `Please select your interest for "${title}"`, ko: (title) => `"${title}"의 관심도를 선택해 주세요`, zh: (title) => `请选择您对"${title}"的兴趣程度` },
  interestOptions:  { ja: ['とても興味がある', '少し興味がある', 'あまり興味がない', '興味がない'], en: ['Very interested', 'Somewhat interested', 'Not very interested', 'Not interested'], ko: ['매우 관심 있다', '조금 관심 있다', '별로 관심 없다', '관심 없다'], zh: ['非常感兴趣', '有些感兴趣', '不太感兴趣', '没有兴趣'] },
  chartTitle:       { ja: (n) => `みんなの回答（${n}票）`, en: (n) => `Everyone's answers (${n} votes)`, ko: (n) => `모두의 답변（${n}표）`, zh: (n) => `大家的回答（${n}票）` },
  chartEmpty:       { ja: '👆 上で選択すると結果が表示されます', en: '👆 Select above to see the chart', ko: '👆 위에서 선택하면 결과가 표시됩니다', zh: '👆 在上方选择后将显示结果' },
  chartMine:        { ja: 'あなた', en: 'You', ko: '나', zh: '我' },
};

// 現在言語のUIテキストを返すヘルパー
function ui(key, ...args) {
  const val = UI[key][currentLang] || UI[key]['ja'];
  return typeof val === 'function' ? val(...args) : val;
}

// ----------------------------------------------------------
// 初期化
// ----------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  renderEvents();
  renderAbout();
  renderSpots();
  renderSeasons();
  renderSurvey();
  applyI18n();
  quizReset();
  initSwipe();
  initPWA();
});

// ----------------------------------------------------------
// トースト通知
// ----------------------------------------------------------
let toastTimer = null;
function showToast(msg) {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('toast--show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('toast--show'), 2000);
}

// ----------------------------------------------------------
// スワイプジェスチャー（左右スワイプでページ切替）
// ----------------------------------------------------------
function initSwipe() {
  let startX = 0, startY = 0, startTime = 0;
  const SWIPE_THRESHOLD = 60;  // px
  const SWIPE_MAX_Y     = 80;  // px（縦スクロールと区別）
  const SWIPE_MAX_TIME  = 350; // ms

  document.addEventListener('touchstart', e => {
    startX    = e.touches[0].clientX;
    startY    = e.touches[0].clientY;
    startTime = Date.now();
  }, { passive: true });

  document.addEventListener('touchend', e => {
    const dx   = e.changedTouches[0].clientX - startX;
    const dy   = e.changedTouches[0].clientY - startY;
    const dt   = Date.now() - startTime;
    if (Math.abs(dx) < SWIPE_THRESHOLD) return;
    if (Math.abs(dy) > SWIPE_MAX_Y)     return;
    if (dt > SWIPE_MAX_TIME)            return;

    const idx = PAGE_ORDER.indexOf(currentPage);
    if (dx < 0 && idx < PAGE_ORDER.length - 1) {
      showPage(PAGE_ORDER[idx + 1]);
    } else if (dx > 0 && idx > 0) {
      showPage(PAGE_ORDER[idx - 1]);
    }
  }, { passive: true });
}

// ----------------------------------------------------------
// PWA（ホーム画面追加プロンプト）
// ----------------------------------------------------------
function initPWA() {
  // manifest が存在する場合のみ動作
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    // 必要に応じてインストールボタンを表示する処理をここに追加
  });
}

// ----------------------------------------------------------
// ページ切替
// ----------------------------------------------------------
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('page--active', 'page--entering'));
  document.querySelectorAll('.bottom-nav__item').forEach(b => b.classList.remove('bottom-nav__item--active'));

  const page = document.getElementById('page-' + pageId);
  if (page) {
    page.classList.add('page--active', 'page--entering');
    // アニメーション終了後クラスを削除
    page.addEventListener('animationend', () => page.classList.remove('page--entering'), { once: true });
  }

  const navBtn = document.getElementById('nav-' + pageId);
  if (navBtn) navBtn.classList.add('bottom-nav__item--active');

  currentPage = pageId;
  window.scrollTo({ top: 0, behavior: 'instant' });

  // スポットページに入ったら進捗を更新
  if (pageId === 'spots') updateSpotsProgress();
}

// ----------------------------------------------------------
// 多言語切替
// ----------------------------------------------------------
function setLang(lang) {
  currentLang = lang;

  // ボタンのアクティブ状態を切替
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('lang-btn--active', btn.dataset.lang === lang);
  });

  applyI18n();
  renderEvents();
  renderAbout();
  renderSpots();
  renderSeasons();
  renderSurvey();
  quizReset();
}

function applyI18n() {
  const dict = I18N[currentLang] || I18N['ja'];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key].replace(/\n/g, '<br>');
    }
  });
}

function t(keyOrObj) {
  if (typeof keyOrObj === 'string') {
    return (I18N[currentLang] || I18N['ja'])[keyOrObj] || keyOrObj;
  }
  if (typeof keyOrObj === 'object' && keyOrObj !== null) {
    return keyOrObj[currentLang] || keyOrObj['ja'] || '';
  }
  return '';
}

// ----------------------------------------------------------
// イベント一覧レンダリング
// ----------------------------------------------------------
function renderEvents() {
  const container = document.getElementById('events-list');
  if (!container) return;

  if (EVENTS.length === 0) {
    container.innerHTML = `<p style="font-size:13px;color:var(--color-text-sub);">現在予定されているイベントはありません。</p>`;
    return;
  }

  container.innerHTML = EVENTS.map(ev => `
    <div class="event-item">
      <div class="event-item__date">${ev.date}</div>
      <div class="event-item__body">
        <p class="event-item__title">${t(ev.title)}</p>
        <p class="event-item__desc">${t(ev.desc)}</p>
      </div>
    </div>
  `).join('');
}

// ----------------------------------------------------------
// 毛利家を知る レンダリング
// ----------------------------------------------------------
function renderAbout() {
  const container = document.getElementById('about-list');
  if (!container) return;

  container.innerHTML = ABOUT_SECTIONS.map(sec => {
    let bodyHtml = '';

    if (sec.timeline) {
      const items = sec.timeline.map(item => `
        <div class="timeline-item">
          <span class="timeline-item__year">${item.year}</span>
          <span class="timeline-item__text">${t(item.text)}</span>
        </div>
      `).join('');
      bodyHtml = `<div class="about-card__timeline">${items}</div>`;
    } else if (sec.body) {
      bodyHtml = `<p>${t(sec.body)}</p>`;
    }

    return `
      <div class="about-card">
        <div class="about-card__header">
          <span class="about-card__emoji">${sec.emoji}</span>
          <span class="about-card__title">${t(sec.title)}</span>
        </div>
        <div class="about-card__body">${bodyHtml}</div>
      </div>
    `;
  }).join('');
}

// ----------------------------------------------------------
// 屋敷をめぐる レンダリング
// ----------------------------------------------------------
function renderSpots() {
  const container = document.getElementById('spots-list');
  if (!container) return;

  const total = document.getElementById('spots-progress-total');
  if (total) total.textContent = ui('spotsTotal', SPOTS.length);

  container.innerHTML = SPOTS.map(spot => {
    const isVisited = visitedSpots.has(spot.id);
    const imgHtml = spot.img
      ? `<img src="${spot.img}" alt="${t(spot.name)}" class="spot-card__img" loading="lazy">`
      : '';

    const btnLabel = isVisited
      ? ui('visited')
      : ui('visitNow');

    return `
      <div class="spot-card" id="card-${spot.id}">
        <div class="spot-card__header" onclick="toggleSpotDetail('${spot.id}')">
          <span class="spot-card__emoji">${spot.emoji}</span>
          <div class="spot-card__meta">
            <p class="spot-card__name">${t(spot.name)}</p>
            <span class="spot-card__badge ${isVisited ? 'spot-card__badge--visited' : ''}">${t(spot.badge)}</span>
          </div>
          <span class="spot-card__check">${isVisited ? '✅' : '○'}</span>
        </div>
        <div class="spot-card__body hidden" id="detail-${spot.id}">
          ${imgHtml}
          <p class="spot-card__desc">${t(spot.desc)}</p>
          <button
            class="spot-card__visit-btn ${isVisited ? 'spot-card__visit-btn--visited' : ''}"
            onclick="toggleVisit('${spot.id}')"
          >${btnLabel}</button>
        </div>
      </div>
    `;
  }).join('');

  updateSpotsProgress();
}

function toggleSpotDetail(spotId) {
  const detail = document.getElementById('detail-' + spotId);
  if (detail) detail.classList.toggle('hidden');
}

function toggleVisit(spotId) {
  if (visitedSpots.has(spotId)) {
    visitedSpots.delete(spotId);
    showToast(ui('visitRemoved'));
  } else {
    visitedSpots.add(spotId);
    showToast(ui('visitAdded'));
  }
  localStorage.setItem('visitedSpots', JSON.stringify([...visitedSpots]));
  renderSpots();
  // 開いていたカードを再度開く
  const detail = document.getElementById('detail-' + spotId);
  if (detail) detail.classList.remove('hidden');
}

function updateSpotsProgress() {
  const count   = visitedSpots.size;
  const total   = SPOTS.length;
  const percent = total > 0 ? Math.round((count / total) * 100) : 0;

  const textEl = document.getElementById('spots-progress-text');
  const barEl  = document.getElementById('spots-progress-bar');

  if (textEl) textEl.textContent = ui('spotsFound', count);
  if (barEl)  barEl.style.width = percent + '%';
}

// ----------------------------------------------------------
// クイズ
// ----------------------------------------------------------
function quizReset() {
  quizIndex    = 0;
  quizScore    = 0;
  quizAnswered = false;

  document.getElementById('quiz-playing').classList.remove('hidden');
  document.getElementById('quiz-result').classList.add('hidden');

  renderQuestion();
}

function renderQuestion() {
  const q = QUIZ_QUESTIONS[quizIndex];
  if (!q) return;

  const total = QUIZ_QUESTIONS.length;

  // プログレス
  document.getElementById('quiz-progress-text').textContent =
    ui('quizProgress', quizIndex + 1, total);

  document.getElementById('quiz-progress-bar').style.width =
    Math.round(((quizIndex + 1) / total) * 100) + '%';

  // 問題文
  document.getElementById('quiz-question-text').textContent = t(q.q);

  // 選択肢
  const choices = q.choices[currentLang] || q.choices['ja'];
  const choicesEl = document.getElementById('quiz-choices');
  choicesEl.innerHTML = choices.map((c, i) => `
    <button class="quiz-choice-btn" onclick="quizAnswer(${i})">${c}</button>
  `).join('');

  // フィードバック非表示
  document.getElementById('quiz-feedback').classList.add('hidden');
  quizAnswered = false;
}

function quizAnswer(selectedIndex) {
  if (quizAnswered) return;
  quizAnswered = true;

  const q = QUIZ_QUESTIONS[quizIndex];
  const isCorrect = selectedIndex === q.correctIndex;
  if (isCorrect) quizScore++;

  // 選択肢ボタンに色を付ける
  const btns = document.querySelectorAll('.quiz-choice-btn');
  btns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correctIndex) btn.classList.add('quiz-choice-btn--correct');
    else if (i === selectedIndex) btn.classList.add('quiz-choice-btn--wrong');
  });

  // フィードバック表示
  const feedbackEl  = document.getElementById('quiz-feedback');
  const resultEl    = document.getElementById('quiz-feedback-result');
  const explainEl   = document.getElementById('quiz-feedback-explanation');
  const nextBtnEl   = document.getElementById('quiz-next-btn');

  resultEl.textContent  = isCorrect ? ui('correct') : ui('wrong');
  resultEl.style.color  = isCorrect ? '#2e7d32' : 'var(--color-accent)';
  explainEl.textContent = t(q.explanation);

  const isLast = quizIndex >= QUIZ_QUESTIONS.length - 1;
  nextBtnEl.textContent = isLast ? ui('seeResult') : ui('nextQ');

  feedbackEl.classList.remove('hidden');
}

function quizNext() {
  quizIndex++;
  if (quizIndex >= QUIZ_QUESTIONS.length) {
    showQuizResult();
  } else {
    renderQuestion();
  }
}

function showQuizResult() {
  document.getElementById('quiz-playing').classList.add('hidden');
  document.getElementById('quiz-result').classList.remove('hidden');

  const total   = QUIZ_QUESTIONS.length;
  const percent = Math.round((quizScore / total) * 100);

  let emoji, title, message;

  if (percent === 100) {
    emoji   = '🏆';
    title   = ui('resultPerfect');
    message = ui('resultPerfectMsg');
  } else if (percent >= 60) {
    emoji   = '🎉';
    title   = ui('resultGood');
    message = ui('resultGoodMsg');
  } else {
    emoji   = '📖';
    title   = ui('resultMore');
    message = ui('resultMoreMsg');
  }

  document.getElementById('quiz-result-emoji').textContent   = emoji;
  document.getElementById('quiz-result-title').textContent   = title;
  document.getElementById('quiz-result-score').textContent   =
    `${quizScore} / ${total}`;
  document.getElementById('quiz-result-message').textContent = message;
}

// ----------------------------------------------------------
// 四季 レンダリング
// ----------------------------------------------------------
function renderSeasons() {
  const container = document.getElementById('seasons-list');
  if (!container) return;

  container.innerHTML = SEASONS.map(s => {
    const imgHtml = s.img
      ? `<img src="${s.img}" alt="${t(s.name)}" class="season-card__img" loading="lazy">`
      : '';

    const events = (s.events[currentLang] || s.events['ja'])
      .map(e => `<span class="season-event-chip">${e}</span>`)
      .join('');

    return `
      <div class="season-card">
        <div class="season-card__header season-card__header--${s.key}">
          <span class="season-card__emoji">${s.emoji}</span>
          <div>
            <p class="season-card__season">${t(s.name)}</p>
            <p class="season-card__period">${t(s.period)}</p>
          </div>
        </div>
        ${imgHtml}
        <div class="season-card__body">
          <p class="season-card__desc">${t(s.desc)}</p>
          <div class="season-card__events">
            <p class="season-card__events-title">${ui('seasonHighlights')}</p>
            ${events}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ----------------------------------------------------------
// アンケート レンダリング（各イベントへの興味・理由を収集）
// ----------------------------------------------------------

// セッション内の回答を保持（リアルタイムグラフ用）
const surveyAnswers = {};

// localStorageから過去の集計データを読み込む
// 構造: { "event-0": [0,0,2,1, ...], "event-1": [...] }  各要素は選択肢インデックス
function loadVotes() {
  try {
    return JSON.parse(localStorage.getItem('surveyVotes') || '{}');
  } catch { return {}; }
}

function saveVotes(votes) {
  localStorage.setItem('surveyVotes', JSON.stringify(votes));
}

// 集計: key ごとの選択肢ごとの票数を返す
function countVotes(votes, key, numOptions) {
  const arr = votes[key] || [];
  const counts = Array(numOptions).fill(0);
  arr.forEach(v => { if (counts[v] !== undefined) counts[v]++; });
  return counts;
}

function renderSurvey() {
  const container = document.getElementById('survey-form-wrap');
  if (!container) return;

  if (surveySubmitted) {
    container.innerHTML = `
      <div class="survey-thanks">${ui('surveyThanks')}</div>`;
    return;
  }

  const interestOptions = ui('interestOptions');
  const barColors = ['#5C4A1E', '#8b6f3a', '#c8a45a', '#9b3a2a'];

  const eventBlocks = EVENTS.map((ev, i) => {
    const savedVal = surveyAnswers[`interest-${i}`];

    const radioButtons = interestOptions.map((opt, j) => {
      const checked = savedVal === String(j) ? 'checked' : '';
      return `
        <label class="survey-interest-btn" id="ibtn-${i}-${j}">
          <input type="radio" name="interest-${i}" value="${j}" ${checked}
            onchange="onInterestChange(${i}, ${j})">
          <span>${opt}</span>
        </label>
      `;
    }).join('');

    const chartHtml = buildChartHtml(i, interestOptions, barColors, savedVal);

    return `
      <div class="survey-event-block">
        <div class="survey-event-header">
          <span class="survey-event-date">${ev.date}</span>
          <p class="survey-event-title">${t(ev.title)}</p>
          <p class="survey-event-desc">${t(ev.desc)}</p>
        </div>
        <div class="survey-q">
          <p class="survey-q__label">${ui('surveyInterest')}</p>
          <div class="survey-interest-grid">${radioButtons}</div>
        </div>
        <div class="survey-chart" id="chart-${i}">${chartHtml}</div>
        <div class="survey-q">
          <p class="survey-q__label">${ui('surveyReason')}</p>
          <textarea class="survey-textarea" name="reason-${i}" rows="3"
            placeholder="${ui('surveyPlaceholder')}"></textarea>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <p class="survey-intro">${ui('surveyIntro')}</p>
    <form id="survey-form" onsubmit="submitSurvey(event)">
      ${eventBlocks}
      <button type="submit" class="survey-submit">${ui('surveySubmit')}</button>
    </form>
  `;
}

// ラジオボタン変更時：グラフをリアルタイム更新
function onInterestChange(eventIndex, selectedValue) {
  const key = `interest-${eventIndex}`;
  surveyAnswers[key] = String(selectedValue);

  const interestOptions = ui('interestOptions');
  const barColors = ['#5C4A1E', '#8b6f3a', '#c8a45a', '#9b3a2a'];

  const chartEl = document.getElementById(`chart-${eventIndex}`);
  if (!chartEl) return;

  chartEl.innerHTML = buildChartHtml(eventIndex, interestOptions, barColors, String(selectedValue));

  requestAnimationFrame(() => {
    chartEl.querySelectorAll('.chart-bar-fill').forEach(bar => {
      const target = bar.dataset.width;
      bar.style.width = '0%';
      requestAnimationFrame(() => { bar.style.width = target; });
    });
  });
}

// 棒グラフHTMLを生成
function buildChartHtml(eventIndex, options, colors, selectedVal) {
  const hasAnswer = selectedVal !== undefined && selectedVal !== null;

  if (!hasAnswer) {
    return `<div class="chart-empty"><span>${ui('chartEmpty')}</span></div>`;
  }

  const votes  = loadVotes();
  const key    = `event-${eventIndex}`;
  const past   = votes[key] || [];
  const allVotes = [...past, Number(selectedVal)];
  const total  = allVotes.length;
  const counts = Array(options.length).fill(0);
  allVotes.forEach(v => { if (counts[v] !== undefined) counts[v]++; });

  const title = ui('chartTitle', total);

  const bars = options.map((opt, j) => {
    const count      = counts[j];
    const pct        = total > 0 ? Math.round((count / total) * 100) : 0;
    const isSelected = String(j) === String(selectedVal);
    return `
      <div class="chart-row">
        <span class="chart-label ${isSelected ? 'chart-label--active' : ''}">${opt}</span>
        <div class="chart-bar-wrap">
          <div class="chart-bar-fill"
            style="width:${pct}%; background:${colors[j]};"
            data-width="${pct}%"
          ></div>
        </div>
        <span class="chart-pct ${isSelected ? 'chart-pct--active' : ''}">
          ${pct}%<br><span class="chart-count">${count}${currentLang === 'ja' || currentLang === 'ko' ? '票' : currentLang === 'zh' ? '票' : ' votes'}</span>
          ${isSelected ? `<span class="chart-mine">${ui('chartMine')}</span>` : ''}
        </span>
      </div>`;
  }).join('');

  return `<p class="chart-title">${title}</p><div class="chart-bars">${bars}</div>`;
}

function submitSurvey(e) {
  e.preventDefault();

  // 未回答チェック
  for (let i = 0; i < EVENTS.length; i++) {
    if (!document.querySelector(`input[name="interest-${i}"]:checked`)) {
      showToast(ui('surveyRequired', t(EVENTS[i].title)));
      return;
    }
  }

  // 回答を収集して localStorage に保存
  const votes = loadVotes();
  const results = EVENTS.map((ev, i) => {
    const interest = document.querySelector(`input[name="interest-${i}"]:checked`);
    const reason   = document.querySelector(`textarea[name="reason-${i}"]`);
    const val      = interest ? Number(interest.value) : null;

    if (val !== null) {
      const key = `event-${i}`;
      if (!votes[key]) votes[key] = [];
      votes[key].push(val);
    }

    return { event: t(ev.title), interest: val, reason: reason ? reason.value : '' };
  });

  saveVotes(votes);
  console.log('アンケート回答:', results);

  surveySubmitted = true;
  renderSurvey();
}
