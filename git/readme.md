# Git

## 什麼是Git?

* Linus Torvalds 2005
* 分散式
* 開源
* 免費

## 安裝Git

[官網](https://git-scm.com/)

## 設定-git config

檢查設定

```bash
git config --list
```

設定/修改使用者

```bash
git config --global user.name "你的名子"
```

設定/修改EMAIL

```bash
git config --global user.email "你的EMAIL"
```

檢查使用者

```bash
git config --global user.name 
```

## Git初始化

先移到要版本控制的資料夾內並且執行:

```bash
git init
```

## 常用指令

| Windows | Mac / Linux | 說明 |
| --------| -------- | -------- |
| cd      | cd       | 切換目錄     |
| mkdir   | mkdir    | 新增資料夾     |
| rmdir   | rmdir    | 移除資料夾     |
| dir     | ls       | 查看資料夾     |
| echo >> | touch    | 新增檔案     |
| del     | rm       | 刪除檔案 |
| cls     |clear     | 清除畫面     |
| cd      |pwd       | 列出目前路徑 |


## Working、Staging & Repository

查看檔案狀態

```bash
git status
```

加入追蹤(tracked)

```bash
git add .
```

> 「add .」是將所有資料加入追蹤，也可以使用「add 檔案名稱」

加入儲存庫

```bash
git commit -m "message"
```

> -m 指的是message。在commit的時候一定要有-m，否則無法commit

## 紀錄

Git 紀錄

```bash
git log
```

Git紀錄用一行顯示

```bash
git log --oneline
```

查看所有紀錄

```bash
git reflog
```

or

```bash
git log -g
```

## 連線至遠端

```bash
git remote add origin 連線名稱
```

## 回到特定版本

```bash
git reset --hard 版本號
```

## 下載

```bash
git pull origin master
```

## 取得儲存庫

```bash
git clone 儲存庫位置
```

## 分支

查詢分支

```bash
git branch

git branch -a
#近端與遠端
```

新增分支

```bash
git branch 分支名稱
```

移除分支

```bash
git branch 分支名稱 -d
```

切換分支

```bash
git checkout 分支名稱
```

合併分支

``` bash
git merge 分支名稱
```

## 標籤

查詢標籤

```bash
git tag
```

新增標籤

```bash=
git tag 標籤名稱
```

移除標籤

```bash=
git tag 標籤名稱 -d
```

上傳標籤

```bash
git push origin master --tags
```
