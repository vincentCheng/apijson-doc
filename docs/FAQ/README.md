# 常见问题

## MYSQL 时区引起的乱码

操作系统：win10
数据库：mysql8

程序运行后，有可能会出现以下报错：

```doc
The server time zone value 'ÖÐ¹ú±ê×¼Ê±¼ä' is unrecognized or represents more than one time zone.
```

解决步骤为：
进入 C 盘 -> "查看"，勾选“隐藏的项目”，也就是显示隐藏文件夹。-> 打开 C:\ProgramData\MySQL\MySQL Server 8.0\my.ini。->搜索字符“[mysqld]”，并且在这字符串下面添加“default-time-zone='+08:00'”。->保存，重启 mysql8。
