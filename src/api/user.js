import request from '@/utils/request'

export const login = (data) => {
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}

export const getUserInfo = () => {
  return request({
    url: '/sys/profile',
    method: 'post'
  })
}

// 获取员工基本信息
export function getUserDetailById(id) {
  return request({
    url: `/sys/user/${id}`,
    method: 'GET'
  })
}

export function logout() {
  // return request({
  //   url: '/vue-admin-template/user/logout',
  //   method: 'post'
  // })
}
