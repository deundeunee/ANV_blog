import { RamenSoupCover, RamenSoupSalt, RamenSoupText } from "../atoms/RamenSoup";

export const RamenSoup = () => {
    return (
        <div>
            <RamenSoupText>
                라면 스프
            </RamenSoupText>

            <RamenSoupCover>
                <RamenSoupSalt> 소금 </RamenSoupSalt>
            </RamenSoupCover>
        </div>
        
    );
}