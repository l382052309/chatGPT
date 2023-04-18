/**
 * @Description:
 * @author wxj
 * @date 2020-10-12-13:38
 */
import axios from './http'
// import axios from 'axios'
const serve = {
 
  addData (data, dataTotal) {
      let storeT = this.$store;
      var dataT =
          {
            "model":"ada:ft-personal-2023-04-14-06-56-13",
            "max_tokens":500,
            "top_p":1,
            "temperature":0,
            "frequency_penalty":0,
            "presence_penalty":-2,
            "prompt":data
          }

    fetch('https://api.openai.com/v1/completions', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization':'Bearer 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'
        },
        body: JSON.stringify(dataT),
      })
      .then(function(response) {
        return response.json();
      }).then(function(data) {
        //console.log(data.choices[0].text);
        dataTotal.content =  dataTotal.content+data.choices[0].text;
        console.log(dataTotal);
        storeT.commit('setData', dataTotal)
      }).catch(function(e) {
        console.log("Oops, error" + e);
    });


  }

}

export default serve
