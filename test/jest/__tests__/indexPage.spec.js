import IndexPage from 'src/pages/IndexPage.vue'
import { shallowMount } from '@vue/test-utils'

test('ทดสอบว่ามี form มั้ย', () => {
    const wrapper = shallowMount(IndexPage)
    expect(wrapper.find('form').exists()).toBe(true)
  })

  test('ทดสอบว่า form มี input หรือมั้ย', () => {
    const wrapper = shallowMount(IndexPage)
    expect(wrapper.find('form > input').exists()).toBe(true)
  })

  test('ทดสอบว่ามี button มั้ย', () => {
    const wrapper = shallowMount(IndexPage)
    expect(wrapper.find('button').exists()).toBe(true)
  })

  describe('Infomation Testing', () => {
    it('ทดสอบชื่อจริง', () => {
        const wrapper = shallowMount(IndexPage, {
          data () {
            return {
              firstName: 'ชัชวาลย์'
            }
          }
        })
        let header = wrapper.find('#firstName')
        expect(header.element.value).toBe('ชัชวาลย์')
      })
      it('ทดสอบนามสกุล', () => {
        const wrapper = shallowMount(IndexPage, {
          data () {
            return {
              firstName: 'อ้วนล่ำ'
            }
          }
        })
        let header = wrapper.find('#secondName')
        expect(header.element.value).toBe('อ้วนล่ำ')
      })
    it('ทดสอบรหัสนักศึกษา', () => {
        const wrapper = shallowMount(IndexPage, {
          data () {
            return {
              firstName: 'ชัชวาลย์'
            }
          }
        })
        let header = wrapper.find('#firstName')
        expect(header.element.value).toBe('ชัชวาลย์')
      })
    })