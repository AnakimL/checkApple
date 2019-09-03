<?require_once($_SERVER['DOCUMENT_ROOT'] . "/bitrix/modules/main/include/prolog_before.php");

if($_REQUEST['form_name'] == 'vopros') {
    $arEventFields = array(
        "NAME" => $_REQUEST['name'],
        "PHONE" => $_REQUEST['phone'],
        "QUESTION" => $_REQUEST['you_question'],
    );

    CEvent::Send("BIRTHDAY_ORDER", 's1', $arEventFields, 'N', '61');

    $json['error'] = 0;

} else if($_REQUEST['gender']) {
    $arEventFields = array(
        "GENDER" => $_REQUEST['gender'],
        "LET" => "Сколько лет ребенку?: " . $_REQUEST['let'],
        "VISIT" => $_REQUEST['visit'],
        "ROOM" => $_REQUEST['room'],
        "DATE" => $_REQUEST['date'],
        "NAME" => $_REQUEST['name'],
        "PHONE" => $_REQUEST['phone'],
    );

    CEvent::Send("BIRTHDAY_ORDER", 's1', $arEventFields, 'N', '59');
    
    
    $arEventFields2 = array(
        "QUEZ" => 'КВИЗ со страницы "Детский день рождения',
        "DEFAULT_EMAIL_FROM" => 'msk' . time() . '@pogruzhenye.ru',
        "GENDER" => $_REQUEST['gender'],
        "LET" => "Сколько лет ребенку?: " . $_REQUEST['let'],
        "VISIT" => $_REQUEST['visit'],
        "ROOM" => $_REQUEST['room'],
        "DATE" => $_REQUEST['date'],
        "NAME" => $_REQUEST['name'],
        "PHONE" => $_REQUEST['phone'],
    );
    /*Отправка в аналитику*/
    CEvent::Send("BIRTHDAY_ORDER", 's1', $arEventFields2, 'N', '67');
    
    $json['error'] = 0;
} else if (!empty($_REQUEST['name']) & !empty($_REQUEST['phone'])) {
    $mas = [
        'callback_newlp' => 'Отправка Формы Детский ленд перезвони нам шапка',
        'conssend_newlp' => 'Отправка Формы Детский ленд - 3 варианта',
        'sendformek_newlp' => 'Отправка Формы Детский ленд записаться на экскурсию',
        'send_zv_p1_newlp' => 'Отправка Формы Детский ленд - звездные войны',
        'send_alisa_newlp' => 'Отправка Формы Детский ленд - алиса',
        'send_drbunker_p1_newlp' => 'Отправка Формы Детский ленд - бункер',
        'send_fortboyard_newlp' => 'Отправка Формы Детский ленд - форт-боярд',
        'send_ts_newlp' => 'Отправка Формы Детский ленд - тайны следствия',
        'send_troll_day_p1_newlp' => 'Отправка Формы Детский ленд - тролль день',
        'quiz_end_newlp' => 'Отправка Формы Детский ленд - квиз внизу',
        'callback_newlp' => 'Отправка Формы Детский ленд - перезвоните мне подвал',
    ];
    
    
    $arEventFields = array(
        "TEXT" => $_REQUEST['text'] ? $_REQUEST['text']: '',
        "NAME" => $_REQUEST['name'],
        "PHONE" => $_REQUEST['phone'],
    );

    CEvent::Send("BIRTHDAY_ORDER", 's1', $arEventFields, 'N', '57');
    
    $arEventFields2 = array(
        "DEFAULT_EMAIL_FROM" => 'msk' . time() . '@pogruzhenye.ru',
        "NAME" => $_REQUEST['name'],
        "PHONE" => $_REQUEST['phone'],
        "TYPE" => $mas[$_REQUEST['ym_goal']],
    );
    
    /*Отправка в аналитику*/
    CEvent::Send(EVENT_FEEDBACK_ID, 's1', $arEventFields2, 'N', '65');
    

    $json['error'] = 0;

} else {
    $json['error'] = 1;
}

echo json_encode($json);