import React from 'react'

export const Pagination = ({ pokemonPerPage, totalPokemon, paginate }) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPokemon / pokemonPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            <nav className=''>
                <ul className='pagination justify-content-end mr-2'>
                    {pageNumbers.map((number) => {
                        return (
                            <li key={number} className='page-item'>
                                <a href='/pokemon' onClick={() => paginate(number)} className='page-link'>{number}</a>
                            </li>
                        )
                    })
                    }
                </ul>
            </nav>
        </div>
    )
}
