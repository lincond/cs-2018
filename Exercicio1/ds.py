#_*_ encoding: utf-8 _*_
import sys
import math

def bissexto(ref, test):
    if ref == test:
        return True
    if test % 100 != 0 and test % 400 != 0:
        return False
    return math.fabs(ref - test) % 4 == 0

def toDate(dtString):
    '''
        Converte uma string no formato aaaammdd para uma
        estrutura separada por dia, mes e ano
    '''
    if len(dtString) != 8:
        raise Exception('Tamanho inválido')

    dtNumber = int(dtString)
    return {
        'dia': dtNumber % 100,
        'mes': (dtNumber / 100) % 100,
        'ano': (dtNumber / 10000) % 10000
    }

def isEqual(dtA, dtB):
    '''
        Verifica se as dadas dtA e dtB são iguais
    '''
    return  dtA['ano'] == dtB['ano'] \
        and dtA['mes'] == dtB['mes'] \
        and dtA['dia'] == dtB['dia']

def subDate(dt, anoBissexto):
    '''
        Subtrai um dia da data dt
    '''

    # meses com 31
    meses31 = [1, 3, 5, 7, 8, 10, 12]

    # Se for dia 1º, faz as verificações para diminuir o mês 
    if dt['dia'] == 1:
        # Casos especiais: mês 1, mês 3(bissexto), 30 ou 31 dias
        # mês 1
        if dt['mes'] == 1:
            dt['ano'] -= 1
            dt['mes'] = 12
            dt['dia'] = 31
        # Bissexto
        elif dt['mes'] == 3:
            dt['dia'] = 29 if bissexto(anoBissexto, dt['ano']) else 28
            dt['mes'] -= 1
        # 30 ou 31 dias
        else:
            dt['dia'] = 31 if dt['mes'] - 1 in meses31 else 30
            dt['mes'] -= 1
    else:
        dt['dia'] -= 1
    return dt

def addDate(dt):
     # meses com 31
    meses31 = [1, 3, 5, 7, 8, 10, 12]

    # Se for dia 28, faz as verificações para avançar o mês 
    if dt['dia'] >= 28:
        # Casos especiais: mês 12, mês 2(bissexto), 30 ou 31 dias
        # mês 12 
        if dt['mes'] == 12 and dt['dia'] == 31:
            dt['ano'] += 1
            dt['mes'] = dt['dia'] = 1
        # Bissexto
        elif dt['mes'] == 2:
            if bissexto(anoBissexto, dt['ano']) and dt['dia'] == 28:
                dt['dia'] += 1
            elif dt['dia'] == 29:
                dt['mes'] += 1
                dt['dia'] = 1
        # 30 ou 31 dias
        else:
            # mes 31 dias
            if dt['mes'] in meses31:
                if dt['dia'] < 31:
                    dt['dia'] += 1
                else:
                    dt['dia'] = 1
                    dt['mes'] += 1
            # mes 30 dias
            else:
                if dt['dia'] < 30:
                    dt['dia'] += 1
                else:
                        dt['dia'] = 1
                        dt['mes'] += 1
    else:
        dt['dia'] += 1
    return dt

if __name__ == '__main__':
    # Verifica se os argumentos foram passados
    if len(sys.argv) < 5:
        print('Uso: python ds.py dtInteresse anoBissexto dtReferencia diaDaSemana')
        sys.exit(-1)

    # Verificação incial dos valores
    try:
        dtInteresse = toDate(sys.argv[1])
        anoBissexto = int(sys.argv[2])
        dtReferencia = toDate(sys.argv[3])
        diaDaSemana = int(sys.argv[4])

        if diaDaSemana < 0 or diaDaSemana > 6 or anoBissexto < 1:
            sys.exit(-10)
        
        if  dtInteresse['dia'] > 31 or dtInteresse['dia'] < 1  or\
            dtReferencia['dia'] > 31 or dtReferencia['dia'] < 1 or \
            dtInteresse['mes'] > 12 or dtInteresse['mes'] < 1 or \
            dtReferencia['dia'] > 31 or dtReferencia['dia'] < 1:
            sys.exit(-1)
            
    except:
        sys.exit(-1)

    # Inicia o a data atual com a data de referencia 
    dtAtual = dtReferencia

    # Determina qual a direção será a iteração
    if dtAtual['ano'] < dtInteresse['ano']:
        direction = 1
    elif dtAtual['ano'] > dtInteresse['ano']:
        direction = -1
    elif dtAtual['ano'] == dtInteresse['ano']:
        if dtAtual['mes'] < dtInteresse['mes']:
            direction = 1
        elif dtAtual['mes'] > dtInteresse['mes']:
            direction = -1
        elif dtAtual['mes'] == dtAtual['mes']:
            if dtAtual['dia'] < dtInteresse['dia']:
                direction = 1
            elif dtAtual['dia'] > dtInteresse['dia']:
                direction = -1

    # Equanto a data atual for diferente da data desejada 
    while not isEqual(dtAtual, dtInteresse):
        if direction < 0:
            # subtrai os dias da data
            dtAtual = subDate(dtAtual, anoBissexto)
            # subtrai o dia da semana 
            diaDaSemana -= 1
            if diaDaSemana < 0:
                diaDaSemana = 6
        elif direction > 0:
            dtAtual = addDate(dtAtual)
            # adiciona o dia da semana 
            diaDaSemana += 1
            if diaDaSemana > 6:
                diaDaSemana = 0
        print('dtAtual', dtAtual)
    sys.exit(diaDaSemana)
