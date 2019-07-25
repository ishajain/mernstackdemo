import News from '../models/News'

module.exports = {

    findAll:  async () => {
        const news = await News.find()
        return news
    },
    findByUser: async userId => {
        const newsByUser = await News.find({ creator : userId}).exec()
        return newsByUser

    },
    create : async (news, userId) => {
        
        const {title, description} = news
        const newNews = new News({
            title,
            description,
            creator: userId,
            date : new Date()

        })
        try{
           const news =  await newNews.save()
           return news
        }
        catch (error) {
            console.log(error)
          }

    }
}