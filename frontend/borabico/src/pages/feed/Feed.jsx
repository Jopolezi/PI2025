import React from "react"
import * as S from "./styledFeed"
import { MapPin, Calendar, DollarSign, Clock, AlertCircle, PhoneCall } from "lucide-react"

export default function Feed() {
    const mockJobs = [
        {
            id: 1,
            title: "Pintor Residencial",
            category: "Construção e Reforma",
            description: "Preciso de pintor experiente para pintura interna de casa. Trabalho inclui preparação de paredes, aplicação de massa corrida e pintura com tinta acrílica. Experiência mínima de 2 anos.",
            value: "350,00",
            payment: "Por dia",
            address: "Rua das Flores, 123 - Centro, São Paulo - SP",
            date: "15/10/2025",
            phone: "(11) 98765-4321",
            urgency: true
        },
        {
            id: 2,
            title: "Eletricista para Instalação",
            category: "Serviços Elétricos",
            description: "Necessário eletricista qualificado para instalação de pontos elétricos em apartamento novo. Serviço inclui instalação de tomadas, interruptores e luminárias. Trazer ferramentas próprias.",
            value: "800,00",
            payment: "Por projeto",
            address: "Av. Paulista, 1000 - Bela Vista, São Paulo - SP",
            date: "20/10/2025",
            phone: "(11) 91234-5678",
            urgency: false
        },
        {
            id: 3,
            title: "Jardineiro para Manutenção",
            category: "Jardinagem e Paisagismo",
            description: "Busco jardineiro para manutenção mensal de jardim residencial. Atividades incluem poda de plantas, limpeza de canteiros, adubação e controle de pragas. Trabalho fixo todos os meses.",
            value: "200,00",
            payment: "Por mês",
            address: "Rua dos Jardins, 456 - Jardim Europa, São Paulo - SP",
            date: "18/10/2025",
            phone: "(11) 97654-3210",
            urgency: false
        },
        {
            id: 4,
            title: "Jardineiro para Manutenção",
            category: "Jardinagem e Paisagismo",
            description: "Busco jardineiro para manutenção mensal de jardim residencial. Atividades incluem poda de plantas, limpeza de canteiros, adubação e controle de pragas. Trabalho fixo todos os meses.",
            value: "200,00",
            payment: "Por mês",
            address: "Rua dos Jardins, 456 - Jardim Europa, São Paulo - SP",
            date: "18/10/2025",
            phone: "(11) 97654-3210",
            urgency: false
        }
    ]

    return (
        <>
            <S.Container>
                <S.Content>
                    <S.Title>Procurando uma oportunidade de trabalho?</S.Title>
                    <S.Subtitle>Veio ao lugar certo! Aqui no Borabico você encontra a vaga ideal para você!</S.Subtitle>

                    <S.Divider/>

                    <S.JobsGrid>
                        {mockJobs.map(job => (
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
                        ))}
                    </S.JobsGrid>
                </S.Content>
            </S.Container>
        </>
    )
}