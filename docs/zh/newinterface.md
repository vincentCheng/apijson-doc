# 新增接口

## 后台添加数据表

在自己的数据库里新增一个表，比如我这里新增`b_stone`

```sql
-- 原石
CREATE TABLE `b_stone` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `cost` int(10) NULL COMMENT '成本',
  `price` int(10) NULL COMMENT '卖价',
  `length` int(10) NULL,
  `width`  int(10) NULL,
  `height` int(10) NULL,
  `weight` float(8,1) NULL,
  `creationdate` datetime default CURRENT_TIMESTAMP COMMENT '创建时间',
  `modifydate` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  `modifier` varchar(80) NULL,
  PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

## 在 Model 中添加对象并配置权限

项目的 model 目录下，新增一个类

```java
package apijson.demo.server.model;

import zuo.biao.apijson.MethodAccess;

@MethodAccess
public class Stone {
}
```

注解`@MethodAccess`的配置，可以参考其他类

由于我们的类名和数据库表名不一致，需要注册一下。如果一样就不需要了。

设置数据库的实际表名`DemoSQLConfig`，38 行

```java
//表名映射，隐藏真实表名，对安全要求很高的表可以这么做
	static {
		TABLE_KEY_MAP.put(User.class.getSimpleName(), "apijson_user");
		TABLE_KEY_MAP.put(Privacy.class.getSimpleName(), "apijson_privacy");
		TABLE_KEY_MAP.put(Stone.class.getSimpleName(), "b_stone"); // <--这一句
	}
```

注册权限是必须的，这样程序才能使用你配置的类权限去管理你的接口

`DemoVerifier`，25 行

```java
static { //注册权限
		ACCESS_MAP.put(User.class.getSimpleName(), getAccessMap(User.class.getAnnotation(MethodAccess.class)));
....
		ACCESS_MAP.put(Stone.class.getSimpleName(), getAccessMap(Stone.class.getAnnotation(MethodAccess.class)));
	}
```
## 权限管理 Access 表的配置

在access数据表中添加一条数据,比如你的表名是：eye_director,而entity的类名是：EyeDirector

```sql
INSERT INTO `apijson`.`access` (`id`, `debug`, `name`, `alias`, `get`, `head`, `gets`, `heads`, `post`, `put`, `delete`, `date`) VALUES ('19', '0', 'eye_director', 'EyeDirector', '["UNKNOWN", "LOGIN", "CONTACT", "CIRCLE", "OWNER", "ADMIN"]', '["UNKNOWN", "LOGIN", "CONTACT", "CIRCLE", "OWNER", "ADMIN"]', '["LOGIN", "CONTACT", "CIRCLE", "OWNER", "ADMIN"]', '["LOGIN", "CONTACT", "CIRCLE", "OWNER", "ADMIN"]', '["OWNER", "ADMIN"]', '["OWNER", "ADMIN"]', '["OWNER", "ADMIN"]', '2020-03-02 18:23:37');
```

## 接口管理 Request 表的配置

（此处需要作者补充）

:first_quarter_moon_with_face:此处的介绍都只是简要介绍，只是为了引导刚刚接触 APIJSON 的道友快速了解 APIJSON，并不代表 APIJSON 只有这些功能，具体功能详情参考下列图表
