export interface OrdemDeServico{
id: number;
nomeCliente: string;
modelo: string;
defeito: string;
status: 'Aberto' | 'Em Andamento' | 'Finalizado';
}
