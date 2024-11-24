import { defineMock } from "./base";

// 用户数据存储
const users = new Map([
  [2, {
    id: 2,
    username: "admin",
    nickname: "系统管理员",
    mobile: "17621210366",
    gender: 1,
    avatar: "https://foruda.gitee.com/images/1723603502796844527/03cdca2a_716974.gif",
    email: "",
    status: 1,
    deptId: 1,
    roleIds: [2],
    createTime: "2019-10-10",
    perms: [
      "sys:notice:edit",
      "sys:menu:delete",
      "sys:dict:edit",
      "sys:notice:query",
      "sys:dict:delete",
      "sys:config:add",
      "sys:config:refresh",
      "sys:menu:add",
      "sys:user:add",
      "sys:user:export",
      "sys:role:edit",
      "sys:dept:delete",
      "sys:config:update",
      "sys:user:password:reset",
      "sys:notice:revoke",
      "sys:user:import",
      "sys:user:delete",
      "sys:dict_type:delete",
      "sys:dict:add",
      "sys:role:add",
      "sys:notice:publish",
      "sys:notice:delete",
      "sys:dept:edit",
      "sys:dict_type:edit",
      "sys:user:query",
      "sys:user:edit",
      "sys:config:delete",
      "sys:dept:add",
      "sys:notice:add",
      "sys:role:delete",
      "sys:menu:edit",
      "sys:config:query",
    ]
  }],
  [3, {
    id: 3,
    username: "test",
    nickname: "测试小用户",
    mobile: "17621210366",
    gender: 1,
    avatar: "https://foruda.gitee.com/images/1723603502796844527/03cdca2a_716974.gif",
    email: "youlaitech@163.com",
    status: 1,
    deptId: 3,
    roleIds: [3],
    createTime: "2023-01-01",
    perms: []
  }]
]);

// 用户数据操作方法
const userService = {
  getList(query: any) {
    const list = Array.from(users.values());
    // 这里可以实现搜索过滤逻辑
    return { list, total: list.length };
  },
  
  getById(id: number) {
    return users.get(id);
  },
  
  create(userData: any) {
    const id = Math.max(...Array.from(users.keys())) + 1;
    users.set(id, { ...userData, id });
    return id;
  },
  
  update(id: number, userData: any) {
    const user = users.get(id);
    if (user) {
      users.set(id, { ...user, ...userData });
    }
  },
  
  delete(id: number) {
    users.delete(id);
  }
};

export default defineMock([
  // 获取当前用户信息
  {
    url: "users/me",
    method: ["GET"],
    body: {
      code: "00000",
      data: userService.getById(2), // 默认返回 admin 用户
      msg: "一切ok"
    }
  },

  // 用户分页查询
  {
    url: "users/page",
    method: ["GET"],
    body: ({ query }) => ({
      code: "00000",
      data: userService.getList(query),
      msg: "一切ok"
    })
  },

  // 新增用户
  {
    url: "users",
    method: ["POST"],
    body: ({ body }) => {
      const id = userService.create(body);
      return {
        code: "00000",
        data: id,
        msg: `新增用户${body.nickname}成功`
      };
    }
  },

  // 获取用户表单数据
  {
    url: "users/:userId/form",
    method: ["GET"],
    body: ({ params }) => ({
      code: "00000",
      data: userService.getById(Number(params.userId)),
      msg: "一切ok"
    })
  },

  // 修改用户
  {
    url: "users/:userId",
    method: ["PUT"],
    body: ({ params, body }) => {
      userService.update(Number(params.userId), body);
      return {
        code: "00000",
        data: null,
        msg: `修改用户${body.nickname}成功`
      };
    }
  },

  // 删除用户
  {
    url: "users/:userId",
    method: ["DELETE"],
    body: ({ params }) => {
      userService.delete(Number(params.userId));
      return {
        code: "00000",
        data: null,
        msg: `删除用户成功`
      };
    }
  },

  // 重置密码
  {
    url: "users/:userId/password/reset",
    method: ["PUT"],
    body({ query }) {
      return {
        code: "00000",
        data: null,
        msg: "重置密码成功，新密码为：" + query.password,
      };
    },
  },

  // 导出Excel
  {
    url: "users/_export",
    method: ["GET"],
    headers: {
      "Content-Disposition":
        "attachment; filename=%E7%94%A8%E6%88%B7%E5%88%97%E8%A1%A8.xlsx",
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    },
  },

  {
    url: "users/profile",
    method: ["GET"],
    body: {
      code: "00000",
      data: {
        id: 2,
        username: "admin",
        nickname: "系统管理员",
        avatar:
          "https://foruda.gitee.com/images/1723603502796844527/03cdca2a_716974.gif",
        gender: 1,
        mobile: "17621210366",
        email: null,
        deptName: "有来技术",
        roleNames: "系统管理员",
        createTime: "2019-10-10",
      },
    },
  },

  {
    url: "users/profile",
    method: ["PUT"],
    body({ query }) {
      return {
        code: "00000",
        data: null,
        msg: "修改个人信息成功",
      };
    },
  },

  {
    url: "users/password",
    method: ["PUT"],
    body({ query }) {
      return {
        code: "00000",
        data: null,
        msg: "修改密码成功",
      };
    },
  },
]);
