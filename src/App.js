import React from 'react';
import Video from './Video';
import './app.css';

function App() {
    return (
        <div className="app">
            <div className="app__videoContainer">
                <Video
                    videoSrc="https://v16m.tiktokcdn.com/66786d56619d883221ee3ca8faf3581d/5f4d051b/video/tos/useast2a/tos-useast2a-pve-0068/4e85a974822e46bdb878fbd6b3c102ef/?a=1233&br=2662&bt=1331&cr=0&cs=0&dr=0&ds=3&er=&l=202008310811290101880612035901215D&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M2hueHY1bjk4dTMzZjczM0ApNDpkZGY8NmRoNzY6Mzc0OWdfMW1rZDNlYDVfLS0xMTZzcy8tYTZiLTQwYDViMzExNjA6Yw%3D%3D&vl=&vr="
                    username={"bravo.vfx"}
                    description={"Deku 100% VFX to tease a bigger project I’m working on!! #fyp #foryou #edit #vfx #anime #myheroacademia #deku"}
                    song={'original sound - bravo.vfx'}
                    likes={122}
                    messages={20}
                    shares={10}/>
                <Video
                    videoSrc="https://v16m.tiktokcdn.com/c6f66078913f5d2e3904d91d048080e6/5f4d055e/video/tos/useast2a/tos-useast2a-ve-0068c001/b9ea7926739143cda198d485596cf001/?a=1233&br=1916&bt=958&cr=0&cs=0&dr=0&ds=3&er=&l=20200831081226010190186036460121A0&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=anc4NXlnZGxldTMzaDczM0ApZDlkZTNoaTs8N2gzaTM7NGdiaXNrbXAvZzZfLS1jMTZzc18uYDY0NWJjNS1gMmIzNTA6Yw%3D%3D&vl=&vr="
                    username={"bravo.vfx"}
                    description={"Some Bending VFX tests w/ @odesus @martincochingco @jonny.nickerson @_dkta // Check out my IG: @bravo.vfx #foryou #fyp #edit #avatar #thelastairbender"}
                    song={'original sound - bravo.vfx'}
                    likes={650}
                    messages={90}
                    shares={10}/>
                <Video
                    videoSrc="https://v16m.tiktokcdn.com/3f3a3a949f0ad86932e35a43f1378fbd/5f4d0561/video/tos/useast2a/tos-useast2a-pve-0068/fb6e0cfa2ba543429802c87bab3f5520/?a=1233&br=5510&bt=2755&cr=0&cs=0&dr=0&ds=3&er=&l=20200831081226010190186036460121A0&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=anM3NzdyOnN1dTMzOjczM0ApaGQ1OzhlZDs6NzhoaTk3ZmdvYHExbDAvcWVfLS1jMTZzc2JeXi1iXjItYTFhLWMwYzI6Yw%3D%3D&vl=&vr="
                    username={"bravo.vfx"}
                    description={"Some Demon Slayer VFX / COSPLAY: @doublejcosplay #fyp #foryou #vfx #edit #anime #weeb #demonslayer #kimetsunoyaiba #tanjiro"}
                    song={'the best song'}
                    likes={902}
                    messages={10}
                    shares={3}/>
            </div>

        </div>
    );
}

export default App;
