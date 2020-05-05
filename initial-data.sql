
-- INSERÇÃO DE QUESTÕES

INSERT INTO Questions (`title`, `question`, `weight`, `order`) VALUES ("questao_1", "Seu animal é castrado?", 7, 1);
INSERT INTO Questions (`title`, `question`, `weight`, `order`) VALUES ("questao_2", "Qual o sexo do seu animal?", 1, 2);
INSERT INTO Questions (`title`, `question`, `weight`, `order`) VALUES ("questao_3", "Qual a idade do seu animal?", 9, 3);
INSERT INTO Questions (`title`, `question`, `weight`, `order`) VALUES ("questao_4", "Coceira no ouvido", 1, 4);
INSERT INTO Questions (`title`, `question`, `weight`, `order`) VALUES ("questao_5", "Parasitas", 8, 5);
INSERT INTO Questions (`title`, `question`, `weight`, `order`) VALUES ("questao_6", "Diarreia", 5, 6);
INSERT INTO Questions (`title`, `question`, `weight`, `order`) VALUES ("questao_7", "Espirro", 2, 7);
INSERT INTO Questions (`title`, `question`, `weight`, `order`) VALUES ("questao_8", "Fungo", 4, 8);
INSERT INTO Questions (`title`, `question`, `weight`, `order`) VALUES ("questao_9", "Vômito", 5, 9);
INSERT INTO Questions (`title`, `question`, `weight`, `order`) VALUES ("questao_10", "Tosse", 2, 10);
INSERT INTO Questions (`title`, `question`, `weight`, `order`) VALUES ("questao_11", "Sem apetite", 1, 11);
INSERT INTO Questions (`title`, `question`, `weight`, `order`) VALUES ("questao_12", "Secreção nas narinas", 5, 12);
INSERT INTO Questions (`title`, `question`, `weight`, `order`) VALUES ("questao_13", "Febre", 8, 13);
INSERT INTO Questions (`title`, `question`, `weight`, `order`) VALUES ("questao_14", "Inflamação", 8, 14);
INSERT INTO Questions (`title`, `question`, `weight`, `order`) VALUES ("questao_15", "Dor", 7, 15);
INSERT INTO Questions (`title`, `question`, `weight`, `order`) VALUES ("questao_16", "Ruídos no pulmão", 10, 16);
INSERT INTO Questions (`title`, `question`, `weight`, `order`) VALUES ("questao_17", "Respiração boca aberta", 3, 17);
INSERT INTO Questions (`title`, `question`, `weight`, `order`) VALUES ("questao_18", "Suspeita intoxicação", 10, 18);


-- INSERÇÃO DE SOLUÇÕES

INSERT INTO Solutions (`title`, `description`) VALUES ("solucao_1", "Procurar causa deste sintoma para tratar o problema primário; Pode-se administrar o medicamento Mirtazapina; Estimular o consumo voluntário do alimento;");
INSERT INTO Solutions (`title`, `description`) VALUES ("solucao_2", "Ondasentrona e administrar soro ringer lactato com glicose 2,5% para manter hidratação e energia;");
INSERT INTO Solutions (`title`, `description`) VALUES ("solucao_3", "Ondasentrona e administrar soro ringer lactato com glicose 2,5% para manter hidratação e energia; Administrar vermífugo;");
INSERT INTO Solutions (`title`, `description`) VALUES ("solucao_4", "Limpeza do ouvido com solução otológica (OTOVET) e algodão;");
INSERT INTO Solutions (`title`, `description`) VALUES ("solucao_5", "Limpeza do ouvido com solução otológica (OTOVET) e algodão; Uso do Itraconazol;");
INSERT INTO Solutions (`title`, `description`) VALUES ("solucao_6", "Administrar Dipirona para supressão dos sintomas; Buscar causa dos mesmos através da anamnese e por exame físico e complementares se necessário;");
INSERT INTO Solutions (`title`, `description`) VALUES ("solucao_7", "Nebulização com albuterol (dilatador do brônquios);");
INSERT INTO Solutions (`title`, `description`) VALUES ("solucao_8", "Suspeitando-se de pneumonia e após confirmar com raio-x (se necessário), administrar o remédio mucolítico: N-acetilcisteína, se faz uso também de antibióticos;");
INSERT INTO Solutions (`title`, `description`) VALUES ("solucao_9", "Administrar Carvão ativado;");


-- INSERÇÃO DE CASOS

