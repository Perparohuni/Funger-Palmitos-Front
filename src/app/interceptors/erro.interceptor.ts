import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ToastService } from '../services/toast.service';

export const erroInterceptor: HttpInterceptorFn = (req, next) => {
    const toast = inject(ToastService);

    return next(req).pipe(
        catchError((erro: HttpErrorResponse) => {
            let mensagem = 'Ocorreu um erro ao realizar a operação.';

            if (erro.status === 0) {
                mensagem = 'Não foi possível conectar ao servidor.';
            } else if (erro.error?.mensagem) {
                mensagem = erro.error.mensagem;
            } else if (erro.status === 400) {
                mensagem = 'Requisição inválida.';
            } else if (erro.status === 401) {
                mensagem = 'Não autorizado.';
            } else if (erro.status === 403) {
                mensagem = 'Você não tem permissão para realizar esta ação.';
            } else if (erro.status === 404) {
                mensagem = 'Recurso não encontrado.';
            } else if (erro.status >= 500) {
                mensagem = 'Erro interno do servidor.';
            }

            toast.erro(mensagem);

            return throwError(() => erro);
        }),
    );
};
