import styled from 'styled-components';

const HomePage = styled.div`
    max-width: 1140px;
    margin:0 auto;
    display: flex;
    gap: 30px;
    padding: 50px 20px 20px 20px;
    .left-side {
        width: 50%;
        display: flex; 
        flex-direction: column;
        gap: 30px;

        &__review,
        &__products {
            width: 100%;
            border: 1px solid;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.55);
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        &__products {
            max-height: 400px;
            overflow: scroll;

            &__list {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
        }

        
    }

    .right-side {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        &__categories {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 20px;
            max-height: 500px;
            overflow: scroll;


            &__item {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                border: 1px solid;
                padding: 20px;
                gap: 20px;
                border-radius: 5px;
                box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.55);

                &__top {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }
                &__products {
                    &__no-products {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        height: 100px;
                    }
                }

                &__buttons {
                    display: flex;
                    justify-content: space-between;

                    &__left{
                        display: flex;
                        gap: 10px;
                    }
                }
            }
        }
    }

    .title {
        display: flex;
        align-items: center;
        gap: 5px;

        span {
            font-size: 18px
        }
    }
    
    // @media (max-width:1023px) {
    //     flex-direction: column;
    // }  
    
    @media  (max-width:1023px) {
        flex-direction: column;

        
        .left-side {
            width: 100%;
        }

        .right-side {
            width: 100%;

            &__categories__item__buttons {
                flex-direction: column;
            }

            &__categories__item__buttons__left {
                flex-direction: column;
            }

            &__categories__item__buttons__right {
                button {
                    width: 100%;
                    margin-top: 10px;
                }
            }
        }
    }  
    
`;

export default HomePage;
