import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  /* eslint-disable-next-line */
  let counter = 0
  /* eslint-disable-next-line */
  let blockCounter
  /**
   * beforeAll()...テストブロックが呼び出されたはじめに呼び出されるメソッド
   * beforeEachhはテストメソッドがヨギ出される度だったが、beforeAll()は一度。
   **/
  beforeAll(() => {
    blockCounter += 1
  })
  /**
   * beforeEach...テストメソッドが実行される前に呼び出されるメソッド。
   **/
  beforeEach(() => {
    counter += 1
  })
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
  /**
   * only
   **/
  it.only('このテストメソッドだけが実行されるか？', () => {
    expect('only').toEqual('only')
  })
})
