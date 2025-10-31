import React, { useEffect } from "react"
import * as S from "./styledFeed"
import { CardFeed } from "@/components/feed/card/CardFeed"

export default function Feed() {
    useEffect(() => {
        document.title = "Vagas"
    }, [])

    return (
        <>
            <S.Container>
                <S.Content>
                    <S.Title>Procurando uma oportunidade de trabalho?</S.Title>
                    <S.Subtitle>Veio ao lugar certo! Aqui no Borabico você encontra a vaga ideal para você!</S.Subtitle>

                    <S.Divider/>

                    <S.JobsGrid>
                        <CardFeed />
                        {/* {mockJobs.map(job => (
                            <S.JobCard key={job.id} urgency={job.urgency}>
                                {job.urgency && (
                                    <S.UrgencyBadge>
                                        <AlertCircle size={16} />
                                        Urgente
                                    </S.UrgencyBadge>
                                )}
                                
                                <S.JobHeader>
                                    <S.JobTitle>{job.title}</S.JobTitle>
                                    <S.JobCategory>{job.category}</S.JobCategory>
                                </S.JobHeader>

                                <S.JobDescription>{job.description}</S.JobDescription>

                                <S.JobInfo>
                                    <S.InfoItem>
                                        <DollarSign size={18} />
                                        <span>R$ {job.value} - {job.payment}</span>
                                    </S.InfoItem>

                                    <S.InfoItem>
                                        <MapPin size={18} />
                                        <span>{job.address}</span>
                                    </S.InfoItem>

                                    <S.InfoItem>
                                        <Calendar size={18} />
                                        <span>{job.date}</span>
                                    </S.InfoItem>

                                    <S.InfoItem>
                                        <PhoneCall size={18} />
                                        <span>{job.phone}</span>
                                    </S.InfoItem>
                                </S.JobInfo>

                                <S.ApplyButton>Ver detalhes</S.ApplyButton>
                            </S.JobCard>
                        ))} */}
                    </S.JobsGrid>
                </S.Content>
            </S.Container>
        </>
    )
}