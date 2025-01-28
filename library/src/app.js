// import React, { Component } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       books: [
//         { id: 1,
//           title: "مقدمة ابن خلدون",
//           author: "ابن خلدون",
//           isbn: "1289499030"
//  },
//         { id: 2,
//           title: "قصر الكلام",
//           author: "جلال عامر",
//           isbn: "58416146"
//  },
//         { id: 3,
//           title: "عزازيل",
//           author: "يوسف زيدان",
//           isbn: "1654165151"
//  },
//         { id: 4,
//           title: "العصبي",
//           author: "احمد رمضان",
//           isbn: "5164651514" },
//       ],
//     };
//   }

//   render() {
//     return (
//       <main style={{ display: 'flex', margin: '20px', justifyContent: 'center' }}>
//         {this.state.books.map((book) => (
//           <div className="card" key={book.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
//             <h2>{book.title}</h2>
//             <p><strong>Author:</strong> {book.author}</p>
//             <p><strong>ISBN:</strong> {book.isbn}</p>
//           </div>
//         ))}
//       </main>
//     );
//   }
// }

// export default App;

import React, { useState } from 'react';

function App() {

    const [books] = useState([
        {
            id: 1,
            title: "مقدمة ابن خلدون",
            author: "ابن خلدون",
            isbn: "1289499030"
        },
        {
            id: 2,
            title: "قصر الكلام",
            author: "جلال عامر",
            isbn: "58416146"
        },
        {
            id: 3,
            title: "عزازيل",
            author: "يوسف زيدان",
            isbn: "1654165151"
        },
        {
            id: 4,
            title: "العصبي",
            author: "احمد رمضان",
            isbn: "5164651514"
        },
    ]);

    return (
        <main style={{ display: 'flex', margin: '20px', justifyContent: 'center' }}>
            {books.map((book) => (
                <div className="card" key={book.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                    <h2>{book.title}</h2>
                    <p><strong>Author:</strong> {book.author}</p>
                    <p><strong>ISBN:</strong> {book.isbn}</p>
                </div>
            ))}
        </main>
    );
}

export default App;