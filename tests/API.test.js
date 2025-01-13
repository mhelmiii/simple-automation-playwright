const { test, expect, request } = require('@playwright/test');

test.describe('API Test', async () => {
  test('GET Test', async ({}) => {
    const apiContext = await request.newContext();
    const respond = await apiContext.get('https://reqres.in/api/users?page=2');

    expect(respond.status()).toBe(200);

    const respondBody = await respond.json();
    console.log(respondBody);
    expect(respondBody.page).toBe(2);
    expect(respondBody.per_page).toBe(6);
    expect(respondBody.total).toBe(12);
  });

  test('POST Test', async ({}) => {
    const apiContext = await request.newContext();
    const postData = {
      name: 'Helmi',
      job: 'Head of Software Engineer',
    };
    const resPost = await apiContext.post('https://reqres.in/api/users', {
      data: postData,
    });

    expect(resPost.status()).toBe(201);

    const respondBody = await resPost.json();
    console.log(respondBody);
    expect(respondBody.name).toBe('Helmi');
    expect(respondBody.job).toBe('Head of Software Engineer');
  });

  test('PUT Test', async ({}) => {
    const apiContext = await request.newContext();
    const putData = {
      name: 'Muhammad Helmi',
      job: 'CTO',
    };
    const resPut = await apiContext.put('https://reqres.in/api/users/2', {
      data: putData,
    });
    expect(resPut.status()).toBe(200);

    const respondBody = await resPut.json();
    console.log(respondBody);
    expect(respondBody.name).toBe('Muhammad Helmi');
    expect(respondBody.job).toBe('CTO');
  });

  test('DELETE Test', async ({}) => {
    const apiContext = await request.newContext();
    const resDelete = await apiContext.delete('https://reqres.in/api/users/2');

    expect(resDelete.status()).toBe(204);

    const respondBody = await resDelete.text();
    console.log(respondBody);

    await apiContext.dispose();
  });
});
