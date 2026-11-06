Vue.createApp({

  data(){
    return{
      score:75,

      standards:[
        {
          min: 90,
          max: 101,
          range: "90~100点",
          grade: "A",
          status: "優秀",
          color: "grade-a",
          advice: "非常に優秀な成績です。応用問題にも挑戦して、さらに理解を深めましょう。"
        },
        {
          min: 80,
          max: 90,
          range: "90~80点",
          grade: "B",
          status: "優秀",
          color: "grade-b",
          advice: "非常に優秀な成績です。応用問題にも挑戦して、さらに理解を深めましょう。"
        },
        {
          min: 70,
          max: 80,
          range: "70~80点",
          grade: "C",
          status: "優秀",
          color: "grade-c",
          advice: "非常に優秀な成績です。応用問題にも挑戦して、さらに理解を深めましょう。"
        },
        {
          min: 60,
          max: 70,
          range: "60~70点",
          grade: "D",
          status: "優秀",
          color: "grade-d",
          advice: "非常に優秀な成績です。応用問題にも挑戦して、さらに理解を深めましょう。"
        },
        {
          min: 0,
          max: 60,
          range: "0~60点",
          grade: "F",
          status: "優秀",
          color: "grade-f",
          advice: "非常に優秀な成績です。応用問題にも挑戦して、さらに理解を深めましょう。"
        },
      ]
    };
  },

  computed: {
    currentStandard(){
      return this.standards.find(item =>
        this.score >= item.min && this.score < item.max
      );
    },

    grade(){
      return this.currentStandard?.grade || "-";
    },

    status(){
      return this.currentStandard?.status || "判定できません";
    },

    advice(){
      return this.currentStandard?.advice || "0~100の範囲で点数を入力してください。";
    },

    differenceMessage(){
      const difference = 60 - this.score;

      if(difference > 0){
        return `合格ラインまであと${difference}点です`;
      }

      return "合格ラインをクリアしています";
    }
  }
}).mount("#app");