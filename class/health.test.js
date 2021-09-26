/**
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
  constructor(name, license, isDone) {
    this.name = name
    this.license = license
    this.isDone = isDone
  }
}

class Trainers {
  constructor() {
    this.trainers = []
  }

  //트레이너 추가
  addTrainer(name, license, isDone) {
    this.trainers = [...this.trainers, new Trainer(name, license, isDone)]
  }

  //트레이너 제거
  removeTrainer(name) {
    this.trainers = this.trainers.filter((trainer) => {
      return trainer.name !== name
    })
  }

  //출근한 트레이너 확인
  getCompletedTrainer() {
    return this.trainers.filter((trainer) => {
      return trainer.isDone
    })
  }

  //트레이너 출근상태 토글
  modifyTrainer(name) {
    this.trainer.map((trainer) => {
      if (trainer.name !== name) {
        return trainer
      }
      return { ...trainer, isDone: !trainer.isDone }
    })
  }

  //트레이너 라이센스업데이트
  updateLicense(license) {
    this.trainer.map((trainer) => {
      if (trainer.license !== license) {
        return trainer
      }
      return { ...trainer, license: trainer.license }
    })
  }

  //라이센스 타입 필터 type 1 ,2 ,3
  filter(license) {
    switch (license) {
      case '1': {
        return this.trainers.filter((trainer) => {
          return this.trainers
        })
      }
      case '2': {
        return this.trainers.filter((trainer) => {
          return this.trainers
        })
      }
      case '3': {
        return this.trainers.filter((trainer) => {
          return this.trainers
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
    trainerManger.addTrainer('이재만', '3', true)
    expect(trainerManger.size()).toBe(1)
  })

  it('삭제', () => {
    const trainerManger = new Trainers()
    trainerManger.addTrainer('이재만', '3', true)
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
    trainerManger.addTrainer('이재만', '1', false)

    expect(trainerManger.getCompletedTrainer().length).toBe(0)
    expect(
      trainerManger
        .modifyTrainer('이재만')
        .getCompletedTrainer()
        .length.toBe(1),
    )
  })
})
