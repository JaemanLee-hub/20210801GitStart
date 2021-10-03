/**
 * // 펼침연산자 (전개구문) spread operator
 * class 헬스장
 * class 트레이너
 *
 * 헬스장은 트레이너를 관리합니다.
 *
 * [정보]
 * 트레이너 (이름, 자격증, 출근 여부)
 *
 * 헬스장 (트레이너들, 헬스장 이름)
 *
 * [기능]
 * 1. 트레이너 추가
 * 2. 트레이너 삭제
 * 3. 트레이너 자격증 업데이트 (1, 2, 3 등급)
 * 4. 출근한 트레이너만 골라보기
 * 5. n급 자격증을 가진 트레이너만 골라보기 (ex. filter)
 * 6. 출, 퇴근 기능 (출 -> 퇴, 퇴 -> 출)
 *
 * 테스트 케이스 작성
 */

//트레이너 클래스 생성
class Trainer {
  constructor(id, license, isDone) {
    this.id = id
    this.license = license
    this.isDone = isDone
  }
}

class Trainers {
  constructor() {
    this.trainers = []
  }

  //트레이너 추가
  addTrainer(license, isDone) {
    this.trainers = [...this.trainers, new Trainer(Date.now(), license, isDone)]
  }

  //트레이너 제거
  removeTrainer(id) {
    this.trainers = this.trainers.filter((trainer) => {
      return trainer.id !== id
    })
  }

  //출근한 트레이너 확인
  getCompletedTrainer() {
    return this.trainers.filter((trainer) => {
      return trainer.isDone
    })
  }

  //트레이너 출근상태 토글
  modifyTrainer(id) {
    this.trainers.map((trainer) => {
      if (trainer.id !== id) {
        return trainer
      }
    })
  }

  //트레이너 라이센스업데이트
  updateLicense(license) {
    const result = this.trainer.map((trainer) => {
      if (trainer.license !== license) {
        return trainer
      }
      return { ...result, license: trainer.license }
    })
  }

  //라이센스 타입 필터 type 1 ,2 ,3
  filter(license) {
    switch (license) {
      case '1': {
        return this.trainers.filter((trainer) => {
          if (license === '1') {
            return this.trainers
          }
        })
      }
      case '2': {
        return this.trainers.filter((trainer) => {
          if (license === '2') {
            return this.trainers.filter
          }
        })
      }
      case '3': {
        return this.trainers.filter((trainer) => {
          if (license === '3') {
            return this.trainers
          }
        })
      }
      default: {
        return this.trainers
      }
    }
  }

  size() {
    return this.trainers.length
  }
}

//테스트 실행

describe('헬스 테스트', () => {
  it('추가', () => {
    const trainerManger = new Trainers()
    trainerManger.addTrainer('3', true)
    expect(trainerManger.size()).toBe(1)
  })

  it('삭제', () => {
    const trainerManger = new Trainers()
    trainerManger.addTrainer('3', true)
    trainerManger.removeTrainer(trainerManger.trainers[0].name)
    expect(trainerManger.size()).toBe(0)
  })

  it('라이센스필터', () => {
    const trainerManger = new Trainers()
    trainerManger.filter('1')
    trainerManger.filter('2')
    trainerManger.filter('3')
    expect(trainerManger.getCompletedTrainer().length).toBe(0)
  })

  it('출퇴근토글', () => {
    const trainerManger = new Trainers()
    trainerManger.addTrainer('1', false)

    expect(trainerManger.getCompletedTrainer().length).toBe(0)
  })
})
