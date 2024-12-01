// 이미지와 결과 출력 요소를 가져오기
const image = document.getElementById('muscleImage');
const coordinatesDisplay = document.getElementById('coordinates');

// 이미지 클릭 이벤트 리스너 추가
image.addEventListener('click', (e) => {
    // 이미지의 위치와 크기 정보를 가져오기
    const rect = image.getBoundingClientRect();

    // 클릭한 위치의 X, Y 좌표 계산 (비율)
    const xRatio = ((e.clientX - rect.left) / rect.width).toFixed(3);
    const yRatio = ((e.clientY - rect.top) / rect.height).toFixed(3);

    // 결과 출력
    const result = `Relative Position: data-x="${xRatio}", data-y="${yRatio}"`;
    console.log(result); // 콘솔에 출력
    coordinatesDisplay.textContent = result; // 화면에 출력
});
