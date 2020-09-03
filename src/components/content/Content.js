import React from 'react'
import Card from './Card'
import Categorie from './Categorie'

const Content = (props) => {

    const categories = [
		
		{
			texto: 'Category 01'
		},
		{
			texto: 'Category 02'
		},
		{
			texto: 'Category 03'
        },
        {
			texto: 'Category 04'
        },
        {
			texto: 'Category 05'
        },
        {
			texto: 'Category 06'
		},
	]

    return (
        <div className="row">
            <Card 
                textHeader= 'Last product in Data Dase'
            >
                <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "25rem" }} src="assets/images/product_dummy.svg" alt="dummy" />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
                    <a target="_blank" rel="nofollow" href="/">View product detail</a>
            </Card>
            <Card
                textHeader='Categories in Data Base'
            >
                <div className="row">
                            {
				                categories.map((categoria, i) => {
					                return (
						                <Categorie
							                key={i}
							                texto={categoria.texto}	
						                />
					                )
				                })
			                }
                </div>
            </Card>

        </div>
    )
    
};

export default Content
