import * as SC from "./styledProfile"
import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

export default function Profile() {

    const navigate = useNavigate()

    return (
        <>
        <SC.Container>
            <SC.Content>
                <SC.Return onClick={() => navigate(-1)}><ArrowLeft /></SC.Return>

            <SC.NameAndImage>
                <SC.ContainerImage>
                    <SC.Image src="../../../public/borabico.ico"/>
                </SC.ContainerImage>

                <SC.Name></SC.Name>
            </SC.NameAndImage>
            </SC.Content>
        </SC.Container>
        </>
    )
}