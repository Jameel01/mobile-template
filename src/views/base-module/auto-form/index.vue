<!--
 * @Description: 表单演示页
 * @Version: 0.1
 * @Autor: Chenyt
-->
<template>
  <div class="auto-form">
    <y-auto-form v-model="form" :formItemList="formItemList" ref="form" @submit="handleSubmit">
      <div style="margin: 16px">
        <van-button
          round
          block
          type="info"
          native-type="submit"
          style="width: 100%"
        >
          提交
        </van-button>
      </div>
    </y-auto-form>
  </div>
</template>
<script>
export default {
  name: "auto-form",
  data() {
    return {
      form: {
        //初始化表单数据
        username: "",
        select: [],
        selectDict: []
      },

      formItemList: [
        //渲染表单
        {
          type: "title",
          content: "自动表单",
          pleft: "20"
        },
        {
          type: "input",
          prop: "username",
          placeholder: "请输入姓名",
          item: {
            required: true,
            rules: [{ required: true, message: "请选择" }],
            label: "姓名",
            scopedSlots: {
              extra: () => <van-icon name="manager-o" />
            }
          }
        },
        {
          type: "selectDict",
          prop: "selectDict",
          item: {
            label: "字典选择",
            dictType: "sex"
          }
        },
        {
          type: "region",
          prop: "region",
          item: {
            label: "地区选择"
          }
        },
        {
          type: "area",
          prop: "area",
          item: {
            label: "三级地区选择"
          }
        },
        {
          type: "calendar",
          prop: "calendar",
          calendarType: "range",
          on: {
            confrm: (data) => {
              console.log(data)
            }
          },
          item: {
            label: "日历"
          }
        },
        {
          type: "datetime",
          prop: "datetime",
          dateType: "time",
          item: {
            label: "时间选择"
          }
        },
        {
          type: "select",
          prop: "select",
          item: {
            label: "选择框",
            columns: [
              {
                label: "北京市",
                value: "11"
              },
              {
                label: "天津市",
                value: "12"
              },
              {
                label: "河北省",
                value: "13"
              }
            ],
            format: {
              name: "label",
              value: "value"
            }
          }
        },
        {
          type: "input",
          prop: "age",
          hidden: true,
          item: {
            label: "年龄"
          }
        },
        {
          type: "slot",
          render: () => {
            return (
              <van-field
                v-model={this.form.slot}
                label="插槽"
                placeholder="插槽表单输入项"
                required
                rules={[{ required: true, message: "请填写插槽表单输入项" }]}
              />
            )
          }
        },
        {
          type: "imageCode",
          prop: "imageCode",
          placeholder: "请输入图形验证码",
          getCode: async() => {
            console.log("获取图片验证码")
            
            // 返回图形验证码图片地址, api 示例
            return await this.getImageCodeApi()
          },
          item: {
            required: true,
            rules: [{ required: true, message: "请输入" }],
            label: "图形验证码"
          }
        },
        {
          type: "smsCode",
          prop: "smsCode",
          placeholder: "请输入短信验证码",
          getCode: () => {
            console.log("start")
            return Promise.resolve(true)
          },
          item: {
            required: true,
            rules: [{ required: true, message: "请输入" }],
            label: "短信验证码"
          }
        },
        {
          type: "switch",
          prop: "switch",
          item: {
            label: "开关"
          }
        },
        {
          type: "checkbox",
          prop: "checkbox",
          item: {
            label: "复选框组"
          },
          checkboxGroup: {
            checkboxs: [
              {
                name: "01",
                text: "复选框A"
              },
              {
                name: "02",
                text: "复选框B"
              }
            ]
          }
        },
        {
          type: "checkbox",
          prop: "checkbox2",
          item: {
            label: "复选框"
          },
          text: "复选框"
        },
        {
          type: "radio",
          prop: "radio",
          item: {
            label: "单选框组"
          },
          radioGroup: {
            radios: [
              {
                name: "01",
                text: "单选框A"
              },
              {
                name: "02",
                text: "单选框B"
              }
            ]
          }
        },
        {
          type: "radio",
          prop: "radio2",
          item: {
            label: "单选框"
          },
          text: "单选框"
        },
        {
          type: "stepper",
          prop: "stepper",
          item: {
            label: "进步器"
          }
        },
        {
          type: "rate",
          prop: "rate",
          item: {
            label: "评分"
          }
        },
        {
          type: "slider",
          prop: "slider",
          item: {
            label: "滑块"
          }
        },
        {
          type: "uploader",
          prop: "uploader",
          openCompress: true,
          compressMaxSize: 500 * 1024,
          on: {
            oversize: (file) => {
              console.log(file)
              this.$toast("文件大小不能超过 500kb")
            }
          },
          item: {
            label: "图片上传"
          }
        }
      ]
    }
  },
  methods: {
    handleSubmit(){
      console.log("校验通过，提交表单数据", this.form)
    },
    getImageCodeApi(){
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEBAPEBAQEA8PDxAPEBAPDw8QEA8PFREWFhUSFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0dHx8rLS0rLS0rLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLTctLS0rLSsrK//AABEIAIIBhAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAAAQYHAgQFA//EADgQAAIBAgUDAAcHAwQDAAAAAAABAgMRBAUGEiExQVEHEyIyYXGBI0JScpGhsRQzwRYkU9EXNPD/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAwQFAgH/xAApEQACAgEEAgICAQUBAAAAAAAAAQIDEQQSITETFEFRImEzJDJDgZEj/9oADAMBAAIRAxEAPwC8QAAAAAAAQwAMbDAABgAAAAAAAAAAAAAAAAAAAAAAAAAJjPOvfa9vXsAZXGmQ/VebYvDUYSpw3zlKztzwbejM2rYilKVaLhJPi5343t3EanzgkwGKG5W6nBIMBbhgAArg2AAGEppcmjXzWmrqMryXY5ckjpRbOg2NM41P11W0r7EubeTrUlZcnkZNiUcHoIYjs5A4+eZ/SwqvPq+El1OwcPO9O08TKMpdV+h1DGeT2OM8mvluo3Wa2wltf3n0JFA1cHgIUoqMUkl0NtITazweyx8GQCQzk5AAAAAAAAAAAAAAAQA2cbPs9p4aN59X0SOJTUVlnkpKKyzs3MJVorq1+pWmY63qPinxc5FbPsTPm8v+yrLWRXRWlqo/BcCxEPxL9TNTXlFMSzTEdW5L4m1gdUYim7qW7zc4WuWeUcrVrPKLeuO5GdPaohiEoy9mfF15ZJIl2uyM1lFqM1JZRmAkM7OgAAAAAAAAAAAAAAAAAABNgzlZ7mqw9NzfXscykorLPJSUVlm/VpQl7yTt55MaUKcOIpL5WRW+N1nVm7w4OdPUuIf3ipLXRXCKr1EEy34zT7mhndRqk9r9p8IrOjqzEwd9yfzJDlmpliXGlO0Z923ZHUNXGR77EZcImeCb9XC7u9qv+hsXOXiczp0odfWNJcQak/0NT+srV0vUxcI/e3pp/Qmdn1yXYVtrLOvXxUIq8mjmTzpTTVBb5J9HdGeHySKlvcpN9022r/I6NPDQjzGKT+COfzf6Ovwj+zl0svq1Gpzm436wXRfA3aWXUou9k35ODqzPalBpRIrLWFf8RXndCt/srWavbwWnG3Yy3LyVDLVdZ/fZ5vUdd9Jse9H6K/tr6LkUkFyoIapxcfvHQwGtasbes5Oo62DOlqovss8RGss1dRqWTe1vySKjWUlui7plmFkZdE8ZqXR6AgAkOxgAAAAAAAAAAAAAAAAAYsgOtcFVr1IwhFvoT9ow9TG97K/kitr3rBxOO5YIHlWh1bdVfNuh0Mv0goVnObThayj9CW2GkcQ08I/BwqIo5VTT+Hd701yQjVelvUJ1qPu914LMaOFq6olhpp9Wv8HF9MHA5tqjtKqy7EOFSEouzurlyZPid9KMr34KXpR9pL4lu6YouNCN+LoqaJvLRBpW8tHaQxIZrF8BNgzzqvh/IMMzuG4rHOdRYinXnTU3ZPhHU05qpOEvXy5T4ZUWrhuwyv7EM4ZOZSS5bNDFZnCPRp/UhudaxbvCHC8+SMrOat73vzcit1qTxEgu1T6gWxgsVKbvb2TooqvAayrQspRSivgT7I86p4iG6Mue68E1OojLgmotTWG+TrBcSAtFkZDtfU5ThGEU227cEunUS+BzsZj6KW52lt8cshuSlHB5KtzWCEZVompJJ1Jbe/0O5HR2Giryl06s33jcTUadGEfVv8XDQ6OStz9ZUqTe7rD7pUjVHpRyeR0kIr8iG53p6LTlhPtEvet2Ix7UHdO00+S7aWFhCLUYqK727lPahssVUtbbe3HS5BqKPG0ylqoRi04liaQo050o1dvt2s23e5JIRSODoqi1h43XVKxIbGjQvwRdhJuKyIGZCZOdFa+kGX2qRztI5bTr1dtRXRuekB/b2H6Pf7z+RiySd3JmNZuJatI4P/hX7np/pTCdqST88ndGkangh9F/xQ+iNYnSFCS4Vjg5nodpN03f4Fh2E0cS0sGcyogykMZg6tCVpRlG3Rnc03qidGShUblTf7E8zzJqdeDi4q/Z9yrM2wEqM5Qa4T4ZRtrnRLcmU7Iul5RceCxcakVKLun4NgrDRWeSpz9TJ3UrFmU53V13L+nuVkf2XarFNGYxDLBKAAAAAAAAAAAAAAAhiGeATNKvmdKDs5K5t1CrtR4TESxE3BStudrXsQX2OC4IrZuC4JtjNUUIJ83+pBc/zqrintgntv2OXLKsR3hJnrl+Olh5XlTf1RmzunPiXRTnbKfD6O7pbTM5SVSqrJdEyxaUEkkuiViIZPrGlJqM7QuSyhXjJJxaafSxe0yglwWaNqXB7oZhcxqVUuW7FzJO2lyzNsjGt80xFCkp4dKUr2N7F5hOT20o7vJhSyycnuqS3RfO19iGU88Iru5y4islU46vVqT9ZWjtqPrxYwp03KyiupJNfUFCrFpWv/0eGiaSniFGSTXXn5GPOGbcFKcMzweuU6Tq1bOfCO49Dx/EiZ04RirKy4PGvjIRTbasjQWmriuS9DSrHRVuodOVMOt11KHwua+msxlQrRs7Rk7SROc9x/raUlThuhtbba6FaUvet33f5KVsVXYnErX1OqaZdE8zpxipXurdjTxGbOS+zi2zyyPLYulCT9r2Vw/kdilhYx6JI0o75o1a5QxnByI4etVacnth3RuYbJqUHuSbb88o6SQWO41Jdh2yfXBiopdAbOXqPGujRlNOzSdv0K4q6txMlbfb4pkdupjXxgq2XqHDJ9qXO4UacldbrWtfkrjLcFLF10kny05PrZXMsDSeKn9tUd78tv8AcsvT+VUaEPYs2+sl3KqT1Es/BXTd0s/B0sDh1TpwgvuxSNgQzTisLBdSwAmMTDPSrder/cMz9H7+3fyFr1fbv/7uYaEdq9/gY3+czH/MWmhoSMkbS6NIBMYgeiZDde5WpU1OK5T5JmcnUdLdRl8EQ3RUoPJFbFOLyU/h5uE4y6NFu6XxfrKEXe7Kjrq02vFywPRxVvScb9GZmilixopaZ4ngmqGIZsmkAAAAAAAAAAAAAAAAK4wDCrJJXbsiD53rajSxEaVOn63m0nFXs/oTXF0FOEoP7yaK7oaBrUsX66nUTg5NtT5udwUX/ce7U+yc5dVhWgqigkpdmjWzLI6NWDTgk33S5OpRp7YqKsrLt0GyGVcH8HEoRaKZzvK3QqONna/DO7ozUMoTVKo24y6XfQ3PSCoWVrbrkMwaXrI34Mab8dvBmSlsn+Jb+KzJWtT9qT8GtTwdWpzVlZeEeuSYWCpxml1Xc3K+NhDiTV+yNRPKzJluFM7eZf8ADPDYWMFZL6nu2caWcS5Spy8J9jzX9TJ88JnnkXwXY0YX0Rn0kxV6bTV2ziaSxfq8SnZysuiV30Orr3AypqnJyveXJoaG/wDcXy/wZs8u4zp4jeTd1MTWacFspS4d+JGxh8hjGV5TnJfhlymdiMbdDKxqRqXyafkeMI5eZ0I08PUUUktrKhoq9VLzN/yW9qSdsPP5MqXLo3xEF5m/5M/WL/0SM3VPM0XDk0LUYJ+Eb6PHCxtCK8JHsalaxEtx6AAA6OjRzXLYV4OE72ZHKmg8Pb2bpkwGRzqjLs4lXF9lTag05Uwz3Rb29reDa0nqGcKkac3eL45ZNtUUVKhK66IqKNTbNNdYz/yZtsfBZ+LKVma58F5U5ppNdz0RycFiXHDUpqLm3GN0jqU5XSdrfA1Iyyi+nlGZiZGJ0elZ6+j9rf4nP0fK1ddun8nY9IUfbuRzT9W1aHxa/kxrOL/9mXPi0uaL4M0eVJ8L5HojZXRproYAI9PQZp5p/an+Vm2zharx6p0Zc2bRFa8QZxY8RKqxvvy+ZNvRzBpS8XIHJ3k35ZaOhsHsoKTXL/gytGs2ZKGnWZkoGJDNo0gAQADASGAAAABjcNyNTMq8oU24puVnYiWBzTEOq3Uuop9DzJNXS5rKJu5LqeEMdTbspK/i54xrb6Tav7pVmbY6pSxDSm48+WV7r/GVLp7GXBuAqnC6xxUGukorz3Op/r2VrOHPkjjrYY5IvaiidYrFRiuWcmWZVKn9qNkny58foRFaxTluqU27dLXf7GrmOrq1RbacVCLVvj+xFPVxfTK0tQ7PnBlqyvHdtUt8ubvwzg4KDnUjHvwedWcpO75bf6kw0fp2Tkq9RfJFGMXZMirhukTPD4N/08IKTi9vVGGGydLmb3yXdnVguLDsbaqWOTZhJxjhHlDDpdj1SGBIopdBtvsgfpQ9yj+Y4WhV/vF+Vnd9J/u0vzHI0FD/AHN/gzKsX9QZs/5i04hYIjNVGiR3W1TbhpP6Fb5DS3Ymn+a5YHpBmv6a3loh2jaW7ER72MvU83IoX82ItikuEZmMehkacei+uhMLka1bnksN6tx6N2a8jyvVlCpFbntl4ZG74KW1kflinhklA04ZjSaupr9TUx2f0aabc1x45PXbBfJ65xXyams8YqeHlzy+i8lVwpesnGK6yknx8zr6kzyWJm+bQXQ3dDZK6tVV5K0KfS/czLJea1JFCzNk1gsbKqW2jTj4hFfsbaMYqxmjVjHCwaKWEMTGJnR6Qb0g0eFIg+VytVi+ya/ksbXNK9LoVlFyhK66pmLqk1bkzLlieS7cuq7qcX8EbZVmD1hXpwUEk7dz3euMR4iXIa2G3ksx1MMFl7hesXUrCrrfE/dUfqjRr6txM1Zyt8j2Wuhjge1EsrNM7pUk7yV0uhWeos8nXk+fZ7L4HNrYupUfMm2/qb2W5JVrSSSdul7FS2+dvCK87ZWcIWnsqlXqpW9m92/qW7gsOqcIwXRI5+QZLDDwSS9ruzsF7TUeNZZboq2IEZCQFsnPOtOybNfDYpybumrOxttCUF4I5QbeUwZDEM7AAAAHntPFYGny9q5Pds1cTjow7q/jueNpHjs2/J7qEYqy4RGs9y+jNvbTUqj/AGN5061Vu7205cq3Dt2N3A5dGmut35fUhkt/aKs3K3iKwvshkdDb/acnB/hRrV9CVV7srllJAkR+nXg6WlgkVc9E1/ge+G0HUfvSsWVYLHnowPfXgRTLdH0aVpTe5q3U7mExdC/q4SjdduDdnC6afdWI5htM7MT69S4vexMq1HpEsYRj0SVDACY7AAAAg/pFwlSoqeyLlZ9jS0JgJxquUotW8osOdNPqkzCNKK6JL5IqvT5nuIHSt+49ENiQy0kTkH9I1Z7YQSk+/Cucf0dU260ntkreVYsmthoS96Kl80FHDQhzGEYv4Iqy0+6zcV3Tme49kMSGWiciGuMoqV4w9XztbbIFVyuvB22yv9S6nE8p4WD6xX6FS7Tb3lFeyjc8lMqGI8z/AHMqeX4mo7bZS+dy33llL8Ef0PWlhYR92KRD6TfbI/Vb7ZXWS6InJqVfiN/dT6lh4LCRpwUIJJLoke6RkXKqI19FiFSj0JIdgQyYlATGIA5+b5cq8NjdviiJ1PR1Tbb9bIngEM6YT7RHKqMuyA/+O4f8shP0dx/5ZE/FY49Sv6OfXgQBej1LpUbPenodd2TkDz1Kvo89eBGMJpOjBptcr4Hdw2DhBWikvobQiSNUI9IkjXGPSMZSS6mFDERnfa07eDj6oqVY016v7z2uw8gy90kpXdpK7T8nTliWDjyPdjB3UAASEwAMABWGAAAAAAcrGzqt7YcLyGGy1X3T5l5Z09qCxxt+yHwpvLMYQSMrDSGdEqWDEaGIHowAD0CCwwAEAwAEAwAEAwAEAwAEKxkAAgGAAgsMABBYYACAYACGAAAIYmAeOIrKK3N2Rq4fMlOdoq8fJuVaMZK0ldHnh8LCHuqwOuMGwAIYORAMABAFwAPHE7VFuSulyV9nOv3SqyhGHswLGnBNWa4ZFsy0Rhq03N3TfgYB0NLZu8VQVZq27sdo5+UZbDD0o0oe7E2a2LhBpSlGLfTc0rgGwBjF35MgAAAAAAAAQgAAyQAB4BCAABoYAegAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGYgAAxgAACYAAatWT3LlmxTfAgPTwzEwAATK59J39/C/nj/LADxnpYGX/ANqn+RGyAAAAAAAAAB//2Q==")
        }, 1000)
        
      })
    }
  },
  watch: {
    form: {
      deep: true,
      handler(val) {
        console.log("demo", val)
      }
    }
  }

}
</script>
