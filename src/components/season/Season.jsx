import { useEffect, useState } from 'react';
import "./season.scss";
import { useTranslation } from "react-i18next";
import service from '../../api/service';
import Card from '../../widgets/card/Card';



const Season = () => {
    const { t, i18n } = useTranslation(); 
    const [posts, setPosts] = useState([]);

    const cardLimit = 3;

    const fetchPosts = async () => {
        try {
            const data = await service.getAllProducts();
            console.log(data, "---all posts data---");

            setPosts(data.slice(0, cardLimit));
        } catch (err) {
            console.error("Fetch error:", err);

        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);


    return (
        <div className='Season'>
            <div className='Season_content'>
                <div className='Season_generalOne'>
                    <h2 className='title_h2'>{t("SEASON 2020/21")}</h2>
                    <div className='line'></div>
                    <div className="generalCard">
                        {posts.map((post) => (
                            <Card key={post.id} post={post} />
                        ))}
                    </div>
                </div>
                <div className='Season_generalTwo'>
                    <div>
                        <h2 className='title_h2'>{t("New collection")}</h2>
                        <div className='line'></div>
                        <button >{t("Catalog")}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Season;
