# 数据库

以下是基于 Mysql 数据库的开发流程示例

## 配置

| 数据库参数 | 值                  |
| ---------- | ------------------- |
| 地址       | 192.168.71.146:3306 |
| 用户       | root                |
| 密码       | root                |
| 数据库     | thea                |

那么需要在 DemoSQLConfig，40-61 行，改为自己数据库对应的链接

```java
@Override
	public String getDBUri() {
		//TODO 改成你自己的
		return DATABASE_POSTGRESQL.equalsIgnoreCase(getDatabase()) ? "jdbc:postgresql://localhost:5432/postgres" : "jdbc:mysql://192.168.71.146:3306/";
	}
	@Override
	public String getDBAccount() {
		return DATABASE_POSTGRESQL.equalsIgnoreCase(getDatabase()) ? "postgres" : "root"; //TODO 改成你自己的
	}
	@Override
	public String getDBPassword() {
		return DATABASE_POSTGRESQL.equalsIgnoreCase(getDatabase()) ? null : "root"; //TODO 改成你自己的
	}
	@Override
	public String getSchema() {
		String s = super.getSchema();
		return StringUtil.isEmpty(s, true) ? "thea" : s; //TODO 改成你自己的。例如：将"thea"替换成你自己的“数据库名字”
	}
```

## 导入表

在 APIJSON-Master/MySQL 目录下有一批 SQL 脚本，他们看起来是这样的：

![use1](../.vuepress/public/assets/use1.png)

导入完成之后。我们可以把项目跑起来看下，以刚刚配置的项目，项目是否能够连上数据库。其中也有一些初始化数据，可以方便我们测试。
