import Stories from '../models/mapping.js'
import AppError from '../errors/AppError.js'

class StoriesC {
    async addVideo(req, res) {
        try {
            const { title, description, url } = req.body;
            const story = await Stories.create({ title, description, url });
            return res.status(201).json(story);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Ошибка при создании видео' });
        }
    }

    // Удаление видео по ID
async deleteVideo(req, res) {
    try {
        const storyId = req.params.id;
        const story = await Stories.findByPk(storyId);

        if (!video) {
            return res.status(404).json({ error: 'Видео не найдено' });
        }

        await story.destroy();
        return res.status(204).json();
        } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Ошибка при удалении видео' });
        }
    }

  // Редактирование видео по ID
    async editVideo(req, res) {
    try {
        const storyId = req.params.id;
        const { title, description, url } = req.body;
        const story = await Stories.findByPk(storyId);
    
        if (!story) {
        return res.status(404).json({ error: 'Видео не найдено' });
        }
    
        story.title = title;
        story.description = description;
        story.url = url;
    
        await story.save();
    
        return res.status(200).json(story);
        } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Ошибка при редактировании видео' });
        }
    }
}

export default new StoriesC()