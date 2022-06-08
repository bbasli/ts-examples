interface MyUser {
  name: string;
  id: string;
  email?: string;
  phone?: string;
}

type MyUserOptionals = Partial<MyUser>;

/* interface MyUserOptionals {
  name?: string;
  id?: string;
  email?: string;
} */

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(
  merge(
    {
      name: "joe",
      id: "1",
      email: "test@test.com",
    },
    {
      email: "updated@test.com",
    }
  )
);

type RequiredMyUser = Required<MyUser>;

type JustEmailAndName = Pick<MyUser, "email" | "name">;

type MyUserWithoutID = Omit<MyUser, "id">;

const mapById = (users: MyUser[]): Record<MyUser["id"], MyUserWithoutID> => {
  return users.reduce((acc, val) => {
    const { id, ...rest } = val;
    return {
      ...acc,
      [id]: rest,
    };
  }, {});
};

console.log(
  mapById([
    {
      id: "foo",
      name: "test",
      email: "test@test.com",
    },
    {
      id: "too",
      name: "fezz",
    },
    {
      id: "zoo",
      name: "yezz",
    },
  ])
);