INSERT INTO Cases (`title`, `solution_id`) VALUES ("caso_1", 1);
INSERT INTO Cases (`title`, `solution_id`) VALUES ("caso_2", 2);
INSERT INTO Cases (`title`, `solution_id`) VALUES ("caso_3", 3);
INSERT INTO Cases (`title`, `solution_id`) VALUES ("caso_4", 4);
INSERT INTO Cases (`title`, `solution_id`) VALUES ("caso_5", 5);
INSERT INTO Cases (`title`, `solution_id`) VALUES ("caso_6", 6);
INSERT INTO Cases (`title`, `solution_id`) VALUES ("caso_7", 7);
INSERT INTO Cases (`title`, `solution_id`) VALUES ("caso_8", 8);
INSERT INTO Cases (`title`, `solution_id`) VALUES ("caso_9", 9);


-- INSERÇÃO DE RESPOSTAS

ALTER TABLE Replies
ADD COLUMN value VARCHAR(15) AFTER question_id;

INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (1, 1, '1');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (2, 1, '1');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (3, 1, '4');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (4, 1, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (5, 1, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (6, 1, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (7, 1, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (8, 1, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (9, 1, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (10, 1, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (11, 1, '1');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (12, 1, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (13, 1, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (14, 1, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (15, 1, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (16, 1, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (17, 1, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (18, 1, '0');

INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (1, 2, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (2, 2, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (3, 2, '7');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (4, 2, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (5, 2, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (6, 2, '1');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (7, 2, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (8, 2, '1');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (9, 2, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (10, 2, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (11, 2, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (12, 2, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (13, 2, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (14, 2, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (15, 2, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (16, 2, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (17, 2, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (18, 2, '0');

INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (1, 3, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (2, 3, '1');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (3, 3, '6');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (4, 3, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (5, 3, '1');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (6, 3, '1');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (7, 3, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (8, 3, '1');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (9, 3, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (10, 3, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (11, 3, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (12, 3, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (13, 3, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (14, 3, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (15, 3, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (16, 3, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (17, 3, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (18, 3, '0');

INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (1, 4, '1');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (2, 4, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (3, 4, '4');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (4, 4, '1');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (5, 4, '1');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (6, 4, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (7, 4, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (8, 4, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (9, 4, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (10, 4, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (11, 4, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (12, 4, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (13, 4, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (14, 4, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (15, 4, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (16, 4, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (17, 4, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (18, 4, '0');

INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (1, 5, '1');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (2, 5, '1');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (3, 5, '5');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (4, 5, '1');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (5, 5, '1');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (6, 5, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (7, 5, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (8, 5, '1');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (9, 5, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (10, 5, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (11, 5, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (12, 5, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (13, 5, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (14, 5, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (15, 5, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (16, 5, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (17, 5, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (18, 5, '0');

INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (1, 6, '1');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (2, 6, '1');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (3, 6, '5');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (4, 6, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (5, 6, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (6, 6, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (7, 6, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (8, 6, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (9, 6, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (10, 6, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (11, 6, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (12, 6, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (13, 6, '1');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (14, 6, '1');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (15, 6, '1');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (16, 6, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (17, 6, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (18, 6, '0');

INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (1, 7, '1');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (2, 7, '1');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (3, 7, '5');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (4, 7, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (5, 7, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (6, 7, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (7, 7, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (8, 7, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (9, 7, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (10, 7, '1');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (11, 7, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (12, 7, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (13, 7, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (14, 7, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (15, 7, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (16, 7, '1');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (17, 7, '1');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (18, 7, '0');

INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (1, 8, '1');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (2, 8, '1');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (3, 8, '5');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (4, 8, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (5, 8, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (6, 8, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (7, 8, '1');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (8, 8, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (9, 8, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (10, 8, '1');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (11, 8, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (12, 8, '1');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (13, 8, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (14, 8, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (15, 8, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (16, 8, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (17, 8, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (18, 8, '0');

INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (1, 9, '1');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (2, 9, '1');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (3, 9, '5');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (4, 9, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (5, 9, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (6, 9, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (7, 9, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (8, 9, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (9, 9, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (10, 9, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (11, 9, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (12, 9, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (13, 9, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (14, 9, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (15, 9, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (16, 9, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (17, 9, '0');
INSERT INTO Replies (`question_id`, `case_id`, `value`) VALUES (18, 9, '1');

