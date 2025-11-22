import React, { createContext, useContext, useState, useEffect } from 'react';

const EventosContext = createContext();

export const useEventos = () => useContext(EventosContext);

export const EventosProvider = ({ children }) => {
  const [eventos, setEventos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const eventosEjemplo = [
      {
        id: '1',
        titulo: 'El Fantasma de la Ópera',
        categoria: 'teatro',
        fecha: '2024-12-15',
        hora: '20:00',
        lugar: 'Teatro Nacional',
        precio: 45.00,
        descripcion: 'Una de las obras más famosas del teatro musical, con espectaculares efectos especiales y música inolvidable.',
        imagen: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400',
        asientosDisponibles: 120
      },
      {
        id: '2',
        titulo: 'Concierto de Jazz Moderno',
        categoria: 'musica',
        fecha: '2024-12-18',
        hora: '21:30',
        lugar: 'Auditorio Municipal',
        precio: 35.00,
        descripcion: 'Disfruta de las mejores bandas de jazz contemporáneo en un ambiente íntimo y acogedor.',
        imagen: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400',
        asientosDisponibles: 200
      },
      {
        id: '3',
        titulo: 'Romeo y Julieta',
        categoria: 'teatro',
        fecha: '2024-12-20',
        hora: '19:00',
        lugar: 'Teatro Shakespeare',
        precio: 40.00,
        descripcion: 'La clásica tragedia de Shakespeare representada con un elenco de primer nivel.',
        imagen: 'https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=400',
        asientosDisponibles: 85
      },
      {
        id: '4',
        titulo: 'Festival de Danza Contemporánea',
        categoria: 'danza',
        fecha: '2024-12-22',
        hora: '20:30',
        lugar: 'Centro Cultural',
        precio: 30.00,
        descripcion: 'Competición anual de danza contemporánea con participantes internacionales.',
        imagen: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=400',
        asientosDisponibles: 150
      }
    ];

    const categoriasEjemplo = [
      { id: 'todos', nombre: 'Todos', icono: 'th-large' },
      { id: 'teatro', nombre: 'Teatro', icono: 'theater-masks' },
      { id: 'musica', nombre: 'Música', icono: 'music' },
      { id: 'danza', nombre: 'Danza', icono: 'user-friends' },
      { id: 'comedia', nombre: 'Comedia', icono: 'laugh' },
      { id: 'arte', nombre: 'Arte', icono: 'palette' }
    ];

    setEventos(eventosEjemplo);
    setCategorias(categoriasEjemplo);
  }, []);

  const getEventosPorCategoria = (categoria) => {
    if (!categoria || categoria === 'todos') return eventos;
    return eventos.filter(evento => evento.categoria === categoria);
  };

  const getEventoPorId = (id) => {
    return eventos.find(evento => evento.id === id);
  };

  const value = {
    eventos,
    categorias,
    getEventosPorCategoria,
    getEventoPorId
  };

  return (
    <EventosContext.Provider value={value}>
      {children}
    </EventosContext.Provider>
  );
};