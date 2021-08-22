/*
* 트레이너 관리시스템

* 1. 트레이너 등록(이름 나이 연락처 자격증유무 출근여부 참고)
* 2. 트레이너삭제
* 3. 트레이너 정보수정
* 4. 출근한 트레이너만 보기
* 5. 자격증 있는 트레이너만(필터)
* 6.  전체 트레이너 목록 출력
* 7. 1명이라도 OR(some)
* 8. 모두 해당되는지 AND(every)
*/

const trainer = {
  name: '김복자',
  age: 40,
  phone: '010-1111-2222',
  isCertified: true,
  isAttendance: true,
  memo: '베테랑 피티강사',
}

const trainer2 = {
  name: '김말자',
  age: 25,
  phone: '010-1234-1234',
  isCertified: false,
  isAttendance: false,
  memo: '신입 피티강사',
}

const trainers = [trainer, trainer2]

describe('Array 테스트', () => {
  it('트레이너 추가되면 length가 1이 증가한다', () => {
    //트레이너 추가
    const trainer3 = {
      name: '김수정',
      age: 30,
      phone: '010-1234-1234',
      isCertified: true,
      isAttendance: false,
      memo: '신입 피티강사',
    }

    const newTrainers = [...trainers, trainer3]

    expect(trainers.length).toBe(2)
    expect(newTrainers.length).toBe(3)
  })
  it('트레이너가 삭제되면 length가 1 줄어든다', () => {
    const removeTrainers = trainers.filter((trainer) => {
      return trainer.name !== '김말자'
    })

    expect(trainers.length).toBe(2)
    expect(removeTrainers.length).toBe(1)
  })
  it('두번쨰 트레이너의 출근 상태를 false에서 true로 변경', () => {
    const updateTrainers = trainers.map((trainer) => {
      return trainer.name === '김말자'
        ? { ...trainer, isAttendance: true }
        : trainer
    })
    //배열값 업데이트시 map() 쓰는게 좋다
    expect(updateTrainers[1].isAttendance).toBe(true)
  })
  it('출근한 트레이너는 한명이다', () => {
    const statusTrainer = trainers.filter((trainer) => {
      return trainer.isAttendance
      //filter() return 값이 true인것들만 필터링한다
    })
    expect(statusTrainer.length).toBe(1)
  })
  it('자격증은 보유한 트레이너는 한명이다', () => {
    const certifiedTrainer = trainers.filter((trainer) => {
      return trainer.isCertified
    })
    expect(certifiedTrainer.length).toBe(1)
  })
  it('1명이라도 출근했으면 리턴값 true', () => {
    const isAttendace = trainers.some((trainer) => {
      return trainer.isAttendance
    })
    expect(isAttendace).toBe(true)
  })
  it('모두 자격증이 있다면 리턴값 true', () => {
    const isCertify = trainers.every((trainer) => {
      return trainer.isCertified
    })
    expect(isCertify).toBe(false)
  })
})
