import request from '@/util/request'

// 获取用户
export const getUser = (data) => {
  return request({
    url: '/bodyParam',
    method: 'post',
    data
  })
}