// 현재 시간에 대해
// yyyyMMddHHmmssSSS 형태로 만든 후 뒤에 랜덤숫자 6자리 추가
// 23 자리 uniqueId를 만들어서 리턴해주는 함수
function makeUniqueId(){
    let date = new Date();

    let v_year = date.getFullYear() + "";
    let v_month = date.getMonth()+1 + "";
    let v_date = date.getDate() + "";
    let v_hour = date.getHours() + "";
    let v_min = date.getMinutes() + "";
    let v_sec = date.getSeconds() + "";
    let v_miliSec = date.getMilliseconds() + "";

    // 20240814174257458
    let v_uniqueId = v_year + v_month.padStart(2, 0) 
                    + v_date.padStart(2, 0) + v_hour.padStart(2, 0) 
                    + v_min.padStart(2, 0) + v_sec.padStart(2, 0) 
                    + v_miliSec.padStart(3, 0);

    // v_uniqueId 에 랜덤 숫자 6자리 붙이기
    // 0~9 숫자를 6번 붙여주기
    for(let i = 0; i < 6; i++){
        v_uniqueId += Math.floor(Math.random() * 10);
    }

    return v_uniqueId;
}

// 현재 날짜를 MM-dd HH:mm 형태인 문자열로 리턴
function makeBoardDate(){
    let date = new Date();
    let v_month = date.getMonth()+1 + "";
    let v_date = date.getDate() + "";
    let v_hour = date.getHours() + "";
    let v_min = date.getMinutes() + "";
    let v_result = v_month.padStart(2, 0) + "-" 
                    + v_date.padStart(2, 0) + " "
                    + v_hour.padStart(2, 0) + ":"
                    + v_min.padStart(2, 0)
    return v_result;
}