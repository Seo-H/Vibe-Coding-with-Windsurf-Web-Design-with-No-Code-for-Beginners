# 설치해야 할 것과 계정을 만들어야 할 곳

## 🛠️ 설치할 것들

### 1. Python
- [Python 공식 웹사이트](https://python.org)에서 다운로드
- 최신 안정 버전 설치 권장

### 2. Node.js (LTS 버전)
- [Node.js 공식 웹사이트](https://nodejs.org)에서 LTS 버전 다운로드
- ⚠️ **중요**: 추가 도구 설치 옵션을 체크하여 설치

### 3. PowerShell 7
- 명령 프롬프트에서 다음 명령어로 설치:
  ```bash
  winget install Microsoft.PowerShell
  ```

### 4. Git for Windows
- [Git 공식 웹사이트](https://git-scm.com/download/win)에서 다운로드
- 기본 설정으로 설치

### 5. Docker (선택사항이지만 권장)
- [Docker 공식 웹사이트](https://docker.com)에서 다운로드
- 컨테이너 기반 개발 환경 구축용

## 👤 만들어야 할 계정들

### 1. GitHub
- [GitHub](https://github.com)에서 계정 생성
- 다른 개발자들과 협업을 위해 **필수**

### 2. Vercel
- [Vercel](https://vercel.com)에서 계정 생성
- 웹사이트 호스팅용
- 💡 **팁**: GitHub 계정으로 로그인 가능

### 3. Resend
- [Resend](https://resend.com)에서 계정 생성
- 이메일 전송 서비스용

### 4. Supabase
- [Supabase](https://supabase.com)에서 계정 생성
- 데이터베이스 및 백엔드 서비스용

## ✅ 설치 확인 방법

### 권장사항
각 설치 후 **컴퓨터를 재시작**하세요.

### 설치 확인 명령어
명령 프롬프트(CMD)에서 다음 명령어들을 실행하여 설치를 확인하세요:

- **Python 확인**:
  ```bash
  py --version
  ```

- **Node.js 확인**:
  ```bash
  node -v
  npm -v
  ```

- **PowerShell 7 확인**:
  시작 버튼을 누르고 `pwsh` 또는 `powershell`을 입력하여 PowerShell 7이 나타나는지 확인

- **Git 확인**:
  ```bash
  git --version
  ```

- **Docker 확인** (설치한 경우):
  ```bash
  docker --version
  ```

> 💡 **참고**: 모든 도구가 정상적으로 설치되었다면 다음 단계로 진행할 준비가 완료된 것입니다!
