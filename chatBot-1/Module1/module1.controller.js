const { dockStart} = require('@nlpjs/basic')
exports.chatBot1 = async (req, res) =>{
    try {
        const msg = req?.body?.msg;
        const dock = await dockStart()
        const nlp = dock.get('nlp');
        await nlp.train();
        const result = await nlp.process(msg);
        return res.status(200).json(result.answer)
    } catch (error) {
        console.log(error);
        return res.status(400).json({message:"Somthing went wrong", error:error.message})
    }
}

exports.openPage = async(req, res) =>{
    try {
        res.render('chatBot');
    } catch (error) {
        console.log(error);
        return res.status(400).json({message:"Somthing went wrong", error:error.message})
    }
}