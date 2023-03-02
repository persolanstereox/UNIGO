import Image from "next/image";


function SocialMedia() {
    return(
        <div>
            <span>Follow us</span>
            <button className="bg-pink-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-full">
                <Image src="/twitter-icon.svg" width={20}
            height={20}
            alt="Twitter Icon"/>
            </button>
            <button className="bg-blue-500 hover:bg-pink-700 text-white font-bold py-4 px-4 rounded-full">
                <Image src="/instagram-icon.svg" width={20}
            height={20}
            alt="Twitter Icon"/>
            </button>
        </div>
    )
}
export default SocialMedia;